import HeroSection from "@/components/general/HeroSection";

export default function ContactHero() {
  return (
    <HeroSection innerClassName="flex flex-col gap-10 min-[1400px]:flex-row min-[1400px]:justify-between">
      <div className="flex-2 order-2 min-[1400px]:order-1 bg-[#1E1F3F] rounded-4xl h-[300px] min-[1400px]:h-[546px]" />
      <div className="flex-3 order-1 min-[1400px]:order-2 border-[1px] border-[#1E1F3F] rounded-4xl min-h-[300px] min-[1400px]:min-h-[546px]">
        <div className="w-full h-full py-8 px-6 text-center min-[1400px]:py-10 min-[1400px]:pl-10 min-[1400px]:pr-[70px] min-[1400px]:text-left">
          <div className="mb-10">
            <h2 className="font-finalsix text-[32px] min-[1400px]:text-[40px] font-bold">
              MARIE-DIANNE PERRON
            </h2>
            <h3 className="text-[24px] min-[1400px]:text-[30px] font-bold">B.A.A., M.SC</h3>
          </div>
          <p className="text-lg min-[1400px]:text-xl">
            Riche de plusieurs expériences diverses depuis plus de 20 ans,
            notamment dans des OBNL, chez Desjardins ou encore comme chargée
            de cours à l&apos;UQAC, je suis une femme à l&apos;écoute qui a un sens
            humain avant tout. Diplômée d&apos;un B.A.A. au HEC Montréal et d&apos;une
            maîtrise en gestion des organisations à l&apos;UQAC, ...
          </p>
        </div>
      </div>
    </HeroSection>
  );
}

