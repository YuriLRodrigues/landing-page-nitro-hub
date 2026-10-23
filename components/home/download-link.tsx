import { buttonVariants, type ButtonVariantProps } from "@/components/ui/button";

import { LINKS } from "@/lib/links";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";

type DownloadLinkProps = ButtonVariantProps & {
  className?: string;
  label?: string;
};

/** Link direto para o instalador da versão mais recente (NitroHub-Setup.exe). */
export function DownloadLink({ className, label = "Baixar o NITRO HUB", variant = "primary", size = "lg" }: DownloadLinkProps) {
  return (
    <a href={LINKS.download} className={cn(buttonVariants({ variant, size }), className)}>
      <Download aria-hidden className="transition-transform duration-200 group-hover/button:translate-y-0.5" />
      {label}
    </a>
  );
}
