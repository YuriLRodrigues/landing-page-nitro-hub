/** Todos os endereços externos da página num lugar só. */
export const LINKS = {
  /** Sempre o instalador da versão mais recente (release `latest`). */
  download: "https://github.com/YuriLRodrigues/nitro-hub/releases/latest/download/NitroHub-Setup.exe",
  /** Versão e SHA-256 do instalador mais recente (o mesmo arquivo que a atualização do app lê). */
  versionJson: "https://github.com/YuriLRodrigues/nitro-hub/releases/latest/download/version.json",
  /** A mesma release pela API do GitHub, que libera CORS: o navegador confere o hash sem depender do build. */
  latestReleaseApi: "https://api.github.com/repos/YuriLRodrigues/nitro-hub/releases/latest",
  releases: "https://github.com/YuriLRodrigues/nitro-hub/releases",
  /** Repositório público só com os instaladores (o código é privado): README, releases e issues. */
  repo: "https://github.com/YuriLRodrigues/nitro-hub",
  authorGithub: "https://github.com/YuriLRodrigues",
  portfolio: "https://yurilrodrigues.github.io/portfolio-v3/",
  resetExplode: "https://github.com/GustavoReset/ResetExplode",
} as const;

export const AUTHOR = "YuriLRodrigues";
