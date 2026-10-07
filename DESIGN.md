# Calico Design System Reference

**AI IMPLEMENTATION RULES & CONSTRAINTS**
*   **Unit System:** The base em/rem unit is exactly **10px** (e.g., `1rem` = 10px, `1.5rem` = 15px, `2rem` = 20px). Treat all spacing and sizing conversions according to this strict 1:10 rule.
*   **Typography Depreciation:** **Halis GR is strictly deprecated and must not be used.** All typography across the design system—including display, headings, feature buttons, and callouts—must now use **Public Sans**.
*   **Source of Truth:** If a Figma snapshot value conflicts with CMS pattern rules, apply the CMS pattern limits and breakpoint rules defined below.

## New Navigation System (Flat Nav Rollout)

The navigation structure has been updated to a new "Flat Nav" system with strict interaction and responsive layout rules.

### Layout & Sizing
*   The flat navigation supports a maximum of 5 top-level items.
*   The top navigation bar has a fixed height of 64px.
*   The `nav.flat` text style dictates Public Sans font, 15px size, Regular (400) weight, and Center alignment.
*   Top-level flat nav buttons utilize an 8px gap and 20px padding.
*   Only one drop menu is permitted to be open at a given time.

### Interaction States
*   **Top-level Link Hover:** The background color flips to Sandstone, and the text color flips to Maroon.
*   **Top-level Link Click:** Drop menu opens.
*   **Child Link Hover:** An underline is applied to the child link.
*   **Child Link Click:** Drop menu opens.

### Breakpoints & Responsive Behavior
*   **XL+ Breakpoint (>1280px):** The layout uses automatic spacing (`Space between`) or a `-60px` gap.
*   **XL Breakpoint (1280px):** Flat nav buttons flex to fill available space, and the H1 (Logo space) shrinks to accommodate a minimum width of 320px. The H1 text must use `text-wrap: balance`.
*   **L Breakpoint (1080px):** Drop menu child links transition into a flexing column layout. Flat nav button padding is squeezed from 15px to 8px. Drop menu horizontal padding is increased from 20px to 40px. The H1 minimum width is further reduced to 250px.
*   **M Breakpoint (800px):** The navigation collapses into a mobile hamburger menu.

## Component and Pattern Rules

### Statistics Cards
*   **Data Limits:** Maximum of 10 characters for the primary figure and 90 characters for the description.
*   **Card Limits:** A grid must contain between 2 and 8 cards.
*   **Responsive Typography:** Statistics text must scale to fit all characters on one single line. If one statistic requires scaling, all adjacent stats must scale down so the text size of the most scaled item is shared by all items.
*   **Grid Layout:** Cards stretch to fill the available container space, and the CMS automatically balances items equally across rows (e.g., 5 cards yield a row of 3 and a row of 2).
*   **Breakpoint Adaptation:** Top and bottom padding is reduced to 3rem at the 800px breakpoint.

### Brand Text Callouts & Featured Links
*   **Brand Text / Callouts:** Titles allow a 55-character maximum, and body text allows a 265-character maximum. Columns have a max-width of 560px.
*   **Featured Links:** Titles enforce a 55-character limit (or a 25-character variation), descriptions are limited to 160 characters, and preheaders are limited to 22 characters.
*   **Icon Links:** Icon labels carry a 32-character maximum, while associated body text is restricted to 265 characters.
*   **List of Items:** Cards allow a 140-character maximum title, a 200-character description, and a 32-character eyebrow/tag.
*   **Flex Image Gallery:** Features a 50-character maximum heading and 160-character description, with a minimum text box width of 340px.

### Colorways Background Interactions
The background color of a card dictates the permitted text color and element styles, accompanied by a strict 32-character title limit, a 265-character body limit, a 360px minimum height, and 6rem (60px) margins.

*   **Maroon & Dark Gold Backgrounds:** Body text must be White.
*   **Yellow, Teal, Light Blue, & Peach Backgrounds:** Body text must be Maroon. (Note: Peach specifically replaces older Charcoal iterations).
*   **Sandstone & White Backgrounds:** Body text must be Charcoal. White backgrounds explicitly require a Gold border.

## Variables

All variables belong to `Calico`, use `Mode 1`, and total **37**.

### Brand colors

