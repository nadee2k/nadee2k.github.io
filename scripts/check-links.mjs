/**
 * Post-build integrity check.
 *
 * Verifies that every internal link and asset reference in dist/ resolves to a
 * file that was actually emitted. A broken project image or a 404 résumé link
 * is the single most damaging thing a recruiter can hit, so this runs in CI.
 */
import { readdir, readFile, stat } from "node:fs/promises";
import { join, dirname, resolve, relative } from "node:path";
import { fileURLToPath } from "node:url";

const dist = resolve(dirname(fileURLToPath(import.meta.url)), "..", "dist");

/** Recursively collect every emitted file, as paths relative to dist/. */
async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else out.push(relative(dist, full));
  }
  return out;
}

/**
 * Astro emits `about/index.html` for directory-format routes, so resolve a
 * href against both the literal path and the directory-index convention.
 */
function resolves(target, files) {
  const clean = target.replace(/^\//, "").split("#")[0].split("?")[0];
  if (clean === "") return true;

  const candidates = [
    clean,
    `${clean}/index.html`,
    `${clean.replace(/\/$/, "")}/index.html`,
    clean.endsWith(".html") ? clean.replace(/index\.html$/, "") : `${clean}/`,
  ];
  return candidates.some((candidate) => files.has(candidate));
}

const files = new Set(await walk(dist));

const htmlFiles = [...files].filter((file) => file.endsWith(".html"));
const missing = [];

for (const file of htmlFiles) {
  const html = await readFile(join(dist, file), "utf8");

  const refs = [
    ...html.matchAll(/(?:href|src)="([^"]+)"/g),
    ...html.matchAll(/(?:href|src)='([^']+)'/g),
  ].map((match) => match[1]);

  for (const ref of new Set(refs)) {
    if (/^(https?:|mailto:|tel:|data:|javascript:|#)/i.test(ref)) continue;
    if (!resolves(ref, files)) {
      missing.push({ page: file, ref });
    }
  }
}

// The résumé is the primary call to action; fail loudly if it disappears.
const resumeRefs = [];
for (const file of htmlFiles) {
  const html = await readFile(join(dist, file), "utf8");
  if (/\.pdf/i.test(html)) {
    const match = html.match(/href="([^"]*\.pdf)"/i);
    if (match) resumeRefs.push({ page: file, ref: match[1] });
  }
}

if (resumeRefs.length === 0) {
  console.error("FAIL: no résumé (.pdf) link found in the built output.");
  process.exit(1);
}

for (const { page, ref } of resumeRefs) {
  if (!resolves(ref, files)) {
    missing.push({ page, ref: `${ref}  (résumé)` });
  }
}

// Sanity check that key SEO artefacts exist.
for (const required of ["robots.txt", "favicon.svg", "404.html", ".nojekyll"]) {
  if (!files.has(required)) {
    console.error(`FAIL: expected build artefact missing: ${required}`);
    process.exit(1);
  }
}

const sitemap = [...files].find((file) => file.startsWith("sitemap"));
if (!sitemap) {
  console.error("FAIL: no sitemap emitted.");
  process.exit(1);
}

/**
 * Every project case study must expose a link out to its source repository.
 * A card that promises code but cannot be clicked through to is the exact
 * credibility failure this site was rebuilt to fix, so treat it as a build
 * error. Projects that genuinely have no public repository must be listed in
 * REPOSITORIES_WITHOUT_CODE, with a reason, so the omission is deliberate.
 */
const REPOSITORIES_WITHOUT_CODE = new Map([
  [
    "speech-emotion-recognition",
    "Awaiting the public repository URL from the owner (TODO in the content file).",
  ],
]);

const unlinked = [];
for (const file of [...files].filter((f) => f.startsWith("projects/") && f.endsWith(".html") && f !== "projects/index.html")) {
  const html = await readFile(join(dist, file), "utf8");

  // Scope to the case study's own call-to-action. Matching "github.com/nadee2k"
  // anywhere in the document would pass trivially via the nav and footer links.
  const hasSourceLink = /href="https:\/\/github\.com\/nadee2k\/[^"]+"[^>]*>\s*View code\s*</.test(html);

  if (hasSourceLink) continue;

  const slug = file.replace(/^projects\//, "").replace(/\/index\.html$/, "");
  unlinked.push({ slug, reason: REPOSITORIES_WITHOUT_CODE.get(slug) });
}

const unexplained = unlinked.filter((entry) => !entry.reason);
if (unexplained.length > 0) {
  console.error(
    `FAIL: ${unexplained.length} project page(s) have no repository link and are not\n` +
      `registered in REPOSITORIES_WITHOUT_CODE in scripts/check-links.mjs:\n`,
  );
  for (const { slug } of unexplained) console.error(`  /projects/${slug}/`);
  process.exit(1);
}

let stat_;
try {
  stat_ = await stat(join(dist, sitemap));
} catch {
  stat_ = null;
}

if (missing.length > 0) {
  console.error(`FAIL: ${missing.length} broken internal reference(s):\n`);
  for (const { page, ref } of missing) {
    console.error(`  ${page}  ->  ${ref}`);
  }
  process.exit(1);
}

console.log(
  `OK: ${htmlFiles.length} pages checked, all internal links and assets resolve.`,
);
console.log(`OK: ${resumeRefs.length} résumé link(s) resolve.`);
console.log(
  `OK: ${htmlFiles.length - unlinked.length} project pages link to source; ` +
    `${unlinked.length} registered as intentionally without code.`,
);
console.log(`OK: sitemap present (${sitemap}, ${stat_?.size ?? 0} bytes).`);