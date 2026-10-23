import { MockupFrame } from "@/components/home/mockup-frame";

import { cn } from "@/lib/utils";
import { Check, Lock } from "lucide-react";

type Level = "ok" | "warn" | "bad";

const ZONES: { level: Level; label: string; what: string; locked?: boolean }[] = [
  { level: "ok", label: "SEGURO", what: "Leitura e verificador de estabilidade" },
  { level: "warn", label: "RISCO MODERADO", what: "Limite de energia e de clock" },
  { level: "bad", label: "RISCO ALTO", what: "Clock do núcleo e da memória", locked: true },
];

const LEVEL_CLASS: Record<Level, { border: string; badge: string }> = {
  ok: { border: "border-l-ok", badge: "bg-ok/10 text-ok" },
  warn: { border: "border-l-warn", badge: "bg-warn/10 text-warn" },
  bad: { border: "border-l-bad", badge: "bg-bad/10 text-bad" },
};

function Slider({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
        <span>{label}</span>
        <span className="text-foreground/80 tabular-nums">{value}</span>
      </div>
      <div className="relative mt-1.5 h-1.5 rounded-full bg-muted">
        <div className="absolute inset-y-0 left-0 w-[18%] rounded-full bg-muted-foreground/50" />
        <div className="absolute top-1/2 left-[18%] size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-muted-foreground" />
      </div>
    </div>
  );
}

export function OcRiskMockup() {
  return (
    <MockupFrame title="NITRO OC › GPU" caption="Ilustração do NITRO OC: as áreas Seguro e Risco moderado liberadas e a de Risco alto trancada até você abrir o modo avançado.">
      <ul className="space-y-2">
        {ZONES.map(({ level, label, what, locked }) => (
          <li key={label} className={cn("flex items-center gap-3 rounded-lg border border-l-2 border-border bg-background/60 px-3 py-2.5", LEVEL_CLASS[level].border)}>
            <div className="min-w-0 flex-1">
              <span className={cn("inline-block rounded px-1.5 py-0.5 font-mono text-[9px] font-bold tracking-wider", LEVEL_CLASS[level].badge)}>{label}</span>
              <p className="mt-1 text-xs text-foreground/90">{what}</p>
            </div>
            <span className="flex shrink-0 items-center gap-1 font-mono text-[10px] text-muted-foreground">
              {locked ? <Lock className="size-3.5" /> : <Check className="size-3.5 text-ok" />}
              {locked ? "trancado" : "liberado"}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-4 rounded-lg border border-dashed border-bad/35 p-3">
        <div className="space-y-3 opacity-60">
          <Slider label="Núcleo (ponto de partida)" value="+50 MHz" />
          <Slider label="Memória (ponto de partida)" value="+100 MHz" />
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex h-8 items-center gap-1.5 rounded-md border border-bad/40 px-3 font-mono text-[10px] font-bold tracking-wider text-foreground">
            <Lock className="size-3" />
            ABRIR MODO AVANÇADO
          </span>
          <span className="inline-flex h-8 items-center px-1 font-mono text-[10px] font-bold tracking-wider text-muted-foreground">RESTAURAR PADRÃO</span>
        </div>
      </div>
    </MockupFrame>
  );
}
