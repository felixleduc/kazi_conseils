import Card from "@/components/general/Card";

export default function ServicesSection() {
  return (
    <>
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
        <Card>
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
        <Card>
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
        <Card>
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

