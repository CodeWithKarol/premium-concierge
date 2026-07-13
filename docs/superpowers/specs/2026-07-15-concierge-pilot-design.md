# Specyfikacja: Sekcja "Program pilotażowy"

## Cel
Dodanie sekcji "Program pilotażowy" na stronie głównej (`src/pages/index.astro`) jako finalne Call to Action (CTA), wykorzystujące zasadę niedostępności (scarcity) i budujące zaufanie.

## Design (Accent Banner)
- Layout: Pełna szerokość sekcji z kontrastowym tłem.
- Elementy:
    - Nagłówek: "Szukam 5 pierwszych klientów".
    - Treść: Krótka informacja o korzyściach (osobista uwaga, najniższa stawka).
    - Przycisk CTA: "Zgłoś się do programu pilotażowego" (pełna szerokość na mobile).
- Stylistyka: Kontrastowe, ciemne tło (`bg-neutral-950`), czytelny biały tekst, przycisk z wyraźnym wyróżnieniem.

## Komponent
- Nazwa: `ConciergePilot.tsx`
- Lokalizacja: `src/components/landing/ConciergePilot.tsx`

## Integracja
- Wstawienie komponentu na samym końcu strony (nad stopką) w `src/pages/index.astro`.

## Planowany proces
1. Stworzenie komponentu.
2. Integracja w `index.astro`.
3. Weryfikacja: `npm run lint` i `npm run typecheck`.
