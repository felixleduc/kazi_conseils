import HeroSection from "@/components/general/HeroSection";

export default function HomeHero() {
  return (
    <HeroSection innerClassName="flex flex-col-reverse min-[1400px]:flex-row justify-between gap-10">
      <div className="min-[1400px]:flex-1 mx-auto bg-[#1E1F3F] rounded-4xl h-[546px] w-[546px]" />
      <div className="min-[1400px]:flex-1 w-fit mx-auto border-[1px] border-[#1E1F3F] rounded-4xl min-h-[546px]">
        <div className="flex flex-col gap-4 justify-between py-10 pl-10 pr-[70px]">
          <h2 className="font-finalsix text-[40px] font-bold">
            FAIRE LE PONT <br />
            ENTRE GESTIONNAIRE <br />
            ET ORGANISATION.
          </h2>
          <p className="text-xl">
            <b>Marie-Dianne Perron</b>, fondatrice de <b>Kazi Conseils</b>,
            <br />
            est spécialiste du coaching de gestionnaires <br />
            dans l&apos;action - Pour les leaders de grandes <br />
            organisations et du secteur public qui ont besoin <br />
            d&apos;accompagnement stratégique dans l&apos;exécution <br />
            de leurs plans de transformation ou d&apos;évolution <br />
            organisationnelle.
          </p>
          <a
            href="#contact-form"
            className="w-fit border-[1px] border-[#1E1F3F] rounded-4xl py-2 px-4 hover:scale-[102%] hover:border-[#DBE7F6] hover:bg-[#DBE7F6] transition-transform duration-100"
          >
            Consultation gratuite
          </a>
        </div>
      </div>
    </HeroSection>
  );
}
