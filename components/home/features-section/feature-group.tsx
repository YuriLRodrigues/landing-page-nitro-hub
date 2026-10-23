import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import type { FeatureGroup } from "./features-data";

type FeatureGroupBlockProps = {
  group: FeatureGroup;
  mockup: ReactNode;
  /** Ilustração à esquerda (alterna entre os grupos no desktop). */
  reverse?: boolean;
};

/**
 * No celular: título → ilustração → lista. No desktop: título e lista numa coluna e a ilustração fixa na outra.
 */
export function FeatureGroupBlock({ group, mockup, reverse = false }: FeatureGroupBlockProps) {
  const titleId = `${group.id}-title`;
  const textColumn = reverse ? "lg:col-start-2" : "lg:col-start-1";

  return (
    <article
      aria-labelledby={titleId}
      className={cn(
        "grid gap-8 lg:grid-rows-[auto_1fr] lg:gap-x-14 lg:gap-y-6",
        reverse ? "lg:grid-cols-[minmax(0,25rem)_minmax(0,1fr)]" : "lg:grid-cols-[minmax(0,1fr)_minmax(0,25rem)]",
      )}
    >
      <header className={cn("lg:row-start-1", textColumn)}>
        <p className="font-mono text-[11px] font-semibold tracking-[0.2em] text-primary-soft uppercase">{group.kicker}</p>
        <h3 id={titleId} className="mt-3 text-2xl leading-tight font-bold tracking-[-0.02em] text-balance text-foreground sm:text-[1.75rem]">
          {group.title}
        </h3>
        <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground">{group.intro}</p>
      </header>

      <div className={cn("lg:sticky lg:top-24 lg:row-span-2 lg:row-start-1 lg:self-start", reverse ? "lg:col-start-1" : "lg:col-start-2")}>{mockup}</div>

      <dl className={cn("divide-y divide-border border-y border-border lg:row-start-2", textColumn)}>
        {group.features.map((feature) => (
          <div key={feature.title} className="py-4">
            <dt className="flex flex-wrap items-center gap-x-2 gap-y-1 font-semibold text-foreground">
              {feature.title}
              {feature.tag ? (
                <span className="rounded-md border border-primary/25 bg-primary/10 px-1.5 py-0.5 font-mono text-[10px] font-medium text-primary-soft">{feature.tag}</span>
              ) : null}
            </dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">{feature.description}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
