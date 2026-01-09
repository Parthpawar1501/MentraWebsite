# 📐 Responsive System - Visual Guide

## 🎯 The Complete Picture

```
┌─────────────────────────────────────────────────────────────────────┐
│                     MENTRA RESPONSIVE SYSTEM                        │
└─────────────────────────────────────────────────────────────────────┘

Screen Width →
0px        360px    480px    768px         1024px          1440px    →
 │           │        │        │             │               │
 │           │        │        │             │               │
 │◄─ Mobile Small ──►│        │             │               │
 │                    │◄─ Mobile Large ────►│               │
 │                                           │◄── Tablet ───►│
 │                                                           │◄─ Desktop ─►
 │                                                                     
 │           CUSTOM MOBILE LAYOUT            DESKTOP LAYOUT  DESKTOP ORIGINAL
 │           (MobileHomePage)                (Scaled CSS)    (Locked)
 │                                                                     
 └──────────────────────────────────────────────────────────────────────
```

---

## 📱 Mobile View (<768px)

### Visual Layout

```
┌─────────────────────────────┐
│ ┌─────────────────────────┐ │
│ │  ☰  Mentra Logo     🛒  │ │ ← Sticky Top Bar
│ └─────────────────────────┘ │
├─────────────────────────────┤
│                             │
│    🌟 HERO SECTION 🌟       │
│                             │
│   "Choose Your Reality"     │ ← Full-width background
│                             │
│   [Shop Mentra Live]        │ ← Full-width CTA
│                             │
├─────────────────────────────┤
│  BACKED BY                  │
│                             │
│  [Logo] [Logo] [Logo] →     │ ← Scrolling carousel
│                             │
├─────────────────────────────┤
│  MENTRA LIVE 🟢             │
│                             │
│  ┌─────────────────────┐   │
│  │   Product Image     │   │ ← Full-width image
│  └─────────────────────┘   │
│                             │
│  Description text...        │ ← Text wraps
│                             │
│  [Select Color]             │ ← Full-width
│  [Select Size]              │ ← Full-width
│  [Add to Cart]              │ ← Full-width CTA
│                             │
├─────────────────────────────┤
│  FEATURES                   │
│                             │
│  ┌─────────────────────┐   │
│  │  Feature Card 1     │   │ ← Single column
│  └─────────────────────┘   │
│                             │
│  ┌─────────────────────┐   │
│  │  Feature Card 2     │   │ ← Stack vertically
│  └─────────────────────┘   │
│                             │
│  ┌─────────────────────┐   │
│  │  Feature Card 3     │   │
│  └─────────────────────┘   │
│                             │
├─────────────────────────────┤
│  COMPARISON TABLE           │
│                             │
│  [Mentra vs Ray-Ban]        │ ← Responsive table
│                             │
├─────────────────────────────┤
│  TESTIMONIALS               │
│                             │
│  "Quote 1..."               │ ← Stack vertically
│                             │
│  "Quote 2..."               │
│                             │
├─────────────────────────────┤
│  FAQ                        │
│                             │
│  ▼ Question 1?              │ ← Accordion
│  ▶ Question 2?              │
│  ▶ Question 3?              │
│                             │
├─────────────────────────────┤
│  FOOTER                     │
│                             │
│  Links │ Social │ Legal    │ ← Stack on small
│                             │
└─────────────────────────────┘

Mobile Specs:
• Component: MobileHomePage
• Grid: 4-column
• Cards: 1 per row
• Padding: 16-20px
• Navigation: Hamburger ☰
• Touch targets: 44px+
```

### Mobile Menu (When ☰ Tapped)

