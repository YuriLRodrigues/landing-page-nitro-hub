import { TriangleAlert, Wifi } from "lucide-react";

const CARDS = [
  { label: "CPU", value: "71 °C", detail: "41% de uso", fill: "41%" },
  { label: "GPU", value: "64 °C", detail: "97% de uso", fill: "97%" },
  { label: "RAM", value: "14,2 GB", detail: "de 32 GB", fill: "44%" },
  { label: "VRAM", value: "7,8 GB", detail: "de 12 GB", fill: "65%" },
];

/** Celular com o painel do NITRO HUB e um alerta chegando por baixo. Desenho em HTML/CSS; a legenda descreve o conteúdo. */
export function PhonePanelMockup() {
  return (
    <figure className="min-w-0">
      <div className="mx-auto w-full max-w-[22rem] pt-2" aria-hidden>
        <div className="mx-auto w-[15rem] rounded-[2.2rem] border-[6px] border-[#1d1d24] bg-background p-3 shadow-[0_30px_70px_-30px_color-mix(in_oklch,var(--color-primary)_45%,transparent)] ring-1 ring-white/10">
          <div className="mx-auto h-4 w-16 rounded-full bg-[#1d1d24]" />
          <div className="mt-3 flex items-center justify-between px-1">
            <span className="font-wordmark text-xs font-semibold tracking-[0.08em] text-foreground">NITRO HUB</span>
            <span className="flex items-center gap-1 font-mono text-[9px] text-muted-foreground">
              <Wifi className="size-3 text-ok" />
              rede de casa
            </span>
          </div>

          <div className="mt-3 rounded-xl border border-primary/25 bg-primary/10 p-3">
            <p className="font-mono text-[9px] font-bold tracking-wider text-primary-soft">FPS</p>
            <p className="mt-1 flex items-baseline gap-2 font-mono tabular-nums">
              <span className="text-3xl leading-none font-bold text-foreground">144</span>
              <span className="text-[10px] text-muted-foreground">1% low 118</span>
            </p>
          </div>

          <ul className="mt-2 grid grid-cols-2 gap-2">
            {CARDS.map(({ label, value, detail, fill }) => (
              <li key={label} className="rounded-xl border border-border bg-card p-2.5">
                <p className="font-mono text-[9px] font-bold tracking-wider text-muted-foreground">{label}</p>
                <p className="mt-1 font-mono text-sm font-semibold text-foreground tabular-nums">{value}</p>
                <p className="font-mono text-[9px] text-muted-foreground">{detail}</p>
                <div className="mt-1.5 h-1 rounded-full bg-muted">
                  <div className="h-full rounded-full bg-primary" style={{ width: fill }} />
                </div>
              </li>
            ))}
          </ul>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-white/15" />
        </div>

        <div className="relative z-10 -mt-7 mr-0 ml-auto flex w-fit max-w-[13rem] items-start gap-2 rounded-xl border border-warn/30 bg-card/95 p-2.5 shadow-[0_12px_30px_rgba(0,0,0,0.5)] backdrop-blur">
          <TriangleAlert className="mt-0.5 size-3.5 shrink-0 text-warn" />
          <div>
            <p className="font-mono text-[9px] font-bold tracking-wider text-warn">ALERTA</p>
            <p className="mt-0.5 text-[11px] leading-snug text-foreground/90">GPU reduzindo o clock pela temperatura</p>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Ilustração do painel no celular: FPS, temperaturas e uso pela rede de casa, com um alerta de GPU reduzindo o clock.
      </figcaption>
    </figure>
  );
}
