# Specyfikacja: Sekcja "Jak wygląda nasza współpraca?"

## Cel
Dodanie sekcji wyjaśniającej proces współpracy ("Jak wygląda nasza współpraca?") na stronie głównej (`src/pages/index.astro`), aby zwiększyć przejrzystość i zaufanie klienta.

## Design (Numbered Pillars - Timeline)
- Layout: Pionowa linia czasu (Vertical Timeline).
- Elementy:
    - Pionowa linia łącząca kroki.
    - Wyraźne numery (01, 02, 03, 04, 05) w okręgach pełniących rolę markerów na osi.
    - Każdy krok posiada tytuł oraz krótki opis.
- Stylistyka: Czysty, nowoczesny minimalizm zgodny z resztą strony. Wykorzystanie `border-l-2` dla linii czasu.

## Komponent
- Nazwa: `ConciergeProcess.tsx`
- Lokalizacja: `src/components/landing/ConciergeProcess.tsx`

## Integracja
- Wstawienie komponentu pod sekcją `ConciergeWhy` w `src/pages/index.astro`.

## Planowany proces
1. Stworzenie komponentu.
2. Integracja w `index.astro`.
3. Weryfikacja: `npm run lint` i `npm run typecheck`.
