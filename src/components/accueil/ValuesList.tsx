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
    <section className="flex flex-col items-center gap-4">
      <h4 className="font-finalsix text-3xl font-bold">VALEURS</h4>
      <div className="grid grid-cols-2 gap-4 justify-items-center">
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

