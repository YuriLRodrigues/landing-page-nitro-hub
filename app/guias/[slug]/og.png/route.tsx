import { GUIDES, getGuide } from "@/lib/guides";
import { renderOgImage } from "@/lib/og-image";
import { SITE } from "@/lib/site";

/** Prévia do link de cada guia, gerada no build como as páginas. */
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map(({ slug }) => ({ slug }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const guide = getGuide((await params).slug);

  return renderOgImage({
    title: guide?.title ?? SITE.title,
    subtitle: guide ? "Passo a passo do jeito manual e com o NITRO HUB, o app grátis em português." : SITE.description,
    footer: ["Guia grátis", "Windows 11 e 10"],
    titleSize: 64,
  });
}
