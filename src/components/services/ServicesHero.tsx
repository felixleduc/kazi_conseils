import HeroSection from "@/components/general/HeroSection";

export default function ServicesHero() {
  return (
    <HeroSection>
      <div className="bg-[#1E1F3F] rounded-4xl flex flex-col md:flex-row h-[300px] md:h-[400px] min-[1400px]:h-[546px] px-6 py-8 md:px-20 md:py-10">
        <div className="flex-1 text-white w-fit h-fit mx-auto my-auto text-center md:text-left">
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
            className="w-fit border-[1px] border-white rounded-4xl py-2 px-4 hover:scale-[102%] hover:border-[#DBE7F6] hover:bg-[#DBE7F6] transition-transform duration-100 mx-auto md:mx-0"
          >
            Consultation gratuite
          </a>
        </div>
        <div className="flex-1 hidden min-[1400px]:block" />
      </div>
    </HeroSection>
  );
}

