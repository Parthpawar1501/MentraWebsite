# Hydrogen 2 Setup Instructions

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create `.env` file:**
   ```env
   SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
   SHOPIFY_STOREFRONT_API_TOKEN=your-token
   SHOPIFY_STOREFRONT_API_VERSION=2024-01
   SESSION_SECRET=generate-random-string
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

## Getting Shopify Credentials

1. Go to Shopify Admin → Settings → Apps and sales channels
2. Click "Develop apps" → "Create an app"
3. Configure Storefront API scopes:
   - `unauthenticated_read_product_listings`
   - `unauthenticated_read_product_inventory`
   - `unauthenticated_read_collections`
   - `unauthenticated_read_checkouts`
   - `unauthenticated_write_checkouts`
4. Install app and copy Storefront API token

## Project Structure

```
app/
├── routes/           # Remix routes
├── components/       # React components
├── lib/             # Server utilities
├── styles/           # CSS files
└── imports/          # Figma components

public/
└── assets/           # Static assets
```

## Routes

- `/` - Home page
- `/products/:handle` - Product pages
- `/cart` - Cart page
- `/prescriptions` - Prescriptions page
- `/os` - MentraOS page

## Next Steps

1. Fix any remaining import paths
2. Test with real Shopify store
3. Deploy to Shopify Oxygen or Vercel

See `README-HYDROGEN.md` for full documentation.
