import { buttonVariants } from "@/components/ui/button-variants"

const content = {
  headline: "Program pilotażowy – krok po kroku",
  intro:
    "Ponieważ to dopiero początek, mam ograniczone moce przerobowe. Nie chcę przyjąć więcej zleceń, niż jestem w stanie obsłużyć na 100%. Aby wystartować, wyślij do mnie zgłoszenie, kopiując poniższy wzór:",
  template: `1. Imię i nazwisko:
2. Co chcesz sprzedać? (Krótki opis):
3. Jaka jest Twoja oczekiwana kwota (netto) za ten przedmiot?:
4. Zdjęcia: (Załącz proszę zdjęcia przedmiotu – im lepszej jakości, tym łatwiej mi będzie ocenić potencjał)`,
  ctaText: "Wyślij zgłoszenie na kontakt@premium-concierge.pl",
  ctaHref:
    "mailto:kontakt@premium-concierge.pl?subject=Zgłoszenie do programu pilotażowego&body=1. Imię i nazwisko:%0A2. Co chcesz sprzedać?:%0A3. Jaka jest Twoja oczekiwana kwota (netto) za ten przedmiot?:%0A4. Proszę załącz zdjęcia przedmiotu.",
  annotation:
    "Jeśli Twoje przedmioty nadają się do sprzedaży premium, odezwę się do Ciebie w ciągu 24h, żeby ustalić szczegóły i prowizję.",
}

export default function ConciergePilot() {
  return (
    <section
      id="program-pilotazowy"
      className="bg-neutral-950 px-6 py-20 text-white transition-colors duration-300 dark:bg-neutral-900"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
          {content.headline}
        </h2>
        <p className="mb-10 leading-relaxed text-neutral-300">
          {content.intro}
        </p>

        <div className="mx-auto mb-10 max-w-xl rounded-2xl bg-neutral-900 p-8 text-left shadow-lg dark:bg-neutral-800">
          <pre className="font-sans text-sm whitespace-pre-wrap text-neutral-300">
            {content.template}
          </pre>
        </div>

        <a
          href={content.ctaHref}
          className={buttonVariants({
            variant: "secondary",
            size: "lg",
            className:
              "h-auto w-full cursor-pointer rounded-xl px-4 py-4 text-center text-sm font-semibold text-neutral-950 shadow-lg transition-all duration-300 hover:scale-[1.01] hover:bg-neutral-100 active:scale-[0.99] sm:w-auto sm:px-6 sm:text-base",
          })}
        >
          <span className="whitespace-normal">{content.ctaText}</span>
        </a>
        <p className="mt-6 text-sm text-neutral-500">{content.annotation}</p>
      </div>
    </section>
  )
}
