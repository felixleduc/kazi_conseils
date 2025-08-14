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
      <h3 className="font-finalsix text-[30px] font-extrabold pb-16">NOS SERVICES</h3>
      <div className="grid grid-cols-3 gap-16 pb-28">
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
            <ul>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>
          </Card>
        ))}
      </div>
    </>
  );
}

