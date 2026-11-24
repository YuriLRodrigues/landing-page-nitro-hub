import { ImageResponse } from "next/og";

import { readFile } from "node:fs/promises";
import { join } from "node:path";

/** Tamanho padrão das prévias de link (WhatsApp, Discord, redes). */
export const OG_SIZE = { width: 1200, height: 630 };

/**
 * Metadados de uma imagem de prévia gerada por uma rota og.png. As imagens saem com extensão de propósito: o GitHub
 * Pages escolhe o tipo do arquivo pela extensão, e sem ela WhatsApp, Discord e LinkedIn podem ignorar a prévia.
 */
export function ogImage(url: string, alt: string) {
  return [{ url, alt, type: "image/png", ...OG_SIZE }];
}

const logo = await readFile(join(process.cwd(), "public/logo.png"));
const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

type OgImageProps = {
  title: string;
  subtitle: string;
  /** Linha de baixo, na cor de destaque (separada por "·"). */
  footer: string[];
  /** Tamanho do título: os guias têm títulos mais longos. */
  titleSize?: number;
};

/** Mesmo desenho para a página inicial e os guias: logo, título grande, subtítulo e uma linha de destaque. */
export function renderOgImage({ title, subtitle, footer, titleSize = 80 }: OgImageProps) {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        backgroundColor: "#050506",
        backgroundImage: "radial-gradient(circle at 88% 0%, rgba(124,108,255,0.5), rgba(5,5,6,0) 58%)",
        color: "#ededed",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse só aceita <img> */}
        <img src={logoSrc} width={84} height={84} alt="" />
        <div style={{ display: "flex", fontSize: 52, letterSpacing: 6 }}>NITRO HUB</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <div style={{ display: "flex", fontSize: titleSize, lineHeight: 1.05, letterSpacing: -2 }}>{title}</div>
        <div style={{ display: "flex", fontSize: 32, lineHeight: 1.35, color: "#b4b4bc", maxWidth: 980 }}>{subtitle}</div>
      </div>

      <div style={{ display: "flex", gap: 28, fontSize: 28, color: "#b3a9ff" }}>
        {footer.flatMap((item, index) => [
          index > 0 ? (
            <div key={`sep-${index}`} style={{ display: "flex", color: "#6e6e78" }}>
              ·
            </div>
          ) : null,
          <div key={item} style={{ display: "flex" }}>
            {item}
          </div>,
        ])}
      </div>
    </div>,
    { ...OG_SIZE },
  );
}
