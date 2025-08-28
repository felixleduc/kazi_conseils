import Card from "@/components/general/Card";

const values = [
  {
    title: "Accueil",
    text: (
      <>
        J&apos;accompagne les gestionnaires <br className="lg:block hidden" />
        deet les organisations à travers <br className="lg:block hidden" />
        l&apos;évolution du marché afin de créer{" "}
        <br className="lg:block hidden" />
        des environnements de travail <br className="lg:block hidden" />
        collaboratifs, respectueux et efficients.
      </>
    ),
  },
];

export default function ValuesSection() {
  return (
    <>
      <h3 className="font-finalsix text-[30px] text-center font-extrabold mx-auto w-fit pb-16">
        NOS VALEURS ET NOTRE MISSION
      </h3>
      <div className="grid lg:grid-cols-2 mx-auto w-fit text-center lg:text-left gap-16 pb-28 max-w-[1060px]">
        <Card>
          <div className="pb-8">
            <h4 className="text-xl font-bold pb-4">Autonomisation</h4>
            <p>
              Développement d&apos;outils et méthodes qui simplifient{" "}
              <br className="lg:block hidden" />
              les tâches, augmentent l&apos;efficacité et permettent de{" "}
              <br className="lg:block hidden" />
              se concentrer sur ce qui compte vraiment.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold pb-4">Accueil</h4>
            <p>
              Approche bienveillante et respectueuse qui crée{" "}
              <br className="lg:block hidden" />
              un environnement où chacun se sent écouté,{" "}
              <br className="lg:block hidden" />
              soutenu et pleinement intégré.
            </p>
          </div>
        </Card>
        <Card>
          <h4 className="text-xl font-bold pb-4">MISSION</h4>
          <p>
            Notre engagement repose sur des solutions{" "}
            <br className="lg:block hidden" />
            stratégiques, une gestion efficace du changement{" "}
            <br className="lg:block hidden" />
            et une expérience enrichissante pour les employés,{" "}
            <br className="lg:block hidden" />
            gestionnaires et clients. À travers un{" "}
            <br className="lg:block hidden" />
            accompagnement personnalisé, des formations{" "}
            <br className="lg:block hidden" />
            adaptées et des méthodologies éprouvées, nous{" "}
            <br className="lg:block hidden" />
            aidons nos partenaires à relever les défis de{" "}
            <br className="lg:block hidden" />
            demain et à saisir les opportunités de croissance{" "}
            <br className="lg:block hidden" />
            avec assurance et impact.
          </p>
        </Card>
      </div>
    </>
  );
}
