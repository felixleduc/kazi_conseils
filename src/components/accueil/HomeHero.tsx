import HeroSection from "@/components/general/HeroSection";

export default function HomeHero() {
  return (
    <HeroSection innerClassName="flex flex-col min-[1400px]:flex-row justify-between gap-10">
      <div className="min-[1400px]:flex-1 mx-auto bg-[#1E1F3F] rounded-4xl sm:h-[546px] w-full p-10 sm:p-0">
        <h2 className="font-finalsix text-3xl text-white font-bold md:hidden block">
          FAIRE LE PONT <br className="sm:hidden block" />
          ENTRE GESTIONNAIRE <br className="sm:hidden block" />
          ET ORGANISATION.
        </h2>
      </div>
      <div className="min-[1400px]:flex-1 w-fit mx-auto border-[1px] border-[#1E1F3F] rounded-4xl sm:min-h-[546px]">
        <div className="flex flex-col gap-4 justify-between py-10 pl-10 pr-[70px]">
          <h2 className="font-finalsix text-[40px] font-bold hidden md:block">
            FAIRE LE PONT <br className="lg:block hidden" />
            ENTRE GESTIONNAIRE <br className="lg:block hidden" />
            ET ORGANISATION.
          </h2>
          <p className="text-xl">
            <b>Marie-Dianne Perron</b>, fondatrice de <b>Kazi Conseils</b>,
            <br className="lg:block hidden" />
            est spécialiste du coaching de gestionnaires{" "}
            <br className="lg:block hidden" />
            dans l&apos;action - Pour les leaders de grandes{" "}
            <br className="lg:block hidden" />
            organisations et du secteur public qui ont besoin{" "}
            <br className="lg:block hidden" />
            d&apos;accompagnement stratégique dans l&apos;exécution{" "}
            <br className="lg:block hidden" />
            de leurs plans de transformation ou d&apos;évolution{" "}
            <br className="lg:block hidden" />
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
