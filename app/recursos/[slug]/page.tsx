import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { FeatureCard } from "@/components/features/feature-card";
import { GuideCard } from "@/components/guides/guide-card";
import { DownloadLink } from "@/components/home/download-link";
import { CpuSheetMockup } from "@/components/home/features-section/mockups/cpu-sheet-mockup";
import { GameModeMockup } from "@/components/home/features-section/mockups/game-mode-mockup";
import { OcRiskMockup } from "@/components/home/features-section/mockups/oc-risk-mockup";
import { PhonePanelMockup } from "@/components/home/features-section/mockups/phone-panel-mockup";
import { SectionBackground } from "@/components/home/section-background";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { RichText } from "@/components/ui/rich-text";

import { FEATURES, getFeature, GROUPS, type MockupId } from "@/lib/features";
import { getGuide } from "@/lib/guides";
import { ogImage } from "@/lib/og-image";
import { plainText } from "@/lib/rich-text";
import { SITE } from "@/lib/site";
import { getSiteUrl } from "@/lib/site-url";
import { ChevronRight, Info, TriangleAlert } from "lucide-react";

type FeaturePageProps = { params: Promise<{ slug: string }> };

/** Só os recursos de `lib/features.ts`; qualquer outro endereço dá 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return FEATURES.map(({ slug }) => ({ slug }));
}

const MOCKUPS: Record<MockupId, ReactNode> = {
  "game-mode": <GameModeMockup />,
  "oc-risk": <OcRiskMockup />,
  phone: <PhonePanelMockup />,
  "cpu-sheet": <CpuSheetMockup />,
};

/** A ilustração só aparece no recurso que ela mostra de verdade. */
const MOCKUP_OF: Record<string, MockupId> = {
  "modo-jogo": "game-mode",
  overclock: "oc-risk",
  "painel-no-celular": "phone",
  "fichas-do-hardware": "cpu-sheet",
};

export async function generateMetadata({ params }: FeaturePageProps): Promise<Metadata> {
  const feature = getFeature((await params).slug);
  if (!feature) {
    return {};
  }
  const path = `/recursos/${feature.slug}`;
  const description = plainText(feature.summary);
  return {
    title: feature.metaTitle,
    description,
    keywords: feature.keywords,
    alternates: { canonical: path },
    openGraph: { type: "website", locale: "pt_BR", url: path, siteName: SITE.name, title: feature.metaTitle, description, images: ogImage(`${path}/og.png`, feature.title) },
    twitter: { card: "summary_large_image", title: feature.metaTitle, description, images: [`${path}/og.png`] },
  };
}

