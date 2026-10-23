import Link from "next/link";
import type { ReactNode } from "react";

import { SectionHeading } from "@/components/home/section-heading";
import { Container } from "@/components/ui/container";
import { GradientText } from "@/components/ui/gradient-text";
import { Reveal } from "@/components/ui/reveal";

import { FEATURES, featuresOf, GROUPS, type MockupId } from "@/lib/features";
import { ArrowRight } from "lucide-react";

import { FeatureGroupBlock } from "./feature-group";
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
  const fresh = FEATURES.filter((f) => f.isNew);

  return (
    <section id="recursos" aria-labelledby="features-title" className="border-b border-border py-20 sm:py-28">
      <Container>
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="features-title"
            kicker="Recursos"
            title={
              <>
                O que tem <GradientText>dentro</GradientText>
              </>
            }
            description={`${FEATURES.length} recursos separados pelo que você quer fazer: jogar, ganhar desempenho, acompanhar o PC, achar problemas e cuidar dele. As telas abaixo são ilustrações.`}
          />
          <Link
            href="/recursos"
            className="group inline-flex shrink-0 items-center gap-1.5 font-mono text-xs font-bold tracking-wider text-foreground uppercase hover:text-primary-soft"
          >
            Ver todos os recursos
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
        </Reveal>

        {fresh.length > 0 ? (
          <Reveal delay={80} className="mt-8">
            <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-ok/25 bg-ok/[0.05] px-4 py-3">
              <span className="rounded-full border border-ok/40 bg-ok/10 px-2 py-0.5 font-mono text-[10px] font-bold tracking-wider text-ok uppercase">Novo</span>
              <span className="text-sm text-muted-foreground">Na versão mais recente:</span>
              {fresh.map((f) => (
                <Link
                  key={f.slug}
                  href={`/recursos/${f.slug}`}
                  className="rounded-sm text-sm font-semibold text-foreground underline decoration-ok/40 underline-offset-4 hover:decoration-ok"
                >
                  {f.title}
                </Link>
              ))}
            </div>
          </Reveal>
        ) : null}

        <div className="mt-16 space-y-24 sm:space-y-28">
          {GROUPS.map((group, index) => (
            <FeatureGroupBlock key={group.id} group={group} features={featuresOf(group.id)} mockup={group.mockup ? MOCKUPS[group.mockup] : undefined} reverse={index % 2 === 1} />
          ))}
        </div>
      </Container>
    </section>
  );
}
