import Link from "next/link";
import Image from "next/image";
import { nav } from "@/data/navigation";

export default function Footer() {
  return (
    <div className="bg-[#1E1F3F] text-white overflow-x-clip overflow-y-hidden">
      <footer className="relative px-[60px] pt-[30px] pb-[60px] mx-auto w-full max-w-[1400px]">
        <Image
          src="/images/logo-kazi-blanc.png"
          alt=""
          aria-hidden="true"
          width={1526}
          height={742}
          className="hidden md:inline pointer-events-none select-none absolute right-[-30px] bottom-[-120px] w-[600px] h-auto opacity-5 z-0"
        />
        <div className="relative z-10 md:flex md:justify-between md:items-center">
          <h1 className="text-3xl font-bold">
            <Image
              src="/images/logo-kazi-blanc.png"
              alt="Kazi"
              width={1526}
              height={742}
              className="w-[128px] h-auto pb-6 md:w-[96px] md:pb-0"
            />
          </h1>
          <ul className="flex flex-col gap-4 md:flex-row md:gap-10">
            {nav.map(({ name, href }) => (
              <li key={href}>
                <Link
                  className="hover:opacity-70 transition-all duration-300"
                  href={href}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <hr className="mt-4 mb-8" />

        <div className="flex justify-between items-stretch">
          <div className="flex flex-col gap-2">
            <p>@kaziconseils</p>
            <p>
              Tel :{" "}
              <a
                href="tel:1234567890"
                className="hover:opacity-70 transition-all duration-300"
              >
                123 456-7890
              </a>
            </p>
            <p>Où? Partout au Québec</p>
            <a
              href="/politiques"
              className="hover:opacity-70 transition-all duration-300"
            >
              Mentions légales
            </a>
          </div>
          <div className="flex flex-col justify-between gap-2">
            <div className="flex gap-4 justify-end">
              <a
                href="https://www.facebook.com/mariediane.perron"
                target="_blank"
                className="hover:scale-110 transition-all duration-300"
              >
                <Image
                  src="/icons/fb-logo.png"
                  alt="fb"
                  width={50}
                  height={50}
                  className="w-[40px] h-auto"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/marie-diane-perron-3a1537bb/"
                target="_blank"
                className="hover:scale-110 transition-all duration-300"
              >
                <Image
                  src="/icons/in-logo.png"
                  alt="in"
                  width={50}
                  height={50}
                  className="w-[40px] h-auto"
                />
              </a>
            </div>
            <a
              href="https://www.dukelon.com/"
              target="_blank"
              className="opacity-70 hover:opacity-100 transition-all duration-300"
            >
              <span className="hidden md:inline">Designé par </span>
              Dukelon Design
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
