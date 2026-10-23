import { SITE } from "@/lib/site";

/**
 * URL pública do site (canonical, Open Graph, sitemap).
 * Ordem: NEXT_PUBLIC_SITE_URL (domínio próprio) → URL do deploy de prévia da Vercel → endereço de produção (`SITE.url`).
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }
  if (process.env.VERCEL_ENV === "preview" && process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return SITE.url;
}
