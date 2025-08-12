export default function Header() {
  return (
    <div className="bg-[#FFFDFA]">
      <header className="px-[60px] py-[30px] mx-auto w-full max-w-[1400px] flex justify-between items-center">
        <h1 className="text-3xl font-bold">Kazi</h1>
        <ul className="flex gap-10">
          <li>
            <a
              className="font-bold text-gray-500 hover:text-black transition-colors"
              href="#"
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              className="font-bold text-gray-500 hover:text-black transition-colors"
              href="#"
            >
              Réalisations
            </a>
          </li>
          <li>
            <a
              className="font-bold text-gray-500 hover:text-black transition-colors"
              href="#"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="font-bold text-gray-500 hover:text-black transition-colors"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
        <a
          href="#"
          className="font-semibold text-black transition-colors border-2 border-black rounded-4xl py-2 px-4 hover:border-[#DBE7F6] hover:bg-[#DBE7F6]"
        >
          Consultation gratuite
        </a>
      </header>
    </div>
  );
}
