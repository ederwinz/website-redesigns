# CLAUDE.md — henrybpan.com redesign

## Constraint: content is untouchable

This is a visual/aesthetic redesign of Henry's real personal site (http://henrybpan.com),
not a new site and not a content rewrite. Every piece of his actual writing — bio copy,
project descriptions, credentials, links — must stay authentic to what he actually wrote.
No rewriting his voice, no inventing new copy, no paraphrasing "to fit the aesthetic."
Pull his real content from the live site (it's likely client-rendered, so use Playwright
against the live DOM, not a plain curl/WebFetch that'll only see a loading skeleton) and
carry it over verbatim. If something is missing or ambiguous, ask — never invent
placeholder text.

## Aesthetic reference

Visual direction is inherited from a prior redesign project ("The Athenaeum," a Duolingo
redesign) at `/Users/edwinzhu/Desktop/Side Projects/website-designing/duolingo` — reuse
its aesthetic *system*, not its theme or content.

Read directly for reusable patterns:
- `app/globals.css` — three-layer token architecture (primitive → semantic → component)
  and shape/shadow tokens
- `app/layout.tsx` — the `next/font` wiring pattern
- `components/ui/*` — shadcn primitives, fully generic
- `components/motion/reveal.tsx`, `hooks/use-reduced-motion.ts` — generic, reusable as-is

Do not read or reuse (Duolingo-specific content, not aesthetic system):
`lib/content.ts`, `lib/types.ts`, `components/brand/logo.tsx`,
`components/layout/course-dropdown.tsx`, `components/sections/*`, `app/page.tsx`.

**Keep** (the aesthetic, at the systems level):
- Overall register: polished, sophisticated, restrained — feels considered and permanent,
  not trendy. Confident whitespace and structure. Reads as "someone with taste," not
  "someone who tried hard."
- Color approach: warm, muted, low-saturation palette (aged paper/stone neutrals as base,
  one deep desaturated green as primary accent, muted gold/bronze secondary, dusty teal
  accent, a single muted brick-red reserved for rare/destructive use) rather than bright
  saturated brand colors. Two coexisting surfaces (one light/paper-like, one dark) used
  deliberately per section, not a light/dark mode toggle.
- Type pairing: a distinctive, slightly formal serif/display face for headings (caps, wide
  tracking) paired with a warm literary serif or humanist body face, plus a small
  monospace face used sparingly for labels/metadata (letter-spaced, uppercase). The
  heading/body contrast is what reads "scholarly," not the specific typefaces.
- Shape language: sharp/minimal corner radii (near-0, not soft rounded-SaaS corners),
  hairline borders, soft warm-toned "relief" drop shadows (not harsh black) giving
  elements physical weight rather than flat-card feel.
- Restraint on decoration: ornamental details used sparingly as accents, not everywhere.

**Drop**:
- Literal Greek/Roman/"ancient academy" theming — no laurels, columns, meander/Greek-key
  patterns, marble-and-bronze naming, Latin/Greek framing, institutional voice.
- The institutional formality/pitch — Henry's site is a real individual's personal site,
  structured around whatever sections his actual site already has (about, work, contact,
  etc.), just visually elevated. "A sophisticated person's home on the web," not "a
  university's homepage."
- Any Duolingo-specific content, IP, or in-jokes.

## Process

1. Pull henrybpan.com's real structure/content via Playwright before touching aesthetics.
2. Use design skills as tools, not decoration: `ui-ux-pro-max` for concrete palette/type
   direction options, `frontend-design` for a distinctiveness audit (does this read as
   specific to Henry, or a generic AI-template default?), `ui-styling` for accessible
   interaction patterns (shadcn primitives, not bespoke toggles), `design-system` to lock
   the chosen palette/type into a three-layer token system — never raw hex in components.
   Expect multiple refinement passes before locking a direction in.
3. Propose the concrete direction before writing component code.
4. Verify visually: run the dev server and screenshot the real rendered page via Playwright
   at 375px/768px/1440px, plus interactive states, before calling anything done.
