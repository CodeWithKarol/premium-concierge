# Specyfikacja: Optymalizacja UX/UI sekcji ConciergeStory (Mobile First)

## Cel
Poprawa czytelności i komfortu czytania sekcji "Story" na urządzeniach mobilnych poprzez optymalizację typografii i odstępów.

## Zmiany (Mobile First)
- Typografia: Zwiększenie `line-height` (`leading-relaxed` -> `leading-loose`) oraz fontu na mobile dla większej czytelności.
- Odstępy: Zwiększenie marginesów wewnętrznych (`px-8`) na mobile, aby tekst nie przylegał do krawędzi ekranu.
- Czytelność: Utrzymanie `max-w-2xl` jako idealnej szerokości dla tekstu.

## Planowany proces
1. Edycja komponentu `src/components/landing/ConciergeStory.tsx`.
2. Weryfikacja: `npm run lint` i `npm run typecheck`.
3. Commit zmian.
