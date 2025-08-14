import ContactHero from "@/components/contact/ContactHero";
import ValuesSection from "@/components/contact/ValuesSection";
import ContentSection from "@/components/general/ContentSection";
import ContactForm from "@/components/general/ContactForm";

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContentSection>
        <ValuesSection />
        <ContactForm />
      </ContentSection>
    </>
  );
}

