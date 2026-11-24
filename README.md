# NITRO HUB — landing page

Página de apresentação do [NITRO HUB](https://github.com/YuriLRodrigues/nitro-hub), app gratuito para Windows 10 e 11 com overlay de FPS,
sensores, Modo jogo, overclock com áreas de risco e otimizações do Windows com botão de desfazer.

Página inicial e guias (`/guias`), em português, 100% estáticos (gerados no build), sem analytics e sem bibliotecas de animação.
No ar em <https://yurilrodrigues.github.io/landing-page-nitro-hub/>, publicada pelo GitHub Pages.

## Stack

Mesma base do portfólio ([yurilrodrigues.github.io/portfolio-v3](https://yurilrodrigues.github.io/portfolio-v3/)):

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (via `@tailwindcss/postcss`), `cn()` com `clsx` + `tailwind-merge`, variantes com `class-variance-authority`
- Ícones: `lucide-react`
- Fontes (`next/font`): Geist, Geist Mono, Archivo 900 (títulos grandes) e Oswald (marca)
- ESLint 9 (flat config: `core-web-vitals` + `typescript` do Next, Prettier e ordem de imports) e Prettier com o plugin do Tailwind
- **pnpm 9.15.0** (campo `packageManager`)

## Rodar no seu PC

Precisa do Node.js 20.9 ou mais novo.

```bash
pnpm install
pnpm dev
```

Abra <http://localhost:3000>.

| Script           | O que faz                                                          |
| ---------------- | ------------------------------------------------------------------ |
| `pnpm dev`       | servidor de desenvolvimento                                        |
| `pnpm build`     | gera o site estático em `out/` (o mesmo que o GitHub Actions roda) |
| `pnpm lint`      | ESLint (`pnpm lint:fix` corrige)                                   |
| `pnpm typecheck` | checagem de tipos do TypeScript                                    |
| `pnpm format`    | formata tudo com o Prettier                                        |

## Onde mudar o quê

| Quero mudar…                                   | Arquivo                                              |
| ---------------------------------------------- | ---------------------------------------------------- |
| Links (download, releases, repositório, autor) | `lib/links.ts`                                       |
| Título, descrição e palavras-chave (SEO)       | `lib/site.ts`                                        |
| Guias (`/guias/...`)                           | `lib/guides.ts`                                      |
| Recursos (textos de cada grupo)                | `components/home/features-section/features-data.ts`  |
| Perguntas frequentes                           | `components/home/faq-section/faq-data.ts`            |
| Cores (cor "Nitro" #7C6CFF, fundos, selos)     | `app/globals.css`                                    |
| Fontes e metadados                             | `app/layout.tsx`                                     |
| Imagem de prévia ao compartilhar o link        | `lib/og-image.tsx` (desenho), `app/og.png/route.tsx` |
| Logo e ícones                                  | `public/logo.png`, `app/icon.png`, `app/favicon.ico` |

- O botão de download aponta para `releases/latest/download/NitroHub-Setup.exe`, então **não precisa mudar a cada versão**,
  desde que a release `latest` continue com esse nome de arquivo.
- Os textos vêm do `README.md` e do `NOVIDADES.md` do app. Ao lançar um recurso novo, acrescente-o em `lib/features.ts` (com `isNew: true`): a página /recursos/[slug], o menu Recursos, a página inicial, o rodapé e o sitemap saem dali.
- Não há capturas de tela: as "telas" são ilustrações em HTML/CSS (`components/home/**/mockups`, overlay do topo em
  `components/home/hero-section`). Os números nelas são de exemplo.

## Publicar no GitHub Pages

O site é estático (`output: "export"` em `next.config.ts`): o build gera a pasta `out/` e não há servidor.

1. A cada push na `main`, o workflow `.github/workflows/deploy-pages.yml` instala, faz o build e publica.
   Em _Settings › Pages_, a origem é **GitHub Actions**.
2. O site fica em `/landing-page-nitro-hub`. O workflow passa esse prefixo (`NEXT_PUBLIC_BASE_PATH`) e o endereço
   completo (`NEXT_PUBLIC_SITE_URL`). O Next aplica o prefixo em links, scripts e imagens importadas; arquivos de `public/`
   citados por string passam por `withBasePath` (`lib/base-path.ts`).
3. Sem servidor não há cabeçalhos HTTP, redirects, ISR nem Server Actions. A política de segurança (CSP) fica numa
   `<meta>` em `app/layout.tsx`, e as imagens de prévia saem como `og.png` para o Pages servir com o tipo certo.
4. O hash do instalador é lido no build e conferido de novo no navegador pela API de releases do GitHub
   (`components/home/install-section/release-hash.tsx`), então a página não fica com o hash velho quando sai versão nova.
5. **Domínio próprio (opcional)**: em _Settings › Pages › Custom domain_. O workflow já pega o endereço e o prefixo certos
   do Pages, sem mudar nada no código.

Para ver o build no seu PC, sirva a pasta `out/` (ex.: `pnpm dlx serve out`) depois de um `pnpm build` sem o prefixo.

## Aparecer no Google

O que já está pronto: `robots.txt` liberando tudo, `sitemap.xml` com a página inicial e os guias, canonical em cada página,
Open Graph com imagem para cada guia e dados estruturados (`SoftwareApplication`, `FAQPage`, `Article` e trilha de navegação).
Os textos usam as buscas que interessam: "desempenho Windows 11/10", "otimizar PC para jogos", "aumentar FPS",
"tela esticada VALORANT".

Para o Google indexar mais rápido:

1. Abra o [Google Search Console](https://search.google.com/search-console) › **Adicionar propriedade** › **Prefixo do URL**
   › `https://yurilrodrigues.github.io/landing-page-nitro-hub/`.
2. Escolha a verificação por **Tag HTML** e copie só o código do `content="..."`.
3. No repositório, em _Settings › Secrets and variables › Actions › Variables_, crie `GOOGLE_SITE_VERIFICATION` com esse
   código e rode o workflow de novo (_Actions › Deploy no GitHub Pages › Run workflow_). Volte ao Search Console e clique
   em **Verificar**.
4. Em **Sitemaps**, envie `sitemap.xml`. Num endereço com prefixo os buscadores não leem o `robots.txt` (só o da raiz do
   domínio), então o sitemap precisa ser enviado por aqui. Depois, em **Inspeção de URL**, cole o endereço de cada página e clique em
   **Solicitar indexação**.
5. Bing (também usado pelo DuckDuckGo): no [Bing Webmaster Tools](https://www.bing.com/webmasters) dá para importar o site
   direto do Search Console; se preferir a tag, crie a variável `BING_SITE_VERIFICATION` do mesmo jeito.

A primeira indexação costuma levar de alguns dias a algumas semanas. Links para a página (no README do app, em vídeos,
no Discord e nas redes) ajudam a subir nas buscas. Para escrever um guia novo, acrescente-o em `lib/guides.ts`: a página,
a imagem de prévia, o sitemap, o rodapé e a seção de guias da página inicial são gerados a partir dali.

## Créditos

NITRO HUB e esta página por [YuriLRodrigues](https://github.com/YuriLRodrigues). O NITRO HUB é um fork do
[RESET EXPLODE](https://github.com/GustavoReset/ResetExplode), de Gustavo Reset (licença MIT).
