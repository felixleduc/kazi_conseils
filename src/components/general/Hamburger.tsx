import clsx from "clsx";

type HamburgerProps = { isOpen: boolean };

export default function Hamburger({ isOpen }: HamburgerProps) {
  return (
    <div
      className="w-6 h-6 flex flex-col justify-around cursor-pointer hover:opacity-70 transition-opacity duration-300 select-none"
      aria-label="Menu"
      aria-expanded={isOpen}
      role="button"
    >
      <div
        className={clsx(
          "w-6 h-0.5 rounded-2xl origin-center transform-gpu",
          "border-2 bg-[#1E1F3F] border-[#1E1F3F]",
          "transition-transform duration-[600ms] ease-in-out",
          isOpen ? "rotate-45 translate-y-2 bg-white border-white" : "rotate-0"
        )}
      />

      <div
        className={clsx(
          "w-6 h-0.5 rounded-2xl origin-center transform-gpu",
          "border-2 bg-[#1E1F3F] border-[#1E1F3F]",
          "transition-transform duration-[600ms] ease-in-out",
          isOpen ? "opacity-0 translate-x-1" : "opacity-100 translate-x-0"
        )}
      />

      <div
        className={clsx(
          "w-6 h-0.5 rounded-2xl origin-center transform-gpu",
          "border-2 bg-[#1E1F3F] border-[#1E1F3F]",
          "transition-transform duration-[600ms] ease-in-out",
          isOpen
            ? "-rotate-45 -translate-y-2 bg-white border-white"
            : "rotate-0"
        )}
      />
    </div>
  );
}
