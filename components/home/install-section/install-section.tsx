import type { ReactNode } from "react";

import { DownloadLink } from "@/components/home/download-link";
import { SectionHeading } from "@/components/home/section-heading";
import { Container } from "@/components/ui/container";

import { LINKS } from "@/lib/links";

import { SmartScreenMockup } from "./smartscreen-mockup";

type Step = { title: string; body: ReactNode; extra?: ReactNode };

const STEPS: Step[] = [
  {
    title: "Baixe o instalador",
    body: (
      <>
        O botão baixa o <code className="font-mono text-foreground">NitroHub-Setup.exe</code>, sempre a versão mais recente, direto do GitHub.
      </>
    ),
    extra: <DownloadLink size="md" className="mt-5" />,
  },
  {
    title: "Se o Windows avisar, libere",
    body: (
      <>
        Como o instalador ainda não tem assinatura digital paga, o Windows pode mostrar <q>O Windows protegeu o computador</q>. Clique em{" "}
        <strong className="font-semibold text-foreground">Mais informações</strong> e depois em <strong className="font-semibold text-foreground">Executar assim mesmo</strong>.
      </>
    ),
    extra: <SmartScreenMockup />,
  },
  {
    title: "Instale e esqueça",
    body: (
      <>
        O app vai para Arquivos de Programas, ganha atalho no menu Iniciar e pode abrir junto com o Windows. Quando sai uma versão nova, ele avisa e se atualiza sozinho — e esse
        aviso do Windows não aparece de novo.
      </>
    ),
  },
];

export function InstallSection() {
  return (
    <section id="instalar" aria-labelledby="install-title" className="border-b border-border py-20 sm:py-24">
      <Container>
        <SectionHeading id="install-title" kicker="Como instalar" title="Três passos e pronto" />

        <ol className="mt-12 grid gap-4 lg:grid-cols-3">
          {STEPS.map(({ title, body, extra }, index) => (
            <li key={title} className="flex flex-col rounded-2xl border border-border bg-card/60 p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span
                  className="grid size-10 shrink-0 place-items-center rounded-lg border border-primary/35 bg-gradient-to-br from-primary/15 to-transparent font-mono text-xs font-bold text-primary-soft tabular-nums"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold tracking-tight text-foreground">
                  <span className="sr-only">Passo {index + 1}: </span>
                  {title}
                </h3>
              </div>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted-foreground">{body}</p>
              {extra}
            </li>
          ))}
        </ol>

        <div className="mt-6 grid gap-4 text-sm leading-relaxed text-muted-foreground md:grid-cols-2">
          <p className="rounded-xl border border-border p-4">
            <strong className="font-semibold text-foreground">Temperatura da CPU:</strong> o app usa o driver gratuito PawnIO para ler a CPU. Se ele não estiver instalado, o NITRO
            HUB avisa e oferece instalar pelo winget.
          </p>
          <p className="rounded-xl border border-border p-4">
            <strong className="font-semibold text-foreground">Prefere sem instalar?</strong> Em{" "}
            <a
              href={LINKS.releases}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm font-medium text-primary-soft underline underline-offset-4 hover:text-foreground"
            >
              todas as versões
            </a>{" "}
            há o <code className="font-mono text-foreground">NitroHub.exe</code> e o <code className="font-mono text-foreground">.zip</code>, que rodam de qualquer pasta.
          </p>
        </div>
      </Container>
    </section>
  );
}
