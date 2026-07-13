# Specyfikacja: Optymalizacja UX/UI sekcji ConciergeOffer (Mobile First)

## Cel
Poprawa komfortu czytania i wizualnej przejrzystości sekcji "Oferta" na urządzeniach mobilnych poprzez zwiększenie odstępów i skalowanie elementów.

## Zmiany (Mobile First)
- Ikony: Zmniejszenie rozmiaru ikon na urządzeniach mobilnych (np. `size-6` zamiast `size-7`).
- Odstępy (gap): Zwiększenie `gap` między kartami w gridzie (`gap-8` na mobile) dla lepszej separacji sekcji.
- Typografia: Optymalizacja rozmiaru tytułów (`h3`) w kartach dla urządzeń mobilnych.

## Komponent
- Modyfikacja: `src/components/landing/ConciergeOffer.tsx`

## Planowany proces
1. Aktualizacja komponentu `ConciergeOffer.tsx`.
2. Weryfikacja: `npm run lint` i `npm run typecheck`.
3. Commit zmian.
