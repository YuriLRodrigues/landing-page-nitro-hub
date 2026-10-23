import { SectionHeading } from "@/components/home/section-heading";
import { Container } from "@/components/ui/container";

import { Lock, type LucideIcon, RotateCcw, ShieldCheck, Undo2 } from "lucide-react";

type Point = { title: string; description: string; Icon: LucideIcon };

const POINTS: Point[] = [
  {
    title: "Ajustes com desfazer",
    description: "Cada otimização do Windows tem interruptor e “Restaurar originais”. O que você tirar da inicialização pode voltar em “Restaurar removidos”.",
    Icon: Undo2,
  },
  {
    title: "Modo jogo volta sozinho",
    description: "Telas, resolução e modo térmico voltam ao normal quando o jogo fecha. VOLTAR AO NORMAL desfaz tudo mesmo se o app tiver fechado no meio.",
    Icon: RotateCcw,
  },
  {
    title: "Overclock trancado no modo básico",
    description:
      "O que é de risco alto só libera quando você confirma “Entendo os riscos”. E o overclock vale até reiniciar o PC, a não ser que você peça para reaplicar ao abrir o app.",
    Icon: Lock,
  },
  {
    title: "Segurança do Windows intacta",
    description: "Nada de desligar Defender, VBS, UAC ou Windows Update. As atualizações do app são conferidas pelo SHA-256 antes de instalar.",
    Icon: ShieldCheck,
  },
];

export function SafetySection() {
  return (
    <section aria-labelledby="safety-title" className="border-b border-border bg-card/30 py-20 sm:py-24">
      <Container>
        <SectionHeading
          id="safety-title"
          kicker="Sem susto"
          title="Feito para você poder voltar atrás"
          description="Mexer no PC dá medo quando não dá para desfazer. Por isso o NITRO HUB mostra o que muda e guarda o caminho de volta."
        />
        <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {POINTS.map(({ title, description, Icon }) => (
            <li key={title} className="flex gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-ok/25 bg-ok/10 text-ok">
                <Icon className="size-[18px]" strokeWidth={1.9} aria-hidden />
              </span>
              <div className="min-w-0">
                <h3 className="font-bold text-foreground">{title}</h3>
                <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted-foreground">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
