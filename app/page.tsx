import { FaqSection } from "@/components/home/faq-section";
import { FeaturesSection } from "@/components/home/features-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { HeroSection } from "@/components/home/hero-section";
import { InstallSection } from "@/components/home/install-section";
import { PurposeSection } from "@/components/home/purpose-section";
import { RequirementsSection } from "@/components/home/requirements-section";
import { SafetySection } from "@/components/home/safety-section";

import { AUTHOR, LINKS } from "@/lib/links";
import { SITE } from "@/lib/site";
import { getSiteUrl } from "@/lib/site-url";

/** Dados estruturados (schema.org) para buscadores: app gratuito para Windows. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE.name,
  description: SITE.description,
  url: getSiteUrl(),
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Windows 10, Windows 11 (64 bits)",
  inLanguage: "pt-BR",
  downloadUrl: LINKS.download,
  license: "https://opensource.org/licenses/MIT",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
  author: { "@type": "Person", name: AUTHOR, url: LINKS.authorGithub },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <HeroSection />
      <PurposeSection />
      <FeaturesSection />
      <SafetySection />
      <InstallSection />
      <RequirementsSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
