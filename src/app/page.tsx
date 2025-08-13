import ThreeSteps from "@/components/accueil/ThreeSteps";
import ValuesList from "@/components/accueil/ValuesList";
import ContactForm from "@/components/general/ContactForm";

export default function Home() {
  return (
    <>
      <div className="bg-[url('../../public/images/background.png')] bg-cover bg-center bg-fixed -mb-[100px]">
        <div className="p-[60px] mx-auto w-full max-w-[1400px] flex justify-between gap-10 pb-60">
          <div className="flex-1 bg-[#1E1F3F] rounded-4xl h-[546px]"></div>
          <div className="flex-1 border-[1px] border-[#1E1F3F] rounded-4xl min-h-[546px]">
            <div className="w-full h-full flex flex-col gap-4 justify-between py-10 pl-10 pr-[70px]">
              <h2 className="font-finalsix text-[40px] font-bold">
                FAIRE LE PONT <br />
                ENTRE GESTIONNAIRE <br />
                ET ORGANISATION.
              </h2>
              <p className="text-xl">
                <b>Marie-Dianne Perron</b>, fondatrice de <b>Kazi Conseils</b>,
                <br />
                est spécialiste du coaching de gestionnaires <br />
                dans l&apos;action - Pour les leaders de grandes <br />
                organisations et du secteur public qui ont besoin <br />
                d&apos;accompagnement stratégique dans l&apos;exécution <br />
                de leurs plans de transformation ou d&apos;évolution <br />
                organisationnelle.
              </p>
              <a
                href="#"
                className="w-fit border-[1px] border-[#1E1F3F] rounded-4xl py-2 px-4 hover:scale-[102%] hover:border-[#DBE7F6] hover:bg-[#DBE7F6] transition-transform duration-100"
              >
                Consultation gratuite
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FAF4ED] rounded-t-[100px] h-fit">
        <div className="px-[60px] py-[100px] mx-auto w-full max-w-[1400px]">
          <div className="flex flex-col gap-2 items-center pb-16">
            <h3 className="font-finalsix text-[30px] font-bold">
              NAVIGUER ENTRE STRATÉGIE, EXÉCUTION ET HUMAIN.
            </h3>
            <p>
              Des solutions sur mesure adaptées aux besoins spécifiques de
              chaque organisation et gestionnaire.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-16 pb-28">
            <div className="rounded-4xl bg-white px-10 py-6 drop-shadow-xl">
              <h4 className="text-xl font-bold pb-4">
                Coaching de gestion <br />
                dans l&apos;action
              </h4>
              <p>
                J&apos;aide les gestionnaires du terrain <br />
                avec un accompagnement <br />
                personnalisé à relever les défis de <br />
                demain et à saisir les opportunités de <br />
                croissance avec assurance et impact.
              </p>
            </div>
            <div className="rounded-4xl bg-white px-10 py-6 drop-shadow-xl">
              <h4 className="text-xl font-bold pb-4">
                Accompagnement en gestion de changement
              </h4>
              <p>
                J&apos;accompagne les gestionnaires <br />
                deet les organisations à travers <br />
                l&apos;évolution du marché afin de créer <br />
                des environnements de travail <br />
                collaboratifs, respectueux et efficients.
              </p>
            </div>
            <div className="rounded-4xl bg-white px-10 py-6 drop-shadow-xl">
              <h4 className="text-xl font-bold pb-4">
                Plans stratégiques et plans d&apos;exécution
              </h4>
              <p>
                Je propulse les gestionnaires vers <br />
                l&apos;innovation et l&apos;autonomie à travers <br />
                le déploiement de leurs plans <br />
                d&apos;exécution et de transformation <br />
                organisationnelle.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-16 pb-28">
            <ThreeSteps />
          </div>
          <div className="flex justify-between gap-10 pb-28">
            <div className="flex-1 border-[1px] border-[#1E1F3F] rounded-4xl min-h-[480px]">
              <div className="w-full h-full flex flex-col gap-4 justify-between py-6 px-10">
                <h4 className="font-finalsix text-3xl font-bold">VISION</h4>
                <p className="pb-6">
                  Chez Kazi Conseils, nous aspirons à être un leader reconnu
                  pour <br />
                  le renforcement, la stimulation des compétences et le
                  leadership <br />
                  des individus et des groupes. Nous créons des environnements{" "}
                  <br />
                  où l&apos;autonomie, l&apos;innovation et la performance
                  permettent aux <br />
                  organisations de prospérer dans un monde en constante
                  évolution.
                </p>
                <ValuesList />
              </div>
            </div>
            <div className="flex-1 bg-[#1E1F3F] rounded-4xl h-[480px]"></div>
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
