import Link from "next/link";

import type { Feature } from "@/lib/features";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type FeatureCardProps = {
  feature: Feature;
  headingLevel?: "h2" | "h3" | "h4";
  className?: string;
};

/** Cartão de um recurso, com link para a página dele: ícone, título em destaque, selos e resumo. */
export function FeatureCard({ feature, headingLevel = "h4", className }: FeatureCardProps) {
  const Heading = headingLevel;
  const { Icon } = feature;

  return (
    <Link
      href={`/recursos/${feature.slug}`}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card via-card/70 to-background p-5 ring-1 ring-white/[0.03] transition-[border-color,box-shadow,transform] duration-300 ring-inset hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_18px_50px_-20px_color-mix(in_oklch,var(--color-primary)_40%,transparent)] sm:p-6",
        className,
      )}
    >
      <span
        className="pointer-events-none absolute -top-16 -right-16 size-40 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />
      <div className="flex items-start justify-between gap-3">
        <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary-soft transition-colors duration-300 group-hover:bg-primary/20">
          <Icon className="size-5" strokeWidth={1.75} aria-hidden />
        </span>
        <span className="flex flex-wrap justify-end gap-1.5">
          {feature.isNew ? (
            <span className="rounded-full border border-ok/40 bg-ok/10 px-2 py-0.5 font-mono text-[10px] font-bold tracking-wider text-ok uppercase">Novo</span>
          ) : null}
          {feature.tag ? (
            <span className="rounded-full border border-primary/25 bg-primary/10 px-2 py-0.5 font-mono text-[10px] font-medium text-primary-soft">{feature.tag}</span>
          ) : null}
        </span>
      </div>
      <Heading className="mt-4 text-lg leading-snug font-bold tracking-[-0.015em] text-balance text-foreground sm:text-xl">{feature.title}</Heading>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">{feature.summary}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-[11px] font-bold tracking-wider text-foreground uppercase">
        Saiba mais
        <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
      </span>
    </Link>
  );
}
