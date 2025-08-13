import ContactForm from "@/components/general/ContactForm";

export default function Contact() {
  return (
    <>
      <div className="bg-[url('../../public/images/background.png')] bg-cover bg-center bg-fixed -mb-[100px]">
        <div className="p-[60px] mx-auto w-full max-w-[1400px] flex justify-between gap-10 pb-60">
          <div className="flex-2 bg-[#1E1F3F] rounded-4xl h-[546px]"></div>
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
                de cours à l&apos;UQAC, je suis une femme à l&apos;écoute qui a
                un sens humain avant tout. Diplômée d&apos;un B.A.A. au HEC
                Montréal et d&apos;une maîtrise en gestion des organisations à
                l&apos;UQAC, ...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FAF4ED] rounded-t-[100px] h-fit">
        <div className="px-[60px] py-[100px] mx-auto w-full max-w-[1400px]">
          <h3 className="font-finalsix text-[30px] font-extrabold mx-auto w-fit pb-16">
            NOS VALEURS ET NOTRE MISSION
          </h3>
          <div className="grid grid-cols-2 gap-16 pb-28 max-w-[1060px] mx-auto">
            <div className="rounded-4xl bg-white px-10 py-6 drop-shadow-xl">
              <h4 className="text-xl font-bold pb-4">Accueil</h4>
              <p>
                J&apos;accompagne les gestionnaires <br />
                deet les organisations à travers <br />
                l&apos;évolution du marché afin de créer <br />
                des environnements de travail <br />
                collaboratifs, respectueux et efficients.
              </p>
            </div>
            <div className="rounded-4xl bg-white px-10 py-6 drop-shadow-xl">
              <h4 className="text-xl font-bold pb-4">Autonomisation</h4>
              <p>
                Je propulse les gestionnaires vers <br />
                l&apos;innovation et l&apos;autonomie à travers <br />
                le déploiement de leurs plans <br />
                d&apos;exécution et de transformation <br />
                organisationnelle.
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
