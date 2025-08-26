import HeroSection from "@/components/general/HeroSection";

export default function ServicesHero() {
  return (
    <HeroSection>
      <div className="bg-[#1E1F3F] rounded-4xl h-[546px] flex px-20 py-10">
        <div className="flex-1 text-white w-fit h-fit mx-auto my-auto">
          <p className="pb-10">
            Des solutions stratégiques, une <br className="hidden min-[1400px]:inline" />
            gestion efficace du changement et <br className="hidden min-[1400px]:inline" />
            une expérience enrichissante pour les <br className="hidden min-[1400px]:inline" />
            employés, gestionnaires et clients.
          </p>
          <p className="pb-10">
            Nos services s&apos;adaptent à la réalité de <br className="hidden min-[1400px]:inline" />
            chaque organisation et gestionnaire pour <br className="hidden min-[1400px]:inline" />
            maximiser les retombées, toujours avec <br className="hidden min-[1400px]:inline" />
            notre approche humaine caractéristique.
          </p>
          <a
            href="#"
            className="w-fit border-[1px] border-white rounded-4xl py-2 px-4 hover:scale-[102%] hover:border-[#DBE7F6] hover:bg-[#DBE7F6] transition-transform duration-100"
          >
            Consultation gratuite
          </a>
        </div>
        <div className="flex-1" />
      </div>
    </HeroSection>
  );
}

