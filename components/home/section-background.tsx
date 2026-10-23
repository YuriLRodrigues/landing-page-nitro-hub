import { cn } from "@/lib/utils";

/**
 * Fundos das seções, os mesmos do portfólio:
 * - `aurora`: cônico desfocado num canto + grade fina + fio de luz na borda de baixo (vitrine);
 * - `mesh`: malha suave na cor de destaque com vinheta (atrás de texto).
 */
type SectionBackgroundProps = {
  variant: "aurora" | "mesh";
  className?: string;
};

export function SectionBackground({ variant, className }: SectionBackgroundProps) {
  if (variant === "mesh") {
    return (
      <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 60% 70% at 12% 20%, color-mix(in oklch, var(--primary) 18%, transparent), transparent 62%),
              radial-gradient(ellipse 55% 60% at 88% 85%, color-mix(in oklch, var(--primary) 12%, transparent), transparent 58%)
            `,
          }}
        />
        <div className="absolute inset-0 shadow-[inset_0_0_140px_color-mix(in_oklch,var(--background)_70%,transparent)]" />
      </div>
    );
  }

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      <div
        className="absolute -inset-[20%] opacity-90 blur-[70px]"
        style={{
          backgroundImage: `conic-gradient(from 250deg at 88% -8%,
            color-mix(in oklch, var(--primary) 26%, transparent),
            transparent 34%,
            color-mix(in oklch, var(--primary) 15%, transparent) 58%,
            transparent 82%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `linear-gradient(color-mix(in oklch, var(--foreground) 4%, transparent) 1px, transparent 1px),
            linear-gradient(90deg, color-mix(in oklch, var(--foreground) 4%, transparent) 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 85% 75% at 50% 45%, #000 25%, transparent 80%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent" />
    </div>
  );
}
