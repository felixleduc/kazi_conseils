import type { ReactNode } from "react";

interface HeroSectionProps {
  children: ReactNode;
  innerClassName?: string;
}

export default function HeroSection({
  children,
  innerClassName = "",
}: HeroSectionProps) {
  return (
    <div className="bg-[url('../../public/images/background.png')] bg-cover bg-center bg-fixed -mb-[100px]">
      <div
        className={`p-[60px] mx-auto w-full max-w-[1400px] pb-60 ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
