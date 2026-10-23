import { GUIDES, getGuide } from "@/lib/guides";
import { OG_SIZE, renderOgImage } from "@/lib/og-image";
import { SITE } from "@/lib/site";

/** Prévia do link de cada guia. */
export const alt = "Guia de desempenho do NITRO HUB";
export const size = OG_SIZE;
export const contentType = "image/png";

/** Gera as imagens no build, como as páginas. */
export function generateStaticParams() {
  return GUIDES.map(({ slug }) => ({ slug }));
}

export default async function GuideOpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const guide = getGuide((await params).slug);

  return renderOgImage({
    title: guide?.title ?? SITE.title,
    subtitle: guide ? "Passo a passo do jeito manual e com o NITRO HUB, o app grátis em português." : SITE.description,
    footer: ["Guia grátis", "Windows 11 e 10"],
    titleSize: 64,
  });
}
