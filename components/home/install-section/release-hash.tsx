"use client";

import { useEffect, useState } from "react";

import { LINKS } from "@/lib/links";
import { getLatestReleaseFromApi, type LatestRelease } from "@/lib/release";

const linkClassName = "rounded-sm font-medium text-primary-soft underline underline-offset-4 hover:text-foreground";

type ReleaseHashProps = {
  /** Lido no build; pode estar atrasado se saiu uma versão depois. */
  initial: LatestRelease | null;
};

/** SHA-256 que o PowerShell tem que mostrar. Começa com o valor do build e confere a release mais nova no navegador. */
export function ReleaseHash({ initial }: ReleaseHashProps) {
  const [release, setRelease] = useState(initial);

  useEffect(() => {
    let active = true;
    getLatestReleaseFromApi().then((latest) => {
      if (active && latest) {
        setRelease(latest);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  if (!release) {
    return (
      <p className="mt-3 text-sm text-muted-foreground">
        Compare com o SHA-256 publicado nas notas da{" "}
        <a href={LINKS.releases} target="_blank" rel="noopener noreferrer" className={linkClassName}>
          versão mais recente
        </a>
        .
      </p>
    );
  }

  return (
    <>
      <p className="mt-3 text-sm text-muted-foreground">
        O resultado tem que ser igual a este (versão <strong className="font-semibold text-foreground">{release.version}</strong>
        {release.setupSize > 0 ? `, ${(release.setupSize / 1048576).toFixed(1).replace(".", ",")} MB` : ""}):
      </p>
      <p className="mt-2 rounded-lg border border-ok/25 bg-background/70 px-3.5 py-2.5 font-mono text-[12.5px] leading-relaxed break-all text-ok">{release.setupSha256}</p>
    </>
  );
}
