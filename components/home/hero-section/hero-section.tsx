import { DownloadLink } from "@/components/home/download-link";
import { SectionBackground } from "@/components/home/section-background";
import { GitHubIcon } from "@/components/icons/github-icon";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GradientText } from "@/components/ui/gradient-text";

import { LINKS } from "@/lib/links";
import { cn } from "@/lib/utils";

import { GameOverlayMockup } from "./game-overlay-mockup";

export function HeroSection() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden border-b border-border">
      <SectionBackground variant="aurora" />
      <Container className="relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1fr_1.08fr] lg:gap-14 lg:py-24">
        <div className="min-w-0">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[11px] font-semibold tracking-[0.16em] text-primary-soft uppercase">
            <span className="size-1.5 rounded-full bg-ok" aria-hidden />
            Grátis e de código aberto
          </p>

          <h1 id="hero-title" className="mt-6 font-display text-[clamp(2.4rem,7.4vw,4.3rem)] leading-[1.02] font-black tracking-[-0.045em] text-balance">
            Seu PC gamer, <GradientText>num app só.</GradientText>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            O <strong className="font-semibold text-foreground">NITRO HUB</strong> mostra o FPS e as temperaturas enquanto você joga, deixa o Windows pronto para jogar com um
            clique e ajuda a descobrir o que está pesando no computador.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <DownloadLink className="w-full sm:w-auto" />
            <a href={LINKS.repo} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-auto")}>
              <GitHubIcon />
              Ver o código
            </a>
          </div>

          <p className="mt-4 font-mono text-xs leading-relaxed text-muted-foreground">Grátis, para Windows 10 e 11 (64 bits) · instalador em português · atualiza sozinho</p>
        </div>

        <GameOverlayMockup />
      </Container>
    </section>
  );
}
