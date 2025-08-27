import { ReactNode } from "react";

interface ContentSectionProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}

export default function ContentSection({
  children,
  className = "",
  innerClassName = "",
}: ContentSectionProps) {
  return (
    <div className={`bg-[#FAF4ED] rounded-t-[100px] h-fit ${className}`.trim()}>
      <div
        className={`px-6 py-16 sm:px-10 sm:py-24 lg:px-[60px] lg:py-[100px] mx-auto w-full max-w-[1400px] ${innerClassName}`.trim()}
      >
        {children}
      </div>
    </div>
  );
}

