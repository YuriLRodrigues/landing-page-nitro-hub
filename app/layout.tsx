import type { Metadata, Viewport } from "next";
import { Archivo, Geist, Geist_Mono, Oswald } from "next/font/google";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

import { AUTHOR, LINKS } from "@/lib/links";
import { ogImage } from "@/lib/og-image";
import { SITE } from "@/lib/site";
import { getSiteUrl } from "@/lib/site-url";

import "./globals.css";

/** Mesmas fontes do portfólio: Geist (texto), Geist Mono (rótulos e números), Archivo 900 (títulos grandes), Oswald (marca). */
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });
const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin"], weight: "900", display: "swap" });
const oswald = Oswald({ variable: "--font-oswald", subsets: ["latin"], weight: "600", display: "swap" });

/**
 * Política de segurança: o site só carrega scripts, estilos e fontes dele mesmo (nada de terceiros) e só conversa com a API
 * do GitHub, para conferir o hash do instalador. O GitHub Pages não deixa mandar cabeçalhos HTTP, então ela vai numa
 * <meta>, que não aceita frame-ancestors. Os scripts inline são os do próprio Next (dados da página e JSON-LD); em
 * desenvolvimento o Next precisa de eval e do WebSocket do recarregamento.
 */
const isDev = process.env.NODE_ENV !== "production";
const CSP = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  `connect-src 'self' https://api.github.com${isDev ? " ws:" : ""}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: { default: SITE.title, template: `%s · ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: AUTHOR, url: LINKS.authorGithub }],
  creator: AUTHOR,
  keywords: [...SITE.keywords],
  category: "technology",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  /** Códigos do Google Search Console e do Bing Webmaster Tools (método "tag HTML"), variáveis do repositório no GitHub. */
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.BING_SITE_VERIFICATION ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION } : undefined,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    images: ogImage("/og.png", SITE.title),
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#050506",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} ${oswald.variable} h-full antialiased`}>
      <head>
        <meta httpEquiv="Content-Security-Policy" content={CSP} />
        <noscript>
          <style>{".reveal{opacity:1!important;transform:none!important}"}</style>
        </noscript>
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <a
          href="#conteudo"
          className="sr-only rounded-md bg-primary-strong px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60]"
        >
          Pular para o conteúdo
        </a>
        <SiteHeader />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
