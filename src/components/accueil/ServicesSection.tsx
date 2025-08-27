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
      <div className="grid grid-cols-1 gap-8 pb-28 md:grid-cols-3 md:gap-16">
        <Card className="mx-auto max-w-[360px] text-center">
          <h4 className="text-xl font-bold pb-4">
            Coaching de gestion <br className="hidden xl:block" />
            dans l&apos;action
          </h4>
          <p>
            J&apos;aide les gestionnaires du terrain <br className="hidden xl:block" />
            avec un accompagnement <br className="hidden xl:block" />
            personnalisé à relever les défis de <br className="hidden xl:block" />
            demain et à saisir les opportunités de <br className="hidden xl:block" />
            croissance avec assurance et impact.
          </p>
        </Card>
        <Card className="mx-auto max-w-[360px] text-center">
          <h4 className="text-xl font-bold pb-4">
            Accompagnement en gestion de changement
          </h4>
          <p>
            J&apos;accompagne les gestionnaires <br className="hidden xl:block" />
            deet les organisations à travers <br className="hidden xl:block" />
            l&apos;évolution du marché afin de créer <br className="hidden xl:block" />
            des environnements de travail <br className="hidden xl:block" />
            collaboratifs, respectueux et efficients.
          </p>
        </Card>
        <Card className="mx-auto max-w-[360px] text-center">
          <h4 className="text-xl font-bold pb-4">
            Plans stratégiques et plans d&apos;exécution
          </h4>
          <p>
            Je propulse les gestionnaires vers <br className="hidden xl:block" />
            l&apos;innovation et l&apos;autonomie à travers <br className="hidden xl:block" />
            le déploiement de leurs plans <br className="hidden xl:block" />
            d&apos;exécution et de transformation <br className="hidden xl:block" />
            organisationnelle.
          </p>
        </Card>
      </div>
    </>
  );
}

