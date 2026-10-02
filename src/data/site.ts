export const site = {
  url: "https://nadee2k.github.io",
  name: "Dhananjana Nadee Kumari",
  shortName: "Dhananjana",
  initials: "DN",
  role: "Data & AI Engineer",
  roles: ["Data & AI Engineer", "ML Engineer", "Data Engineer"],
  tagline:
    "I build machine learning systems and the data platforms that feed them — from raw ingestion through to a served, explainable model.",
  description:
    "Data & AI Engineer and Data Science undergraduate at SLIIT building production machine learning pipelines, ETL data platforms and explainable predictive models with Python, SQL and modern data tooling.",
  location: "Sri Lanka",
  email: "dhananjananadeekumari@gmail.com",
  phone: "+94761100493",
  phoneDisplay: "+94 76 110 0493",
  github: "https://github.com/nadee2k",
  githubHandle: "nadee2k",
  linkedin: "https://www.linkedin.com/in/dhananjana-mallawaarachchi/",
  linkedinHandle: "dhananjana-mallawaarachchi",
  resume: "/assets/Dhananjana_Nadee_Kumari_Resume.pdf",
  availability: "Open to Data & AI Engineering roles — graduating June 2027",
} as const;

export const quickFacts = [
  { label: "University", value: "SLIIT Malabe" },
  { label: "Degree", value: "B.Sc. (Hons) IT — Data Science" },
  { label: "GPA", value: "3.1 / 4.0" },
  { label: "Graduation", value: "June 2027" },
] as const;

/**
 * Headline proof points. Every figure here is traceable to a project case
 * study or the resume — do not add a number that cannot be substantiated.
 */
export const headlineMetrics = [
  { value: "75%+", label: "Churn precision" },
  { value: "85%+", label: "Regression R²" },
  { value: "~88%", label: "Emotion accuracy" },
  { value: "30+", label: "Engineered features" },
] as const;

export const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "SQL", "TypeScript", "Bash"],
  },
  {
    title: "Machine Learning",
    items: [
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "Random Forest",
      "Logistic Regression",
      "Linear / Ridge / Lasso Regression",
    ],
  },
  {
    title: "Deep Learning",
    items: ["TensorFlow", "PyTorch", "CNN", "LSTM", "Transformers", "Hybrid models"],
  },
  {
    title: "Data Engineering",
    items: [
      "ETL / ELT pipelines",
      "Dimensional & star schema design",
      "Data quality validation",
      "REST API services",
      "Data ingestion & logging",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: ["Docker", "Git & GitHub", "Linux", "AWS VPC & storage", "Azure Blob Storage & VNets"],
  },
  {
    title: "Data & Visualisation",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Streamlit dashboards"],
  },
  {
    title: "Web & Deployment",
    items: ["FastAPI", "Streamlit", "Flask", "REST", "Docker"],
  },
  {
    title: "Databases & Tools",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Jupyter", "SHAP", "SMOTE"],
  },
] as const;

export const education = [
  {
    institution: "Sri Lanka Institute of Information Technology (SLIIT), Malabe",
    degree: "B.Sc. (Hons) in Information Technology — Specialisation: Data Science",
    meta: "GPA 3.1 / 4.0 · Expected graduation June 2027",
  },
] as const;

export const certifications = [
  {
    name: "AWS Infrastructure Training",
    issuer: "Amazon Web Services",
    detail: "Validated skills in Amazon VPC networking and cloud file systems.",
  },
  {
    name: "Microsoft Azure Cloud Training",
    issuer: "Microsoft",
    detail:
      "Completed 11 modules covering Azure Blob Storage, Virtual Networks and core cloud fundamentals.",
  },
] as const;

export interface ExperienceEntry {
  role: string;
  org: string;
  period: string;
  summary: string;
  bullets: string[];
  todo?: boolean;
}

/**
 * TODO(owner): replace the placeholder below with the real internship
 * details — employer name, dates and 3-4 bullet points. The section is
 * intentionally marked `todo` so the placeholder text is obvious in review
 * and cannot be mistaken for real experience.
 */
export const experience: ExperienceEntry[] = [
  {
    role: "AI / ML Engineer Intern",
    org: "TODO — add employer name",
    period: "TODO — add start and end dates",
    summary:
      "TODO — one line describing the team, the product surface and your remit.",
    bullets: [
      "TODO — first responsibility, ideally with a measurable outcome (for example model performance, dataset size, or pipeline latency).",
      "TODO — second responsibility: a model, pipeline or service you built and shipped.",
      "TODO — third responsibility: tooling, evaluation, or stakeholder impact.",
      "TODO — fourth bullet, optional: a collaboration or delivery detail.",
    ],
    todo: true,
  },
];

export const interests = [
  "End-to-end machine learning systems",
  "Explainable AI and model interpretability",
  "ETL / ELT and data platform design",
  "Cloud-based analytics and storage",
  "Retrieval-augmented generation",
  "Applied computer vision",
] as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

export const socials = [
  { label: "GitHub", href: site.github, icon: "github" },
  { label: "LinkedIn", href: site.linkedin, icon: "linkedin" },
  { label: "Email", href: `mailto:${site.email}`, icon: "mail" },
] as const;

export const projectsIndex = {
  title: "Projects",
  description: `Machine learning, data engineering and product work by ${site.name}.`,
} as const;