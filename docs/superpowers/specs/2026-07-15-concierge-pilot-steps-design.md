# Specyfikacja: Sekcja "Program pilotażowy – krok po kroku"

## Cel
Przebudowa sekcji "Program pilotażowy" na stronie głównej (`src/pages/index.astro`), aby przekształcić ją w czytelny przewodnik (krok po kroku) zwiększający jakość zgłoszeń od klientów.

## Design (Step-by-Step Box)
- Layout: Wyśrodkowany, wyróżniony blok z numerowaną listą.
- Elementy:
    - Nagłówek: "Program pilotażowy – krok po kroku".
    - Lista numerowana (1-3): opis wymagań (przedmiot, oczekiwania, zdjęcie).
    - Przycisk CTA: "Wypełnij zgłoszenie i sprawdź, czy współpracujemy".
    - Adnotacja: Informacja o czasie odpowiedzi (24h).
- Stylistyka: Czysty, profesjonalny blok, spójny z estetyką landing page'a.

## Komponent
- Nazwa: `ConciergePilot.tsx` (aktualizacja)
- Lokalizacja: `src/components/landing/ConciergePilot.tsx`

## Planowany proces
1. Aktualizacja komponentu `ConciergePilot.tsx`.
2. Weryfikacja: `npm run lint` i `npm run typecheck`.
3. Commit zmian.
