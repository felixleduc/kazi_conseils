export default function ValuesList() {
  const items = [
    { type: "title", label: "VALEURS" },
    { type: "pill", label: "Développement" },
    { type: "pill", label: "Humanité" },
    { type: "pill", label: "Accueil" },
    { type: "pill", label: "Bienveillance" },
    { type: "pill", label: "Accompagnement" },
    { type: "pill", label: "Collaboration" },
    { type: "pill", label: "Écoute" },
    { type: "pill", label: "Autonomisation" },
  ];

  const rows = [];
  for (let i = 0; i < items.length; i += 3) {
    rows.push(items.slice(i, i + 3));
  }

  return (
    <section className="space-y-4">
      {rows.map((row, idx) => (
        <div
          key={idx}
          className="flex flex-wrap items-baseline justify-center gap-4 md:justify-start"
        >
          {row.map((it) =>
            it.type === "title" ? (
              <h4 key={it.label} className="font-finalsix text-3xl font-bold">
                {it.label}
              </h4>
            ) : (
              <p
                key={it.label}
                className="text-xl border-[1px] border-[#1E1F3F] rounded-full px-6 py-2 hover:scale-105"
              >
                {it.label}
              </p>
            )
          )}
        </div>
      ))}
    </section>
  );
}
