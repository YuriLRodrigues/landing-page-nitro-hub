import { SectionHeading } from "@/components/home/section-heading";
import { Container } from "@/components/ui/container";

import { Activity, Gamepad2, type LucideIcon, SearchCheck, Zap } from "lucide-react";

type Benefit = { title: string; description: string; Icon: LucideIcon };

const BENEFITS: Benefit[] = [
  {
    title: "Ver o que está acontecendo",
    description: "FPS, temperatura e uso da CPU e da GPU ao vivo: por cima do jogo, no ícone perto do relógio ou no celular.",
    Icon: Activity,
  },
  {
    title: "Deixar o PC pronto para jogar",
    description: "O Modo jogo fecha o que pesa em segundo plano, ajusta tela e energia e desfaz tudo quando o jogo fecha.",
    Icon: Gamepad2,
  },
  {
    title: "Ganhar desempenho sem susto",
    description: "Otimizações do Windows com botão de desfazer e overclock da GPU com o risco de cada ajuste marcado.",
    Icon: Zap,
  },
  {
    title: "Descobrir o que está errado",
    description: "Engasgos, gargalo, saúde dos discos e ligação PCIe: o app aponta o problema e diz o que fazer.",
    Icon: SearchCheck,
  },
];

const AUDIENCES = [
  { who: "Quem joga no PC", detail: "de mesa ou notebook gamer — o Modo jogo foi pensado para notebooks como o Dell G15." },
  { who: "Quem gosta de entender o hardware", detail: "fichas no estilo CPU-Z e GPU-Z, benchmarks e stress test com limite de temperatura." },
  { who: "Quem mexe com Arduino e ESP32", detail: "portas COM presas e drivers seriais (CH340, CP2102, FTDI) resolvidos." },
];

export function PurposeSection() {
  return (
    <section id="para-que-serve" aria-labelledby="purpose-title" className="border-b border-border py-20 sm:py-24">
      <Container>
        <SectionHeading
          id="purpose-title"
          kicker="Para que serve"
          title="Menos programas abertos, mais tempo jogando"
          description="O NITRO HUB junta num app, em português, o que normalmente pede vários: no estilo de ferramentas que você talvez já conheça, como Afterburner, CPU-Z, GPU-Z e LatencyMon."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {BENEFITS.map(({ title, description, Icon }) => (
            <li
              key={title}
              className="group relative flex gap-4 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card via-card/70 to-background p-5 ring-1 ring-white/[0.03] transition-[border-color,box-shadow] duration-300 ring-inset hover:border-primary/35 hover:shadow-[0_14px_44px_-18px_color-mix(in_oklch,var(--color-primary)_32%,transparent)] sm:p-6"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary-soft">
                <Icon className="size-5" strokeWidth={1.75} aria-hidden />
              </span>
              <div className="min-w-0">
                <h3 className="text-lg font-bold tracking-tight text-foreground">{title}</h3>
                <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted-foreground">{description}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-2xl border border-border bg-card/50 p-5 sm:p-6">
          <h3 className="font-mono text-[11px] font-semibold tracking-[0.2em] text-primary-soft uppercase">Para quem é</h3>
          <ul className="mt-4 grid gap-4 md:grid-cols-3 md:gap-6">
            {AUDIENCES.map(({ who, detail }) => (
              <li key={who} className="text-[0.9375rem] leading-relaxed text-muted-foreground">
                <strong className="block font-semibold text-foreground">{who}</strong>
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
