import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { FrametimeGraph } from "./frametime-graph";
import { GameScene } from "./game-scene";

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid grid-cols-[2.6rem_1fr] items-baseline gap-1 sm:grid-cols-[3rem_1fr]">
      <span className="font-bold text-primary-soft">{label}</span>
      <span className="flex flex-wrap gap-x-2.5 gap-y-0.5">{children}</span>
    </div>
  );
}

function Value({ value, unit, className }: { value: string; unit: string; className?: string }) {
  return (
    <span className={cn("whitespace-nowrap", className)}>
      {value}
      <span className="text-white/55"> {unit}</span>
    </span>
  );
}

/** Sinal de mira no centro: deixa claro que é uma tela de jogo. No celular o overlay cobre o centro, então ela some. */
function Crosshair() {
  const bar = "absolute bg-white/85 shadow-[0_0_2px_rgba(0,0,0,0.9)]";
  return (
    <div className="absolute top-1/2 left-1/2 hidden size-6 -translate-x-1/2 -translate-y-1/2 sm:block">
      <span className={`${bar} top-1/2 left-0 h-[2px] w-[7px] -translate-y-1/2`} />
      <span className={`${bar} top-1/2 right-0 h-[2px] w-[7px] -translate-y-1/2`} />
      <span className={`${bar} top-0 left-1/2 h-[7px] w-[2px] -translate-x-1/2`} />
      <span className={`${bar} bottom-0 left-1/2 h-[7px] w-[2px] -translate-x-1/2`} />
    </div>
  );
}

/**
 * A assinatura da página: o overlay do NITRO HUB (estilo Afterburner/RTSS) por cima de um jogo.
 * Desenho em HTML/CSS/SVG, sem captura de tela. Os números são de exemplo.
 */
export function GameOverlayMockup() {
  return (
    <figure className="min-w-0">
      <div
        className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-black shadow-[0_30px_80px_-30px_color-mix(in_oklch,var(--color-primary)_45%,transparent)] ring-1 ring-white/[0.04]"
        aria-hidden
      >
        <GameScene />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.55))]" />
        <Crosshair />

        <div className="absolute top-2.5 left-2.5 w-[min(82%,18.5rem)] rounded-md border border-white/10 bg-black/60 p-2 font-mono text-[9.5px] leading-snug text-white tabular-nums shadow-[0_8px_24px_rgba(0,0,0,0.45)] sm:top-4 sm:left-4 sm:p-3 sm:text-[11px]">
          <div className="flex items-baseline gap-2">
            <span className="w-[2.6rem] font-bold text-primary-soft sm:w-[3rem]">FPS</span>
            <span className="text-[22px] leading-none font-bold tracking-tight sm:text-[30px]">144</span>
            <Value value="6,9" unit="ms" className="text-white/90" />
            <span className="ml-auto text-white/90">
              <span className="text-white/55">1% </span>118
            </span>
          </div>
          <FrametimeGraph className="mt-1.5 mb-1.5" />
          <div className="space-y-0.5">
            <Row label="GPU">
              <Value value="97" unit="%" />
              <Value value="64" unit="°C" />
              <Value value="182" unit="W" />
              <Value value="2.610" unit="MHz" className="hidden sm:inline" />
            </Row>
            <Row label="CPU">
              <Value value="41" unit="%" />
              <Value value="71" unit="°C" />
              <Value value="5,1" unit="GHz" />
            </Row>
            <Row label="VRAM">
              <Value value="7,8" unit="GB" />
              <span>
                <span className="font-bold text-primary-soft">RAM </span>
                14,2<span className="text-white/55"> GB</span>
              </span>
            </Row>
          </div>
        </div>

        <div className="absolute right-2.5 bottom-2.5 flex items-center gap-1 rounded-md bg-black/60 px-2 py-1 font-mono text-[9px] text-white/80 sm:right-4 sm:bottom-4 sm:text-[10px]">
          {["Ctrl", "Shift", "O"].map((key, i) => (
            <span key={key} className="flex items-center gap-1">
              {i > 0 ? <span className="text-white/45">+</span> : null}
              <kbd className="rounded border border-white/20 bg-white/10 px-1 py-px font-mono">{key}</kbd>
            </span>
          ))}
        </div>
      </div>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
        <span className="sr-only">
          Ilustração do overlay do NITRO HUB por cima de um jogo, mostrando 144 FPS, frametime de 6,9 ms, 1% low de 118 FPS, GPU com 97% de uso a 64 °C e 182 W, CPU com 41% de uso
          a 71 °C e 5,1 GHz, 7,8 GB de VRAM e 14,2 GB de RAM.{" "}
        </span>
        Ilustração do overlay: você escolhe cada item que aparece, e <kbd className="font-mono text-foreground/90">Ctrl+Shift+O</kbd> liga e desliga.
      </figcaption>
    </figure>
  );
}
