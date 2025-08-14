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
        className={`px-[60px] py-[100px] mx-auto w-full max-w-[1400px] ${innerClassName}`.trim()}
      >
        {children}
      </div>
    </div>
  );
}

