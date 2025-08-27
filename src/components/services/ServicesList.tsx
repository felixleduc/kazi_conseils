import Image from "next/image";
import Card from "@/components/general/Card";

const services = [
  {
    icon: "/icons/bousole.jpg",
    title: (
      <>
        Coaching de gestion <br className="hidden min-[1400px]:inline" />
        dans l&apos;action
      </>
    ),
  },
  {
    icon: "/icons/fleches.jpg",
    title: (
      <>
        Gestion du changement <br className="hidden min-[1400px]:inline" />
        et amélioration continue
      </>
    ),
  },
  {
    icon: "/icons/tete.jpg",
    title: (
      <>
        Développement <br className="hidden min-[1400px]:inline" />
        du leadership et coaching
      </>
    ),
  },
  {
    icon: "/icons/bulle.jpg",
    title: (
      <>
        Expérience client <br className="hidden min-[1400px]:inline" />
        et expérience employé
      </>
    ),
  },
  {
    icon: "/icons/livres.jpg",
    title: (
      <>
        Formations personnalisées <br className="hidden min-[1400px]:inline" />
        et soutien professionnel
      </>
    ),
  },
];

export default function ServicesList() {
  return (
    <>
      <h3 className="font-finalsix text-[30px] font-extrabold pb-16 text-center min-[1400px]:text-left">NOS SERVICES</h3>
      <div className="grid grid-cols-1 gap-6 pb-28 px-4 place-items-center md:grid-cols-2 md:gap-10 md:px-16 lg:grid-cols-3 lg:gap-16 lg:px-0 lg:place-items-stretch auto-rows-fr">
        {services.map((service) => (
          <Card
            key={service.icon}
            className="w-full h-full px-12 md:px-20 lg:px-10 text-left flex flex-col"
          >
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

