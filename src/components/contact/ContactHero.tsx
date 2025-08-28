import HeroSection from "@/components/general/HeroSection";

export default function ContactHero() {
  return (
    <HeroSection innerClassName="flex min-[1400px]:flex-row flex-col-reverse justify-between gap-10">
      <div className="mx-auto bg-[#1E1F3F] rounded-4xl h-[546px] w-[546px] shrink-0 min-[1400px]:block hidden" />
      <div className="mx-auto w-fit border-[1px] border-[#1E1F3F] rounded-4xl min-[1400px]:min-h-[546px]">
        <div className="w-full h-full py-10 pl-10 pr-10 min-[1400px]:pr-[70px]">
          <div className="mb-10">
            <h2 className="font-finalsix text-[40px] font-bold">
              MARIE-DIANNE PERRON
            </h2>
            <h3 className="text-[30px] font-bold">B.A.A., M.SC</h3>
          </div>
          <p className="text-xl">
            Riche de plusieurs expériences diverses depuis plus de 20 ans,{" "}
            <br className="lg:block hidden" />
            notamment dans des OBNL, chez Desjardins ou encore{" "}
            <br className="lg:block hidden" /> comme chargée de cours à
            l&apos;UQAC, je suis une femme à <br className="lg:block hidden" />{" "}
            l&apos;écoute qui a un sens humain avant tout. Diplômée d&apos;un
            B.A.A. <br className="lg:block hidden" /> au HEC Montréal et
            d&apos;une maîtrise en gestion des organisations{" "}
            <br className="lg:block hidden" /> à l&apos;UQAC, ...
          </p>
        </div>
      </div>
    </HeroSection>
  );
}
