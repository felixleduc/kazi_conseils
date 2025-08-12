export default function Footer() {
  return (
    <div className="bg-[#1E1F3F] text-white">
      <footer className="px-[60px] py-[30px] mx-auto w-full max-w-[1400px]">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Kazi Conseils</h1>
          <ul className="flex gap-10">
            <li>
              <a
                className="font-bold hover:text-black transition-colors"
                href="#"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                className="font-bold hover:text-black transition-colors"
                href="#"
              >
                Réalisations
              </a>
            </li>
            <li>
              <a
                className="font-bold hover:text-black transition-colors"
                href="#"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="font-bold hover:text-black transition-colors"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <hr className="my-4" />

        <div className="flex justify-between items-stretch">
          <div className="flex flex-col gap-2">
            <p>@kaziconseils</p>
            <p>
              Tel : <a href="#">123 456-7890</a>
            </p>
            <p>Où? Partout au Québec</p>
          </div>
          <div className="flex flex-col justify-between gap-2">
            <div className="flex gap-4 justify-end">
              <a href="#">facebook</a>
              <a href="#">linkedin</a>
            </div>
            <p>© Copyright 2025 Kazi Conseils - Tous droits réservés</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
