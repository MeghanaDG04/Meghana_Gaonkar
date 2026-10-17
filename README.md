# Meghana Gaonkar — The Puzzle of Me

React + Vite portfolio (Framer Motion, Lucide). Dark neon puzzle background, premium content layout.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

## Resume
Place your PDF at **`public/Meghana-Gaonkar-Resume.pdf`** (served at `/Meghana-Gaonkar-Resume.pdf`).
Until the file exists, the Download buttons will 404 — the PDF is not included.

## Configure content
All content lives in `src/data/portfolioData.js`:
- Project `github` / `live` URLs: empty = shown as "to be configured". Only `http(s)://` URLs render as links.
- Certification `url`: same behaviour.

## Easter eggs (optional, nothing important is hidden)
1. Faint puzzle piece in the About card → developer joke.
2. `{ }` next to the name in the hero → secret message.
3. Press **P** → puzzle spin.
Finding all three shows "You found all the pieces!". Contact shows a running count.

## Accessibility / performance
Decorative layers are `aria-hidden` + `pointer-events:none`; reduced-motion disables all animation; mobile hides most background pieces and parallax.
