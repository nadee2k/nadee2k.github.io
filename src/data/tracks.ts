export type Track = "ml" | "data" | "product";

export interface TrackMeta {
  label: string;
  short: string;
  badge: string;
  color: string;
  dim: string;
  blurb: string;
}

export const tracks: Record<Track, TrackMeta> = {
  ml: {
    label: "Machine Learning",
    short: "ML",
    badge: "badge--ml",
    color: "var(--track-ml)",
    dim: "var(--track-ml-dim)",
    blurb: "Modelling, evaluation, explainability and serving.",
  },
  data: {
    label: "Data Engineering",
    short: "Data",
    badge: "badge--data",
    color: "var(--track-data)",
    dim: "var(--track-data-dim)",
    blurb: "Ingestion, modelling, quality and APIs.",
  },
  product: {
    label: "Product & Full-Stack",
    short: "Product",
    badge: "badge--product",
    color: "var(--track-product)",
    dim: "var(--track-product-dim)",
    blurb: "Interfaces and services built for actual users.",
  },
};

export const trackOrder: Track[] = ["ml", "data", "product"];