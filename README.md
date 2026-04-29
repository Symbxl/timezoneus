# Time Zone US — Marketing Site

A Next.js 15 marketing site for **Time Zone US**, designers and manufacturers of custom promotional watches. Design DNA inspired by zero.nyc — bold editorial typography, an emoji-led work grid, and a confident, brand-forward voice — adapted for a watch company with a warm bone/ink/brass palette and watch-face decorative elements.

## Tech

- **Next.js 15** (App Router, TypeScript)
- **React 19**
- **Tailwind CSS v4** (with `@theme` design tokens)
- Google Fonts: **Anton** (display), **Instrument Serif** (italic accents), **Inter Tight** (body), **JetBrains Mono** (technical / labels)
- Zero image dependencies — every watch dial is rendered live as SVG

## Run it locally

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

The site will be running at **http://localhost:3000**.

## Build for production

```bash
npm run build
npm run start
```

## File structure

```
timezone-us/
├── app/
│   ├── layout.tsx          # Root layout, font imports, metadata
│   ├── page.tsx            # Home — composes all sections
│   ├── globals.css         # Tailwind + design tokens + animations
│   └── components/
│       ├── Nav.tsx           # Sticky nav with live EST clock
│       ├── Hero.tsx          # Massive headline + spinning watch dial
│       ├── Marquee.tsx       # Scrolling capability strip
│       ├── WorkGrid.tsx      # Project tiles with live SVG watch faces
│       ├── Capabilities.tsx  # Dark services section
│       ├── Partners.tsx      # Brand grid
│       ├── News.tsx          # "Around the workshop" updates
│       ├── FAQ.tsx           # Native <details> accordion
│       └── Contact.tsx       # Dark footer with giant background type
├── public/
├── package.json
├── tsconfig.json
├── postcss.config.js
├── next.config.js
└── README.md
```

## Customizing

- **Brand colors** live as CSS variables in `app/globals.css` under `@theme`. Change `--color-bone`, `--color-brass`, `--color-rust` to retune the palette.
- **Project tiles** are defined in the `projects` array at the top of `app/components/WorkGrid.tsx`. Drop in real client names and tweak the `bg`/`fg`/`accent`/`dial` props.
- **Partners**, **News**, and **FAQ** content all sit at the top of their respective component files as simple arrays.
- **Real product photography** can replace the SVG watch dials inside `WorkGrid.tsx` — swap the `<Dial>` component for a `<Image>` in any tile.

## Notes

All copy is placeholder and should be reviewed/replaced by Time Zone US before launch. Email addresses, phone numbers, and the workshop address are illustrative.
# timezoneus
