import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-[#FFFDFA]">
      <header className="px-[60px] py-[30px] mx-auto w-full max-w-[1400px] flex justify-between items-center">
        <Link href="/" className="hover:opacity-70 transition-all duration-300">
          <h1 className="text-3xl font-bold">
            <Image
              src="/images/logo-kazi-bleu.png"
              alt="Kazi"
              width={80}
              height={40}
            />
          </h1>
        </Link>
        <ul className="flex gap-10">
          <li>
            <Link
              className="opacity-60 hover:text-[#1E1F3F] hover:opacity-100 transition-all duration-300"
              href="/"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              className="opacity-60 hover:text-[#1E1F3F] hover:opacity-100 transition-all duration-300"
              href="/realisations"
            >
              Réalisations
            </Link>
          </li>
          <li>
            <Link
              className="opacity-60 hover:text-[#1E1F3F] hover:opacity-100 transition-all duration-300"
              href="/services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="opacity-60 hover:text-[#1E1F3F] hover:opacity-100 transition-all duration-300"
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
        <a
          href="/contact"
          className="w-fit border-[1px] border-[#1E1F3F] rounded-4xl py-2 px-4 hover:scale-[102%] hover:border-[#DBE7F6] hover:bg-[#DBE7F6] transition-transform duration-100"
        >
          Consultation gratuite
        </a>
      </header>
    </div>
  );
}
