import { Search, Camera, MessageSquare, Wallet } from "lucide-react"

const content = {
  headline: "Jak wygląda nasza współpraca?",
  description:
    "Nie obiecuję złotych gór – obiecuję profesjonalne podejście, dzięki któremu odzyskasz swój czas. Przejmuję cały proces sprzedaży, abyś Ty nie musiał wykonywać żadnej pracy:",
  offers: [
    {
      icon: Search,
      title: "Wstępna weryfikacja",
      description:
        "Przesyłasz mi zdjęcia przedmiotów i określasz, jaką kwotę chcesz za nie uzyskać. Oceniam, czy są one w segmencie, którym się zajmuję.",
    },
    {
      icon: Camera,
      title: "Przygotowanie oferty",
      description:
        "Wykonuję profesjonalne fotografie, które przyciągają wzrok, oraz piszę skuteczne opisy, które przekonują do zakupu.",
    },
    {
      icon: MessageSquare,
      title: "Zarządzanie sprzedażą",
      description:
        "Przejmuję cały kontakt. Odpowiadam na wiadomości, odrzucam oferty osób niepoważnych i prowadzę negocjacje z konkretnymi kupującymi.",
    },
    {
      icon: Wallet,
      title: "Finalizacja",
      description:
        "Organizuję bezpieczne przekazanie przedmiotu, a zysk z transakcji (pomniejszony o wcześniej ustaloną prowizję) przelewam prosto na Twoje konto.",
    },
  ],
  footer:
    "Ty odzyskujesz pieniądze i wolną przestrzeń. Ja biorę na siebie cały trud obsługi transakcji.",
}

export default function ConciergeOffer() {
  return (
    <section className="bg-white px-6 py-20 transition-colors duration-300 dark:bg-[#0c0c0b]">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
          {content.headline}
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-neutral-600 dark:text-neutral-400">
          {content.description}
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {content.offers.map((offer, i) => (
            <div
              key={i}
              className="rounded-2xl border border-neutral-100 bg-neutral-50 p-10 shadow-sm transition-all hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm dark:bg-neutral-800">
                <offer.icon className="size-6 text-neutral-900 dark:text-white" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-neutral-900 dark:text-white">
                {offer.title}
              </h3>
              <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-lg font-medium text-neutral-900 dark:text-white">
          {content.footer}
        </p>
      </div>
    </section>
  )
}
