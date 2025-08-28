import HeroSection from "@/components/general/HeroSection";

export default function ContactHero() {
  return (
    <HeroSection innerClassName="flex min-[1400px]:flex-row flex-col-reverse justify-between gap-10">
      <div className="min-[1400px]:flex-2 mx-auto bg-[#1E1F3F] rounded-4xl h-[546px] w-[546px]" />
      <div className="min-[1400px]:flex-3 mx-auto w-fit border-[1px] border-[#1E1F3F] rounded-4xl min-[1400px]:min-h-[546px]">
        <div className="w-full h-full py-10 pl-10 pr-[70px]">
          <div className="mb-10">
            <h2 className="font-finalsix text-[40px] font-bold">
              MARIE-DIANNE PERRON
            </h2>
            <h3 className="text-[30px] font-bold">B.A.A., M.SC</h3>
          </div>
          <p className="text-xl">
            Riche de plusieurs expériences diverses depuis plus de 20 ans,{" "}
            <br />
            notamment dans des OBNL, chez Desjardins ou encore <br /> comme
            chargée de cours à l&apos;UQAC, je suis une femme à <br />{" "}
            l&apos;écoute qui a un sens humain avant tout. Diplômée d&apos;un
            B.A.A. <br /> au HEC Montréal et d&apos;une maîtrise en gestion des
            organisations <br /> à l&apos;UQAC, ...
          </p>
        </div>
      </div>
    </HeroSection>
  );
}
