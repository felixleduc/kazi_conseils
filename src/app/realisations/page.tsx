import HeroSection from "@/components/general/HeroSection";
import Card from "@/components/general/Card";

export default function Realisations() {
  return (
    <>
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
      <div className="bg-[#FAF4ED] rounded-t-[100px] h-fit">
        <div className="px-[60px] py-[100px] mx-auto w-full max-w-[1400px]">
          <h3 className="font-finalsix text-[30px] font-extrabold pb-16">
            ÉTUDE DE CAS
          </h3>
          <div className="flex justify-between gap-10 pb-20">
            <div className="flex-1 bg-[#1E1F3F] rounded-4xl h-[400px]" />
            <Card className="flex-2 min-h-[400px] pl-10 pr-20 py-6">
              <h2 className="font-finalsix text-[40px] font-bold pb-10">
                LOREM IPSUM
              </h2>
              <p className="text-xl">
                <b>Marie-Dianne Perron</b>, fondatrice de <b>Kazi Conseils</b>,
                <br />
                est spécialiste du coaching de gestionnaires dans l&apos;action -
                Pour les leaders de grandes organisations et du secteur public
                qui ont besoin d&apos;accompagnement stratégique dans l&apos;exécution de
                leurs plans de transformation ou d&apos;évolution organisationnelle.
              </p>
            </Card>
          </div>
          <div className="flex justify-between gap-10 pb-20">
            <Card className="flex-2 min-h-[400px] pl-10 pr-20 py-6">
              <h2 className="font-finalsix text-[40px] font-bold pb-10">
                LOREM IPSUM
              </h2>
              <p className="text-xl">
                <b>Marie-Dianne Perron</b>, fondatrice de <b>Kazi Conseils</b>,
                <br />
                est spécialiste du coaching de gestionnaires dans l&apos;action -
                Pour les leaders de grandes organisations et du secteur public
                qui ont besoin d&apos;accompagnement stratégique dans l&apos;exécution de
                leurs plans de transformation ou d&apos;évolution organisationnelle.
              </p>
            </Card>
            <div className="flex-1 bg-[#1E1F3F] rounded-4xl h-[400px]" />
          </div>
          <div className="flex justify-between gap-10 pb-20">
            <div className="flex-1 bg-[#1E1F3F] rounded-4xl h-[400px]" />
            <Card className="flex-2 min-h-[400px] pl-10 pr-20 py-6">
              <h2 className="font-finalsix text-[40px] font-bold pb-10">
                LOREM IPSUM
              </h2>
              <p className="text-xl">
                <b>Marie-Dianne Perron</b>, fondatrice de <b>Kazi Conseils</b>,
                <br />
                est spécialiste du coaching de gestionnaires dans l&apos;action -
                Pour les leaders de grandes organisations et du secteur public
                qui ont besoin d&apos;accompagnement stratégique dans l&apos;exécution de
                leurs plans de transformation ou d&apos;évolution organisationnelle.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

