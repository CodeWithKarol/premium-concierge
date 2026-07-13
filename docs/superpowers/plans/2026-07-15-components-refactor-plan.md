# Implementacja refaktoryzacji sekcji ConciergeWhy i ConciergeProcess - Plan

**Goal:** Wydzielenie treści do stałych wewnątrz komponentów `ConciergeWhy` i `ConciergeProcess` dla spójności architektury.

**Architecture:**
- Modyfikacja plików komponentów: `src/components/landing/ConciergeWhy.tsx` oraz `src/components/landing/ConciergeProcess.tsx`.

---

## Chunk 1: Refaktoryzacja ConciergeWhy

**Pliki:**
- Modyfikacja: `src/components/landing/ConciergeWhy.tsx`

- [ ] **Step 1: Wydzielenie treści do stałych (`problems`, `content`)**
- [ ] **Step 2: Aktualizacja komponentu, aby używał tych stałych**

## Chunk 2: Refaktoryzacja ConciergeProcess

**Pliki:**
- Modyfikacja: `src/components/landing/ConciergeProcess.tsx`

- [ ] **Step 1: Wydzielenie treści do stałych (`steps`)**
- [ ] **Step 2: Aktualizacja komponentu, aby używał tych stałych**

## Chunk 3: Weryfikacja

- [ ] **Step 1: Uruchomienie `npm run format`**
- [ ] **Step 2: Weryfikacja: `npm run lint` i `npm run typecheck`**
- [ ] **Step 3: Commit**
