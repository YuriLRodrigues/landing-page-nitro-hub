import { OG_SIZE, renderOgImage } from "@/lib/og-image";
import { SITE } from "@/lib/site";

/** Imagem de prévia ao compartilhar o link (WhatsApp, Discord, redes). Gerada no build. */
export const alt = SITE.title;
export const size = OG_SIZE;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return renderOgImage({
    title: "Mais desempenho no seu PC, num app só.",
    subtitle: "Overlay de FPS, Modo jogo, otimizações com desfazer, sensores e overclock. Grátis para Windows 11 e 10.",
    footer: ["144 FPS", "GPU 64 °C", "CPU 71 °C"],
    titleSize: 72,
  });
}
