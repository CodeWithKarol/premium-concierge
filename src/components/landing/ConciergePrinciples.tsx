// No React import needed

const content = {
  headline: "Moja obietnica (i wymagania)",
  principles: [
    {
      title: "Twoja decyzja o cenie:",
      description:
        "To Ty określasz, jaką kwotę chcesz dostać za przedmiot. Ja oceniam, czy jest to rynkowe. Jeśli nie – doradzę, jak to zrobić, żeby nie „zabić” sprzedaży.",
    },
    {
      title: "Szczery feedback:",
      description:
        "Po sprzedaży poproszę Cię o wideo-opinię lub pisemną referencję. Tylko to pozwoli mi rozwinąć skrzydła.",
    },
    {
      title: "Zero ściemy:",
      description:
        "Jeśli uznam, że Twoich przedmiotów nie da się sprzedać z zyskiem dla Ciebie – powiem to otwarcie. Nie marnuję Twojego czasu.",
    },
  ],
}

export default function ConciergePrinciples() {
  return (
    <section className="bg-neutral-50 px-4 py-20 transition-colors duration-300 sm:px-6 dark:bg-neutral-900">
      <div className="mx-auto max-w-2xl rounded-3xl bg-neutral-100 p-6 shadow-sm sm:p-8 dark:bg-neutral-800">
        <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
          {content.headline}
        </h2>

        <p className="mb-8 leading-relaxed text-neutral-700 dark:text-neutral-300">
          Skoro to program pilotażowy, musimy grać w otwarte karty:
        </p>

        <div className="space-y-8">
          {content.principles.map((p, i) => (
            <p
              key={i}
              className="leading-relaxed text-neutral-600 dark:text-neutral-400"
            >
              <strong className="text-neutral-900 dark:text-white">
                {p.title}
              </strong>{" "}
              {p.description}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
