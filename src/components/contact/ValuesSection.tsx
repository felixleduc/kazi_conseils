import Card from "@/components/general/Card";

const values = [
  {
    title: "Accueil",
    text: (
      <>
        J&apos;accompagne les gestionnaires <br className="hidden xl:block" />
        deet les organisations à travers <br className="hidden xl:block" />
        l&apos;évolution du marché afin de créer <br className="hidden xl:block" />
        des environnements de travail <br className="hidden xl:block" />
        collaboratifs, respectueux et efficients.
      </>
    ),
  },
  {
    title: "Autonomisation",
    text: (
      <>
        Je propulse les gestionnaires vers <br className="hidden xl:block" />
        l&apos;innovation et l&apos;autonomie à travers <br className="hidden xl:block" />
        le déploiement de leurs plans <br className="hidden xl:block" />
        d&apos;exécution et de transformation <br className="hidden xl:block" />
        organisationnelle.
      </>
    ),
  },
];

export default function ValuesSection() {
  return (
    <>
      <h3 className="font-finalsix text-[30px] font-extrabold mx-auto w-fit pb-16">
        NOS VALEURS ET NOTRE MISSION
      </h3>
      <div className="grid grid-cols-1 gap-8 pb-28 max-w-[1060px] mx-auto sm:grid-cols-2 sm:gap-16">
        {values.map((value) => (
          <Card key={value.title} className="h-full">
            <h4 className="text-xl font-bold pb-4">{value.title}</h4>
            <p>{value.text}</p>
          </Card>
        ))}
      </div>
    </>
  );
}

