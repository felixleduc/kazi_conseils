import HeroSection from "@/components/general/HeroSection";

export default function RealisationsHero() {
  return (
    <HeroSection innerClassName="flex flex-col gap-10 min-[1400px]:flex-row min-[1400px]:justify-between">
      <div className="flex-1 order-1 text-white w-fit h-fit mx-auto my-auto bg-[#1E1F3F] rounded-4xl h-[300px] min-[1400px]:h-[546px] px-6 py-8 min-[1400px]:px-20 min-[1400px]:py-10 text-center min-[1400px]:text-left flex flex-col justify-center">
        <p className="pb-10">
          <b>Kazi Conseils</b> adopte une approche unique, <br className="hidden min-[1400px]:inline" />
          alliant gestion du changement et coaching <br className="hidden min-[1400px]:inline" />
          dans l&apos;action, pour accompagner les <br className="hidden min-[1400px]:inline" />
          individus et les organisations dans un <br className="hidden min-[1400px]:inline" />
          environnement dynamique, en favorisant <br className="hidden min-[1400px]:inline" />
          des transformations durables et le <br className="hidden min-[1400px]:inline" />
          rassemblement des communautés.
        </p>
        <a
          href="#"
          className="w-fit border-[1px] border-white rounded-4xl py-2 px-4 hover:scale-[102%] hover:border-[#DBE7F6] hover:bg-[#DBE7F6] transition-transform duration-100 mx-auto min-[1400px]:mx-0"
        >
          Consultation gratuite
        </a>
      </div>
      <div className="flex-1 order-2 hidden min-[1400px]:block" />
    </HeroSection>
  );
}

