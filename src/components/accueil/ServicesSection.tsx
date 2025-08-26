import Card from "@/components/general/Card";

export default function ServicesSection() {
  return (
    <>
      <div className="flex flex-col gap-2 items-center pb-16">
        <h3 className="font-finalsix text-[30px] font-bold text-center">
          NAVIGUER ENTRE STRATÉGIE, EXÉCUTION ET HUMAIN.
        </h3>
        <p className="text-center">
          Des solutions sur mesure adaptées aux besoins spécifiques de
          chaque organisation et gestionnaire.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 pb-28 px-4 place-items-center md:gap-10 md:px-16 lg:grid-cols-3 lg:gap-16 lg:px-0 lg:place-items-stretch">
        <Card className="max-w-xs px-12 md:max-w-md md:px-20 md:text-center lg:max-w-full lg:px-10 lg:text-left">
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
        </Card>
        <Card className="max-w-xs px-12 md:max-w-md md:px-20 md:text-center lg:max-w-full lg:px-10 lg:text-left">
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
        </Card>
        <Card className="max-w-xs px-12 md:max-w-md md:px-20 md:text-center lg:max-w-full lg:px-10 lg:text-left">
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
        </Card>
      </div>
    </>
  );
}

