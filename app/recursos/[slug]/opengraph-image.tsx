import { FEATURES, getFeature } from "@/lib/features";
import { OG_SIZE, renderOgImage } from "@/lib/og-image";
import { plainText } from "@/lib/rich-text";
import { SITE } from "@/lib/site";

/** Prévia do link de cada recurso. */
export const alt = "Recurso do NITRO HUB";
export const size = OG_SIZE;
export const contentType = "image/png";

/** Gera as imagens no build, como as páginas. */
export function generateStaticParams() {
  return FEATURES.map(({ slug }) => ({ slug }));
}

export default async function FeatureOpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const feature = getFeature((await params).slug);

  return renderOgImage({
    title: feature?.title ?? SITE.name,
    subtitle: feature ? plainText(feature.summary) : SITE.description,
    footer: ["Grátis", "Windows 11 e 10", "em português"],
    titleSize: 72,
  });
}