```
┌──────────────────────┐
│ ┌──────────────────┐ │
│ │ 🟩 Mentra    ✕  │ │ ← Sticky header
│ └──────────────────┘ │
│ ──────────────────── │
│                      │
│  ▶ Home             │ │
│  ▶ AI Glasses       │ │ ← Primary items
│  ▶ Mentra Live 🆕   │ │   (SemiBold)
│                      │
│  ─────────────────  │ ← Divider
│                      │
│  · About            │ │
│  · Technology       │ │ ← Secondary items
│  · Support          │ │   (Regular)
│                      │
│                      │
│                      │
│ ──────────────────── │
│ ┌──────────────────┐ │
│ │ Shop Mentra Live │ │ ← Sticky CTA footer
│ └──────────────────┘ │
└──────────────────────┘

Menu Specs:
• Width: min(85vw, 320px)
• Animation: 280ms cubic-bezier
• Backdrop: Black 40% + blur
• Scroll: Body locked
• Close: Tap backdrop or ✕
```

---

## 🖥️ Tablet View (768-1023px)

### Visual Layout

```
┌─────────────────────────────────────────────────────────┐
│ ┌─────────────────────────────────────────────────────┐ │
│ │ 🟩 Logo   AI Glasses ▾  Products ▾      [Shop] 🛒 │ │ ← Desktop Nav
│ └─────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────┤
│                                                         │
│              🌟 HERO SECTION 🌟                         │
│                                                         │
│         "Choose Your Reality"                           │ ← Desktop layout
│                                                         │  (scaled down)
│         [Shop Now] [Learn More]                         │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  BACKED BY                                              │
│                                                         │
│  [Logo] [Logo] [Logo] [Logo] [Logo] [Logo] →           │ ← Carousel
│                                                         │
├─────────────────────────────────────────────────────────┤
│  MENTRA LIVE 🟢                                         │
│                                                         │
│  ┌──────────────────┐  ┌──────────────────┐           │
│  │  Product Img 1   │  │  Product Img 2   │           │ ← 2 columns
│  └──────────────────┘  └──────────────────┘           │   (instead of 3)
│                                                         │
│  Description text flows here...                         │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  FEATURES                                               │
│                                                         │
│  ┌──────────────────┐  ┌──────────────────┐           │
│  │  Feature Card 1  │  │  Feature Card 2  │           │ ← 2 per row
│  └──────────────────┘  └──────────────────┘           │
│                                                         │
│  ┌──────────────────┐  ┌──────────────────┐           │
│  │  Feature Card 3  │  │  Feature Card 4  │           │
│  └──────────────────┘  └──────────────────┘           │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  [Rest of sections follow desktop layout...]            │
│                                                         │
└─────────────────────────────────────────────────────────┘

Tablet Specs:
• Component: AiGlasses (desktop)
• Grid: 8-column
• Cards: 2 per row
• Padding: 24px
• Navigation: Desktop nav bar
• Typography: clamp() scaled
```

---

## 💻 Desktop View (1024px+)

### Visual Layout

```
┌─────────────────────────────────────────────────────────────────────────┐
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ 🟩 Mentra   AI Glasses ▾  Products ▾  About      [Shop Mentra] 🛒│ │ ← Original Nav
│ └─────────────────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│                      🌟 HERO SECTION 🌟                                 │
│                                                                         │
│               "Choose Your Reality"                                     │ ← PIXEL-PERFECT
│                                                                         │  Original size
│               [Shop Now] [Learn More]                                   │  1720px centered
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│  BACKED BY                                                              │
│                                                                         │
│  [Logo] [Logo] [Logo] [Logo] [Logo] [Logo] [Logo] [Logo] [Logo] →     │ ← Full carousel
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│  MENTRA LIVE 🟢                                                         │
│                                                                         │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐                       │
│  │ Product 1  │  │ Product 2  │  │ Product 3  │                       │ ← 3 columns
│  └────────────┘  └────────────┘  └────────────┘                       │   (original)
│                                                                         │
│  Full description with original spacing and typography...               │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│  FEATURES                                                               │
│                                                                         │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐                       │
│  │ Feature 1  │  │ Feature 2  │  │ Feature 3  │                       │ ← 3 per row
│  └────────────┘  └────────────┘  └────────────┘                       │   (original)
│                                                                         │
│  [All sections use original desktop layout - UNCHANGED]                 │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘

Desktop Specs:
• Component: AiGlasses (original)
• Grid: Original Figma
• Cards: 3 per row
• Padding: Original values
• Navigation: Original
• Typography: Fixed sizes (96px, 64px, etc.)
• Layout: PIXEL-PERFECT MATCH
• Changes: ZERO ❌
```

