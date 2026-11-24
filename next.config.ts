import type { NextConfig } from "next";

/**
 * Site estático para o GitHub Pages: `next build` gera a pasta out/ e o workflow .github/workflows/deploy-pages.yml publica.
 * NEXT_PUBLIC_BASE_PATH vem do workflow, porque o site fica em /landing-page-nitro-hub (veja lib/base-path.ts).
 * O Pages não deixa configurar cabeçalhos HTTP, então a política de segurança (CSP) foi para uma <meta> em app/layout.tsx.
 */
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  ...(basePath ? { basePath } : {}),
  /** Sem servidor de imagens no Pages: as imagens saem como estão em public/ (são poucas e pequenas). */
  images: { unoptimized: true },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
