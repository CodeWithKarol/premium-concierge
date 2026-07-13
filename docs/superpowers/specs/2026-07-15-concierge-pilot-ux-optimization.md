# Specyfikacja: Optymalizacja UX/UI sekcji ConciergePilot (Mobile First)

## Cel
Poprawa czytelności i dostępności sekcji "Program pilotażowy" na urządzeniach mobilnych poprzez zwiększenie odstępów i optymalizację bloków tekstu.

## Zmiany (Mobile First)
- Czytelność kroków: Zwiększenie marginesu między punktami listy (`space-y-8`).
- Kontrast numeracji: Wzmocnienie wyróżnienia numerów kroków dla lepszej widoczności na ciemnym tle.
- Optymalizacja tekstu: Ograniczenie szerokości bloku tekstu (`max-w-xl`) dla poprawy komfortu czytania.

## Planowany proces
1. Aktualizacja komponentu `src/components/landing/ConciergePilot.tsx`.
2. Weryfikacja: `npm run lint` i `npm run typecheck`.
3. Commit zmian.
