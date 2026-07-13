# Specyfikacja: Optymalizacja UX/UI sekcji Hero (Mobile Height)

## Cel
Optymalizacja wysokości sekcji Hero poprzez zastąpienie sztywnego `min-h-[85vh]` elastycznym paddingiem, aby poprawić UX "scroll-hint" na urządzeniach mobilnych.

## Zmiany (Mobile First)
- Wysokość sekcji: Zastąpienie `min-h-[85vh]` elastycznym paddingiem `py-20` (lub `py-24`).
- UX: Zapewnienie, że użytkownik widzi fragment kolejnej sekcji, co intuicyjnie zachęca do scrollowania.

## Planowany proces
1. Edycja komponentu `src/components/landing/Hero.tsx`.
2. Weryfikacja: `npm run lint` i `npm run typecheck`.
3. Commit zmian.
