import Card from "@/components/general/Card";

const values = [
  {
    title: "Accueil",
    text: (
      <>
        J&apos;accompagne les gestionnaires <br className="hidden min-[1400px]:inline" />
        deet les organisations à travers <br className="hidden min-[1400px]:inline" />
        l&apos;évolution du marché afin de créer <br className="hidden min-[1400px]:inline" />
        des environnements de travail <br className="hidden min-[1400px]:inline" />
        collaboratifs, respectueux et efficients.
      </>
    ),
  },
  {
    title: "Autonomisation",
    text: (
      <>
        Je propulse les gestionnaires vers <br className="hidden min-[1400px]:inline" />
        l&apos;innovation et l&apos;autonomie à travers <br className="hidden min-[1400px]:inline" />
        le déploiement de leurs plans <br className="hidden min-[1400px]:inline" />
        d&apos;exécution et de transformation <br className="hidden min-[1400px]:inline" />
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

