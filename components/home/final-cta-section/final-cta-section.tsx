import { DownloadLink } from "@/components/home/download-link";
import { SectionBackground } from "@/components/home/section-background";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GradientText } from "@/components/ui/gradient-text";

import { LINKS } from "@/lib/links";
import { cn } from "@/lib/utils";

export function FinalCtaSection() {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden py-20 sm:py-28">
      <SectionBackground variant="mesh" />
      <Container className="relative text-center">
        <h2 id="cta-title" className="mx-auto max-w-2xl font-display text-[clamp(2rem,6vw,3.25rem)] leading-[1.05] font-black tracking-[-0.04em] text-balance">
          Pronto para ver o FPS do <GradientText>seu próximo jogo?</GradientText>
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">É grátis, em português e se atualiza sozinho.</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <DownloadLink className="w-full sm:w-auto" />
          <a href={LINKS.releases} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-auto")}>
            Todas as versões
          </a>
        </div>
        <p className="mt-4 font-mono text-xs text-muted-foreground">Windows 10 e 11 (64 bits)</p>
      </Container>
    </section>
  );
}
