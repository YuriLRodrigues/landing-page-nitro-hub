import Link from "next/link";

import { NitroLogo, NitroWordmark } from "@/components/brand/nitro-logo";
import { Container } from "@/components/ui/container";

import { FEATURES } from "@/lib/features";
import { GUIDES } from "@/lib/guides";
import { AUTHOR, LINKS } from "@/lib/links";
import { ArrowUpRight } from "lucide-react";

const linkClassName = "inline-flex items-center gap-1 rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-border bg-gradient-to-b from-background to-card/40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" aria-hidden />

      <Container className="py-12 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <NitroLogo size={34} />
              <NitroWordmark className="text-lg" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              App gratuito para melhorar o desempenho do PC no Windows 11 e 10: overlay de FPS, sensores, Modo jogo, overclock e otimizações num lugar só.
            </p>
            <p className="mt-5 text-sm text-foreground">
              Desenvolvido por{" "}
              <a
                href={LINKS.authorGithub}
                {...external}
                className="rounded-sm font-semibold text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
              >
                {AUTHOR}
              </a>
            </p>
            <a href={LINKS.portfolio} {...external} className="group mt-2 inline-flex items-center gap-1 rounded-sm text-sm font-medium text-foreground hover:text-primary">
              Conheça meu portfólio
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
            </a>
          </div>

          <nav aria-label="Baixar e código">
            <p className="font-mono text-[10px] font-semibold tracking-[0.22em] text-primary uppercase">Baixar</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href={LINKS.download} className={linkClassName}>
                  Instalador mais recente
                </a>
              </li>
              <li>
                <a href={LINKS.releases} {...external} className={linkClassName}>
                  Todas as versões
                </a>
              </li>
              <li>
                <a href={LINKS.repo} {...external} className={linkClassName}>
                  Problemas e sugestões (GitHub)
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Recursos">
            <p className="font-mono text-[10px] font-semibold tracking-[0.22em] text-primary uppercase">Recursos</p>
            <ul className="mt-4 space-y-2.5">
              {FEATURES.filter((f) => ["modo-jogo", "overlay-de-fps", "otimizacao-do-windows", "limpeza", "overclock"].includes(f.slug)).map(({ slug, title }) => (
                <li key={slug}>
                  <Link href={`/recursos/${slug}`} className={linkClassName}>
                    {title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/recursos" className={linkClassName}>
                  Todos os recursos
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Guias">
            <p className="font-mono text-[10px] font-semibold tracking-[0.22em] text-primary uppercase">Guias</p>
            <ul className="mt-4 space-y-2.5">
              {GUIDES.map(({ slug, shortTitle }) => (
                <li key={slug}>
                  <Link href={`/guias/${slug}`} className={linkClassName}>
                    {shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Autor">
            <p className="font-mono text-[10px] font-semibold tracking-[0.22em] text-primary uppercase">Autor</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href={LINKS.authorGithub} {...external} className={linkClassName}>
                  GitHub de {AUTHOR}
                </a>
              </li>
              <li>
                <a href={LINKS.portfolio} {...external} className={linkClassName}>
                  Portfólio
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 font-mono text-[11px] leading-relaxed text-muted-foreground sm:flex-row sm:items-start sm:justify-between">
          <p>
            © {year} NITRO HUB · {AUTHOR}. Baseado no{" "}
            <a href={LINKS.resetExplode} {...external} className="rounded-sm text-foreground/85 underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground">
              RESET EXPLODE
            </a>
            , de Gustavo Reset (MIT).
          </p>
          <p className="sm:max-w-xs sm:text-right">As marcas citadas pertencem aos seus donos. O NITRO HUB não é afiliado a elas.</p>
        </div>
      </Container>
    </footer>
  );
}
