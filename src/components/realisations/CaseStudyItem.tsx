import Card from "@/components/general/Card";
import clsx from "clsx";

interface CaseStudyItemProps {
  reverse?: boolean;
}

export default function CaseStudyItem({ reverse = false }: CaseStudyItemProps) {
  const image = (
    <div className="bg-[#1E1F3F] rounded-4xl sm:h-[400px] sm:w-[400px] h-[300px] w-[300px] mx-auto shrink-0" />
  );
  const content = (
    <Card className="min-h-[400px] min-[1052px]:!w-full sm:w-[400px] w-[300px] pl-10 min-[1052px]:pr-20 py-6">
      <h2 className="font-finalsix text-[40px] font-bold pb-10">LOREM IPSUM</h2>
      <p className="text-xl">
        <b>Marie-Dianne Perron</b>, fondatrice de <b>Kazi Conseils</b>, est
        spécialiste du coaching de gestionnaires dans l&apos;action - Pour les
        leaders de grandes organisations et du secteur public qui ont besoin
        d&apos;accompagnement stratégique dans l&apos;exécution de leurs plans
        de transformation ou d&apos;évolution organisationnelle.
      </p>
    </Card>
  );

  return (
    <div
      className={clsx(
        "flex justify-between w-fit mx-auto min-[1052px]:flex-row gap-10 pb-20",
        reverse ? "flex-col" : "flex-col-reverse"
      )}
    >
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
