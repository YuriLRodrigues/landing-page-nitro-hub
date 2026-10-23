import { RichText } from "@/components/ui/rich-text";

import type { GuideBlock } from "@/lib/guides";
import { Info } from "lucide-react";

const textClassName = "text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base";

/** Um bloco de um guia: parágrafo, lista, passos numerados ou nota em destaque. */
export function GuideBlockView({ block }: { block: GuideBlock }) {
  switch (block.kind) {
    case "p":
      return (
        <p className={textClassName}>
          <RichText text={block.text} />
        </p>
      );
    case "list":
      return (
        <ul className="space-y-2.5">
          {block.items.map((item) => (
            <li key={item} className={`relative pl-5 ${textClassName}`}>
              <span className="absolute top-[0.6em] left-0 size-1.5 rounded-full bg-primary" aria-hidden />
              <RichText text={item} />
            </li>
          ))}
        </ul>
      );
    case "steps":
      return (
        <ol className="space-y-3">
          {block.items.map((item, index) => (
            <li key={item} className={`flex gap-3.5 ${textClassName}`}>
              <span className="grid size-7 shrink-0 place-items-center rounded-lg border border-primary/30 bg-primary/10 font-mono text-xs font-bold text-primary-soft">
                {index + 1}
              </span>
              <span className="min-w-0 pt-0.5">
                <RichText text={item} />
              </span>
            </li>
          ))}
        </ol>
      );
    case "note":
      return (
        <aside className="flex gap-3.5 rounded-xl border border-primary/30 bg-primary/[0.07] p-4 sm:p-5">
          <Info className="mt-0.5 size-5 shrink-0 text-primary-soft" strokeWidth={1.75} aria-hidden />
          <div className="min-w-0">
            <p className="font-semibold text-foreground">{block.title}</p>
            <p className={`mt-1 ${textClassName}`}>
              <RichText text={block.text} />
            </p>
          </div>
        </aside>
      );
  }
}
