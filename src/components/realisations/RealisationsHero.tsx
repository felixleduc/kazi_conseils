import HeroSection from "@/components/general/HeroSection";

export default function RealisationsHero() {
  return (
    <HeroSection>
      <div className="min-[1400px]:bg-[#1E1F3F] rounded-4xl h-[546px] flex min-[1400px]:flex-row flex-col min-[1400px]:px-20 min-[1400px]:py-10">
        <div className="min-[1400px]:flex-1 min-[1400px]:text-white min-[1400px]:border-none border-[1px] border-[#1E1F3F] min-[1400px]:rounded-none rounded-4xl w-fit h-fit p-10 mx-auto min-[1400px]:my-auto">
          <p className="pb-10">
            <b>Kazi Conseils</b> adopte une approche unique,{" "}
            <br className="lg:block hidden" />
            alliant gestion du changement et coaching{" "}
            <br className="lg:block hidden" />
            dans l&apos;action, pour accompagner les{" "}
            <br className="lg:block hidden" />
            individus et les organisations dans un{" "}
            <br className="lg:block hidden" />
            environnement dynamique, en favorisant{" "}
            <br className="lg:block hidden" />
            des transformations durables et le{" "}
            <br className="lg:block hidden" />
            rassemblement des communautés.
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
