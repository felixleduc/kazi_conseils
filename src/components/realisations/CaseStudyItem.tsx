import Card from "@/components/general/Card";

interface CaseStudyItemProps {
  reverse?: boolean;
}

export default function CaseStudyItem({ reverse = false }: CaseStudyItemProps) {
  return (
    <div
      className={`flex flex-col gap-10 pb-20 md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="flex-1 bg-[#1E1F3F] rounded-4xl h-60 sm:h-80 md:h-[400px]" />
      <Card className="flex-1 min-h-[400px] pl-6 pr-8 md:pl-10 md:pr-20 py-6">
        <h2 className="font-finalsix text-3xl sm:text-[40px] font-bold pb-10">
          LOREM IPSUM
        </h2>
        <p className="text-xl">
          <b>Marie-Dianne Perron</b>, fondatrice de <b>Kazi Conseils</b>,
          <br className="hidden xl:block" />
          est spécialiste du coaching de gestionnaires dans l&apos;action - Pour
          les leaders de grandes organisations et du secteur public qui ont
          besoin d&apos;accompagnement stratégique dans l&apos;exécution de leurs plans
          de transformation ou d&apos;évolution organisationnelle.
        </p>
      </Card>
    </div>
  );
}

