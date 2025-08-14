import HomeHero from "@/components/accueil/HomeHero";
import ServicesSection from "@/components/accueil/ServicesSection";
import StepsSection from "@/components/accueil/StepsSection";
import VisionSection from "@/components/accueil/VisionSection";
import ContentSection from "@/components/general/ContentSection";
import ContactForm from "@/components/general/ContactForm";

export default function Home() {
  return (
    <>
      <HomeHero />
      <ContentSection>
        <ServicesSection />
        <StepsSection />
        <VisionSection />
        <ContactForm />
      </ContentSection>
    </>
  );
}

