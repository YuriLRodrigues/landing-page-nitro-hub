import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type MockupFrameProps = {
  /** Texto da barra de título, como a tela do app. */
  title: string;
  /** Descrição em texto do que a ilustração mostra (lida por leitores de tela). */
  caption: string;
  children: ReactNode;
  className?: string;
};

/**
 * Ilustração de uma tela do app feita em HTML/CSS (não é captura de tela).
 * O desenho fica escondido dos leitores de tela; a legenda descreve o que ele mostra.
 */
export function MockupFrame({ title, caption, children, className }: MockupFrameProps) {
  return (
    <figure className={cn("min-w-0", className)}>
      <div
        className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_60px_-30px_color-mix(in_oklch,var(--color-primary)_35%,transparent)] ring-1 ring-white/[0.03] ring-inset"
        aria-hidden
      >
        <div className="flex items-center gap-2 border-b border-border bg-background/60 px-4 py-2.5">
          <span className="size-2 rounded-full bg-primary/70" />
          <span className="font-mono text-[10px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">{title}</span>
        </div>
        <div className="p-4 sm:p-5">{children}</div>
      </div>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">{caption}</figcaption>
    </figure>
  );
}
