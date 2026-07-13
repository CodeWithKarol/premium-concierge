# Specyfikacja: Sekcja "Uczciwe zasady" (Moja obietnica)

## Cel
Dodanie sekcji "Uczciwe zasady" na stronie głównej (`src/pages/index.astro`), aby zbudować zaufanie poprzez jasne zasady współpracy.

## Design (Contrast Box)
- Layout: Wyróżniony blok z delikatnym tłem (`bg-neutral-100`/`dark:bg-neutral-800`).
- Elementy:
    - Nagłówek: "Moja obietnica (i wymagania)".
    - Trzy zasady (Twoja decyzja, Szczery feedback, Zero ściemy) sformatowane jako akapity z pogrubionymi nagłówkami.
- Stylistyka: Elegancki minimalizm, wyśrodkowany blok o ograniczonej szerokości (`max-w-2xl`).

## Komponent
- Nazwa: `ConciergePrinciples.tsx`
- Lokalizacja: `src/components/landing/ConciergePrinciples.tsx`

## Integracja
- Wstawienie komponentu przed sekcją `ConciergePilot` w `src/pages/index.astro`.

## Planowany proces
1. Stworzenie komponentu.
2. Integracja w `index.astro`.
3. Weryfikacja: `npm run lint` i `npm run typecheck`.
