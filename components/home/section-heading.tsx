import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  id: string;
  kicker: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
};

/** Cabeçalho de seção no estilo do portfólio: linha na cor de destaque, rótulo mono e título forte. */
export function SectionHeading({ id, kicker, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs font-bold text-primary" aria-hidden>
          ›
        </span>
        <p className="font-mono text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">{kicker}</p>
        <span className="h-px max-w-[6rem] min-w-[2.5rem] flex-1 bg-gradient-to-r from-primary/45 to-transparent" aria-hidden />
      </div>
      <h2 id={id} className="mt-4 text-[1.75rem] leading-tight font-bold tracking-[-0.03em] text-balance text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base">{description}</p> : null}
    </div>
  );
}
