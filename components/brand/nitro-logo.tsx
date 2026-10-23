import Image from "next/image";

import { cn } from "@/lib/utils";
import logo from "@/public/logo.png";

type NitroLogoProps = {
  className?: string;
  /** Tamanho do quadro do logo, em px. */
  size?: number;
};

/** Logo do app (o "N" com a seta) num quadro escuro, como o monograma do portfólio. Decorativo: o nome vem ao lado. */
export function NitroLogo({ className, size = 36 }: NitroLogoProps) {
  return (
    <span
      className={cn(
        "relative isolate grid shrink-0 place-items-center overflow-hidden rounded-[0.65rem] bg-gradient-to-br from-muted/60 via-background to-muted/30 ring-1 ring-white/[0.08]",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.06),inset_0_-1px_0_rgba(0,0,0,0.35)]",
        className,
      )}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <span
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-80"
        style={{ background: "radial-gradient(120% 80% at 30% 0%, color-mix(in oklch, var(--color-primary) 30%, transparent), transparent 62%)" }}
      />
      <Image src={logo} alt="" width={Math.round(size * 0.62)} height={Math.round(size * 0.62)} className="relative" priority />
    </span>
  );
}

export function NitroWordmark({ className }: { className?: string }) {
  return <span className={cn("font-wordmark leading-none font-semibold tracking-[0.06em] text-foreground uppercase", className)}>NITRO HUB</span>;
}
