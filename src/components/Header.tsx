"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { nav } from "@/data/navigation";
import MobileNav from "./general/MobileNav";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === href;
  }
  return pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="bg-[#FFFDFA]">
      <header className="px-[60px] py-[30px] mx-auto w-full max-w-[1400px] flex justify-between items-center">
        <Link
          href="/"
          className="fixed top-8 left-8 z-50 lg:static lg:top-auto lg:left-auto hover:opacity-70 transition-all duration-300"
        >
          <h1 className="text-3xl font-bold">
            <Image
              src="/images/logo-kazi-bleu.png"
              alt="Kazi"
              width={80}
              height={40}
            />
          </h1>
        </Link>

        {/* Desktop */}
        <ul className="hidden lg:flex lg:gap-10">
          {nav.map(({ name, href }) => {
            const active = isActive(pathname, href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={clsx(
                    "relative transition-all duration-300 hover:text-[#1E1F3F] hover:opacity-100",
                    active
                      ? "text-[#1E1F3F] opacity-100 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-2px] after:w-[20px] after:h-[2px] after:bg-[#1E1F3F] after:rounded-full"
                      : "opacity-60"
                  )}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link
          className="hidden lg:block w-fit border-[1px] border-[#1E1F3F] rounded-4xl py-2 px-4 hover:scale-[102%] hover:border-[#DBE7F6] hover:bg-[#DBE7F6] transition-transform duration-100"
          href="/#contact-form"
        >
          Consultation gratuite
        </Link>

        {/* Mobile */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </header>
    </div>
  );
}