| Exact variable name | Value | Scope | Description/restriction |
|---|---:|---|---|
| `Color-brand/Maroon` | `#501214` | `ALL_SCOPES` | — |
| `Color-brand/Charcoal ✋` | `#363534` | `TEXT_FILL`, `STROKE_COLOR` | Text only; do not use as fill. |
| `Color-brand/Teal (River)` | `#70B7AA` | `ALL_SCOPES` | — |
| `Color-brand/Yellow (Old Gold)` | `#EBBA45` | `ALL_SCOPES` | — |
| `Color-brand/Red (Rojo)` | `#E32849` | `ALL_SCOPES` | — |
| `Color-brand/TXST Gold` | `#AC9155` | `ALL_SCOPES` | — |
| `Color-brand/Salamander ✋` | `#F9DCDE` | `ALL_SCOPES` | Design elements only; currently unavailable in Gato. |
| `Color-brand/Light Blue` | `#BFF3FD` | `ALL_SCOPES` | — |
| `Color-brand/Peach (New)` | `#EA664D` | `ALL_SCOPES` | — |
| `Color-brand/Web Blue` | `#00507A` | `ALL_FILLS`, `STROKE_COLOR` | Reserved for hyperlinks. |
| `Color-brand/Dark Gold` | `#64480C` | `ALL_SCOPES` | — |
| `Color-brand/Sandstone` | `#F5F1EE` | `FRAME_FILL`, `SHAPE_FILL`, `STROKE_COLOR`, `EFFECT_COLOR` | Web only; use only on backgrounds. |
| `Color-brand/Bright Gold` | `#D7BD8A` | `ALL_SCOPES` | — |
| `Color-brand/Web Red` | `#B30E1B` | `ALL_FILLS`, `STROKE_COLOR` | Alerts only. |
| `Color-brand/Blue ✋` | `#007096` | `ALL_SCOPES` | Marked as restricted, but the snapshot does not state the restriction. |

### Gray colors

| Exact variable name | Value | Scope | Documented meaning |
|---|---:|---|---|
| `Color-gray/White` | `#FFFFFF` | `ALL_SCOPES` | Neutral |
| `Color-gray/White Smoke` | `#F7F7F7` | `ALL_SCOPES` | Neutral |
| `Color-gray/Light Gray` | `#D7D7D7` | `ALL_SCOPES` | Neutral |
| `Color-gray/AA Gray <h>` | `#949494` | `ALL_SCOPES` | AA-labeled for headings |
| `Color-gray/AA Gray <p>` | `#767676` | `ALL_SCOPES` | AA-labeled for paragraph/body text |
| `Color-gray/Medium Gray (AAA)` | `#595959` | `ALL_SCOPES` | AAA-labeled neutral |
| `Color-gray/Black` | `#000000` | `ALL_SCOPES` | Neutral |

### Rem spacing and sizing

The documented scale establishes **1rem = 10px**.

| Exact variable name | Value | Intended scale value |
|---|---:|---:|
| `Units-rem/0_5rem` | `5` | 0.5rem / 5px |
| `Units-rem/1rem` | `10` | 1rem / 10px |
| `Units-rem/1pt5rem` | `15` | 1.5rem / 15px |
| `Units-rem/2rem` | `20` | 2rem / 20px |
| `Units-rem/3rem` | `30` | 3rem / 30px |
| `Units-rem/4rem` | `40` | 4rem / 40px |
| `Units-rem/5rem` | `50` | 5rem / 50px |
| `Units-rem/6rem` | `60` | 6rem / 60px |
| `Units-rem/8rem` | `80` | 8rem / 80px |

All rem variables use `ALL_SCOPES`.

## Typography

**Public Sans** is the universal typeface for this design system. It must be utilized for body copy, controls, navigation, articles, cards, timeline banners, page titles, key headings, feature buttons, card eyebrows, timeline headings, and callouts.

- **Font Awesome 6 Free:** icon-font style.

All text styles use `textDecoration: NONE`.

## Grid styles

| Style | Purpose | Columns | Gutter | Alignment | Offset/section |
|---|---|---:|---:|---|---|
| `S 600` | Width ≤600px | 4 | 20 | STRETCH | offset 20 |
| `M 800` | Width ≤800px | 6 | 20 | STRETCH | offset 20 |
| `L-XL 1200` | Width ≥1024px | 12 | 40 | STRETCH | offset 20 |
| `XL+` | Wider mockups | 12 | 40 | CENTER | section size 60 |
| `%width—10col` | 10% estimates | 10 | 0 | STRETCH | offset 0 |
| `%width—20col` | 5% estimates | 20 | 0 | STRETCH | offset 0 |
| `%width—100col` | 1% estimates | 100 | 0 | STRETCH | offset 0 |

## Naming conventions

- Variables use slash groups: `Color-brand/`, `Color-gray/`, `Units-rem/`, `Units-width/`, and `CharacterCounts/`.
- Restricted colors may contain `✋`.
- Text styles are role-first, template-first, documentation-only, or icon-font styles.
- Responsive alternatives include breakpoints in their exact names, such as `screen≤M`.
- Preserve case, punctuation, spaces, inequality symbols, and capitalization.
- Paint and effect naming is not normalized; use exact names.
