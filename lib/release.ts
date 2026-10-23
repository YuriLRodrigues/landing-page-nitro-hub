import { LINKS } from "@/lib/links";

export type LatestRelease = { version: string; setupSha256: string; setupSize: number; date: string };

/**
 * Versão e SHA-256 do instalador oficial, lidos do version.json da release "latest" no GitHub (o mesmo arquivo que a
 * atualização automática do app usa). Revalida a cada hora; se o GitHub não responder, a página mostra só o link.
 */
export async function getLatestRelease(): Promise<LatestRelease | null> {
  try {
    const res = await fetch(LINKS.versionJson, { next: { revalidate: 3600 } });
    if (!res.ok) {
      return null;
    }
    const data = (await res.json()) as Partial<LatestRelease>;
    if (typeof data.version !== "string" || typeof data.setupSha256 !== "string" || !/^[0-9a-f]{64}$/.test(data.setupSha256)) {
      return null;
    }
    return { version: data.version, setupSha256: data.setupSha256, setupSize: Number(data.setupSize) || 0, date: String(data.date ?? "") };
  } catch {
    return null;
  }
}
