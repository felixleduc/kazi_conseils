import Image from "next/image";
import Card from "@/components/general/Card";

const services = [
  {
    icon: "/icons/bousole.jpg",
    title: (
      <>
        Coaching de gestion <br className="hidden xl:block" />
        dans l&apos;action
      </>
    ),
  },
  {
    icon: "/icons/fleches.jpg",
    title: (
      <>
        Gestion du changement <br className="hidden xl:block" />
        et amélioration continue
      </>
    ),
  },
  {
    icon: "/icons/tete.jpg",
    title: (
      <>
        Développement <br className="hidden xl:block" />
        du leadership et coaching
      </>
    ),
  },
  {
    icon: "/icons/bulle.jpg",
    title: (
      <>
        Expérience client <br className="hidden xl:block" />
        et expérience employé
      </>
    ),
  },
  {
    icon: "/icons/livres.jpg",
    title: (
      <>
        Formations personnalisées <br className="hidden xl:block" />
        et soutien professionnel
      </>
    ),
  },
];

export default function ServicesList() {
  return (
    <>
      <h3 className="font-finalsix text-[30px] font-extrabold pb-16">NOS SERVICES</h3>
      <div className="grid grid-cols-1 gap-8 pb-28 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10 lg:gap-16">
        {services.map((service) => (
          <Card key={service.icon} className="mx-auto max-w-[360px] h-full text-left">
            <Image
              src={service.icon}
              alt=""
              width={901}
              height={901}
              className="w-[80px] h-fit pb-4"
            />
            <h4 className="text-xl font-bold pb-4">{service.title}</h4>
            <ul className="list-disc pl-4">
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

