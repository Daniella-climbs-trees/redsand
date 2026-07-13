# RedSand

Landing site for **RedSand** — automation and AI systems for small businesses. AI phone answering, client intake automation, newsletters, and workflow optimization, built with an industrial automation engineer's playbook applied to small-business operations.

**Live:** [redsand.systems](https://redsand.systems)

## About

A single-page marketing site with a Mars-beach visual identity: an indigo-to-coral sunset sky over red Martian dunes, twin moons (Phobos and Deimos), and a palm-and-surfboard silhouette. The concept — human attention is a business's scarcest resource, so automate the background work and reserve people for what only people can do.

## Tech

- Hand-written **HTML, CSS, and vanilla JS** — no framework, no build step
- Pure CSS/SVG artwork (gradient sky, layered dunes, hand-drawn palm) — no image assets, so the page loads instantly
- Responsive down to mobile; respects `prefers-reduced-motion`; semantic landmarks and `aria-live` form status for accessibility
- Contact form posts to **Formspree** via `fetch` with honeypot spam protection — no exposed email address
- **Continuous deployment**: pushes to `main` auto-deploy through Cloudflare

## Structure

```
redsand/
├── index.html      # markup
├── styles.css      # all styling, organized by section
├── script.js       # contact form handler
├── favicon.svg     # red planet favicon
├── robots.txt
└── wrangler.jsonc  # Cloudflare static-assets config
```

## Local development

No tooling required. Clone the repo and open `index.html` in any browser:

```bash
git clone https://github.com/Daniella-climbs-trees/redsand.git
cd redsand
open index.html
```

Edit, commit, and push — Cloudflare redeploys automatically.

## Roadmap

- [x] Case studies
- [ ] Client testimonials
- [ ] Newsletter signup

---

© 2026 RedSand · San Diego, CA
