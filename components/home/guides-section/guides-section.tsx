import { GuideCard } from "@/components/guides/guide-card";
import { SectionHeading } from "@/components/home/section-heading";
import { Container } from "@/components/ui/container";

import { GUIDES } from "@/lib/guides";

export function GuidesSection() {
  return (
    <section id="guias" aria-labelledby="guides-title" className="border-b border-border py-20 sm:py-24">
      <Container>
        <SectionHeading
          id="guides-title"
          kicker="Guias"
          title="Como melhorar o desempenho do PC no Windows 11 e 10"
          description="Passo a passo do jeito manual e com o NITRO HUB. Sem promessa de FPS milagroso: só o que de fato ajuda."
        />

        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {GUIDES.map((guide) => (
            <li key={guide.slug}>
              <GuideCard guide={guide} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
