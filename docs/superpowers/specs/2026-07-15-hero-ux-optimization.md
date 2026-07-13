# Specyfikacja: Optymalizacja UX/UI sekcji Hero (Mobile First - Above the Fold)

## Cel
Optymalizacja sekcji Hero tak, aby kluczowe elementy (nagłówek, podtytuł, CTA) mieściły się w obszarze "above the fold" na urządzeniach mobilnych, poprawiając UX.

## Zmiany (Mobile First)
- Wysokość sekcji: Zastąpienie `min-h-screen` elastyczniejszym podejściem, aby zapewnić widoczność treści.
- Odstępy: Redukcja `space-y-6` do `space-y-4` na mobile dla lepszego skondensowania treści.
- Typografia: Lekka korekta `text-3xl` dla nagłówka na bardzo małych ekranach.

## Planowany proces
1. Edycja komponentu `src/components/landing/Hero.tsx`.
2. Weryfikacja: `npm run lint` i `npm run typecheck`.
3. Commit zmian.
