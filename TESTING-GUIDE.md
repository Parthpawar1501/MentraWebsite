# 🧪 Responsive Testing Guide

## Quick Test Instructions

### 🎯 Test at These Exact Sizes

#### 1. Mobile - 390×844 (iPhone 13/14)
```
1. Open DevTools (F12)
2. Click device toolbar (Ctrl+Shift+M)
3. Select "iPhone 13 Pro" or set to 390×844
4. Verify:
   ✅ Custom mobile layout shows
   ✅ Hamburger menu in top-left
   ✅ Shopping bag in top-right
   ✅ No horizontal scroll
   ✅ All sections stack vertically
   ✅ Text wraps properly
   ✅ Images scale correctly
```

#### 2. Tablet - 834×1194 (iPad)
```
1. Keep DevTools open
2. Set size to 834×1194
3. Verify:
   ✅ Desktop layout shows (NOT mobile)
   ✅ Desktop navigation visible
   ✅ Content scales down proportionally
   ✅ No horizontal scroll
   ✅ Typography readable
   ✅ Images responsive
   ✅ 2-column grid for cards
```

#### 3. Desktop - 1440×900+ (Standard)
```
1. Close DevTools or set to 1440×900
2. Verify:
   ✅ EXACT match to original design
   ✅ Fixed 1720px containers centered
   ✅ Original spacing (240px gaps)
   ✅ Original typography (96px headings)
   ✅ Original colors
   ✅ No visual changes whatsoever
```

---

## 📱 Detailed Mobile Testing (390px)

### Section-by-Section Check

#### Hero Section
- [ ] Full background image visible
- [ ] "Choose Your Reality" headline readable
- [ ] Mentra logo centered
- [ ] No text cutoff
- [ ] No horizontal scroll
- [ ] CTA button full-width

#### Navigation (Top Bar)
- [ ] Hamburger icon (☰) visible top-left
- [ ] Mentra logo centered or left
- [ ] Shopping bag icon (🛒) visible top-right
- [ ] All touch targets ≥ 44px

#### Hamburger Menu
- [ ] Tapping ☰ opens menu
- [ ] Smooth slide-in animation (280ms)
- [ ] Backdrop dims background
- [ ] Body scroll locks
- [ ] Menu contains:
  - Mentra logo + name in header
  - Close button (✕)
  - Home, AI Glasses, Mentra Live
  - "New" badge on Mentra Live
  - Divider line
  - About, Technology, Support
  - "Shop Mentra Live" button in footer
- [ ] Tapping backdrop closes menu
- [ ] Tapping ✕ closes menu

#### Investor Logos
- [ ] Logos visible and scrolling
- [ ] No horizontal overflow
- [ ] Animation smooth

#### Product Section
- [ ] Product images scale properly
- [ ] Text wraps (no overflow)
- [ ] Single-column layout
- [ ] CTA buttons full-width

#### Features
- [ ] Cards stack vertically (1 per row)
- [ ] Images responsive
- [ ] Text readable

#### Comparison Table
- [ ] Table responsive
- [ ] All columns visible (may scroll horizontally within table)
- [ ] Text readable

#### Testimonials
- [ ] Quotes stack vertically
- [ ] Text wraps
- [ ] Images scale

#### FAQ
- [ ] Accordion works
- [ ] Touch targets adequate
- [ ] Text wraps

#### Footer
- [ ] Stacks vertically
- [ ] All links accessible
- [ ] No horizontal scroll

---

## 🖥️ Detailed Tablet Testing (834px)

### Section-by-Section Check

#### Navigation
- [ ] Desktop navigation bar shows (NOT hamburger)
- [ ] Logo visible
- [ ] Nav items visible
- [ ] Dropdowns work (if any)
- [ ] CTA button visible

#### Hero Section
- [ ] Desktop layout
- [ ] Scales down proportionally
- [ ] Typography readable (scaled with clamp)
- [ ] Images fit viewport
- [ ] No horizontal scroll

#### Content Sections
- [ ] 2-column grid for cards
- [ ] Desktop layout structure
- [ ] Proper spacing (reduced from desktop)
- [ ] Images responsive

#### Typography
- [ ] Large headings scale down
- [ ] Body text readable
- [ ] No text overflow
- [ ] Line heights comfortable

#### Spacing
- [ ] 24px side padding
- [ ] Gaps reduced proportionally
- [ ] Sections well-spaced

#### Images
- [ ] All images scale
- [ ] Maintain aspect ratio
- [ ] No distortion
- [ ] No overflow

---

## 💻 Detailed Desktop Testing (1024px+)

### CRITICAL: Desktop Must Be IDENTICAL to Original

#### Layout
- [ ] Fixed 1720px containers centered
- [ ] Original spacing maintained
- [ ] Original structure unchanged
- [ ] No layout shifts

#### Typography
- [ ] 96px headings (exact size)
- [ ] 64px subheadings (exact size)
- [ ] Original font sizes throughout
- [ ] Original line heights
- [ ] Red Hat Display font

#### Colors
- [ ] #00b869 green (exact)
- [ ] #0a0a0a black text (exact)
- [ ] Original colors throughout
- [ ] No color changes

#### Spacing
- [ ] 240px gaps (exact)
- [ ] 160px sections (exact)
- [ ] Original padding values
- [ ] Original margins

#### Navigation
- [ ] Desktop nav bar (exact original)
- [ ] Original dropdown behavior
- [ ] Original hover states
- [ ] Original active states

