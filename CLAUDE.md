# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repo structure

This is a monorepo of unsolicited redesigns of real companies' websites — each subfolder is an independent, self-contained project with its own package.json, deployed separately. There is currently one project:

- `house-of-feelings/` — Next.js redesign of houseoffeelings.show

The root `README.md` is a gallery: intro + one entry per project (live link + screenshot in `screenshots/<project-name>.jpg`). When adding a new redesign project, add it as a new top-level folder (not nested inside an existing project) and add a matching entry to the root README and a screenshot to `screenshots/`.

Each project keeps the *original* site's layout/structure/functionality intent but rebuilds the visual aesthetic from scratch (typography, color, motion, personality) — the goal is never to clone the source site's look, only its bones.

## Purpose

This is a dual-purpose portfolio: a CS portfolio piece (real, deployed, code-reviewable work for recruiters) and a content series (redesign walkthroughs meant to be posted as Instagram/TikTok content). Both purposes should stay satisfiable at once — don't cut corners that would only pass muster as a portfolio piece (e.g. fabricated content, a broken deploy) or that would only work as content (a mockup with no real code behind it).

Each project should be anchored to a specific **angle**: a one-line "what if this brand's public persona were inverted/exaggerated" premise, chosen deliberately per brand rather than defaulting to "make it look nicer." For House of Feelings the angle was implicit in the source material (chaotic reality-dating-show energy → "Confessional Corkboard" diary-room aesthetic). For the next project, Duolingo, the angle is: the brand's actual public persona is unhinged/chaotic social-media marketing (Duo the owl's viral antics) — invert that into a redesign that plays it as a very polished, academic, almost philosophical marketing voice, in full deadpan contrast to how the brand actually behaves online. State the angle explicitly up front for each new project before design work starts.

## Redesign process (applies to every new project)

Don't jump straight to component code. The workflow that's worked so far:

