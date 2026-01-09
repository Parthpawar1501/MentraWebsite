# Navigation Components - Global Reference

## Overview
This document outlines the global navigation components used throughout the Mentra application.

## Desktop Navigation

### Component: `NavigationBar.tsx`
**Location:** `/src/app/components/NavigationBar.tsx`

**Used In:**
- Home Page (`/src/imports/AiGlasses.tsx`)
- Product Page (`/src/imports/MentraLive.tsx`)

**Features:**
- Full navigation menu with dropdowns
- Logo (clickable → home)
- AI glasses menu item (clickable → home)
- Apps and OS dropdown
- Company dropdown
- Community dropdown
- Shopping cart button

**Navigation Map:**
- **Mentra Logo** → `/` (Home)
- **AI glasses** text → `/` (Home)
- **Mentra Live** (in dropdown) → `/buy` (Product Page)
- **Mentra Live image** (in dropdown) → `/` (Home)

## Mobile Navigation

### Component: `MobileNavigationBar.tsx`
**Location:** `/src/app/components/MobileNavigationBar.tsx`

**Used In:**
- Mobile Product Page (`/src/app/components/EnhancedMobileMentraLive.tsx`)

**Features:**
- Simplified mobile navigation
- Logo with Mentra text (clickable → home)
- Cart button

**Responsive Behavior:**
- Shows on screens < 768px wide
- Fixed positioning at top
- Minimal, touch-friendly design

## How It Works

### Single Source of Truth
Both navigation components are **global components**. This means:
- ✅ Update once, changes apply everywhere
- ✅ Consistent behavior across all pages
- ✅ Easy maintenance and updates

### Import Pattern
```tsx
// Desktop pages
import NavigationBar from "../app/components/NavigationBar";

// Mobile pages
import MobileNavigationBar from "./MobileNavigationBar";
```

## Making Updates

### To Update Desktop Navigation:
1. Edit `/src/app/components/NavigationBar.tsx`
2. Changes automatically apply to:
   - Home page
   - Product page
   - Any future pages using this component

### To Update Mobile Navigation:
1. Edit `/src/app/components/MobileNavigationBar.tsx`
2. Changes automatically apply to all mobile views

## Responsive Switching

The application uses `ResponsiveMentraLive.tsx` to detect screen size and switch between:
- **Desktop version** (≥ 768px): Uses `NavigationBar`
- **Mobile version** (< 768px): Uses `MobileNavigationBar`

**Breakpoint:** 768px

## File Structure
```
/src/app/components/
├── NavigationBar.tsx           # Desktop navigation (GLOBAL)
├── MobileNavigationBar.tsx     # Mobile navigation (GLOBAL)
└── ResponsiveMentraLive.tsx    # Responsive wrapper
```

## Best Practices

1. **Never duplicate navigation code** - Always import from these global components
2. **Test on both desktop and mobile** after making changes
3. **Keep navigation consistent** across all pages
4. **Use React Router's `useNavigate()`** for all internal navigation
5. **Maintain accessibility** attributes (aria-labels, etc.)

## Related Components
- `ResponsiveMentraLive.tsx` - Handles desktop/mobile switching
- `EnhancedMobileMentraLive.tsx` - Mobile page wrapper
