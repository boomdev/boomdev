---
name: Boomdev
description: Warm workshop index for independent software projects — sea-glass teal and dusty clay on linen neutrals.
colors:
  ink: "#2a3034"
  sea-glass: "#4a7c88"
  sea-glass-deep: "#3a6570"
  sea-glass-muted: "#6d959c"
  clay: "#c4947f"
  clay-deep: "#9a7159"
  linen: "#f9f8f5"
  linen-tint: "#f2f0eb"
  surface: "#fdfcfb"
  text-muted: "#5a6366"
  border: "#dcd7cf"
  on-primary: "#f2f8f9"
typography:
  display:
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.125rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.03em"
  title:
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  body:
    fontFamily: "'Source Sans 3', 'Segoe UI', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "'Source Sans 3', 'Segoe UI', system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.03em"
rounded:
  sm: "10px"
  lg: "16px"
  pill: "999px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  2xl: "3rem"
  3xl: "4.5rem"
components:
  button-primary:
    backgroundColor: "{colors.sea-glass}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.pill}"
    padding: "0.7rem 1.4rem"
  button-primary-hover:
    backgroundColor: "{colors.sea-glass-deep}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.pill}"
    padding: "0.7rem 1.4rem"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.7rem 1.4rem"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  nav-link:
    backgroundColor: "{colors.linen-tint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.5em 1em"
---

# Design System: Boomdev

## Overview

**Creative North Star: "The Workshop Directory"**

A founder or collaborator scanning project links at midday on a bright desk, phone in one hand or laptop in front of them. The UI reads like a well-kept index on a workbench: warm linen paper, sea-glass teal for wayfinding, dusty clay for secondary warmth. Nothing shouts; everything orients.

Boomdev is a **brand** surface (the design is the product). Color strategy is **committed dual accent**: sea-glass teal carries links, primary actions, and section markers; clay accents secondary hovers and status chips. Neutrals are warm and green-tinted, never pure gray or pure black.

Motion is **restrained**: 200ms ease-out on color, border, and shadow. Pointer devices get a slight lift on project cards and primary buttons; touch and keyboard users get clear focus rings (clay) without depending on hover.

**Key characteristics:**

- Single-page index: hero, about, principles list, project directory, contact
- Project cards are the only card grid; principles use a flat bordered list
- Sticky solid header with logo grid (mark aligned to wordmark, tagline below name)
- Tally embed with dynamic height; no iframe scrollbar
- `prefers-color-scheme: dark` inverts grounds while keeping accent hues recognizable
- WCAG AA baseline; 44px touch targets on header nav (footer nav slightly denser)

**Explicitly rejects** (from PRODUCT.md): VC SaaS homepage clichés, fake agency scale, AI hype slop, SEO farms, gradient text, glass stacks, hero metrics, identical icon-card grids everywhere.

## Colors

Sea-glass teal and dusty clay on warm linen. **Canonical values live in CSS as OKLCH** (`src/styles/global.css`); hex in frontmatter is an sRGB approximation for Stitch tooling.

### Primary

- **Sea-Glass Teal** (`#4a7c88` / `oklch(48% 0.06 210)`): Primary buttons, links, logo accent on "dev", section title bar, logo mark fill, skip link background.
- **Deep Sea-Glass** (`#3a6570` / `oklch(38% 0.055 210)`): Hero emphasis span, primary button hover/focus, placeholder code tint.
- **Muted Sea-Glass** (`#6d959c` / `oklch(58% 0.045 210)`): External link arrow on project cards.

### Secondary

- **Dusty Clay** (`#c4947f` / `oklch(62% 0.06 55)`): Focus ring color, secondary button hover border tint.
- **Deep Clay** (`#9a7159` / `oklch(48% 0.055 55)`): Secondary button hover label on light mode.

### Neutral

- **Warm Ink** (`#2a3034` / `oklch(28% 0.02 240)`): Body text, headings.
- **Linen Ground** (`#f9f8f5` / `oklch(98% 0.008 85)`): Page background.
- **Linen Tint** (`#f2f0eb` / `oklch(95.5% 0.012 80)`): Projects section band, nav hover fill.
- **Surface** (`#fdfcfb` / `oklch(99.5% 0.006 85)`): Header, footer, cards, Tally wrapper.
- **Muted Text** (`#5a6366` / `oklch(48% 0.025 220)`): Subtitles, descriptions, nav default.
- **Soft Border** (`#dcd7cf` / `oklch(88% 0.015 80)`): Cards, header rule, value list dividers.
- **On Primary** (`#f2f8f9` / `oklch(97% 0.02 210)`): Text on primary buttons (tinted, not pure white).

### Named Rules

**The OKLCH Source Rule.** All new color decisions are authored in OKLCH in CSS. Hex in this file is for export compatibility only; never drift the two without updating both layers intentionally.

**The Two-Accent Rule.** Sea-glass and clay are the only accent hues. Badge status colors stay within muted tints of teal, green, clay, and blue-gray families.

**The No Pure Black Rule.** Never use `#000` or `#fff`. Tint neutrals toward warm linen or sea-glass.

## Typography

**Display font:** Bricolage Grotesque (with system-ui fallback)  
**Body font:** Source Sans 3 (with Segoe UI, system-ui fallback)  
**Mono:** ui-monospace stack for inline code in placeholders

