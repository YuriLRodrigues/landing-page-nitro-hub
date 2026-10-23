import type { Metadata } from "next";

import { FeatureCard } from "@/components/features/feature-card";
import { DownloadLink } from "@/components/home/download-link";
import { SectionBackground } from "@/components/home/section-background";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { GradientText } from "@/components/ui/gradient-text";
import { Reveal } from "@/components/ui/reveal";

import { FEATURES, featuresOf, GROUPS } from "@/lib/features";
import { getSiteUrl } from "@/lib/site-url";

const DESCRIPTION = "Todos os recursos do NITRO HUB, o app grátis para Windows 11 e 10: Modo jogo, overlay de FPS, overclock, otimizações, sensores, limpeza, diagnóstico e mais.";

export const metadata: Metadata = {
  title: "Recursos: overlay de FPS, Modo jogo, limpeza e mais",
  description: DESCRIPTION,
  alternates: { canonical: "/recursos" },
  openGraph: { type: "website", locale: "pt_BR", url: "/recursos", title: "Recursos do NITRO HUB", description: DESCRIPTION },
};

export default function FeaturesIndexPage() {
  const base = getSiteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Recursos do NITRO HUB",
    description: DESCRIPTION,
    url: `${base}/recursos`,
    inLanguage: "pt-BR",
    hasPart: FEATURES.map((f) => ({ "@type": "WebPage", name: f.title, url: `${base}/recursos/${f.slug}` })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <section aria-labelledby="features-index-title" className="relative overflow-hidden border-b border-border">
        <SectionBackground variant="aurora" />
        <Container className="relative py-14 sm:py-20">
          <Reveal>
            <p className="font-mono text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">Recursos</p>
            <h1 id="features-index-title" className="mt-4 max-w-3xl font-display text-[clamp(2.2rem,6vw,3.6rem)] leading-[1.04] font-black tracking-[-0.04em] text-balance">
              Tudo o que o NITRO HUB <GradientText>faz por você</GradientText>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{DESCRIPTION}</p>
            <nav aria-label="Grupos de recursos" className="mt-8 flex flex-wrap gap-2">
              {GROUPS.map((g) => (
                <a
                  key={g.id}
                  href={`#${g.id}`}
                  className="rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  {g.kicker}
                </a>
              ))}
            </nav>
          </Reveal>
        </Container>
      </section>

      <Container className="space-y-16 py-14 sm:space-y-20 sm:py-20">
        {GROUPS.map((group) => (
          <section key={group.id} id={group.id} aria-labelledby={`${group.id}-h`} className="scroll-mt-24">
            <Reveal>
              <p className="font-mono text-[11px] font-semibold tracking-[0.2em] text-primary-soft uppercase">{group.kicker}</p>
              <h2 id={`${group.id}-h`} className="mt-2 text-2xl leading-tight font-bold tracking-[-0.025em] text-foreground sm:text-3xl">
                {group.title}
              </h2>
              <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base">{group.intro}</p>
            </Reveal>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featuresOf(group.id).map((feature, index) => (
                <li key={feature.slug}>
                  <Reveal delay={Math.min(index, 5) * 70} className="h-full">
                    <FeatureCard feature={feature} headingLevel="h3" />
                  </Reveal>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <Reveal className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/15 via-card to-background p-6 text-center sm:p-10">
          <p className="text-2xl font-bold tracking-[-0.02em] text-foreground sm:text-3xl">Tudo isso num app só, de graça</p>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">Windows 11 e 10, em português, e se atualiza sozinho.</p>
          <DownloadLink className="mt-6" />
        </Reveal>
      </Container>
    </>
  );
}
