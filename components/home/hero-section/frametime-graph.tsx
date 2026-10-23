import { cn } from "@/lib/utils";

/** Tempos de frame em ms (144 FPS ≈ 6,9 ms), com dois engasgos. O primeiro e o último são iguais para a volta ficar contínua. */
const FRAME_TIMES_MS = [6.9, 7.0, 6.8, 6.9, 7.1, 6.9, 6.8, 7.0, 6.9, 9.6, 7.0, 6.8, 6.9, 7.0, 6.9, 6.8, 6.9, 7.2, 6.9, 6.8, 7.0, 6.9, 6.9, 12.2, 7.1, 6.8, 6.9, 7.0, 6.9, 6.8, 6.9];

const WIDTH = 120;
const HEIGHT = 22;

const path = FRAME_TIMES_MS.map((ms, i) => {
  const x = (i / (FRAME_TIMES_MS.length - 1)) * WIDTH;
  const y = HEIGHT - 3 - (ms - 6) * 2.4;
  return `${i === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`;
}).join(" ");

function Trace() {
  return (
    <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} preserveAspectRatio="none" className="h-full w-1/2">
      <path d={path} fill="none" stroke="var(--color-primary-soft)" strokeWidth={1.25} vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
    </svg>
  );
}

/** Gráfico de frametime do overlay: duas cópias lado a lado correndo para a esquerda (parado com "reduzir movimento"). */
export function FrametimeGraph({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-[22px] overflow-hidden rounded-sm bg-white/[0.05]", className)}>
      <div className="absolute inset-x-0 top-1/2 h-px bg-white/10" />
      <div className="animate-frametime flex h-full w-[200%]">
        <Trace />
        <Trace />
      </div>
    </div>
  );
}