1. **Pull the real source site's current design tokens and structure first** (palette, type, radius, the specific interactive mechanic worth keeping — e.g. House of Feelings' autoplay hero video) rather than guessing at what it currently looks like. If the source is client-rendered (React/Vue hydration), a plain `curl`/`WebFetch` will only see a loading skeleton — use Playwright (`page.evaluate` after `waitUntil: "networkidle"`) against the live DOM.
2. **Decide what structure to keep vs. what aesthetic to replace** with the user before writing code — same section order/layout/functionality intent, new typography/color/motion/personality. Get explicit sign-off on the angle (see Purpose above) and on which parts of the stack to use (Next.js/TS/Tailwind/shadcn has been the default so far).
3. **Design the aesthetic using the design skills as actual tools, not decoration**: `ui-ux-pro-max` for concrete style/palette/font-pairing directions, `frontend-design` for a distinctiveness audit (does this direction still read as a generic AI-template default — dark-SaaS indigo/coral, cream-serif-terracotta, neo-brutalist Dribbble-default — or is it actually specific to this brand's angle?), `ui-styling` for accessible interaction patterns (shadcn primitives, not bespoke toggles), `design-system` to lock the chosen palette/type into a proper three-layer token system (primitive → semantic → component) in Tailwind v4's CSS-first `@theme`, never raw hex in components. Expect multiple refinement passes before locking a direction in — that's normal, not a sign something's wrong.
4. **Source real content, not placeholder copy** — see Content-sourcing convention below.
5. **Verify visually, not just by type-checking.** Run the dev server and use Playwright to screenshot the real rendered page at 375px/768px/1440px, plus any interactive states (dropdowns open, mobile nav sheet open, hero video mid-playback) — don't declare a visual fix done from reading the code alone. `npx tsc --noEmit` and `npm run lint` catch correctness/a11y issues but not layout bugs, contrast, or a video overlay bleeding through.
6. **Deploy to Vercel and add the project to the root README gallery + screenshots/**, per Repo structure above.

Iterating closely on small visual details (e.g. a logo's exact tail shape/outline/size across several rounds) is expected and welcome — don't treat "good enough" as good enough on anything that's meant to be a signature/brand element.

## Commands

All commands run from inside the project folder, e.g. `cd house-of-feelings`:

```bash
npm run dev     # start dev server (Next.js + Turbopack)
npm run build   # production build
npm run start   # serve a production build
npm run lint    # eslint
npx tsc --noEmit  # typecheck (no separate script defined)
```

There is no test suite/runner configured in any project yet.

### Deploying

Each project deploys to Vercel independently and is already linked (see `.vercel/project.json` inside the project folder):

```bash
cd house-of-feelings && npx vercel --prod --yes
```

### GitHub CLI

`gh` is not installed system-wide on this machine, and `~/.config` is owned by `root` (a pre-existing permissions issue unrelated to this repo), so `gh`'s default config location isn't writable. If `gh` isn't on PATH, download the CLI binary directly from the latest GitHub release and run it with `GH_CONFIG_DIR` pointed at a writable directory (e.g. `~/.gh-config-claude`) rather than trying to fix `~/.config` ownership.

## Content-sourcing convention (applies to every redesign project)

Redesigns reuse real content and media from the source site rather than inventing placeholder copy, but the *mechanism* matters:

- **Prefer legitimate public embeds over downloading/rehosting copyrighted assets.** For video, this means embedding the real YouTube upload (via the IFrame Player API or oEmbed thumbnails) rather than downloading and rehosting footage. For images served from a site's own public CDN specifically as public-facing teasers/previews (e.g. locked-post thumbnails meant to entice sign-ups, or a brand's logo), hotlinking the live CDN URL is fine; recreate brand marks (logos) in the project's own component code/design tokens rather than copying the image file itself.
- **Source sites are frequently client-rendered** (React/Vue hydration) — a plain `curl`/`WebFetch` of the HTML will often only show a loading skeleton with no real content. Use Playwright (`page.evaluate(...)` against the live DOM after `waitUntil: "networkidle"`) to extract real titles, image URLs, counts, and button copy.
- Cross-reference details that matter (e.g. "which episode is this clip actually from") using upload dates, contestant/cast lists in video descriptions, and playlist ordering — don't assume a video's title alone is authoritative (a past mix-up: a clip titled after this show was actually promoting an unrelated spin-off, caught by reading its actual description).

## Architecture: house-of-feelings

Next.js App Router + TypeScript + Tailwind CSS v4 + shadcn/ui. shadcn here is configured on **Base UI** (`@base-ui/react`), not Radix — component APIs differ from the Radix-based shadcn docs: no `asChild`, use the `render` prop instead (e.g. `<DropdownMenuItem render={<a href={...} />}>`), and dialog/menu-adjacent primitives take a `nativeButton` prop when rendered as a non-`<button>` element.

### Design tokens (`app/globals.css`)

Three-layer token system, all in one file (no `tailwind.config.ts` — Tailwind v4 is CSS-first):
1. **Primitive** — raw palette (`--color-paper-*`, `--color-ink-*`, `--color-cork-*`, `--color-confession-*`, `--color-sticky-*`, `--color-tape-*`).
2. **Semantic** — purpose aliases (`--background`, `--primary`, `--card`, etc.) that shadcn components consume, plus a `--surface-stage`/`--surface-stage-foreground` pair for the one dark "stage" section (hero + pricing) that coexists with the light "paper" sections elsewhere on the same page — this is deliberately *not* a light/dark mode toggle, just two permanent surface registers.
3. **Component** — shape language (`--radius-card: 0px`, `--border-width-card`, `--shadow-offset-card*` for the hard offset-shadow "sticker" look, `--rotate-card-*` for the tilted post-it cards).

Fonts are wired through `next/font` in `app/layout.tsx` (`--font-display` = Archivo Black for headings/wordmark, `--font-body` = Space Grotesk, `--font-marker` = Caveat for handwritten accents) and re-exposed as `font-display`/`font-body`/`font-marker` Tailwind utilities via the `@theme inline` block.

### Content is centralized, components are not

All real copy/data lives in `lib/content.ts` (typed via `lib/types.ts`) — nav links, membership tiers, video IDs, post-tile data. Components import from there rather than hardcoding strings, so updating real content never means hunting through JSX. Mock interactivity (subscribe buttons, likes) is local `useState` + a `sonner` toast — there is no backend.

### Component layout

- `components/layout/` — header/footer/nav chrome (shared across the whole page)
- `components/sections/` — one file per homepage section, composed in order by `app/page.tsx`
- `components/ui/` — shadcn primitives (don't hand-edit these beyond what `shadcn add` generates; the local pattern is to build accessible interactive bits — dropdowns, the mobile nav sheet — on top of these rather than bespoke `useState` toggles)
- `components/brand/logo.tsx` — the wordmark, drawn as a single SVG path (rounded rect + tail as one outline) so the border and hard-offset shadow trace one continuous silhouette instead of the rect and tail each getting their own stroke

### Hero background video

`components/sections/hero-video.tsx` is the most fragile/nuanced piece in this codebase:
- Uses the YouTube **IFrame Player API** (loaded dynamically, not a raw `<iframe src>`) specifically so an `onStateChange` callback can signal when playback has *actually* started — a poster still-frame (from `i.ytimg.com`) covers the player until then, masking YouTube's own thumbnail/play-button flash.
- The video element is deliberately **overscaled and top-anchored rather than centered** (`h-[220vh]`/`w-[391vh]` anchored at `top-0`, not `top-1/2`+translate): YouTube renders its seek-hint overlay (prev/pause/next icons) at the player's own vertical center regardless of `controls=0`. Anchoring top instead of centering pushes that center point (and the overlay) below the visible, `overflow-hidden`-clipped area — don't "simplify" this back to a centered cover-fit without reintroducing that overlay.
- `hooks/use-reduced-motion.ts` uses `useSyncExternalStore` (not `useState` + `useEffect`) specifically to avoid a hydration mismatch and satisfy the `react-hooks/set-state-in-effect` lint rule — this is the idiomatic pattern for subscribing to a browser media query, don't revert to an effect-based version.
