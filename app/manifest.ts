import type { MetadataRoute } from "next";

import { SITE } from "@/lib/site";

/** Manifesto do site: ícone e nome quando alguém adiciona o site à tela de início do Android (no iPhone vale o apple-icon). */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.name,
    description: SITE.description,
    start_url: "/",
    display: "browser",
    background_color: "#050506",
    theme_color: "#050506",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
      { src: "/icon.png", sizes: "192x192", type: "image/png", purpose: "any" },
    ],
  };
}
