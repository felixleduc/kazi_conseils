import type { ReactNode } from "react";

interface PoliciesSectionProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}

export default function PoliciesSection({
  children,
  className = "",
  innerClassName = "",
}: PoliciesSectionProps) {
  return (
    <div
      className={`bg-[url('../../public/images/background.png')] bg-cover bg-center bg-fixed ${className}.`.trim()}
    >
      <div
        className={`px-[60px] py-[100px] mx-auto w-fit max-w-[920px] flex flex-col gap-10 ${innerClassName}`.trim()}
      >
        {children}
      </div>
    </div>
  );
}
