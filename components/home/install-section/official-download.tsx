import { LINKS } from "@/lib/links";
import { getLatestRelease } from "@/lib/release";
import { ShieldAlert, ShieldCheck } from "lucide-react";

const linkClassName = "rounded-sm font-medium text-primary-soft underline underline-offset-4 hover:text-foreground";

/** Onde baixar com segurança, como conferir o arquivo (SHA-256) e o que o NITRO HUB nunca faz: contra instaladores falsos. */
export async function OfficialDownload() {
  const release = await getLatestRelease();

  return (
    <div id="download-oficial" className="mt-6 grid scroll-mt-24 gap-4 lg:grid-cols-[1.2fr_1fr]">
      <div className="rounded-2xl border border-ok/30 bg-ok/[0.06] p-5 sm:p-6">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="size-5 shrink-0 text-ok" strokeWidth={1.75} aria-hidden />
          <h3 className="text-lg font-bold tracking-tight text-foreground">Confira se o arquivo é o oficial</h3>
        </div>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
          Baixe só por esta página ou pela{" "}
          <a href={LINKS.releases} target="_blank" rel="noopener noreferrer" className={linkClassName}>
            página oficial no GitHub
          </a>
          . Para ter certeza, abra o PowerShell na pasta do arquivo e rode:
        </p>
        <pre className="mt-3 overflow-x-auto rounded-lg border border-border bg-background/70 px-3.5 py-2.5 font-mono text-[13px] text-foreground">
          Get-FileHash .\NitroHub-Setup.exe
        </pre>
        {release ? (
          <>
            <p className="mt-3 text-sm text-muted-foreground">
              O resultado tem que ser igual a este (versão <strong className="font-semibold text-foreground">{release.version}</strong>
              {release.setupSize > 0 ? `, ${(release.setupSize / 1048576).toFixed(1).replace(".", ",")} MB` : ""}):
            </p>
            <p className="mt-2 rounded-lg border border-ok/25 bg-background/70 px-3.5 py-2.5 font-mono text-[12.5px] leading-relaxed break-all text-ok">{release.setupSha256}</p>
          </>
        ) : (
          <p className="mt-3 text-sm text-muted-foreground">
            Compare com o SHA-256 publicado nas notas da{" "}
            <a href={LINKS.releases} target="_blank" rel="noopener noreferrer" className={linkClassName}>
              versão mais recente
            </a>
            .
          </p>
        )}
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
          A partir da v0.22, cada versão também tem um atestado de origem do GitHub, que prova que o arquivo saiu do código oficial:{" "}
          <code className="font-mono break-all text-foreground/85">gh attestation verify NitroHub-Setup.exe --repo YuriLRodrigues/nitro-hub</code>
        </p>
      </div>

      <div className="rounded-2xl border border-warn/30 bg-warn/[0.06] p-5 sm:p-6">
        <div className="flex items-center gap-2.5">
          <ShieldAlert className="size-5 shrink-0 text-warn" strokeWidth={1.75} aria-hidden />
          <h3 className="text-lg font-bold tracking-tight text-foreground">Cuidado com cópias falsas</h3>
        </div>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">Golpistas usam nomes de apps conhecidos para espalhar vírus. O NITRO HUB:</p>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
          {[
            "nunca é enviado em .zip ou .rar com senha, nem por link no Discord;",
            "nunca pede login do Discord, da Steam, do e-mail ou do banco;",
            "nunca pede para desativar o antivírus;",
            'não vem junto de "jogos" ou programas para testar.',
          ].map((text) => (
            <li key={text} className="relative pl-4">
              <span className="absolute top-[0.6em] left-0 size-1.5 rounded-full bg-warn" aria-hidden />
              {text}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Recebeu um arquivo assim? Não abra. Se já abriu, troque as senhas por outro aparelho, a começar pelo Discord.
        </p>
      </div>
    </div>
  );
}
