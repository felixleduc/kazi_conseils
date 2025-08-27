export default function ValuesList() {
  const values = [
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
    <section className="px-2">
      <h4 className="font-finalsix text-3xl font-bold mb-4 md:hidden">VALEURS</h4>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-2">
        <h4 className="hidden md:block font-finalsix text-3xl font-bold">VALEURS</h4>
        {values.map((label) => (
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
