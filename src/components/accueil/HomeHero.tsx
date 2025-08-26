import HeroSection from "@/components/general/HeroSection";

export default function HomeHero() {
  return (
    <HeroSection innerClassName="flex flex-col gap-10 lg:flex-row lg:justify-between">
      <div className="flex-1 order-2 lg:order-1 bg-[#1E1F3F] rounded-4xl h-[300px] lg:h-[546px]" />
      <div className="flex-1 order-1 lg:order-2 border-[1px] border-[#1E1F3F] rounded-4xl min-h-[300px] lg:min-h-[546px]">
        <div className="w-full h-full flex flex-col gap-4 justify-between py-8 px-6 lg:py-10 lg:pl-10 lg:pr-[70px] text-center lg:text-left items-center lg:items-start">
          <h2 className="font-finalsix text-[32px] lg:text-[40px] font-bold">
            FAIRE LE PONT <br className="hidden min-[1400px]:inline" />
            ENTRE GESTIONNAIRE <br className="hidden min-[1400px]:inline" />
            ET ORGANISATION.
          </h2>
          <p className="text-lg md:text-xl">
            <b>Marie-Dianne Perron</b>, fondatrice de <b>Kazi Conseils</b>,
            <br className="hidden min-[1400px]:inline" />
            est spécialiste du coaching de gestionnaires <br className="hidden min-[1400px]:inline" />
            dans l&apos;action - Pour les leaders de grandes <br className="hidden min-[1400px]:inline" />
            organisations et du secteur public qui ont besoin <br className="hidden min-[1400px]:inline" />
            d&apos;accompagnement stratégique dans l&apos;exécution <br className="hidden min-[1400px]:inline" />
            de leurs plans de transformation ou d&apos;évolution <br className="hidden min-[1400px]:inline" />
            organisationnelle.
          </p>
          <a
            href="#contact-form"
            className="w-fit md:w-fit border-[1px] border-[#1E1F3F] rounded-4xl py-2 px-4 hover:scale-[102%] hover:border-[#DBE7F6] hover:bg-[#DBE7F6] transition-transform duration-100 mx-auto md:mx-0"
          >
            Consultation gratuite
          </a>
        </div>
      </div>
    </HeroSection>
  );
}
