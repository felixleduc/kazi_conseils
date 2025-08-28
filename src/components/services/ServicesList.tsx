import Image from "next/image";
import Card from "@/components/general/Card";

const services = [
  {
    icon: "/icons/bousole.jpg",
    title: (
      <>
        Coaching de gestion <br />
        dans l&apos;action
      </>
    ),
  },
  {
    icon: "/icons/fleches.jpg",
    title: (
      <>
        Gestion du changement <br />
        et amélioration continue
      </>
    ),
  },
  {
    icon: "/icons/tete.jpg",
    title: (
      <>
        Développement <br />
        du leadership et coaching
      </>
    ),
  },
  {
    icon: "/icons/bulle.jpg",
    title: (
      <>
        Expérience client <br />
        et expérience employé
      </>
    ),
  },
  {
    icon: "/icons/livres.jpg",
    title: (
      <>
        Formations personnalisées <br />
        et soutien professionnel
      </>
    ),
  },
];

export default function ServicesList() {
  return (
    <>
      <h3 className="font-finalsix text-[30px] min-[1052px]:text-left text-center font-extrabold pb-16">
        NOS SERVICES
      </h3>
      <div className="grid min-[1400px]:!grid-cols-3 lg:grid-cols-2 w-fit mx-auto gap-16 pb-28">
        {services.map((service) => (
          <Card key={service.icon}>
            <Image
              src={service.icon}
              alt=""
              width={901}
              height={901}
              className="w-[80px] h-fit pb-4"
            />
            <h4 className="text-xl font-bold pb-4">{service.title}</h4>
            <ul className="list-disc pl-4 pb-2">
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>
            <a
              href="#"
              className="text-[#7694CC] hover:opacity-70 transition-all duration-300"
            >
              En savoir plus &gt;
            </a>
          </Card>
        ))}
      </div>
    </>
  );
}
