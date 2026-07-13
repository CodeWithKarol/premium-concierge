# Specyfikacja: Sekcja "Oferta" (Co dokładnie dostajesz?)

## Cel
Dodanie sekcji "Oferta" (Co dokładnie dostajesz?) na stronie głównej (`src/pages/index.astro`), aby jasno przedstawić model usługi "Done-For-You" w czterech punktach.

## Design (Grid 2x2)
- Layout: Siatka 2x2 (na mobile 1x4).
- Elementy: Cztery karty reprezentujące główne etapy usługi:
    - Weryfikacja potencjału (Ikona: Search)
    - Profesjonalny wizerunek (Ikona: Camera)
    - Zarządzanie relacją (Ikona: MessageSquare)
    - Finalizacja (Ikona: Wallet)
- Stylistyka: Minimalistyczne karty z subtelnym tłem/obramowaniem, spójne z resztą strony.

## Komponent
- Nazwa: `ConciergeOffer.tsx`
- Lokalizacja: `src/components/landing/ConciergeOffer.tsx`

## Integracja
- Wstawienie komponentu za sekcją `ConciergeProcess` w `src/pages/index.astro`.

## Planowany proces
1. Stworzenie komponentu.
2. Integracja w `index.astro`.
3. Weryfikacja: `npm run lint` i `npm run typecheck`.
