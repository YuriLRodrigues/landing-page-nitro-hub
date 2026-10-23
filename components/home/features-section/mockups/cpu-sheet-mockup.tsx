import { MockupFrame } from "@/components/home/mockup-frame";

import { Check } from "lucide-react";

const SPECS = [
  ["Nome", "AMD Ryzen 7 7700X"],
  ["Codinome", "Raphael"],
  ["Litografia", "5 nm + 6 nm de E/S"],
  ["Núcleos", "8 núcleos · 16 threads"],
  ["Clock agora", "5.400 MHz · × 54"],
  ["Cache L3", "32 MB"],
] as const;

const INSTRUCTIONS = ["SSE4.2", "AVX", "AVX2", "AVX-512", "AES", "SHA"];

const PCIE_LINKS = [
  { device: "Placa de vídeo", link: "PCIe 4.0 x16" },
  { device: "SSD NVMe", link: "PCIe 4.0 x4" },
];

export function CpuSheetMockup() {
  return (
    <MockupFrame
      title="Sistema › Processador"
      caption="Ilustração da ficha do processador e do barramento PCIe: codinome, litografia, clock, instruções e a ligação da placa de vídeo e do SSD."
    >
      <dl className="grid grid-cols-[5.5rem_1fr] gap-x-3 gap-y-2 text-xs sm:grid-cols-[6.5rem_1fr]">
        {SPECS.map(([label, value]) => (
          <div key={label} className="contents">
            <dt className="text-muted-foreground">{label}</dt>
            <dd className="font-mono text-foreground tabular-nums">{value}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-4 font-mono text-[9px] font-bold tracking-[0.18em] text-muted-foreground">INSTRUÇÕES</p>
      <ul className="mt-2 flex flex-wrap gap-1.5">
        {INSTRUCTIONS.map((name) => (
          <li key={name} className="flex items-center gap-1 rounded-md border border-border bg-background/60 px-1.5 py-0.5 font-mono text-[10px] text-foreground/90">
            <Check className="size-3 text-ok" />
            {name}
          </li>
        ))}
      </ul>

      <div className="mt-5 border-t border-border pt-4">
        <p className="font-mono text-[9px] font-bold tracking-[0.18em] text-muted-foreground">BARRAMENTO PCIe</p>
        <ul className="mt-2 space-y-2">
          {PCIE_LINKS.map(({ device, link }) => (
            <li key={device} className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-border bg-background/60 px-3 py-2 text-xs">
              <span className="text-foreground/90">{device}</span>
              <span className="flex items-center gap-2">
                <span className="font-mono text-foreground tabular-nums">{link}</span>
                <span className="rounded bg-ok/10 px-1.5 py-0.5 font-mono text-[9px] font-bold tracking-wider text-ok">NO MÁXIMO</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </MockupFrame>
  );
}
