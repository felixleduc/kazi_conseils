import HeroSection from "@/components/general/HeroSection";

export default function RealisationsHero() {
  return (
    <HeroSection>
      <div className="bg-[#1E1F3F] rounded-4xl h-[546px] flex px-20 py-10">
        <div className="flex-1 text-white w-fit h-fit mx-auto my-auto">
          <p className="pb-10">
            <b>Kazi Conseils</b> adopte une approche unique, <br />
            alliant gestion du changement et coaching <br />
            dans l&apos;action, pour accompagner les <br />
            individus et les organisations dans un <br />
            environnement dynamique, en favorisant <br />
            des transformations durables et le <br />
            rassemblement des communautés.
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

