import RealisationsHero from "@/components/realisations/RealisationsHero";
import CaseStudiesSection from "@/components/realisations/CaseStudiesSection";
import ContentSection from "@/components/general/ContentSection";

export default function Realisations() {
  return (
    <>
      <RealisationsHero />
      <ContentSection>
        <CaseStudiesSection />
      </ContentSection>
    </>
  );
}

