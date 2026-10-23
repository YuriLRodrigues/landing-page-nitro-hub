import Link from "next/link";

import { tokenize } from "@/lib/rich-text";

const linkClassName = "rounded-sm font-medium text-primary-soft underline underline-offset-4 hover:text-foreground";

/** Mostra um texto de `lib/rich-text`: negrito, código e links (internos com `next/link`, externos em nova aba). */
export function RichText({ text }: { text: string }) {
  return (
    <>
      {tokenize(text).map((token, index) => {
        switch (token.kind) {
          case "strong":
            return (
              <strong key={index} className="font-semibold text-foreground">
                {token.text}
              </strong>
            );
          case "code":
            return (
              <code key={index} className="font-mono text-[0.9em] text-foreground">
                {token.text}
              </code>
            );
          case "link":
            return token.href.startsWith("/") ? (
              <Link key={index} href={token.href} className={linkClassName}>
                {token.text}
              </Link>
            ) : (
              <a key={index} href={token.href} target="_blank" rel="noopener noreferrer" className={linkClassName}>
                {token.text}
              </a>
            );
          default:
            return token.text;
        }
      })}
    </>
  );
}