---

## 🔄 Breakpoint Transitions

### Transition 1: 767px → 768px (Mobile to Tablet)

```
@ 767px                    @ 768px
┌──────────────┐          ┌─────────────────────────────┐
│ ☰  Mentra 🛒│          │ Logo  Nav Nav Nav  [Shop] 🛒│
├──────────────┤    →     ├─────────────────────────────┤
│              │          │                             │
│  Mobile      │          │      Desktop Layout         │
│  Layout      │          │      (Scaled Down)          │
│              │          │                             │
│ [Card 1]     │          │ [Card 1]    [Card 2]        │
│ [Card 2]     │          │                             │
│ [Card 3]     │          │ [Card 3]    [Card 4]        │
└──────────────┘          └─────────────────────────────┘

1 column cards  →  2 column cards
Hamburger menu  →  Desktop navigation
Custom layout   →  Desktop layout scaled
```

### Transition 2: 1023px → 1024px (Tablet to Desktop)

```
@ 1023px                          @ 1024px
┌─────────────────────────────┐  ┌──────────────────────────────────┐
│ Logo  Nav Nav Nav  [Shop] 🛒│  │ Logo  Nav Nav Nav       [Shop] 🛒│
├─────────────────────────────┤  ├──────────────────────────────────┤
│                             │  │                                  │
│   Desktop Layout Scaled     │  │    Desktop Layout Original       │
│   (100% width, clamp font)  │  │    (1720px centered, fixed font) │
│                             │  │                                  │
│ [Card 1]    [Card 2]        │  │ [Card 1]  [Card 2]  [Card 3]    │
│                             │  │                                  │
│ [Card 3]    [Card 4]        │  │ [Card 4]  [Card 5]  [Card 6]    │
└─────────────────────────────┘  └──────────────────────────────────┘

2 column cards      →  3 column cards (original)
Fluid typography    →  Fixed typography (96px, 64px)
100% width          →  1720px centered
Scaled with CSS     →  Original Figma values
```

---

## 📊 Side-by-Side Comparison

### Navigation Bar

```
MOBILE               TABLET               DESKTOP
┌──────────┐        ┌─────────────────┐  ┌────────────────────┐
│ ☰  M  🛒│        │ Logo Nav Nav 🛒 │  │ Logo Nav Nav Nav 🛒│
└──────────┘        └─────────────────┘  └────────────────────┘
Hamburger           Desktop nav bar     Desktop nav bar
Only logo           Some items          All items
```

### Hero Section

```
MOBILE               TABLET               DESKTOP
┌──────────┐        ┌─────────────────┐  ┌────────────────────┐
│          │        │                 │  │                    │
│  Choose  │        │ Choose Your     │  │ Choose Your Reality│
│  Your    │        │    Reality      │  │                    │
│ Reality  │        │                 │  │                    │
│          │        │                 │  │                    │
│ [Shop]   │        │ [Shop] [Learn]  │  │ [Shop] [Learn More]│
└──────────┘        └─────────────────┘  └────────────────────┘
Vertical            Desktop layout      Desktop layout
Auto height         Scaled              Original
Full-width CTA      Desktop CTAs        Desktop CTAs
```

### Card Layout

```
MOBILE               TABLET               DESKTOP
┌──────────┐        ┌─────────────────┐  ┌────────────────────┐
│ [Card 1] │        │ [Card 1] [Card2]│  │ [C1]  [C2]  [C3]  │
│          │        │                 │  │                    │
│ [Card 2] │        │ [Card 3] [Card4]│  │ [C4]  [C5]  [C6]  │
│          │        │                 │  │                    │
│ [Card 3] │        │ [Card 5] [Card6]│  │ [C7]  [C8]  [C9]  │
└──────────┘        └─────────────────┘  └────────────────────┘
1 per row           2 per row            3 per row
4-col grid          8-col grid           Original grid
```

