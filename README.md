# Gem House

Responsive diamond education page built with React, TypeScript, Tailwind CSS v4, and Vite. The diamond shape wheel uses GSAP Draggable and ScrollTrigger.

## Development

Use Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

## Checks and build

```sh
npm run lint
npm run build
npm run preview
```

The build command checks TypeScript and writes the production site to `dist/`.

## Structure

- `src/sections/`: page sections and diamond education charts.
- `src/components/`: the interactive wheel and shared UI components.
- `src/data/`: wheel geometry.
- `src/utils/`: shared design-unit conversion.
- `public/assets/`: images and icons served without processing.

Spacing utilities use design pixels: one unit equals one pixel at a 1440px viewport, scales proportionally between 768px and 1920px, and resets to one pixel below 768px. Use `fs-N` for font sizes, unitless line heights, and `em` letter spacing.

This is a frontend design implementation. Product listings are sample content; commerce links, pagination, account controls, and newsletter submission need application services before a production launch.
