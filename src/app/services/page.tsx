import Image from "next/image";

export default function Services() {
  return (
    <>
      <div className="bg-[url('../../public/images/background.png')] bg-cover bg-center bg-fixed -mb-[100px]">
        <div className="p-[60px] mx-auto w-full max-w-[1400px] pb-60">
          <div className="bg-[#1E1F3F] rounded-4xl h-[546px] flex px-20 py-10">
            <div className="flex-1 text-white w-fit h-fit mx-auto my-auto">
              <p className="pb-10">
                Des solutions stratégiques, une <br />
                gestion efficace du changement et <br />
                une expérience enrichissante pour les <br />
                employés, gestionnaires et clients.
              </p>
              <p className="pb-10">
                Nos services s&apos;adaptent à la réalité de <br />
                chaque organisation et gestionnaire pour <br />
                maximiser les retombées, toujours avec <br />
                notre approche humaine caractéristique.
              </p>
              <a
                href="#"
                className="w-fit border-[1px] border-white rounded-4xl py-2 px-4 hover:scale-[102%] hover:border-[#DBE7F6] hover:bg-[#DBE7F6] transition-transform duration-100"
              >
                Consultation gratuite
              </a>
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
      </div>
      <div className="bg-[#FAF4ED] rounded-t-[100px] h-fit">
        <div className="px-[60px] py-[100px] mx-auto w-full max-w-[1400px]">
          <h3 className="font-finalsix text-[30px] font-extrabold pb-16">
            NOS SERVICES
          </h3>
          <div className="grid grid-cols-3 gap-16 pb-28">
            <div className="rounded-4xl bg-white px-10 py-6 drop-shadow-xl">
              <Image
                src="/icons/bousole.jpg"
                alt=""
                width={901}
                height={901}
                className="w-[80px] h-fit pb-4"
              />
              <h4 className="text-xl font-bold pb-4">
                Coaching de gestion <br />
                dans l&apos;action
              </h4>
              <ul>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
              </ul>
            </div>
            <div className="rounded-4xl bg-white px-10 py-6 drop-shadow-xl">
              <Image
                src="/icons/fleches.jpg"
                alt=""
                width={901}
                height={901}
                className="w-[80px] h-fit pb-4"
              />
              <h4 className="text-xl font-bold pb-4">
                Gestion du changement <br />
                et amélioration continue
              </h4>
              <ul>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
              </ul>
            </div>
            <div className="rounded-4xl bg-white px-10 py-6 drop-shadow-xl">
              <Image
                src="/icons/tete.jpg"
                alt=""
                width={901}
                height={901}
                className="w-[80px] h-fit pb-4"
              />
              <h4 className="text-xl font-bold pb-4">
                Développement <br />
                du leadership et coaching
              </h4>
              <ul>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
              </ul>
            </div>
            <div className="rounded-4xl bg-white px-10 py-6 drop-shadow-xl">
              <Image
                src="/icons/bulle.jpg"
                alt=""
                width={901}
                height={901}
                className="w-[80px] h-fit pb-4"
              />
              <h4 className="text-xl font-bold pb-4">
                Expérience client <br />
                et expérience employé
              </h4>
              <ul>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
              </ul>
            </div>
            <div className="rounded-4xl bg-white px-10 py-6 drop-shadow-xl">
              <Image
                src="/icons/livres.jpg"
                alt=""
                width={901}
                height={901}
                className="w-[80px] h-fit pb-4"
              />
              <h4 className="text-xl font-bold pb-4">
                Formations personnalisées <br />
                et soutien professionnel
              </h4>
              <ul>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
                <li>lorem ipsum</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
