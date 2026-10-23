function Marker({ n }: { n: number }) {
  return <span className="grid size-5 shrink-0 place-items-center rounded-full bg-primary-strong font-mono text-[10px] font-bold text-white">{n}</span>;
}

/**
 * Esquema do aviso do SmartScreen (não é a tela real): mostra onde clicar, na ordem.
 * O desenho fica escondido dos leitores de tela; o texto do passo já explica os cliques.
 */
export function SmartScreenMockup() {
  return (
    <div className="mt-5 max-w-md overflow-hidden rounded-xl border border-border bg-background/80" aria-hidden>
      <div className="border-b border-border bg-[#0b2a4a]/60 px-4 py-3">
        <p className="text-sm font-semibold text-foreground">O Windows protegeu o computador</p>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">O SmartScreen impediu a execução de um aplicativo não reconhecido…</p>
        <p className="mt-2 flex items-center gap-2 text-xs">
          <Marker n={1} />
          <span className="font-semibold text-foreground underline underline-offset-4">Mais informações</span>
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-end gap-2 px-3 py-3 sm:px-4">
        <span className="flex items-center gap-2">
          <Marker n={2} />
          <span className="rounded-md border border-primary/60 bg-primary/15 px-2.5 py-1.5 text-[11px] font-semibold whitespace-nowrap text-foreground">Executar assim mesmo</span>
        </span>
        <span className="rounded-md border border-border px-2.5 py-1.5 text-[11px] whitespace-nowrap text-muted-foreground">Não executar</span>
      </div>
    </div>
  );
}
