import HeroSection from "@/components/general/HeroSection";

export default function RealisationsHero() {
  return (
    <HeroSection innerClassName="flex flex-col-reverse lg:flex-row justify-between gap-10">
      <div className="flex-1 bg-[#1E1F3F] rounded-4xl h-60 sm:h-80 lg:h-[546px]" />
      <div className="flex-1 border-[1px] border-[#1E1F3F] rounded-4xl min-h-[300px] lg:min-h-[546px]">
        <div className="w-full h-full flex flex-col gap-6 justify-between p-6 sm:p-8 lg:py-10 lg:pl-10 lg:pr-[70px] text-center lg:text-left">
          <p className="pb-10">
            <b>Kazi Conseils</b> adopte une approche unique, <br className="hidden xl:block" />
            alliant gestion du changement et coaching <br className="hidden xl:block" />
            dans l&apos;action, pour accompagner les <br className="hidden xl:block" />
            individus et les organisations dans un <br className="hidden xl:block" />
            environnement dynamique, en favorisant <br className="hidden xl:block" />
            des transformations durables et le <br className="hidden xl:block" />
            rassemblement des communautés.
          </p>
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
