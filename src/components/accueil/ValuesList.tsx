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

  // Desktop layout: title included as a grid item in rows of three
  const desktopItems = ["VALEURS", ...items];
  const rows: string[][] = [];
  for (let i = 0; i < desktopItems.length; i += 3) {
    rows.push(desktopItems.slice(i, i + 3));
  }

  return (
    <section className="space-y-4">
      {/* Desktop view: replicate original three-per-row layout with title */}
      <div className="hidden md:block space-y-4">
        {rows.map((row, idx) => (
          <div key={idx} className="flex flex-nowrap items-baseline gap-4">
            {row.map((label) =>
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
        ))}
      </div>

      {/* Mobile view: title above and values two by two */}
      <div className="flex flex-col gap-4 md:hidden">
        <h4 className="font-finalsix text-3xl font-bold">VALEURS</h4>
        <div className="grid grid-cols-2 gap-2">
          {items.map((label) => (
            <p
              key={label}
              className="text-xl border-[1px] border-[#1E1F3F] rounded-full px-6 py-2 hover:scale-105"
            >
              {label}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