#### Images
- [ ] Original sizes
- [ ] Original positions
- [ ] Original aspect ratios
- [ ] No scaling applied

#### Animations
- [ ] Original animations work
- [ ] Investor logo carousel (25s)
- [ ] Hover effects
- [ ] Transitions

---

## 🔍 Cross-Breakpoint Testing

### Resize Test
```
1. Start at 360px width
2. Slowly drag to increase width
3. Watch for breakpoints:
   
   360px → 479px:
   - Mobile layout (small)
   
   480px → 767px:
   - Mobile layout (large)
   
   768px (BREAKPOINT):
   - Switches to desktop layout
   - Should be smooth, no flash
   
   768px → 1023px:
   - Desktop layout scaling
   - Smooth responsive behavior
   
   1024px (BREAKPOINT):
   - Desktop layout locked
   - Original sizes restored
   - No more scaling
```

### Common Issues to Check
- [ ] No horizontal scroll at ANY size
- [ ] No content cutoff at ANY size
- [ ] Smooth transition at breakpoints
- [ ] No layout jumping
- [ ] No flash of unstyled content

---

## 📊 Breakpoint Summary

| Width | Layout | Navigation | Grid | Cards/Row |
|-------|--------|------------|------|-----------|
| 360-479px | Mobile (custom) | Hamburger | 4-col | 1 |
| 480-767px | Mobile (custom) | Hamburger | 4-col | 1 |
| 768-1023px | Desktop (scaled) | Desktop | 8-col | 2 |
| 1024px+ | Desktop (original) | Desktop | Original | Original |

---

## ✅ Final Checklist

### Mobile (<768px)
- [ ] Custom mobile layout shows
- [ ] Hamburger menu works
- [ ] No horizontal scroll
- [ ] Touch targets ≥ 44px
- [ ] Text wraps properly
- [ ] Images scale correctly
- [ ] All sections accessible
- [ ] Menu animations smooth

### Tablet (768-1023px)
- [ ] Desktop layout shows
- [ ] Scales down properly
- [ ] No horizontal scroll
- [ ] Typography readable
- [ ] 2-column grids
- [ ] 24px side padding
- [ ] Desktop navigation works

### Desktop (1024px+)
- [ ] EXACTLY matches Figma design
- [ ] NO visual differences
- [ ] Original spacing
- [ ] Original typography
- [ ] Original colors
- [ ] Original layout
- [ ] All animations work
- [ ] Perfect pixel match

### All Sizes
- [ ] No horizontal scroll
- [ ] No content cutoff
- [ ] No broken images
- [ ] No console errors
- [ ] Smooth transitions
- [ ] Fast load time

---

## 🎯 Quick Visual Test

### Mobile (390px)
**Expected:**
```
┌──────────────┐
│ ☰  Mentra 🛒│  ← Hamburger + Shopping bag
├──────────────┤
│              │
│  Choose      │  ← Hero section
│  Your        │
│  Reality     │
│              │
└──────────────┘
```

### Tablet (834px)
**Expected:**
```
┌────────────────────────┐
│ Logo  Nav Nav  [Shop] │  ← Desktop nav
├────────────────────────┤
│                        │
│  Choose Your Reality   │  ← Desktop layout
│                        │
│  [Card 1]   [Card 2]   │  ← 2 columns
└────────────────────────┘
```

### Desktop (1024px+)
**Expected:**
```
┌──────────────────────────────┐
│ Logo  Nav Nav Nav   [Shop]  │  ← Original nav
├──────────────────────────────┤
│                              │
│   Choose Your Reality        │  ← Original desktop
│                              │
│ [Card 1] [Card 2] [Card 3]   │  ← 3 columns
└──────────────────────────────┘
```

---

## 🐛 Common Issues & Fixes

### Issue: Horizontal scroll on mobile
**Fix:** Check for fixed widths, use 100% or max-width

### Issue: Text overflow
**Fix:** Add `white-space: normal` and `word-wrap: break-word`

### Issue: Touch targets too small
**Fix:** Ensure min-height and min-width of 44px

### Issue: Desktop changed
**Fix:** Remove any CSS rules affecting >= 1024px

### Issue: Menu doesn't open
**Fix:** Check event handlers, z-index, and state management

### Issue: Images distorted
**Fix:** Use `object-fit: cover` and `height: auto`

---

## 📸 Screenshot Test

### Take Screenshots At:
1. **Mobile:** 390×844
2. **Tablet:** 834×1194  
3. **Desktop:** 1440×900

### Compare:
- Mobile should show custom layout
- Tablet should show scaled desktop
- Desktop should match original Figma EXACTLY

---

## 🎉 Success Criteria

**PASS if:**
- ✅ Mobile shows custom layout with hamburger menu
- ✅ Tablet shows desktop layout scaling down
- ✅ Desktop is PIXEL-PERFECT match to original
- ✅ No horizontal scroll on any size
- ✅ All interactions work
- ✅ No console errors

**FAIL if:**
- ❌ Horizontal scroll on any size
- ❌ Desktop layout changed in any way
- ❌ Content cutoff on mobile
- ❌ Menu doesn't work
- ❌ Images broken or distorted
- ❌ Text overflow

---

**Status:** Ready to Test ✅  
**Test Duration:** ~10 minutes  
**Critical Test:** Desktop unchanged ✅
