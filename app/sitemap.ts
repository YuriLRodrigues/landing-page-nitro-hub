import type { MetadataRoute } from "next";

import { GUIDES } from "@/lib/guides";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastGuide = GUIDES.map(({ updated }) => updated)
    .sort()
    .at(-1);

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/guias`, lastModified: lastGuide, changeFrequency: "monthly", priority: 0.7 },
    ...GUIDES.map((guide) => ({
      url: `${base}/guias/${guide.slug}`,
      lastModified: guide.updated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
