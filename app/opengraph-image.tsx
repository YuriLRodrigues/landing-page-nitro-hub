import { ImageResponse } from "next/og";

import { SITE } from "@/lib/site";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/** Imagem de prévia ao compartilhar o link (WhatsApp, Discord, redes). Gerada no build. */
export const alt = SITE.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logo = await readFile(join(process.cwd(), "public/logo.png"));
const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

export default function OpenGraphImage() {
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
        <div style={{ display: "flex", fontSize: 80, lineHeight: 1.05, letterSpacing: -2 }}>Seu PC gamer, num app só.</div>
        <div style={{ display: "flex", fontSize: 32, lineHeight: 1.35, color: "#b4b4bc", maxWidth: 980 }}>
          Overlay de FPS, sensores, Modo jogo, overclock e otimizações com desfazer. Grátis para Windows 10 e 11.
        </div>
      </div>

      <div style={{ display: "flex", gap: 28, fontSize: 28, color: "#b3a9ff" }}>
        <div style={{ display: "flex" }}>144 FPS</div>
        <div style={{ display: "flex", color: "#6e6e78" }}>·</div>
        <div style={{ display: "flex" }}>GPU 64 °C</div>
        <div style={{ display: "flex", color: "#6e6e78" }}>·</div>
        <div style={{ display: "flex" }}>CPU 71 °C</div>
      </div>
    </div>,
    { ...size },
  );
}
