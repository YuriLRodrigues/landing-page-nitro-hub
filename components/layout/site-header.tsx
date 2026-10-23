import Link from "next/link";

import { NitroLogo, NitroWordmark } from "@/components/brand/nitro-logo";
import { DownloadLink } from "@/components/home/download-link";
import { GitHubIcon } from "@/components/icons/github-icon";
import { Container } from "@/components/ui/container";

import { LINKS } from "@/lib/links";
import { NAV_LINKS } from "@/lib/navigation";

import { MobileMenu } from "./mobile-menu";
import { RecursosMenu } from "./recursos-menu";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/75 backdrop-blur-xl backdrop-saturate-150">
      <Container className="relative flex h-16 items-center justify-between gap-3">
        <Link href="/" className="group flex min-w-0 items-center gap-2.5 rounded-lg" aria-label="NITRO HUB, voltar ao início">
          <NitroLogo size={36} className="transition-shadow duration-300 group-hover:shadow-[0_10px_32px_-6px_color-mix(in_oklch,var(--color-primary)_35%,transparent)]" />
          <NitroWordmark className="text-[1.05rem] sm:text-lg" />
        </Link>

        <nav aria-label="Seções da página" className="hidden items-center gap-1 md:flex">
          <RecursosMenu />
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="relative rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-primary after:transition-transform after:content-[''] hover:text-foreground hover:after:scale-x-100"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={LINKS.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-foreground sm:flex"
            aria-label="NITRO HUB no GitHub: versões e novidades (abre em nova aba)"
          >
            <GitHubIcon className="size-4" />
          </a>
          <DownloadLink size="sm" label="Baixar" />
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
