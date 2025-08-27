import HeroSection from "@/components/general/HeroSection";

export default function HomeHero() {
  return (
    <HeroSection innerClassName="flex flex-col-reverse lg:flex-row justify-between gap-10">
      <div className="flex-1 bg-[#1E1F3F] rounded-4xl h-60 sm:h-80 lg:h-[546px]" />
      <div className="flex-1 border-[1px] border-[#1E1F3F] rounded-4xl min-h-[300px] lg:min-h-[546px]">
        <div className="w-full h-full flex flex-col gap-6 justify-between p-6 sm:p-8 lg:py-10 lg:pl-10 lg:pr-[70px] text-center lg:text-left">
          <h2 className="font-finalsix text-3xl sm:text-[40px] font-bold">
            FAIRE LE PONT <br className="hidden xl:block" />
            ENTRE GESTIONNAIRE <br className="hidden xl:block" />
            ET ORGANISATION.
          </h2>
          <p className="text-xl">
            <b>Marie-Dianne Perron</b>, fondatrice de <b>Kazi Conseils</b>,
            <br className="hidden xl:block" />
            est spécialiste du coaching de gestionnaires <br className="hidden xl:block" />
            dans l&apos;action - Pour les leaders de grandes <br className="hidden xl:block" />
            organisations et du secteur public qui ont besoin <br className="hidden xl:block" />
            d&apos;accompagnement stratégique dans l&apos;exécution <br className="hidden xl:block" />
            de leurs plans de transformation ou d&apos;évolution <br className="hidden xl:block" />
            organisationnelle.
          </p>
          <a
            href="#contact-form"
            className="mx-auto lg:mx-0 w-fit border-[1px] border-[#1E1F3F] rounded-4xl py-2 px-4 hover:scale-[102%] hover:border-[#DBE7F6] hover:bg-[#DBE7F6] transition-transform duration-100"
          >
            Consultation gratuite
          </a>
        </div>
      </div>
    </HeroSection>
  );
}
