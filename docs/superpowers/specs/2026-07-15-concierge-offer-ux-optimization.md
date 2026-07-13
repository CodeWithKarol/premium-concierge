# Specyfikacja: Optymalizacja UX/UI sekcji ConciergeOffer (Mobile First)

## Cel
Poprawa komfortu czytania i wizualnej jakości sekcji "Oferta" na urządzeniach mobilnych poprzez zwiększenie odstępów ("oddechu").

## Zmiany (Mobile First)
- Odstępy (gap): Zwiększenie `gap-6` do `gap-8` w gridzie kart dla lepszej separacji na mobile.
- Paddingi kart: Optymalizacja paddingu wewnątrz kart (`p-8`) w celu zapewnienia odpowiedniego balansu treści na małych ekranach.
- Hierarchia: Upewnienie się, że responsywność gridu (1x4 na mobile, 2x2 na desktop) jest optymalna.

## Planowany proces
1. Edycja komponentu `src/components/landing/ConciergeOffer.tsx`.
2. Weryfikacja: `npm run lint` i `npm run typecheck`.
3. Commit zmian.
