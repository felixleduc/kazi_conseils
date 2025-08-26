"use client";

import { useState } from "react";
import Hamburger from "@/components/general/Hamburger";
import clsx from "clsx";
import Link from "next/link";
import { nav } from "@/data/navigation";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  return (
    <div className="relative">
      <button
        onClick={toggleOpen}
        aria-label="Ouvrir/fermer le menu"
        aria-expanded={open}
        className="fixed top-8 right-8 z-[60]"
      >
        <Hamburger isOpen={open} />
      </button>

      <div
        className={clsx(
          "fixed top-4 right-0 h-dvh max-w-2/3",
          "bg-[#1E1F3F] text-white p-8 rounded-l-3xl",
          "transform-gpu transition-transform duration-300 z-50",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <ul className="flex flex-col gap-4 mt-6">
          {nav.map(({ name, href }) => (
            <li key={href}>
              <Link
                className="text-[20px] hover:opacity-70 transition-all duration-300"
                href={href}
                onClick={close}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <hr className="border-white mt-4 mb-8" />
        <Link
          className="w-fit border-[1px] border-white rounded-4xl py-2 px-4 hover:scale-[102%] hover:border-[#DBE7F6] hover:bg-[#DBE7F6] transition-transform duration-300"
          href="/#contact-form"
          onClick={close}
        >
          Consultation gratuite
        </Link>
      </div>
    </div>
  );
}
