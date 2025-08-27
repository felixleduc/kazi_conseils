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
  const mobileColsClass = values.length % 2 === 0 ? "grid-cols-2" : "grid-cols-1";
  const totalWithHeading = values.length + 1;
  let desktopColsClass = "md:grid-cols-3";
  if (totalWithHeading % 3 !== 0) {
    desktopColsClass =
      totalWithHeading % 2 === 0 ? "md:grid-cols-2" : "md:grid-cols-1";
  }

  return (
    <section className="px-2">
      <h4 className="font-finalsix text-3xl font-bold mb-4 md:hidden">VALEURS</h4>
      <div className={`grid gap-2 ${mobileColsClass} ${desktopColsClass}`}>
        <h4 className="hidden md:block font-finalsix text-3xl font-bold whitespace-nowrap">
          VALEURS
        </h4>
        {values.map((label) => (
          <p
            key={label}
            className="text-xl border border-[#1E1F3F] rounded-full px-6 py-2 w-fit whitespace-nowrap"
          >
            {label}
          </p>
        ))}
      </div>
    </section>
  );
}
