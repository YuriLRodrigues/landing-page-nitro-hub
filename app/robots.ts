import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/site-url";

/** Gerado no build: o site é estático (GitHub Pages). */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
