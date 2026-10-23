"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";

import { DownloadLink } from "@/components/home/download-link";

import { FEATURES, GROUPS } from "@/lib/features";
import { NAV_LINKS } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";

/** Menu do celular (abaixo de md): links da página, recursos por grupo (abre e fecha) e o botão de download. */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [features, setFeatures] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Fechar o menu" : "Abrir o menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
      >
        {open ? <X className="size-4" aria-hidden /> : <Menu className="size-4" aria-hidden />}
      </button>

      <div
        id={panelId}
        className={cn(
          // absolute (e não fixed): o cabeçalho tem backdrop-filter, que vira o bloco de referência de filhos fixed
          "absolute inset-x-0 top-full z-40 h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-background px-4 pt-4 pb-10 transition-[opacity,transform,visibility] duration-200",
          open ? "visible translate-y-0 opacity-100" : "pointer-events-none invisible -translate-y-2 opacity-0",
        )}
      >
        <nav aria-label="Menu" className="flex flex-col">
          <button
            type="button"
            aria-expanded={features}
            onClick={() => setFeatures((v) => !v)}
            className="flex items-center justify-between rounded-lg px-3 py-3 text-left text-base font-semibold text-foreground"
          >
            Recursos
            <ChevronDown className={cn("size-4 transition-transform duration-200", features && "rotate-180")} aria-hidden />
          </button>
          {features ? (
            <div className="mb-2 space-y-4 rounded-xl border border-border bg-card p-3">
              {GROUPS.map((group) => (
                <div key={group.id}>
                  <p className="px-2 font-mono text-[10px] font-semibold tracking-[0.22em] text-primary uppercase">{group.kicker}</p>
                  <ul className="mt-1">
                    {FEATURES.filter((f) => f.group === group.id).map(({ slug, title, Icon, isNew }) => (
                      <li key={slug}>
                        <Link
                          href={`/recursos/${slug}`}
                          onClick={close}
                          className="flex items-center gap-2.5 rounded-lg px-2 py-2 text-sm text-muted-foreground hover:text-foreground"
                        >
                          <Icon className="size-4 shrink-0 text-primary-soft" strokeWidth={1.75} aria-hidden />
                          {title}
                          {isNew ? <span className="ml-auto rounded-full bg-ok/15 px-1.5 py-px font-mono text-[9px] font-bold text-ok uppercase">Novo</span> : null}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <Link href="/recursos" onClick={close} className="block px-2 font-mono text-[11px] font-bold tracking-wider text-foreground uppercase">
                Ver todos os recursos →
              </Link>
            </div>
          ) : null}
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} onClick={close} className="rounded-lg px-3 py-3 text-base font-semibold text-foreground">
              {label}
            </Link>
          ))}
        </nav>
        <DownloadLink className="mt-6 w-full" />
      </div>
    </div>
  );
}
