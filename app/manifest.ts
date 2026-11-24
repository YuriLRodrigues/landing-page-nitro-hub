import type { MetadataRoute } from "next";

import { withBasePath } from "@/lib/base-path";
import { SITE } from "@/lib/site";

/** Gerado no build: o site é estático (GitHub Pages). */
export const dynamic = "force-static";

/** Manifesto do site: ícone e nome quando alguém adiciona o site à tela de início do Android (no iPhone vale o apple-icon). */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.name,
    description: SITE.description,
    start_url: withBasePath("/"),
    display: "browser",
    background_color: "#050506",
    theme_color: "#050506",
    icons: [
      { src: withBasePath("/icon-192.png"), sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: withBasePath("/icon-512.png"), sizes: "512x512", type: "image/png", purpose: "maskable" },
      { src: withBasePath("/icon.png"), sizes: "192x192", type: "image/png", purpose: "any" },
    ],
  };
}
