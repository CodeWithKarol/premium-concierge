// No React import needed

const content = {
  headline: "Dlaczego robię to w ramach programu pilotażowego?",
  paragraphs: [
    "Buduję system „Osobistego Asystenta Sprzedaży”, który ma być standardem dla osób ceniących swój czas. Nie jestem wielką firmą z dziesięcioletnim stażem – jestem osobą, która tworzy rozwiązanie problemu, z którym każdy z nas się mierzy: „Mam w domu wartościowe rzeczy, których nie używam, ale nie mam czasu użerać się z niepoważnymi kupującymi”.",
    "Szukam 5 pierwszych osób do współpracy, aby dopracować mój proces. W zamian za zaufanie, otrzymasz:",
  ],
  benefits: [
    "Prowizja zależna od wyniku – rozliczamy się dopiero wtedy, gdy sprzedaż przekroczy Twoje oczekiwania.",
    "Moje osobiste zaangażowanie – potraktuję Twoje przedmioty tak, jakbym sprzedawał własne mienie.",
    "Priorytetowa obsługa – potrzebuję Twojej szczerej opinii, więc zależy mi na Twoim pełnym zadowoleniu bardziej niż komukolwiek innemu.",
  ],
}

export default function ConciergeStory() {
  return (
    <section className="bg-white px-8 py-20 transition-colors duration-300 dark:bg-[#0c0c0b]">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-10 text-2xl font-bold tracking-tight text-neutral-900 sm:text-center sm:text-4xl dark:text-white">
          {content.headline}
        </h2>

        <div className="space-y-6 text-lg leading-loose text-neutral-600 dark:text-neutral-300">
          {content.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-left">
              {paragraph}
            </p>
          ))}
          <ul className="list-inside space-y-4">
            {content.benefits.map((benefit, i) => (
              <li key={i} className="flex gap-2 text-left">
                <span className="shrink-0">•</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
