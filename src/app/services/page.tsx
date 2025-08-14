import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import ContentSection from "@/components/general/ContentSection";

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ContentSection>
        <ServicesList />
      </ContentSection>
    </>
  );
}

