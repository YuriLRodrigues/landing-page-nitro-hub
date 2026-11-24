import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { GuideBlockView } from "@/components/guides/guide-block";
import { GuideCard } from "@/components/guides/guide-card";
import { DownloadLink } from "@/components/home/download-link";
import { SectionBackground } from "@/components/home/section-background";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { RichText } from "@/components/ui/rich-text";

import { GUIDES, getGuide } from "@/lib/guides";
import { AUTHOR, LINKS } from "@/lib/links";
import { ogImage } from "@/lib/og-image";
import { plainText } from "@/lib/rich-text";
import { SITE } from "@/lib/site";
import { getSiteUrl } from "@/lib/site-url";
import { ChevronRight } from "lucide-react";

type GuidePageProps = { params: Promise<{ slug: string }> };

/** Só os guias de `lib/guides.ts`; qualquer outro endereço dá 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const guide = getGuide((await params).slug);
  if (!guide) {
    return {};
  }
  const path = `/guias/${guide.slug}`;
  return {
    title: guide.metaTitle,
    description: guide.description,
    keywords: guide.keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      locale: "pt_BR",
      url: path,
      siteName: SITE.name,
      title: guide.metaTitle,
      description: guide.description,
      publishedTime: guide.published,
      modifiedTime: guide.updated,
      authors: [LINKS.authorGithub],
      images: ogImage(`${path}/og.png`, guide.title),
    },
    twitter: { card: "summary_large_image", title: guide.metaTitle, description: guide.description, images: [`${path}/og.png`] },
  };
}

/** "2026-10-23" → "23/10/2026" (sem depender do idioma do servidor). */
function formatDate(iso: string) {
  const [year, month, day] = iso.split("-");
  return `${day}/${month}/${year}`;
}

export default async function GuidePage({ params }: GuidePageProps) {
  const guide = getGuide((await params).slug);
  if (!guide) {
    notFound();
  }

  const base = getSiteUrl();
  const url = `${base}/guias/${guide.slug}`;
  const others = GUIDES.filter(({ slug }) => slug !== guide.slug);
  const author = { "@type": "Person", name: AUTHOR, url: LINKS.authorGithub };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: guide.title,
        description: guide.description,
        inLanguage: "pt-BR",
        datePublished: guide.published,
        dateModified: guide.updated,
        author,
        publisher: author,
        mainEntityOfPage: url,
        image: `${url}/og.png`,
        keywords: guide.keywords.join(", "),
        articleSection: guide.sections.map(({ title }) => title),
        abstract: plainText(guide.intro),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: base },
          { "@type": "ListItem", position: 2, name: "Guias", item: `${base}/guias` },
          { "@type": "ListItem", position: 3, name: guide.shortTitle, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <section aria-labelledby="guide-title" className="relative overflow-hidden border-b border-border">
        <SectionBackground variant="aurora" />
        <Container className="relative max-w-3xl py-12 sm:py-16">
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
                <Link href="/guias" className="rounded-sm hover:text-foreground">
                  Guias
                </Link>
              </li>
              <li aria-hidden>
                <ChevronRight className="size-3" />
              </li>
              <li aria-current="page" className="text-foreground/85">
                {guide.shortTitle}
              </li>
            </ol>
          </nav>

          <h1 id="guide-title" className="mt-6 text-[clamp(2rem,5.6vw,3rem)] leading-[1.08] font-bold tracking-[-0.035em] text-balance text-foreground">
            {guide.title}
          </h1>
          <p className="mt-4 font-mono text-xs text-muted-foreground">
            Atualizado em <time dateTime={guide.updated}>{formatDate(guide.updated)}</time> · por{" "}
            <a href={LINKS.authorGithub} target="_blank" rel="noopener noreferrer" className="rounded-sm text-foreground/85 underline underline-offset-4 hover:text-foreground">
              {AUTHOR}
            </a>
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <RichText text={guide.intro} />
          </p>
        </Container>
      </section>

      <Container className="max-w-3xl py-12 sm:py-16">
        <nav aria-labelledby="toc-title" className="rounded-2xl border border-border bg-card/60 p-5 sm:p-6">
          <h2 id="toc-title" className="font-mono text-[11px] font-semibold tracking-[0.2em] text-primary-soft uppercase">
            Neste guia
          </h2>
          <ol className="mt-4 grid gap-2 sm:grid-cols-2">
            {guide.sections.map(({ id, title }) => (
              <li key={id}>
                <a href={`#${id}`} className="rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="mt-12 space-y-12">
          {guide.sections.map((section) => (
            <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className="scroll-mt-24">
              <h2 id={`${section.id}-title`} className="text-[1.4rem] leading-tight font-bold tracking-[-0.02em] text-foreground sm:text-2xl">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4">
                {section.blocks.map((block, index) => (
                  <GuideBlockView key={index} block={block} />
                ))}
              </div>
            </section>
          ))}
        </article>

        <aside className="relative mt-16 overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/15 via-card to-background p-6 sm:p-8">
          <p className="font-mono text-[11px] font-semibold tracking-[0.2em] text-primary-soft uppercase">Grátis para Windows 11 e 10</p>
          <p className="mt-3 text-2xl leading-tight font-bold tracking-[-0.02em] text-foreground">Faça tudo isso com o NITRO HUB</p>
          <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground">
            Overlay de FPS, Modo jogo, otimizações com botão de desfazer, sensores e overclock com o risco marcado. Em português e sem custo.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <DownloadLink className="w-full sm:w-auto" />
            <Link href="/#recursos" className="rounded-sm text-sm font-medium text-foreground underline underline-offset-4 hover:text-primary-soft">
              Ver todos os recursos
            </Link>
          </div>
        </aside>

        <section aria-labelledby="others-title" className="mt-16">
          <h2 id="others-title" className="font-mono text-[11px] font-semibold tracking-[0.2em] text-primary-soft uppercase">
            Outros guias
          </h2>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {others.map((other) => (
              <li key={other.slug}>
                <GuideCard guide={other} />
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </>
  );
}
