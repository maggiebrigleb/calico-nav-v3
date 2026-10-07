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
*   **Data Limits:** Maximum of 10 characters for