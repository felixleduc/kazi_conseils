import ValuesList from "@/components/accueil/ValuesList";

export default function VisionSection() {
  return (
      <div className="flex flex-col gap-10 pb-28 lg:flex-row lg:justify-between">
        <div className="flex-1 border-[1px] border-[#1E1F3F] rounded-4xl min-h-[300px] lg:min-h-[480px]">
          <div className="w-full h-full flex flex-col gap-4 justify-between py-6 px-6 text-left lg:px-10">
            <h4 className="font-finalsix text-3xl font-bold">VISION</h4>
            <p className="pb-6">
              Chez Kazi Conseils, nous aspirons à être un leader reconnu pour <br />
              le renforcement, la stimulation des compétences et le leadership <br />
              des individus et des groupes. Nous créons des environnements <br />
              où l&apos;autonomie, l&apos;innovation et la performance permettent aux <br />
              organisations de prospérer dans un monde en constante évolution.
            </p>
            <ValuesList />
          </div>
        </div>
        <div className="flex-1 bg-[#1E1F3F] rounded-4xl h-[300px] lg:h-[480px]" />
      </div>
    );
  }

