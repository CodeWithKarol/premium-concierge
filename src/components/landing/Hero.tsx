import { buttonVariants } from "@/components/ui/button-variants"

const content = {
  headline:
    "Ekskluzywne usługi concierge w sprzedaży Twoich przedmiotów premium.",
  subtitle:
    "Szukam 5 pierwszych klientów do programu pilotażowego. Nie sprzedaję ogłoszeń – osobiście przejmuję cały proces sprzedaży Twojej elektroniki, mebli i odzieży. Ty odzyskujesz czas i pieniądze, a ja biorę na siebie cały „brudny” proces negocjacji.",
  ctaText: "Zgłoś przedmioty do sprzedaży",
  ctaHref: "#program-pilotazowy",
}

export default function Hero() {
  return (
    <section className="px-6 py-12 transition-colors duration-300">
      <div className="flex flex-col items-center justify-center rounded-3xl border border-neutral-200 bg-white px-6 py-24 dark:border-neutral-800 dark:bg-[#0c0c0b]">
        <div className="mx-auto w-full max-w-4xl space-y-6 text-center">
          <div className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
            Program pilotażowy
          </div>
          <h1 className="text-3xl leading-[1.1] font-black tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl dark:text-white">
            {content.headline}
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg lg:text-xl dark:text-neutral-300">
            {content.subtitle}
          </p>

          <div className="flex justify-center pt-4">
            <a
              href={content.ctaHref}
              className={buttonVariants({
                variant: "default",
                size: "lg",
                className:
                  "h-auto w-full cursor-pointer rounded-xl px-4 py-4 text-center text-sm font-semibold shadow-lg shadow-neutral-900/20 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] sm:w-auto sm:px-8 sm:text-base",
              })}
            >
              <span className="whitespace-normal">{content.ctaText}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
