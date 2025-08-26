import type { ReactNode } from "react";

interface HeroSectionProps {
  children: ReactNode;
  innerClassName?: string;
}

export default function HeroSection({ children, innerClassName = "" }: HeroSectionProps) {
  return (
    <div className="bg-[url('../../public/images/background.png')] bg-cover bg-center bg-fixed -mb-[100px]">
      <div
        className={`px-6 py-10 md:p-[60px] mx-auto w-full max-w-[1400px] pb-48 md:pb-60 ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
}

