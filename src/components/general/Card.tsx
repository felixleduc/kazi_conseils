import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-4xl bg-white px-10 py-6 drop-shadow-xl ${className}`}>
      {children}
    </div>
  );
}

