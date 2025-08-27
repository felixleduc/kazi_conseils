import Card from "@/components/general/Card";

const values = [
  {
    title: "Accueil",
    text: (
      <>
        J&apos;accompagne les gestionnaires <br />
        deet les organisations à travers <br />
        l&apos;évolution du marché afin de créer <br />
        des environnements de travail <br />
        collaboratifs, respectueux et efficients.
      </>
    ),
  },
  {
    title: "Autonomisation",
    text: (
      <>
        Je propulse les gestionnaires vers <br />
        l&apos;innovation et l&apos;autonomie à travers <br />
        le déploiement de leurs plans <br />
        d&apos;exécution et de transformation <br />
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
      <div className="grid grid-cols-2 gap-16 pb-28 max-w-[1060px] mx-auto">
        {values.map((value) => (
          <Card key={value.title}>
            <h4 className="text-xl font-bold pb-4">{value.title}</h4>
            <p>{value.text}</p>
          </Card>
        ))}
      </div>
    </>
  );
}

