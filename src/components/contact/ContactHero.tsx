import HeroSection from "@/components/general/HeroSection";

export default function ContactHero() {
  return (
    <HeroSection innerClassName="flex justify-between gap-10">
      <div className="flex-2 bg-[#1E1F3F] rounded-4xl h-[546px]" />
      <div className="flex-3 border-[1px] border-[#1E1F3F] rounded-4xl min-h-[546px]">
        <div className="w-full h-full py-10 pl-10 pr-[70px]">
          <div className="mb-10">
            <h2 className="font-finalsix text-[40px] font-bold">
              MARIE-DIANNE PERRON
            </h2>
            <h3 className="text-[30px] font-bold">B.A.A., M.SC</h3>
          </div>
          <p className="text-xl">
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

