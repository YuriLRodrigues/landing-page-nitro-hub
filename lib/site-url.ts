/**
 * URL pública do site (canonical, Open Graph, sitemap).
 * Ordem: NEXT_PUBLIC_SITE_URL (domínio próprio) → domínio de produção da Vercel → URL do deploy → localhost.
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL;
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }
  const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  if (vercelHost) {
    return `https://${vercelHost}`.replace(/\/$/, "");
  }
  return "http://localhost:3000";
}
