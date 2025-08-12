"use client";

export default function Home() {
  return (
    <div className="bg-[#FFFDFA] text-[#1E1F3F]">
      <main className="flex flex-col">
        <div className="px-[60px] py-[30px] mx-auto w-full max-w-[1400px] flex justify-between gap-10 pb-16">
          <div className="flex-1 bg-[#1E1F3F] rounded-4xl h-[546px]"></div>
          <div className="flex-1 border-2 border-[#1E1F3F] rounded-4xl min-h-[546px]">
            <div className="w-full h-full flex flex-col gap-4 justify-between py-10 pl-10 pr-[90px]">
              <h2 className="text-[40px] font-bold">
                FAIRE LE PONT <br />
                ENTRE GESTIONNAIRE <br />
                ET ORGANISATION.
              </h2>
              <p className="text-xl">
                <b>Marie-Dianne Perron</b>, fondatrice de <b>Kazi Conseils</b>,
                est spécialiste du coaching de gestionnaires dans l&apos;action
                - Pour les leaders de grandes organisations et du secteur public
                qui ont besion d&apos;accompagnement stratégique dans
                l&apos;exécution de leurs plans de transformation ou
                d&apos;évolution organisationnelle.
              </p>
              <a
                href="#"
                className="font-semibold text-[#1E1F3F] transition-colors border-2 border-[#1E1F3F] rounded-4xl py-2 px-4 hover:border-[#DBE7F6] hover:bg-[#DBE7F6] w-fit"
              >
                Consultation gratuite
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[#FAF4ED] rounded-t-[100px] h-fit">
          <div className="px-[60px] py-[100px] mx-auto w-full max-w-[1400px]">
            <div className="flex flex-col gap-2 items-center pb-16">
              <h3 className="text-[30px] font-bold">
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
              <div className="flex items-center gap-6">
                <p className="text-6xl font-bold text-white rounded-full px-[22px] py-2 bg-[#1E1F3F]">
                  1
                </p>
                <p>
                  Coaching ancré dans la <br />
                  réalité organisationnelle
                </p>
              </div>
              <div className="flex items-center gap-6">
                <p className="text-6xl font-bold text-white rounded-full px-[22px] py-2 bg-[#1E1F3F]">
                  2
                </p>
                <p>
                  Expérience issue du <br />
                  terrain mise à votre profit
                </p>
              </div>
              <div className="flex items-center gap-6">
                <p className="text-6xl font-bold text-white rounded-full px-[22px] py-2 bg-[#1E1F3F]">
                  3
                </p>
                <p>
                  Souplesse pour accompagner <br />
                  les gestionnaires intermédiaires
                </p>
              </div>
            </div>
            <div className="flex justify-between gap-10 pb-28">
              <div className="flex-1 border-2 border-[#1E1F3F] rounded-4xl min-h-[480px]">
                <div className="w-full h-full flex flex-col gap-4 justify-between py-6 px-10">
                  <h4 className="text-3xl font-bold">VISION</h4>
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
                  <div className="flex flex-wrap justify-between items-baseline">
                    <h4 className="text-3xl font-bold">VALEURS</h4>
                    <p className="text-xl border-2 border-[#1E1F3F] rounded-4xl px-6 py-2 mb-6">
                      Développement
                    </p>
                    <p className="text-xl border-2 border-[#1E1F3F] rounded-4xl px-6 py-2 mb-6">
                      Humanité
                    </p>
                    <p className="text-xl border-2 border-[#1E1F3F] rounded-4xl px-6 py-2 mb-6">
                      Accueil
                    </p>
                    <p className="text-xl border-2 border-[#1E1F3F] rounded-4xl px-6 py-2 mb-6">
                      Bienveillance
                    </p>
                    <p className="text-xl border-2 border-[#1E1F3F] rounded-4xl px-6 py-2 mb-6">
                      Accompagnement
                    </p>
                    <p className="text-xl border-2 border-[#1E1F3F] rounded-4xl px-6 py-2 mb-6">
                      Collaboration
                    </p>
                    <p className="text-xl border-2 border-[#1E1F3F] rounded-4xl px-6 py-2 mb-6">
                      Écoute
                    </p>
                    <p className="text-xl border-2 border-[#1E1F3F] rounded-4xl px-6 py-2 mb-6">
                      Autonomisation
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-[#1E1F3F] rounded-4xl h-[480px]"></div>
            </div>
            <div className="rounded-4xl bg-white px-18 py-8 drop-shadow-xl max-w-[1060px] mx-auto">
              <div className="flex flex-col gap-2 items-center pb-12">
                <h3 className="text-[30px] font-bold">
                  NAVIGUER ENTRE STRATÉGIE, EXÉCUTION ET HUMAIN.
                </h3>
                <p>Planifions votre consultation gratuite dès maintenant</p>
              </div>
              <form className="flex flex-col gap-10 items-center">
                <div className="flex gap-8 justify-between w-full">
                  <input
                    className="w-1/2 border-b-2 border-[#1E1F3F] placeholder:text-xl placeholder:text-[#1E1F3F] placeholder:font-bold"
                    type="text"
                    placeholder="nom complet"
                  />
                  <input
                    className="w-1/2 border-b-2 border-[#1E1F3F] placeholder:text-xl placeholder:text-[#1E1F3F] placeholder:font-bold"
                    type="email"
                    placeholder="email"
                  />
                </div>
                <textarea
                  rows={1}
                  className="w-full border-b-2 border-[#1E1F3F] placeholder:text-xl placeholder:text-[#1E1F3F] placeholder:font-bold resize-none overflow-hidden"
                  placeholder="message"
                  onInput={(e: React.FormEvent<HTMLTextAreaElement>) => {
                    const target = e.currentTarget;
                    target.style.height = "auto";
                    target.style.height = target.scrollHeight + "px";
                  }}
                ></textarea>
                <button className="font-semibold text-[#1E1F3F] transition-colors border-2 border-[#1E1F3F] rounded-4xl py-2 px-16 hover:border-[#DBE7F6] hover:bg-[#DBE7F6] w-fit">
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
