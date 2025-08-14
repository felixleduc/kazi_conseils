import HomeHero from "@/components/accueil/HomeHero";
import ServicesSection from "@/components/accueil/ServicesSection";
import StepsSection from "@/components/accueil/StepsSection";
import VisionSection from "@/components/accueil/VisionSection";
import ContactForm from "@/components/general/ContactForm";

export default function Home() {
  return (
    <>
      <HomeHero />
      <div className="bg-[#FAF4ED] rounded-t-[100px] h-fit">
        <div className="px-[60px] py-[100px] mx-auto w-full max-w-[1400px]">
          <ServicesSection />
          <StepsSection />
          <VisionSection />
          <ContactForm />
        </div>
      </div>
    </>
  );
}

