# RedSand

Landing site for **RedSand** — automation and AI systems for small businesses. AI phone answering, client intake automation, newsletters, and workflow optimization, built by an automation engineer applying industrial systems thinking to small-business operations.

**Live:** [redsand.systems](https://redsand.systems)

## About

A single-page marketing site with a Mars-beach visual identity: an indigo-to-coral sunset sky over red Martian dunes, twin moons (Phobos and Deimos), and a palm-and-surfboard silhouette. The concept — human attention is a business's scarcest resource, so automate the background work and reserve people for what only people can do.

## Tech

- Hand-written **HTML + CSS**, no framework and no build step
- Pure CSS/SVG artwork (gradient sky, layered dunes, hand-drawn palm) — no image assets, so the page loads instantly
- Responsive down to mobile; respects `prefers-reduced-motion`
- Contact form via **Netlify Forms** with honeypot spam protection — no exposed email address
- **Continuous deployment**: pushes to `main` auto-deploy through Netlify

## Structure

```
redsand/
├── index.html   # entire site — markup, styles, and SVG artwork
└── README.md
```

## Local development

No tooling required. Clone the repo and open `index.html` in any browser:

```bash
git clone https://github.com/YOUR_USERNAME/redsand.git
cd redsand
open index.html
```

Edit `index.html`, commit, and push — Netlify redeploys automatically.

## Roadmap

- [ ] Case study section with real client metrics
- [ ] Client testimonial
- [ ] Newsletter signup

---

© 2026 RedSand · San Diego, CA
