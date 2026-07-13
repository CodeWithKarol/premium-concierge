# AGENTS.md

High-signal instructions for working with this Astro + React + TypeScript + shadcn/ui repository.

## Commands
- `npm run dev`: Start development server (Astro).
- `npm run build`: Production build.
- `npm run lint`: Run ESLint.
- `npm run format`: Prettier (ts, tsx, astro).
- `npm run typecheck`: Astro check.

## UI/Components (shadcn/ui)
- Components are located in `src/components/ui/`.
- Use `npx shadcn@latest add [component]` to add new UI components.
- Path alias `@/` is configured for imports (e.g., `import { Button } from "@/components/ui/button"`).
- Prefer absolute imports using the `@/` alias for `src/` files.

## Project Structure
- `src/pages/`: Astro route files.
- `src/components/`: React/Astro components.
- `src/lib/`: Utilities.
- `src/styles/`: Global CSS.
