export default function ValuesList() {
  const items = [
    "Développement",
    "Humanité",
    "Accueil",
    "Bienveillance",
    "Accompagnement",
    "Collaboration",
    "Écoute",
    "Autonomisation",
  ];

  return (
    <section className="space-y-4">
      {/* Desktop & tablet: three per row with title as an item */}
      <div className="hidden md:grid md:grid-cols-3 md:gap-4">
        {["VALEURS", ...items].map((label) =>
          label === "VALEURS" ? (
            <h4
              key={label}
              className="font-finalsix text-3xl font-bold"
            >
              {label}
            </h4>
          ) : (
            <p
              key={label}
              className="text-xl border-[1px] border-[#1E1F3F] rounded-full px-6 py-2 hover:scale-105"
            >
              {label}
            </p>
          )
        )}
      </div>

      {/* Mobile: title above and values two by two */}
      <div className="grid grid-cols-2 gap-4 md:hidden">
        <h4 className="col-span-2 font-finalsix text-3xl font-bold">VALEURS</h4>
        {items.map((label) => (
          <p
            key={label}
            className="text-xl border-[1px] border-[#1E1F3F] rounded-full px-6 py-2 hover:scale-105"
          >
            {label}
          </p>
        ))}
      </div>
    </section>
  );
}

