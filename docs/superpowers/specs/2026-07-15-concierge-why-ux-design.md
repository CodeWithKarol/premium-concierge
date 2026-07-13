# Specyfikacja: Optymalizacja UX/UI sekcji ConciergeWhy (Mobile First)

## Cel
Wzmocnienie bloku rozwiązania w sekcji `ConciergeWhy` na urządzeniach mobilnych poprzez nadanie mu statusu wizualnego punktu ciężkości, przy zachowaniu minimalizmu.

## Zmiany (Mobile First)
- Blok Rozwiązania (Prawa kolumna):
    - Dodanie lewego obramowania: `border-l-4 border-neutral-900` (dark: `border-white`).
    - Gradient tła: `bg-gradient-to-br from-white to-neutral-50` (dark: `from-neutral-800 to-neutral-900`).
    - Zwiększony padding: `p-8` dla lepszej czytelności.
- Układ:
    - Zwiększenie odstępu (`gap-8`) między kolumnami na mobile dla lepszej separacji sekcji.

## Planowany proces
1. Edycja komponentu `src/components/landing/ConciergeWhy.tsx`.
2. Weryfikacja: `npm run lint` i `npm run typecheck`.
3. Commit zmian.
