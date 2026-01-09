# Hydrogen 2 Migration Plan

## Current Route Map

### Existing React Router Routes
```
/                    → HomePage (ResponsiveHomePage)
/buy                 → BuyPage (ResponsiveMentraLive)
/prescriptions       → PrescriptionsPage
/os                  → MentraOSPage
/mobile-hero         → MobileHeroPage (demo, can remove)
```

### Current Component Structure
```
src/
├── app/
│   ├── App.tsx                    → Main router (BrowserRouter)
│   ├── components/
│   │   ├── ResponsiveHomePage.tsx
│   │   ├── ResponsiveMentraLive.tsx
│   │   ├── NavigationBar.tsx
│   │   ├── MobileNavigationBar.tsx
│   │   ├── StickyPurchaseSection.tsx
│   │   ├── ProductImageGallery.tsx
│   │   ├── FAQSection.tsx
│   │   ├── mobile/                → 16 mobile components
│   │   └── ui/                    → 48 UI components
│   └── responsive-fixed.css
├── imports/                        → Figma exports
├── styles/                         → Global styles
└── assets/                         → Images
```

### Current Features
- ✅ Responsive design (mobile/desktop)
- ✅ Product page with add to cart (mock)
- ✅ Navigation (desktop & mobile)
- ✅ Sticky purchase section
- ✅ Toast notifications (Sonner)
- ✅ Image galleries
- ✅ FAQ accordion
- ❌ No real cart functionality
- ❌ No Shopify integration
- ❌ Hardcoded product data

---

## Proposed Hydrogen 2 Route Map

### Remix Routes (app/routes)
```
app/routes/
├── _index.tsx                      → Home page (/)
├── products.$handle.tsx            → Product detail (/products/mentra-live)
├── collections.$handle.tsx         → Collection listing (/collections/all)
├── cart.tsx                        → Cart page (/cart)
├── prescriptions.tsx               → Prescriptions page (/prescriptions)
├── os.tsx                          → MentraOS page (/os)
└── api.cart.ts                     → Cart API route
```

### Hydrogen Component Structure
```
app/
├── routes/                         → Remix routes
├── components/                     → Shared components
│   ├── NavigationBar.tsx
│   ├── MobileNavigationBar.tsx
│   ├── CartDrawer.tsx
│   └── ...
├── sections/                       → Page sections
│   ├── HomeHero.tsx
│   ├── ProductFeatures.tsx
│   ├── ProductGallery.tsx
│   └── ...
├── lib/                            → Utilities
│   ├── shopify.server.ts           → Storefront API client
│   └── cart.server.ts              → Cart utilities
└── styles/                         → Styles (migrated)
```

---

## Files to Create/Modify

### New Hydrogen Files
```
app/
├── entry.client.tsx                → Client entry
├── entry.server.tsx                → Server entry
├── root.tsx                        → Root layout
├── routes/
│   ├── _index.tsx                  → Home
│   ├── products.$handle.tsx        → Product detail
│   ├── collections.$handle.tsx     → Collections
│   ├── cart.tsx                    → Cart
│   ├── prescriptions.tsx           → Prescriptions
│   ├── os.tsx                      → MentraOS
│   └── api.cart.ts                 → Cart API
├── components/
│   ├── NavigationBar.tsx           → Migrated
│   ├── MobileNavigationBar.tsx     → Migrated
│   └── CartDrawer.tsx              → New
├── sections/
│   ├── HomeHero.tsx                → Extracted from ResponsiveHomePage
│   ├── ProductFeatures.tsx         → Extracted
│   └── ProductGallery.tsx          → Migrated
└── lib/
    ├── shopify.server.ts           → New
    └── cart.server.ts              → New
```

### Modified Files
```
package.json                         → Add Hydrogen deps
vite.config.ts                      → Update for Remix
tailwind.config.ts                  → Create if needed
.env.example                        → New
README.md                           → Update
```

### Files to Migrate (Preserve)
```
src/app/components/*                → Move to app/components/
src/app/components/mobile/*         → Move to app/components/mobile/
src/app/components/ui/*             → Move to app/components/ui/
src/styles/*                        → Move to app/styles/
src/assets/*                        → Move to public/
```

---

## Migration Strategy

### Phase 1: Setup
1. Install Hydrogen 2 dependencies
2. Create Hydrogen project structure
3. Migrate Tailwind config
4. Migrate styles

### Phase 2: Routes
1. Create root.tsx with layout
2. Migrate home route (_index.tsx)
3. Migrate product route (products.$handle.tsx)
4. Migrate other routes

### Phase 3: Components
1. Migrate shared components
2. Extract sections
3. Update imports

### Phase 4: Shopify Integration
1. Setup Storefront API client
2. Add product queries
3. Implement cart with Hydrogen utilities
4. Replace hardcoded data

### Phase 5: Polish
1. Add SEO meta tags
2. Add OpenGraph tags
3. Test all routes
4. Update README

---

## Key Changes Required

### Routing
- ❌ BrowserRouter → ✅ Remix file-based routing
- ❌ React Router Routes → ✅ app/routes/*.tsx

### Data Fetching
- ❌ useState/useEffect → ✅ Remix loaders
- ❌ Mock data → ✅ Shopify Storefront API

### Cart
- ❌ Mock add to cart → ✅ Hydrogen Cart API
- ❌ Local state → ✅ Shopify cart

### Styling
- ✅ Keep Tailwind (same classes)
- ✅ Migrate CSS files
- ✅ Preserve responsive breakpoints

---

## Environment Variables Needed

```env
SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
SHOPIFY_STOREFRONT_API_TOKEN=your-token
SHOPIFY_STOREFRONT_API_VERSION=2024-01
SESSION_SECRET=your-secret
```

---

## Next Steps
1. ✅ Create this plan document
2. ⏭️ Install Hydrogen 2
3. ⏭️ Scaffold project structure
4. ⏭️ Migrate routes one by one
5. ⏭️ Integrate Shopify
