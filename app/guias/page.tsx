import type { Metadata } from "next";

import { GuideCard } from "@/components/guides/guide-card";
import { SectionBackground } from "@/components/home/section-background";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";

import { GUIDES } from "@/lib/guides";
import { getSiteUrl } from "@/lib/site-url";

const TITLE = "Guias para melhorar o desempenho do PC";
const DESCRIPTION = "Guias em português para deixar o Windows 11 e o Windows 10 mais rápidos para jogar, aumentar o FPS e configurar a tela esticada no VALORANT.";

export const metadata: Metadata = {
  title: "Guias: desempenho no Windows 11 e 10, FPS e tela esticada",
  description: DESCRIPTION,
  alternates: { canonical: "/guias" },
  openGraph: { type: "website", locale: "pt_BR", url: "/guias", title: TITLE, description: DESCRIPTION },
};

export default function GuidesIndexPage() {
  const base = getSiteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: TITLE,
    description: DESCRIPTION,
    url: `${base}/guias`,
    inLanguage: "pt-BR",
    hasPart: GUIDES.map((guide) => ({ "@type": "Article", headline: guide.title, url: `${base}/guias/${guide.slug}` })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <section aria-labelledby="guides-index-title" className="relative overflow-hidden border-b border-border">
        <SectionBackground variant="aurora" />
        <Container className="relative py-14 sm:py-20">
          <p className="font-mono text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">Guias</p>
          <h1 id="guides-index-title" className="mt-4 max-w-3xl text-[clamp(2rem,5.6vw,3rem)] leading-[1.08] font-bold tracking-[-0.035em] text-balance text-foreground">
            {TITLE}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{DESCRIPTION}</p>
        </Container>
      </section>

      <Container className="py-12 sm:py-16">
        <ul className="grid gap-4 md:grid-cols-3">
          {GUIDES.map((guide) => (
            <li key={guide.slug}>
              <GuideCard guide={guide} headingLevel="h2" />
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
