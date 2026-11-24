import { LINKS } from "@/lib/links";

export type LatestRelease = { version: string; setupSha256: string; setupSize: number; date: string };

const SHA256 = /^[0-9a-f]{64}$/;
/** Nome do instalador na release, o mesmo do link de download. */
const SETUP_FILE = LINKS.download.split("/").at(-1);

/**
 * Versão e SHA-256 do instalador oficial, lidos no build do version.json da release "latest" (o mesmo arquivo que a
 * atualização automática do app usa). O site é estático, então o navegador confere de novo pela API do GitHub
 * (`getLatestReleaseFromApi`) e troca o valor se saiu uma versão depois do build. Se o GitHub não responder, a página
 * mostra só o link.
 */
export async function getLatestRelease(): Promise<LatestRelease | null> {
  try {
    const res = await fetch(LINKS.versionJson, { cache: "force-cache" });
    if (!res.ok) {
      return null;
    }
    const data = (await res.json()) as Partial<LatestRelease>;
    if (typeof data.version !== "string" || typeof data.setupSha256 !== "string" || !SHA256.test(data.setupSha256)) {
      return null;
    }
    return { version: data.version, setupSha256: data.setupSha256, setupSize: Number(data.setupSize) || 0, date: String(data.date ?? "") };
  } catch {
    return null;
  }
}

type ApiRelease = { name?: string; published_at?: string; assets?: { name: string; size: number; digest?: string | null }[] };

/**
 * A mesma informação pela API de releases do GitHub, que libera CORS e pode ser lida no navegador. O SHA-256 vem do
 * `digest` do instalador e a versão vem do nome da release ("NITRO HUB 0.24.0 (versão mais recente)").
 */
export async function getLatestReleaseFromApi(): Promise<LatestRelease | null> {
  try {
    const res = await fetch(LINKS.latestReleaseApi, { headers: { Accept: "application/vnd.github+json" } });
    if (!res.ok) {
      return null;
    }
    const data = (await res.json()) as ApiRelease;
    const setup = data.assets?.find(({ name }) => name === SETUP_FILE);
    const setupSha256 = setup?.digest?.replace(/^sha256:/, "");
    const version = data.name?.match(/\d+\.\d+\.\d+/)?.[0];
    if (!setup || !setupSha256 || !SHA256.test(setupSha256) || !version) {
      return null;
    }
    return { version, setupSha256, setupSize: setup.size, date: String(data.published_at ?? "") };
  } catch {
    return null;
  }
}
