# Implementacja refaktoryzacji sekcji Hero - Plan

**Goal:** Przeniesienie kodu sekcji Hero do osobnego komponentu `Hero.tsx`.

**Architecture:**
- Nowy komponent React: `src/components/landing/Hero.tsx`.
- Refaktoryzacja `src/pages/index.astro`.

**Tech Stack:** React, Tailwind CSS, Lucide React.

---

## Chunk 1: Implementacja komponentu Hero

**Pliki:**
- Utworzyć: `src/components/landing/Hero.tsx`

- [ ] **Step 1: Stworzenie pliku `Hero.tsx`**
- [ ] **Step 2: Przeniesienie logiki Hero z `index.astro` do `Hero.tsx`**
- [ ] **Step 3: Użycie stałych wewnątrz komponentu dla treści**

## Chunk 2: Integracja z stroną główną

**Pliki:**
- Modyfikacja: `src/pages/index.astro`

- [ ] **Step 1: Usunięcie starego kodu Hero z `index.astro`**
- [ ] **Step 2: Import i wstawienie komponentu `<Hero />`**
- [ ] **Step 3: Uruchomienie `npm run format`**
- [ ] **Step 4: Weryfikacja: `npm run lint` i `npm run typecheck`**
- [ ] **Step 5: Commit**