**Character:** Friendly structure in headlines, humanist clarity in body. Reads like a field guide next to a workshop ledger: confident display, plain captions.

### Hierarchy

- **Display** (700, `clamp(2rem, 5vw, 3.125rem)`, line-height 1.12): Hero H1 only; `text-wrap: balance`; max ~18–20ch.
- **Headline** (700, `clamp(1.375rem, 2.5vw, 1.75rem)`, line-height 1.25): Section H2s with 36×3px sea-glass bar above.
- **Title** (600, 1.25rem, line-height 1.25): Project card names, value list titles.
- **Body** (400, 1.0625rem, line-height 1.65): Prose and card descriptions; max 65ch in prose blocks, 42rem container (`--prose-width`).
- **Label** (600, 0.8125rem, slight positive tracking): Badges, tags, logo tagline, footer copyright.

### Named Rules

**The 1.25 Scale Rule.** Type steps use a 1.25 ratio from caption (0.8125rem) through display. Do not flatten hierarchy with 1.1× steps.

**The One H1 Rule.** Exactly one H1 per page. Section titles are H2.

## Elevation

**Flat-by-default with border and light shadow.** Depth is tonal (linen-tint bands) plus 1px borders, not layered glass or heavy drop shadows.

### Shadow vocabulary

- **Resting card** (`0 1px 2px` ink at 6% opacity): Subtle lift on all cards.
- **Card hover** (`0 10px 28px` sea-glass-tinted shadow): Project cards on pointer hover only.
- **Primary button** (`0 2px 8px` → `0 4px 12px` on hover): Soft teal glow, not dramatic.

Section markers use a **solid 3px sea-glass bar** (not a gradient bar, not a side stripe).

**The No Glass Rule.** No decorative backdrop-filter stacks. Header is solid `surface`.

## Components

### Buttons

- **Shape:** Full pill (`999px` radius), min-height 44px (`2.75rem`).
- **Primary:** Sea-glass fill, on-primary text, light shadow; hover/focus deepens to sea-glass-deep. Pointer hover: `translateY(-1px)`.
- **Secondary:** Surface fill, border, ink text; hover: clay border, clay-deep text, 8% clay wash on background. Still in codebase; hero uses primary only after distill.

### Navigation

- **Header:** Sticky, solid surface, bottom border, safe-area top padding. Logo CSS grid: mark row-aligned with wordmark, tagline in column 2 row 2. Nav pills: muted default, linen-tint hover/focus, compact active wash.
- **Footer:** Compact (`padding-block` 1.5rem). Nav mirrors header pill style at slightly smaller touch height (2.25rem). Copyright as caption text.

### Cards (project directory only)

- **Shape:** 16px radius, 1.5rem padding, full-height flex column.
- **Project link card:** Entire card is `<a>`; external ↗ with screen-reader new-tab cue. Meta row: status badge + category tag. Pointer hover: lift 3px, sea-glass-tint border, card-hover shadow. Active: border tint without lift.
- **Coming soon:** Same shell without link; reduced opacity.

### Badges and tags

- **Badges:** Pill, semibold caption, semantic OKLCH tints per status (product, project, experiment, research, content, AI, home base).
- **Tags:** Muted caption text only, no fill.

### Values list

- **Not cards.** Border-bottom list items, display title + sm description, max-width prose. No icons, no side stripes.

### Contact (Tally)

- **Wrapper:** Bordered surface card, hidden overflow, max-width 40rem on large screens.
- **Embed:** Official `embed.js`, `data-tally-src` with `dynamicHeight=1` and `transparentBackground=1`. No fixed 500px iframe; no inner scrollbar.
- **Fallback:** Dashed placeholder or amber-tinted error alert with mailto when `PUBLIC_CONTACT_EMAIL` is set.

## Do's and Don'ts

### Do:

- **Do** author colors in OKLCH in `global.css` and keep neutrals warm-tinted.
- **Do** use sea-glass for primary wayfinding and clay for focus/secondary warmth only.
- **Do** keep copy plain and scannable; one H1; no em dashes in UI copy.
- **Do** open external projects in a new tab with `rel="noopener noreferrer"` and an accessible new-window cue.
- **Do** honor `prefers-reduced-motion` (disable smooth scroll and transitions globally when set).
- **Do** use semantic sections with `aria-labelledby` and `scroll-margin-top` under the sticky header for in-page anchors.
- **Do** validate Tally and project URLs at build time.

### Don't:

- **Don't** use gradient text (`background-clip: text`) on headlines or the logo.
- **Don't** build toward a **VC-backed SaaS homepage**: purple gradients, hero metrics, interchangeable product UI marketing.
- **Don't** mimic a **fake agency or corporate site**: invented scale, stock authority, "we innovate" gloss.
- **Don't** ship **AI hype page** aesthetics: vague magic claims, glass cards, template icon+title+blurb grids on every section.
- **Don't** use **side-stripe borders** (colored left/right accent stripes on cards or lists).
- **Don't** use pure `#000` / `#fff` neutrals.
- **Don't** use bounce or elastic easing; use ease-out (`cubic-bezier(0.25, 1, 0.5, 1)`).
- **Don't** add decorative hero blobs or page-wide radial gradients (removed in distill pass; keep absent unless they earn a specific narrative purpose).
