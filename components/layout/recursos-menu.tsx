"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import { FEATURES, GROUPS } from "@/lib/features";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronDown } from "lucide-react";

/**
 * "Recursos" na barra do topo: abre um painel com todos os recursos por grupo, cada um levando à sua página.
 * Fecha com Esc (o foco volta ao botão), clicando fora ou escolhendo um item. O painel ocupa a largura do cabeçalho e tem
 * fundo sólido: dentro do cabeçalho (que já tem backdrop-filter) um segundo desfoque não enxerga a página atrás.
 */
export function RecursosMenu() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }
    const onPointer = (e: PointerEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={wrapRef}>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:text-foreground",
          open ? "text-foreground" : "text-muted-foreground",
        )}
      >
        Recursos
        <ChevronDown className={cn("size-3.5 transition-transform duration-200", open && "rotate-180")} aria-hidden />
      </button>

      <div
        id={panelId}
        className={cn(
          "absolute inset-x-4 top-full z-50 mt-2 origin-top rounded-2xl border border-border bg-card p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] ring-1 ring-white/[0.04] transition-[opacity,transform,visibility] duration-200 ease-out sm:inset-x-6 lg:p-6",
          open ? "visible translate-y-0 opacity-100" : "pointer-events-none invisible -translate-y-1 opacity-0",
        )}
      >
        <div className="grid gap-x-6 gap-y-5 md:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((group) => (
            <div key={group.id}>
              <p className="font-mono text-[10px] font-semibold tracking-[0.22em] text-primary uppercase">{group.kicker}</p>
              <ul className="mt-2 space-y-0.5">
                {FEATURES.filter((f) => f.group === group.id).map(({ slug, title, Icon, isNew }) => (
                  <li key={slug}>
                    <Link
                      href={`/recursos/${slug}`}
                      onClick={() => setOpen(false)}
                      className="group flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground"
                    >
                      <Icon className="size-4 shrink-0 text-primary-soft" strokeWidth={1.75} aria-hidden />
                      <span className="truncate">{title}</span>
                      {isNew ? <span className="ml-auto rounded-full bg-ok/15 px-1.5 py-px font-mono text-[9px] font-bold tracking-wider text-ok uppercase">Novo</span> : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
          <p className="text-xs text-muted-foreground">Cada recurso tem uma página com o que faz e como usar.</p>
          <Link
            href="/recursos"
            onClick={() => setOpen(false)}
            className="group inline-flex items-center gap-1.5 font-mono text-[11px] font-bold tracking-wider text-foreground uppercase hover:text-primary-soft"
          >
            Ver todos os recursos
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  );
}
