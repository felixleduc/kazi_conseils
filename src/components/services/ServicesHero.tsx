import HeroSection from "@/components/general/HeroSection";

export default function ServicesHero() {
  return (
    <HeroSection innerClassName="flex flex-col-reverse lg:flex-row justify-between gap-10">
      <div className="flex-1 bg-[#1E1F3F] rounded-4xl h-60 sm:h-80 lg:h-[546px]" />
      <div className="flex-1 border-[1px] border-[#1E1F3F] rounded-4xl min-h-[300px] lg:min-h-[546px]">
        <div className="w-full h-full flex flex-col gap-6 justify-between p-6 sm:p-8 lg:py-10 lg:pl-10 lg:pr-[70px] text-center lg:text-left">
          <div>
            <p className="pb-10">
              Des solutions stratégiques, une <br className="hidden xl:block" />
              gestion efficace du changement et <br className="hidden xl:block" />
              une expérience enrichissante pour les <br className="hidden xl:block" />
              employés, gestionnaires et clients.
            </p>
            <p className="pb-10">
              Nos services s&apos;adaptent à la réalité de <br className="hidden xl:block" />
              chaque organisation et gestionnaire pour <br className="hidden xl:block" />
              maximiser les retombées, toujours avec <br className="hidden xl:block" />
              notre approche humaine caractéristique.
            </p>
          </div>
          <a
            href="#"
            className="mx-auto lg:mx-0 w-fit border-[1px] border-white rounded-4xl py-2 px-4 hover:scale-[102%] hover:border-[#DBE7F6] hover:bg-[#DBE7F6] transition-transform duration-100"
          >
            Consultation gratuite
          </a>
        </div>
      </div>
    </HeroSection>
  );
}
