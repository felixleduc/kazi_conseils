import Card from "@/components/general/Card";

interface CaseStudyItemProps {
  reverse?: boolean;
}

export default function CaseStudyItem({ reverse = false }: CaseStudyItemProps) {
  const image = <div className="flex-1 bg-[#1E1F3F] rounded-4xl h-[400px]" />;
  const content = (
    <Card className="flex-2 min-h-[400px] pl-10 pr-20 py-6">
      <h2 className="font-finalsix text-[40px] font-bold pb-10">LOREM IPSUM</h2>
      <p className="text-xl">
        <b>Marie-Dianne Perron</b>, fondatrice de <b>Kazi Conseils</b>,
        <br />
        est spécialiste du coaching de gestionnaires dans l&apos;action - Pour
        les leaders de grandes organisations et du secteur public qui ont
        besoin d&apos;accompagnement stratégique dans l&apos;exécution de leurs plans
        de transformation ou d&apos;évolution organisationnelle.
      </p>
    </Card>
  );

  return (
    <div className="flex justify-between gap-10 pb-20">
      {reverse ? (
        <>
          {content}
          {image}
        </>
      ) : (
        <>
          {image}
          {content}
        </>
      )}
    </div>
  );
}

