import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** Short one-line summary used on cards and in meta descriptions. */
      summary: z.string(),
      /** Which proof track this project belongs to. */
      track: z.enum(["ml", "data", "product"]),
      /** Own role on the project, e.g. "Solo project" or team size. */
      role: z.string().optional(),
      period: z.string().optional(),
      /** Technology chips shown on the card and case study. */
      stack: z.array(z.string()).default([]),
      /** Substantiated outcome figures. Leave empty rather than invent one. */
      metrics: z
        .array(
          z.object({
            value: z.string(),
            label: z.string(),
          })
        )
        .default([]),
      problem: z.string().optional(),
      solution: z.string().optional(),
      architecture: z.string().optional(),
      highlights: z.array(z.string()).default([]),
      /** Set only when the repository actually contains real code. */
      repoUrl: z.string().url().optional(),
      /** Set only when a live deployment actually exists. */
      demoUrl: z.string().url().optional(),
      /** Optional cover image. Leave unset rather than reuse a wrong screenshot. */
      cover: image().optional(),
      /** Featured projects appear on the home page and get a case study page. */
      featured: z.boolean().default(false),
      /** Lower sorts first. */
      order: z.number().default(100),
    }),
});

export const collections = { projects };