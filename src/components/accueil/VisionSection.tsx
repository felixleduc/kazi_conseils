import ValuesList from "@/components/accueil/ValuesList";

export default function VisionSection() {
  return (
    <div className="grid grid-cols-1 gap-16 pb-28 lg:grid-cols-2">
      <div className="border-[1px] border-[#1E1F3F] rounded-4xl min-h-[480px]">
        <div className="w-full h-full flex flex-col gap-4 justify-between p-6 sm:p-8 lg:py-6 lg:px-10">
          <h4 className="font-finalsix text-3xl font-bold">VISION</h4>
          <p className="pb-6 text-left">
            Chez Kazi Conseils, nous aspirons à être un leader reconnu pour <br className="hidden xl:block" />
            le renforcement, la stimulation des compétences et le leadership <br className="hidden xl:block" />
            des individus et des groupes. Nous créons des environnements <br className="hidden xl:block" />
            où l&apos;autonomie, l&apos;innovation et la performance permettent aux <br className="hidden xl:block" />
            organisations de prospérer dans un monde en constante évolution.
          </p>
          <ValuesList />
        </div>
      </div>
      <div className="bg-[#1E1F3F] rounded-4xl h-[480px]" />
    </div>
  );
}

