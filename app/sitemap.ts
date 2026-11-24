import type { MetadataRoute } from "next";

import { FEATURES } from "@/lib/features";
import { GUIDES } from "@/lib/guides";
import { getSiteUrl } from "@/lib/site-url";

/** Gerado no build: o site é estático (GitHub Pages). */
export const dynamic = "force-static";

/** Endereços com a barra no fim, como o export estático gera (trailingSlash). */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastGuide = GUIDES.map(({ updated }) => updated)
    .sort()
    .at(-1);

  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/recursos/`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    ...FEATURES.map((feature) => ({ url: `${base}/recursos/${feature.slug}/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: `${base}/guias/`, lastModified: lastGuide, changeFrequency: "monthly", priority: 0.7 },
    ...GUIDES.map((guide) => ({
      url: `${base}/guias/${guide.slug}/`,
      lastModified: guide.updated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
