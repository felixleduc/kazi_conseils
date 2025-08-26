import HeroSection from "@/components/general/HeroSection";

export default function RealisationsHero() {
  return (
    <HeroSection>
      <div className="bg-[#1E1F3F] rounded-4xl flex flex-col md:flex-row h-[300px] md:h-[400px] min-[1400px]:h-[546px] px-6 py-8 md:px-20 md:py-10">
        <div className="flex-1 text-white w-fit h-fit mx-auto my-auto text-center md:text-left">
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

