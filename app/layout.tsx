import type { Metadata, Viewport } from "next";
import { Archivo, Geist, Geist_Mono, Oswald } from "next/font/google";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

import { AUTHOR, LINKS } from "@/lib/links";
import { SITE } from "@/lib/site";
import { getSiteUrl } from "@/lib/site-url";

import "./globals.css";

/** Mesmas fontes do portfólio: Geist (texto), Geist Mono (rótulos e números), Archivo 900 (títulos grandes), Oswald (marca). */
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });
const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin"], weight: "900", display: "swap" });
const oswald = Oswald({ variable: "--font-oswald", subsets: ["latin"], weight: "600", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: SITE.title,
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: AUTHOR, url: LINKS.authorGithub }],
  creator: AUTHOR,
  keywords: ["NITRO HUB", "overlay de FPS", "FPS", "PC gamer", "otimizar Windows", "overclock", "sensores", "temperatura", "CPU-Z", "Windows 11", "grátis"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#050506",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} ${oswald.variable} h-full antialiased`}>
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
