import HeroSection from "@/components/general/HeroSection";

export default function ServicesHero() {
  return (
    <HeroSection>
      <div className="min-[1400px]:bg-[#1E1F3F] rounded-4xl h-[546px] flex min-[1400px]:flex-row flex-col min-[1400px]:px-20 min-[1400px]:py-10">
        <div className="min-[1400px]:flex-1 min-[1400px]:text-white min-[1400px]:border-none border-[1px] border-[#1E1F3F] min-[1400px]:rounded-none rounded-4xl p-10 w-fit h-fit mx-auto min-[1400px]:my-auto">
          <p className="pb-10">
            Des solutions stratégiques, une <br className="lg:block hidden" />
            gestion efficace du changement et <br className="lg:block hidden" />
            une expérience enrichissante pour les{" "}
            <br className="lg:block hidden" />
            employés, gestionnaires et clients.
          </p>
          <p className="pb-10">
            Nos services s&apos;adaptent à la réalité de{" "}
            <br className="lg:block hidden" />
            chaque organisation et gestionnaire pour{" "}
            <br className="lg:block hidden" />
            maximiser les retombées, toujours avec{" "}
            <br className="lg:block hidden" />
            notre approche humaine caractéristique.
          </p>
          <a
            href="#"
            className="w-fit text-sm sm:text-base border-[1px] min-[1400px]:border-white border-[#1E1F3F] rounded-4xl py-2 px-4 hover:scale-[102%] hover:border-[#DBE7F6] hover:bg-[#DBE7F6] transition-transform duration-100"
          >
            Consultation gratuite
          </a>
        </div>
        <div className="min-[1400px]:flex-1" />
      </div>
    </HeroSection>
  );
}
