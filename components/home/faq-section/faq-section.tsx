import { SectionHeading } from "@/components/home/section-heading";
import { Container } from "@/components/ui/container";
import { RichText } from "@/components/ui/rich-text";

import { ChevronDown } from "lucide-react";

import { FAQ } from "./faq-data";

/** Perguntas com `<details>`: abre e fecha sem JavaScript e funciona com teclado e leitor de tela. */
export function FaqSection() {
  return (
    <section id="duvidas" aria-labelledby="faq-title" className="border-b border-border py-20 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-16">
        <SectionHeading
          id="faq-title"
          kicker="Dúvidas"
          title="Perguntas frequentes"
          description="O que mais perguntam antes de instalar."
          className="lg:sticky lg:top-24 lg:self-start"
        />

        <div className="divide-y divide-border border-y border-border">
          {FAQ.map(({ question, answer }) => (
            <details key={question} className="group">
              <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-md py-5 text-left font-semibold text-foreground transition-colors hover:text-primary-soft">
                <span>{question}</span>
                <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" aria-hidden />
              </summary>
              <p className="-mt-1 pb-5 text-[0.9375rem] leading-relaxed text-muted-foreground">
                <RichText text={answer} />
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
