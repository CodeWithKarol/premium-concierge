# Specyfikacja: Optymalizacja sekcji Hero (Mobile First)

## Cel
Poprawa UX/UI sekcji Hero na urządzeniach mobilnych, ze szczególnym uwzględnieniem czytelności i dostępności przycisku Call to Action (CTA).

## Zmiany (Mobile First)
- CTA Button:
    - Zmiana szerokości na pełną (`w-full`) na urządzeniach mobilnych, `w-auto` na większych ekranach.
    - Wzmocnienie wizualne (dodanie wyraźniejszego cienia: `shadow-lg shadow-neutral-900/20`).
- Layout Hero:
    - Skondensowanie odstępów pionowych (`space-y-6` zamiast `space-y-10`) dla poprawy czytelności "above the fold".
    - Optymalizacja wysokości linii (`leading`) nagłówka dla mniejszych ekranów.

## Planowany proces
1. Edycja pliku `src/pages/index.astro`.
2. Weryfikacja: `npm run lint` i `npm run typecheck`.
3. Commit zmian.
