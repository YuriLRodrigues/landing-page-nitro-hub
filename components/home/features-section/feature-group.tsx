import type { ReactNode } from "react";

import { FeatureCard } from "@/components/features/feature-card";
import { Reveal } from "@/components/ui/reveal";

import type { Feature, FeatureGroup } from "@/lib/features";
import { cn } from "@/lib/utils";

type FeatureGroupBlockProps = {
  group: FeatureGroup;
  features: Feature[];
  mockup?: ReactNode;
  /** Ilustração à esquerda (alterna entre os grupos no desktop). */
  reverse?: boolean;
};

/**
 * Um grupo de recursos: título grande, ilustração (quando houver) e os cartões, cada um levando à página do recurso.
 * No celular: título → ilustração → cartões.
 */
export function FeatureGroupBlock({ group, features, mockup, reverse = false }: FeatureGroupBlockProps) {
  const titleId = `${group.id}-title`;

  return (
    <article aria-labelledby={titleId} id={`grupo-${group.id}`} className="scroll-mt-24">
      <div
        className={cn("grid items-center gap-8 lg:gap-14", mockup && (reverse ? "lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)]" : "lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]"))}
      >
        <Reveal className={cn(mockup && reverse && "lg:order-2")}>
          <p className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold tracking-[0.22em] text-primary-soft uppercase">
            <span className="h-px w-6 bg-primary/60" aria-hidden />
            {group.kicker}
          </p>
          <h3 id={titleId} className="mt-3 text-[1.85rem] leading-[1.1] font-bold tracking-[-0.03em] text-balance text-foreground sm:text-4xl lg:text-[2.6rem]">
            {group.title}
          </h3>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">{group.intro}</p>
        </Reveal>
        {mockup ? (
          <Reveal delay={120} className={cn(reverse && "lg:order-1")}>
            {mockup}
          </Reveal>
        ) : null}
      </div>

      <ul className={cn("mt-10 grid gap-4 sm:grid-cols-2", features.length > 4 || !mockup ? "lg:grid-cols-3" : "lg:grid-cols-2 xl:grid-cols-4")}>
        {features.map((feature, index) => (
          <li key={feature.slug}>
            <Reveal delay={Math.min(index, 5) * 70} className="h-full">
              <FeatureCard feature={feature} />
            </Reveal>
          </li>
        ))}
      </ul>
    </article>
  );
}
