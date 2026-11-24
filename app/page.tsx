import { FaqSection } from "@/components/home/faq-section";
import { FAQ } from "@/components/home/faq-section/faq-data";
import { FeaturesSection } from "@/components/home/features-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { GuidesSection } from "@/components/home/guides-section";
import { HeroSection } from "@/components/home/hero-section";
import { InstallSection } from "@/components/home/install-section";
import { PurposeSection } from "@/components/home/purpose-section";
import { RequirementsSection } from "@/components/home/requirements-section";
import { SafetySection } from "@/components/home/safety-section";
import { JsonLd } from "@/components/seo/json-ld";

import { FEATURES } from "@/lib/features";
import { AUTHOR, LINKS } from "@/lib/links";
import { plainText } from "@/lib/rich-text";
import { SITE } from "@/lib/site";
import { getSiteUrl } from "@/lib/site-url";

/** Dados estruturados (schema.org) para buscadores: o site, o app gratuito para Windows e as perguntas frequentes. */
function homeJsonLd() {
  const base = getSiteUrl();
  const author = { "@type": "Person", "@id": `${base}/#autor`, name: AUTHOR, url: LINKS.authorGithub, sameAs: [LINKS.authorGithub, LINKS.portfolio] };

  return {
    "@context": "https://schema.org",
    "@graph": [
      author,
      {
        "@type": "WebSite",
        "@id": `${base}/#site`,
        name: SITE.name,
        url: base,
        description: SITE.description,
        inLanguage: "pt-BR",
        publisher: { "@id": `${base}/#autor` },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${base}/#app`,
        name: SITE.name,
        description: SITE.description,
        url: base,
        image: `${base}/og.png`,
        applicationCategory: "UtilitiesApplication",
        applicationSubCategory: "Otimização e monitoramento de PC para jogos",
        operatingSystem: "Windows 11, Windows 10 (64 bits)",
        inLanguage: "pt-BR",
        downloadUrl: LINKS.download,
        installUrl: LINKS.download,
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
        featureList: FEATURES.map((f) => f.title),
        keywords: SITE.keywords.join(", "),
        author: { "@id": `${base}/#autor` },
      },
      {
        "@type": "FAQPage",
        "@id": `${base}/#duvidas`,
        mainEntity: FAQ.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: plainText(answer) },
        })),
      },
    ],
  };
}

export default function Home() {
  return (
    <>
      <JsonLd data={homeJsonLd()} />
      <HeroSection />
      <PurposeSection />
      <FeaturesSection />
      <SafetySection />
      <InstallSection />
      <RequirementsSection />
      <GuidesSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
