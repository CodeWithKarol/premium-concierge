# Specyfikacja: Optymalizacja UX/UI sekcji ConciergePrinciples (Mobile First)

## Cel
Poprawa czytelności i komfortu czytania sekcji "Uczciwe zasady" na urządzeniach mobilnych poprzez optymalizację odstępów i marginesów.

## Zmiany (Mobile First)
- Padding wewnętrzny: Zmiana z `p-8` na `p-6` na urządzeniach mobilnych, aby zapewnić lepszą szerokość linii tekstu.
- Margines zewnętrzny: Dodanie `px-4` dla sekcji, aby karta nie przylegała do krawędzi ekranu na bardzo małych telefonach.
- Odstępy między zasadami: Zwiększenie `space-y-6` dla lepszej separacji punktów.

## Komponent
- Modyfikacja: `src/components/landing/ConciergePrinciples.tsx`

## Planowany proces
1. Edycja komponentu `ConciergePrinciples.tsx`.
2. Weryfikacja: `npm run lint` i `npm run typecheck`.
3. Commit zmian.
