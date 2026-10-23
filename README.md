# NITRO HUB — landing page

Página de apresentação do [NITRO HUB](https://github.com/YuriLRodrigues/nitro-hub), app gratuito para Windows 10 e 11 com overlay de FPS,
sensores, Modo jogo, overclock com áreas de risco e otimizações do Windows com botão de desfazer.

Página inicial e guias (`/guias`), em português, 100% estáticos (gerados no build), sem analytics e sem bibliotecas de animação.
No ar em <https://nitro-hub-lp.vercel.app>.

## Stack

Mesma base do portfólio ([yuri-rodriguesdev.vercel.app](https://yuri-rodriguesdev.vercel.app/)):

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

| Script           | O que faz                                     |
| ---------------- | --------------------------------------------- |
| `pnpm dev`       | servidor de desenvolvimento                   |
| `pnpm build`     | build de produção (o mesmo que a Vercel roda) |
| `pnpm start`     | serve o build de produção                     |
| `pnpm lint`      | ESLint (`pnpm lint:fix` corrige)              |
| `pnpm typecheck` | checagem de tipos do TypeScript               |
| `pnpm format`    | formata tudo com o Prettier                   |

## Onde mudar o quê

| Quero mudar…                                   | Arquivo                                                 |
| ---------------------------------------------- | ------------------------------------------------------- |
| Links (download, releases, repositório, autor) | `lib/links.ts`                                          |
| Título, descrição e palavras-chave (SEO)       | `lib/site.ts`                                           |
| Guias (`/guias/...`)                           | `lib/guides.ts`                                         |
| Recursos (textos de cada grupo)                | `components/home/features-section/features-data.ts`     |
| Perguntas frequentes                           | `components/home/faq-section/faq-data.ts`               |
| Cores (cor "Nitro" #7C6CFF, fundos, selos)     | `app/globals.css`                                       |
| Fontes e metadados                             | `app/layout.tsx`                                        |
| Imagem de prévia ao compartilhar o link        | `lib/og-image.tsx` (desenho), `app/opengraph-image.tsx` |
| Logo e ícones                                  | `public/logo.png`, `app/icon.png`, `app/favicon.ico`    |

- O botão de download aponta para `releases/latest/download/NitroHub-Setup.exe`, então **não precisa mudar a cada versão**,
  desde que a release `latest` continue com esse nome de arquivo.
- Os textos vêm do `README.md` e do `NOVIDADES.md` do app. Ao lançar um recurso novo, acrescente-o em `features-data.ts`.
- Não há capturas de tela: as "telas" são ilustrações em HTML/CSS (`components/home/**/mockups`, overlay do topo em
  `components/home/hero-section`). Os números nelas são de exemplo.

## Publicar na Vercel

1. Crie um repositório no GitHub (ex.: `lp-nitro-hub`) e envie este projeto:
   ```bash
   git remote add origin https://github.com/YuriLRodrigues/lp-nitro-hub.git
   git push -u origin main
   ```
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório. A Vercel reconhece Next.js e pnpm (pelo `pnpm-lock.yaml`)
   sozinha: não precisa mudar o comando de build nem a pasta de saída.
3. Clique em **Deploy**. A cada push na `main` a página é publicada de novo; pushes em outras branches geram uma prévia.
4. **Domínio próprio (opcional)**: em _Settings › Domains_, adicione o domínio. Depois, em _Settings › Environment Variables_,
   crie `NEXT_PUBLIC_SITE_URL` com o endereço completo (ex.: `https://nitrohub.com.br`) e faça um novo deploy.
   Ela é usada no canonical, no Open Graph, no `sitemap.xml` e no `robots.txt`. Sem ela, a página usa
   `https://nitro-hub-lp.vercel.app` (`SITE.url` em `lib/site.ts`); deploys de prévia usam o próprio endereço.

Pela linha de comando também funciona: `pnpm dlx vercel` (prévia) e `pnpm dlx vercel --prod` (produção).

## Aparecer no Google

O que já está pronto: `robots.txt` liberando tudo, `sitemap.xml` com a página inicial e os guias, canonical em cada página,
Open Graph com imagem para cada guia e dados estruturados (`SoftwareApplication`, `FAQPage`, `Article` e trilha de navegação).
Os textos usam as buscas que interessam: "desempenho Windows 11/10", "otimizar PC para jogos", "aumentar FPS",
"tela esticada VALORANT".

Para o Google indexar mais rápido:

1. Abra o [Google Search Console](https://search.google.com/search-console) › **Adicionar propriedade** › **Prefixo do URL**
   › `https://nitro-hub-lp.vercel.app/`.
2. Escolha a verificação por **Tag HTML** e copie só o código do `content="..."`.
3. Na Vercel, em _Settings › Environment Variables_, crie `GOOGLE_SITE_VERIFICATION` com esse código e faça um novo deploy
   (_Deployments › ⋯ › Redeploy_). Volte ao Search Console e clique em **Verificar**.
4. Em **Sitemaps**, envie `sitemap.xml`. Depois, em **Inspeção de URL**, cole o endereço de cada página e clique em
   **Solicitar indexação**.
5. Bing (também usado pelo DuckDuckGo): no [Bing Webmaster Tools](https://www.bing.com/webmasters) dá para importar o site
   direto do Search Console; se preferir a tag, use a variável `BING_SITE_VERIFICATION`.

A primeira indexação costuma levar de alguns dias a algumas semanas. Links para a página (no README do app, em vídeos,
no Discord e nas redes) ajudam a subir nas buscas. Para escrever um guia novo, acrescente-o em `lib/guides.ts`: a página,
a imagem de prévia, o sitemap, o rodapé e a seção de guias da página inicial são gerados a partir dali.

## Créditos

NITRO HUB e esta página por [YuriLRodrigues](https://github.com/YuriLRodrigues). O NITRO HUB é um fork do
[RESET EXPLODE](https://github.com/GustavoReset/ResetExplode), de Gustavo Reset (licença MIT).