---

## 🎨 Typography Scaling

### Headings

```
MOBILE                TABLET                DESKTOP
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│ Choose Your      │  │ Choose Your      │  │ Choose Your      │
│ Reality          │  │    Reality       │  │    Reality       │
│                  │  │                  │  │                  │
│ 28-40px (clamp)  │  │ 48-80px (clamp)  │  │ 96px (fixed)     │
└──────────────────┘  └──────────────────┘  └──────────────────┘

Fluid scaling          Fluid scaling         Fixed original
```

### Body Text

```
MOBILE                TABLET                DESKTOP
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│ Description text │  │ Description text │  │ Description text │
│ wraps to fit     │  │ wraps naturally  │  │ at original size │
│ mobile screen    │  │ on tablet view   │  │ unchanged        │
│                  │  │                  │  │                  │
│ 14-16px (clamp)  │  │ 16-20px (clamp)  │  │ 20px (fixed)     │
└──────────────────┘  └──────────────────┘  └──────────────────┘

Fluid scaling          Fluid scaling         Fixed original
```

---

## 🔍 Spacing Comparison

### Section Gaps

```
MOBILE          TABLET          DESKTOP
2rem (32px)  →  6rem (96px)  →  15rem (240px)
3rem (48px)  →  4rem (64px)  →  10rem (160px)
1.5rem (24px) → 3rem (48px)  →  5rem (80px)

Compact         Proportional    Original
```

### Side Padding

```
MOBILE          TABLET          DESKTOP
┌────────────┐  ┌──────────────┐  ┌────────────────┐
│↔ 16-20px ↔│  │↔  24px   ↔  │  │↔  Original  ↔  │
│            │  │              │  │                │
│  Content   │  │   Content    │  │    Content     │
│            │  │              │  │                │
└────────────┘  └──────────────┘  └────────────────┘

Tight           Medium           Original
```

---

## 📏 Container Width

```
MOBILE               TABLET               DESKTOP
┌──────────────┐    ┌────────────────────┐    ┌──────────────────────────┐
│              │    │                    │    │   ┌──────────────┐      │
│              │    │                    │    │   │  1720px max  │      │
│ 100% width   │    │    100% width      │    │   │   centered   │      │
│              │    │                    │    │   └──────────────┘      │
│              │    │                    │    │                          │
└──────────────┘    └────────────────────┘    └──────────────────────────┘

Full viewport       Full viewport         Centered container
No max-width        No max-width          Original max-width
```

---

## ✅ Quick Visual Checklist

### Mobile (<768px) ✅
```
✅ Hamburger menu (☰) top-left
✅ Shopping bag (🛒) top-right
✅ Single column layout
✅ Vertical stacking
✅ Text wraps naturally
✅ Images scale to 100%
✅ Touch targets 44px+
✅ No horizontal scroll
```

### Tablet (768-1023px) ✅
```
✅ Desktop navigation shows
✅ 2-column card layout
✅ Desktop structure scaled
✅ Typography uses clamp()
✅ 24px side padding
✅ Images responsive
✅ No horizontal scroll
```

### Desktop (1024px+) ✅
```
✅ EXACT Figma match
✅ Original 1720px width
✅ Fixed typography (96px)
✅ 3-column card layout
✅ Original spacing
✅ Original colors
✅ ZERO changes
```

---

## 🎯 The Golden Rule

```
┌────────────────────────────────────────────┐
│                                            │
│  DESKTOP (1024px+) = COMPLETELY LOCKED     │
│                                            │
│  NO CSS RULES                              │
│  NO MODIFICATIONS                          │
│  NO CHANGES                                │
│  PIXEL-PERFECT ORIGINAL                    │
│                                            │
└────────────────────────────────────────────┘
```

---

**Visual Guide Version:** 1.0  
**Last Updated:** January 8, 2026  
**Status:** ✅ Complete & Clear
