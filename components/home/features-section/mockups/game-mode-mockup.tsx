import { MockupFrame } from "@/components/home/mockup-frame";

import { Undo2 } from "lucide-react";

const CHANGES = ["esticada 1440x993", "Alienware Custom", "prioridade alta"];

export function GameModeMockup() {
  return (
    <MockupFrame title="NITRO JOGOS › Modo jogo" caption="Ilustração do Modo jogo: o cartão do jogo com a capa, o tempo jogado, o que ele muda no PC e o botão JOGAR.">
      <div className="flex items-center justify-between gap-3 border-b border-border pb-3">
        <div className="flex gap-4 text-[11px] font-medium">
          <span className="relative text-foreground after:absolute after:inset-x-0 after:-bottom-[13px] after:h-0.5 after:rounded-full after:bg-primary">Jogos</span>
          <span className="text-muted-foreground">Ferramentas do PC</span>
          <span className="hidden text-muted-foreground min-[400px]:inline">Registro</span>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-ok/10 px-2 py-0.5 font-mono text-[9px] font-bold tracking-wider text-ok">
          <span className="size-1.5 rounded-full bg-ok" />
          ATIVO
        </span>
      </div>

      <div className="mt-4 flex gap-4">
        <div className="relative grid aspect-[3/4] w-20 shrink-0 place-items-end overflow-hidden rounded-lg bg-[linear-gradient(160deg,#3a2f6b_0%,#1a1530_55%,#0d0b16_100%)] p-2 ring-1 ring-white/10 sm:w-24">
          <span className="absolute -top-6 -right-6 size-16 rounded-full bg-primary/40 blur-xl" />
          <span className="relative font-display text-lg leading-none font-black tracking-tight text-white/90">CS2</span>
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">Counter-Strike 2</p>
          <p className="mt-0.5 font-mono text-[11px] text-muted-foreground tabular-nums">312 h jogadas</p>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {CHANGES.map((change) => (
              <li key={change} className="rounded-md border border-primary/25 bg-primary/10 px-1.5 py-0.5 font-mono text-[10px] text-primary-soft">
                {change}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="inline-flex h-8 items-center rounded-md bg-primary-strong px-4 font-mono text-[11px] font-bold tracking-wider text-white">JOGAR</span>
        <span className="inline-flex h-8 items-center rounded-md border border-primary/35 px-3 font-mono text-[10px] font-bold tracking-wider text-foreground">COMPETITIVO</span>
        <span className="inline-flex h-8 items-center rounded-md px-2 font-mono text-[10px] font-bold tracking-wider text-muted-foreground">SÓ ABRIR O JOGO</span>
      </div>

      <p className="mt-4 flex items-start gap-2 rounded-lg border border-border bg-background/60 p-3 text-xs leading-relaxed text-muted-foreground">
        <Undo2 className="mt-0.5 size-3.5 shrink-0 text-ok" />
        Quando o jogo fecha, telas, resolução e modo térmico voltam ao normal.
      </p>
    </MockupFrame>
  );
}
