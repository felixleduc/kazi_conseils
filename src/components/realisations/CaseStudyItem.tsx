import Card from "@/components/general/Card";

interface CaseStudyItemProps {
  reverse?: boolean;
}

export default function CaseStudyItem({ reverse = false }: CaseStudyItemProps) {
  const image = (
    <div
      className={`flex-1 bg-[#1E1F3F] rounded-4xl h-[200px] md:h-[300px] min-[1400px]:h-[400px] w-full order-2 ${
        reverse ? "md:order-2" : "md:order-1"
      }`}
    />
  );
  const content = (
    <Card
      className={`flex-2 w-full px-6 py-6 text-center md:px-10 md:pl-10 md:pr-20 md:text-left md:w-auto md:min-h-[300px] min-[1400px]:min-h-[400px] order-1 ${
        reverse ? "md:order-1" : "md:order-2"
      }`}
    >
      <h2 className="font-finalsix text-[32px] min-[1400px]:text-[40px] font-bold pb-10">LOREM IPSUM</h2>
      <p className="text-lg min-[1400px]:text-xl">
        <b>Marie-Dianne Perron</b>, fondatrice de <b>Kazi Conseils</b>,
        <br className="hidden min-[1400px]:inline" />
        est spécialiste du coaching de gestionnaires dans l&apos;action - Pour
        les leaders de grandes organisations et du secteur public qui ont
        besoin d&apos;accompagnement stratégique dans l&apos;exécution de leurs plans
        de transformation ou d&apos;évolution organisationnelle.
      </p>
    </Card>
  );

  return (
    <div className="flex flex-col items-center gap-6 pb-20 md:gap-10 md:flex-row md:items-stretch">
      {content}
      {image}
    </div>
  );
}

