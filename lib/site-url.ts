import { SITE } from "@/lib/site";

/**
 * URL pública do site (canonical, Open Graph, sitemap).
 * Ordem: NEXT_PUBLIC_SITE_URL (o workflow do Pages passa o endereço publicado) → endereço de produção (`SITE.url`).
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }
  return SITE.url;
}
