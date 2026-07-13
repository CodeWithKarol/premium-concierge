# Specyfikacja: Sekcja "Dlaczego szukam pierwszych klientów?" (Story)

## Cel
Dodanie sekcji "Story" (osobista historia autora) na stronie głównej (`src/pages/index.astro`), aby zbudować emocjonalną więź z klientem i zwiększyć autentyczność przed finalnym CTA.

## Design (Letter-style)
- Layout: Czysta typografia, wyśrodkowany tekst, ograniczona szerokość (`max-w-2xl`) dla lepszej czytelności.
- Elementy:
    - Nagłówek: "Dlaczego szukam pierwszych klientów?".
    - Treść: Narracja w pierwszej osobie, sformatowana jak osobisty list.
- Stylistyka: Minimalizm, dużo światła, brak ramek czy kart.

## Komponent
- Nazwa: `ConciergeStory.tsx`
- Lokalizacja: `src/components/landing/ConciergeStory.tsx`

## Integracja
- Wstawienie komponentu nad sekcją `ConciergePilot` w `src/pages/index.astro`.

## Planowany proces
1. Stworzenie komponentu.
2. Integracja w `index.astro`.
3. Weryfikacja: `npm run lint` i `npm run typecheck`.
