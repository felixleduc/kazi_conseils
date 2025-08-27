import ValuesList from "@/components/accueil/ValuesList";

export default function VisionSection() {
  return (
      <div className="max-w-[1060px] mx-auto px-4 flex flex-col gap-10 pb-28 min-[1400px]:flex-row min-[1400px]:justify-between">
        <div className="w-full border-[1px] border-[#1E1F3F] rounded-4xl min-h-[300px] md:max-w-[600px] md:mx-auto min-[1400px]:flex-1 min-[1400px]:min-h-[480px]">
          <div className="w-full h-full flex flex-col gap-4 justify-between py-6 px-6 text-left min-[1400px]:px-10">
            <h4 className="font-finalsix text-3xl font-bold">VISION</h4>
            <p className="pb-6">
              Chez Kazi Conseils, nous aspirons à être un leader reconnu pour <br className="hidden min-[1400px]:inline" />
              le renforcement, la stimulation des compétences et le leadership <br className="hidden min-[1400px]:inline" />
              des individus et des groupes. Nous créons des environnements <br className="hidden min-[1400px]:inline" />
              où l&apos;autonomie, l&apos;innovation et la performance permettent aux <br className="hidden min-[1400px]:inline" />
              organisations de prospérer dans un monde en constante évolution.
            </p>
            <ValuesList />
          </div>
        </div>
        <div className="w-full bg-[#1E1F3F] rounded-4xl h-[300px] md:max-w-[600px] md:mx-auto min-[1400px]:flex-1 min-[1400px]:h-[480px]" />
      </div>
    );
  }

