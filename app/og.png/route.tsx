import { renderOgImage } from "@/lib/og-image";

/** Imagem de prévia ao compartilhar o link (WhatsApp, Discord, redes). Gerada no build; os metadados ficam em app/layout.tsx. */
export const dynamic = "force-static";

export function GET() {
  return renderOgImage({
    title: "Mais desempenho no seu PC, num app só.",
    subtitle: "Overlay de FPS, Modo jogo, otimizações com desfazer, sensores e overclock. Grátis para Windows 11 e 10.",
    footer: ["144 FPS", "GPU 64 °C", "CPU 71 °C"],
    titleSize: 72,
  });
}
