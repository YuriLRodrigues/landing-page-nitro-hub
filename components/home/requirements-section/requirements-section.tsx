import { SectionHeading } from "@/components/home/section-heading";
import { Container } from "@/components/ui/container";

const REQUIRED = [
  { label: "Sistema", value: "Windows 10 ou 11, de 64 bits" },
  { label: "Permissão", value: "Administrador — o app pede ao abrir" },
  { label: ".NET", value: "Não precisa instalar: já vem dentro do app" },
];

const OPTIONAL = [
  { label: "Temperatura da CPU", value: "Driver PawnIO (o app oferece instalar)" },
  { label: "Overclock da GPU", value: "Placa NVIDIA, de mesa ou de notebook" },
  { label: "Benchmark de ray tracing", value: "RTX 20 ou mais nova, Radeon RX 6000 ou mais nova, ou Intel Arc" },
  { label: "Modos térmicos", value: "Notebooks Dell e Alienware" },
];

function SpecList({ title, items }: { title: string; items: { label: string; value: string }[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card/60 p-5 sm:p-6">
      <h3 className="font-mono text-[11px] font-semibold tracking-[0.2em] text-primary-soft uppercase">{title}</h3>
      <dl className="mt-4 divide-y divide-border">
        {items.map(({ label, value }) => (
          <div key={label} className="grid gap-1 py-3 sm:grid-cols-[11rem_1fr] sm:gap-4">
            <dt className="text-sm font-semibold text-foreground">{label}</dt>
            <dd className="text-sm leading-relaxed text-muted-foreground">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function RequirementsSection() {
  return (
    <section aria-labelledby="requirements-title" className="border-b border-border py-20 sm:py-24">
      <Container>
        <SectionHeading
          id="requirements-title"
          kicker="Requisitos"
          title="O que você precisa"
          description="O básico roda em qualquer PC com Windows 10 ou 11 de 64 bits. Alguns recursos dependem do hardware."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <SpecList title="Para usar" items={REQUIRED} />
          <SpecList title="Para alguns recursos" items={OPTIONAL} />
        </div>
      </Container>
    </section>
  );
}