export default async function FeaturePage({ params }: FeaturePageProps) {
  const feature = getFeature((await params).slug);
  if (!feature) {
    notFound();
  }

  const base = getSiteUrl();
  const url = `${base}/recursos/${feature.slug}`;
  const group = GROUPS.find((g) => g.id === feature.group);
  const related = FEATURES.filter((f) => f.group === feature.group && f.slug !== feature.slug).slice(0, 3);
  const guide = feature.guide ? getGuide(feature.guide) : undefined;
  const mockup = MOCKUP_OF[feature.slug];
  const { Icon } = feature;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: feature.metaTitle,
        description: plainText(feature.summary),
        url,
        inLanguage: "pt-BR",
        about: { "@type": "SoftwareApplication", name: SITE.name, url: base, operatingSystem: "Windows 11, Windows 10", applicationCategory: "UtilitiesApplication" },
        keywords: feature.keywords.join(", "),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: base },
          { "@type": "ListItem", position: 2, name: "Recursos", item: `${base}/recursos` },
          { "@type": "ListItem", position: 3, name: feature.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <section aria-labelledby="feature-title" className="relative overflow-hidden border-b border-border">
        <SectionBackground variant="aurora" />
        <Container className={mockup ? "relative grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_minmax(0,26rem)] lg:gap-14" : "relative py-12 sm:py-16"}>
          <Reveal className={mockup ? undefined : "max-w-3xl"}>
            <nav aria-label="Trilha de navegação">
              <ol className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
                <li>
                  <Link href="/" className="rounded-sm hover:text-foreground">
                    Início
                  </Link>
                </li>
                <li aria-hidden>
                  <ChevronRight className="size-3" />
                </li>
                <li>
                  <Link href="/recursos" className="rounded-sm hover:text-foreground">
                    Recursos
                  </Link>
                </li>
                <li aria-hidden>
                  <ChevronRight className="size-3" />
                </li>
                <li aria-current="page" className="text-foreground/85">
                  {feature.title}
                </li>
              </ol>
            </nav>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="grid size-12 place-items-center rounded-xl border border-primary/35 bg-primary/10 text-primary-soft">
                <Icon className="size-6" strokeWidth={1.75} aria-hidden />
              </span>
              <span className="font-mono text-[11px] font-semibold tracking-[0.2em] text-primary-soft uppercase">{group?.kicker}</span>
              {feature.isNew ? (
                <span className="rounded-full border border-ok/40 bg-ok/10 px-2 py-0.5 font-mono text-[10px] font-bold tracking-wider text-ok uppercase">Novo</span>
              ) : null}
              {feature.tag ? <span className="rounded-full border border-primary/25 bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary-soft">{feature.tag}</span> : null}
            </div>
            <h1 id="feature-title" className="mt-5 font-display text-[clamp(2.2rem,6vw,3.5rem)] leading-[1.04] font-black tracking-[-0.04em] text-balance">
              {feature.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              <RichText text={feature.intro} />
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <DownloadLink className="w-full sm:w-auto" />
              <span className="font-mono text-xs text-muted-foreground">Grátis · Windows 11 e 10 · em português</span>
            </div>
          </Reveal>
          {mockup ? <Reveal delay={120}>{MOCKUPS[mockup]}</Reveal> : null}
        </Container>
      </section>

      <Container className="py-14 sm:py-20">
        <section aria-labelledby="highlights-title">
          <Reveal>
            <h2 id="highlights-title" className="text-2xl leading-tight font-bold tracking-[-0.025em] text-foreground sm:text-3xl">
              O que ele faz
            </h2>
          </Reveal>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {feature.highlights.map((h, index) => (
              <li key={h.title}>
                <Reveal delay={Math.min(index, 5) * 60} className="h-full">
                  <div className="h-full rounded-2xl border border-border bg-card/60 p-5 transition-colors duration-300 hover:border-primary/35 sm:p-6">
                    <h3 className="text-lg font-bold tracking-tight text-foreground">{h.title}</h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
                      <RichText text={h.text} />
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <Reveal>
            <section aria-labelledby="steps-title" className="rounded-2xl border border-border bg-card/60 p-6 sm:p-8">
              <h2 id="steps-title" className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                Como usar
              </h2>
              <ol className="mt-6 space-y-4">
                {feature.steps.map((step, index) => (
                  <li key={step} className="flex gap-3.5 text-[0.9375rem] leading-relaxed text-muted-foreground">
                    <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-primary/30 bg-primary/10 font-mono text-xs font-bold text-primary-soft">
                      {index + 1}
                    </span>
                    <span className="min-w-0 pt-1">
                      <RichText text={step} />
                    </span>
                  </li>
                ))}
              </ol>
            </section>
          </Reveal>

          <div className="flex flex-col gap-6">
            {feature.note ? (
              <Reveal delay={80}>
                <aside
                  className={
                    feature.note.kind === "warn"
                      ? "flex gap-3.5 rounded-2xl border border-warn/30 bg-warn/[0.06] p-5 sm:p-6"
                      : "flex gap-3.5 rounded-2xl border border-primary/30 bg-primary/[0.07] p-5 sm:p-6"
                  }
                >
                  {feature.note.kind === "warn" ? (
                    <TriangleAlert className="mt-0.5 size-5 shrink-0 text-warn" strokeWidth={1.75} aria-hidden />
                  ) : (
                    <Info className="mt-0.5 size-5 shrink-0 text-primary-soft" strokeWidth={1.75} aria-hidden />
                  )}
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground">{feature.note.title}</p>
                    <p className="mt-1 text-[0.9375rem] leading-relaxed text-muted-foreground">
                      <RichText text={feature.note.text} />
                    </p>
                  </div>
                </aside>
              </Reveal>
            ) : null}
            {guide ? (
              <Reveal delay={140}>
                <p className="mb-3 font-mono text-[11px] font-semibold tracking-[0.2em] text-primary-soft uppercase">Guia relacionado</p>
                <GuideCard guide={guide} />
              </Reveal>
            ) : null}
          </div>
        </div>

        {related.length > 0 ? (
          <section aria-labelledby="related-title" className="mt-16">
            <Reveal className="flex flex-wrap items-end justify-between gap-3">
              <h2 id="related-title" className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                Também em {group?.kicker}
              </h2>
              <Link href="/recursos" className="font-mono text-[11px] font-bold tracking-wider text-foreground uppercase hover:text-primary-soft">
                Todos os recursos →
              </Link>
            </Reveal>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((f, index) => (
                <li key={f.slug}>
                  <Reveal delay={index * 70} className="h-full">
                    <FeatureCard feature={f} headingLevel="h3" />
                  </Reveal>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </Container>
    </>
  );
}
