import { FEATURES, getFeature } from "@/lib/features";
import { renderOgImage } from "@/lib/og-image";
import { plainText } from "@/lib/rich-text";
import { SITE } from "@/lib/site";

/** Prévia do link de cada recurso, gerada no build como as páginas. */
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return FEATURES.map(({ slug }) => ({ slug }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const feature = getFeature((await params).slug);

  return renderOgImage({
    title: feature?.title ?? SITE.name,
    subtitle: feature ? plainText(feature.summary) : SITE.description,
    footer: ["Grátis", "Windows 11 e 10", "em português"],
    titleSize: 72,
  });
}
