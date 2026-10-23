import type { ReactNode } from "react";

import { SectionHeading } from "@/components/home/section-heading";
import { Container } from "@/components/ui/container";
import { GradientText } from "@/components/ui/gradient-text";

import { FeatureGroupBlock } from "./feature-group";
import { FEATURE_GROUPS, type MockupId, TOOLS } from "./features-data";
import { CpuSheetMockup } from "./mockups/cpu-sheet-mockup";
import { GameModeMockup } from "./mockups/game-mode-mockup";
import { OcRiskMockup } from "./mockups/oc-risk-mockup";
import { PhonePanelMockup } from "./mockups/phone-panel-mockup";

const MOCKUPS: Record<MockupId, ReactNode> = {
  "game-mode": <GameModeMockup />,
  "oc-risk": <OcRiskMockup />,
  phone: <PhonePanelMockup />,
  "cpu-sheet": <CpuSheetMockup />,
};

export function FeaturesSection() {
  return (
    <section id="recursos" aria-labelledby="features-title" className="border-b border-border py-20 sm:py-24">
      <Container>
        <SectionHeading
          id="features-title"
          kicker="Recursos"
          title={
            <>
              O que tem <GradientText>dentro</GradientText>
            </>
          }
          description="Separado pelo que você quer fazer: jogar, ganhar desempenho, acompanhar o PC e achar problemas. As telas abaixo são ilustrações."
        />

        <div className="mt-16 space-y-20 sm:space-y-24">
          {FEATURE_GROUPS.map((group, index) => (
            <FeatureGroupBlock key={group.id} group={group} mockup={MOCKUPS[group.mockup]} reverse={index % 2 === 1} />
          ))}

          <article aria-labelledby="ferramentas-title">
            <p className="font-mono text-[11px] font-semibold tracking-[0.2em] text-primary-soft uppercase">Ferramentas</p>
            <h3 id="ferramentas-title" className="mt-3 text-2xl leading-tight font-bold tracking-[-0.02em] text-foreground sm:text-[1.75rem]">
              Para depois de formatar e para o dia a dia
            </h3>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {TOOLS.map(({ title, description, Icon }) => (
                <li key={title} className="flex gap-3.5 rounded-xl border border-border bg-card/60 p-4 transition-colors duration-300 hover:border-primary/35">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-border bg-background text-primary-soft">
                    <Icon className="size-4" strokeWidth={1.75} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-foreground">{title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Container>
    </section>
  );
}
