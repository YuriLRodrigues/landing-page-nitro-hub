import Link from "next/link";

import type { Guide } from "@/lib/guides";
import { ArrowRight } from "lucide-react";

/** Cartão de um guia: usado na página inicial, no índice /guias e em "Outros guias". */
export function GuideCard({ guide, headingLevel = "h3" }: { guide: Guide; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;

  return (
    <Link
      href={`/guias/${guide.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border bg-gradient-to-br from-card via-card/70 to-background p-5 ring-1 ring-white/[0.03] transition-[border-color,box-shadow] duration-300 ring-inset hover:border-primary/35 hover:shadow-[0_14px_44px_-18px_color-mix(in_oklch,var(--color-primary)_32%,transparent)] sm:p-6"
    >
      <p className="font-mono text-[10px] font-semibold tracking-[0.22em] text-primary-soft uppercase">Guia</p>
      <Heading className="mt-3 text-lg leading-snug font-bold tracking-tight text-foreground">{guide.title}</Heading>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{guide.description}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-[11px] font-bold tracking-wider text-foreground uppercase">
        Ler o guia
        <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />
      </span>
    </Link>
  );
}
