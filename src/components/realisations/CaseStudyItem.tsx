import Card from "@/components/general/Card";

interface CaseStudyItemProps {
  reverse?: boolean;
}

export default function CaseStudyItem({ reverse = false }: CaseStudyItemProps) {
  const image = (
    <div className="flex-1 bg-[#1E1F3F] rounded-4xl h-[200px] min-[1400px]:h-[400px] w-full" />
  );
  const content = (
    <Card className="flex-2 w-full px-6 py-6 text-center min-[1400px]:px-10 min-[1400px]:pl-10 min-[1400px]:pr-20 min-[1400px]:text-left min-[1400px]:w-auto min-[1400px]:min-h-[400px]">
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
    <div
      className={`flex flex-col items-center gap-6 pb-20 min-[1400px]:gap-10 min-[1400px]:flex-row min-[1400px]:items-stretch ${
        reverse ? "min-[1400px]:flex-row-reverse" : ""
      }`}
    >
      {image}
      {content}
    </div>
  );
}

