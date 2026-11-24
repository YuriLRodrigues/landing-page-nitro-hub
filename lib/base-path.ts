/**
 * Prefixo de caminho do site publicado. No GitHub Pages o site fica em yurilrodrigues.github.io/landing-page-nitro-hub,
 * e o workflow passa NEXT_PUBLIC_BASE_PATH="/landing-page-nitro-hub". O Next já aplica o basePath em <Link>, scripts,
 * CSS e imagens importadas; arquivos de public/ referenciados por string (ícones do manifesto) passam por withBasePath.
 */
export const BASE_PATH = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

export function withBasePath(path: string): string {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}
