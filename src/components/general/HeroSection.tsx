import type { ReactNode } from "react";

interface HeroSectionProps {
  children: ReactNode;
  innerClassName?: string;
}

export default function HeroSection({ children, innerClassName = "" }: HeroSectionProps) {
  return (
    <div className="bg-[url('../../public/images/background.png')] bg-cover bg-center bg-fixed xl:-mb-[100px]">
      <div
        className={`mx-auto w-full max-w-[1400px] px-6 py-10 sm:px-10 sm:py-16 lg:p-[60px] pb-32 md:pb-40 lg:pb-60 ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
}

