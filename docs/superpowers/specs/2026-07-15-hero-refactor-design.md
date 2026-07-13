# Specyfikacja: Refaktoryzacja sekcji Hero

## Cel
Przeniesienie sekcji Hero z `src/pages/index.astro` do osobnego komponentu React (`Hero.tsx`) w celu poprawy czytelności kodu i ułatwienia zarządzania treścią.

## Design
- Komponent: `Hero.tsx`.
- Lokalizacja: `src/components/landing/Hero.tsx`.
- Refaktoryzacja: Wydzielenie stałych tekstowych (tytuł, podtytuł, treść przycisku) do obiektu konfiguracyjnego wewnątrz komponentu dla lepszej czytelności.

## Planowany proces
1. Stworzenie pliku `src/components/landing/Hero.tsx`.
2. Aktualizacja `src/pages/index.astro` (usunięcie starego kodu, zaimportowanie nowego komponentu).
3. Weryfikacja: `npm run lint` i `npm run typecheck`.
4. Commit zmian.
