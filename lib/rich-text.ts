/**
 * Texto com marcação mínima, usado no FAQ e nos guias: **negrito**, `código` e [link](/caminho ou https://...).
 * O mesmo texto vira HTML na página (`<RichText>`) e texto puro nos dados estruturados (JSON-LD).
 */
export type RichToken = { kind: "text"; text: string } | { kind: "strong"; text: string } | { kind: "code"; text: string } | { kind: "link"; text: string; href: string };

const TOKEN = /\*\*(.+?)\*\*|`([^`]+)`|\[([^\]]+)\]\(([^)\s]+)\)/g;

export function tokenize(source: string): RichToken[] {
  const tokens: RichToken[] = [];
  let last = 0;
  for (const match of source.matchAll(TOKEN)) {
    const start = match.index ?? 0;
    if (start > last) {
      tokens.push({ kind: "text", text: source.slice(last, start) });
    }
    const [, strong, code, linkText, href] = match;
    if (strong !== undefined) {
      tokens.push({ kind: "strong", text: strong });
    } else if (code !== undefined) {
      tokens.push({ kind: "code", text: code });
    } else {
      tokens.push({ kind: "link", text: linkText ?? "", href: href ?? "" });
    }
    last = start + match[0].length;
  }
  if (last < source.length) {
    tokens.push({ kind: "text", text: source.slice(last) });
  }
  return tokens;
}

/** Sem a marcação: "**Mais informações**" → "Mais informações". */
export function plainText(source: string): string {
  return tokenize(source)
    .map((token) => token.text)
    .join("");
}
