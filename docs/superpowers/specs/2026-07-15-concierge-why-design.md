# Specyfikacja: Sekcja "Dlaczego to robię?"

## Cel
Dodanie sekcji "Dlaczego to robię?" na stronie głównej (`src/pages/index.astro`), aby zbudować zaufanie poprzez pokazanie zrozumienia punktów bólu klienta i przedstawienie propozycji wartości "Concierge Sprzedaży".

## Design (Pain vs. Solution)
- Layout: Dwukolumnowy grid na desktopie, jeden blok na mobile.
- Lewa strona: Lista problemów z wizualnymi oznaczeniami (ikony `AlertCircle` lub `X`).
- Prawa strona: Tekst narracyjny ("Dlaczego „Concierge Sprzedaży”?").
- Stylistyka: Czysty, minimalistyczny design zgodny z estetyką strony, z delikatnym tłem dla sekcji.

## Komponent
- Nazwa: `ConciergeWhy.tsx`
- Lokalizacja: `src/components/landing/ConciergeWhy.tsx`
- Zależności: `lucide-react` (ikony).

## Integracja
- Wstawienie komponentu pod sekcją hero w `src/pages/index.astro`.

## Planowany proces
1. Stworzenie komponentu.
2. Integracja w `index.astro`.
3. Weryfikacja: `npm run lint` i `npm run typecheck`.
