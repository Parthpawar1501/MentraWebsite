# Mentra Website - Shopify Hydrogen 2 Storefront

This is a Shopify Hydrogen 2 storefront built with Remix, TypeScript, and Tailwind CSS. The site has been migrated from a React + Vite application to Hydrogen 2 while preserving all UI, styling, and functionality.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm
- A Shopify store with Storefront API access

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Set up environment variables:**
   
   Create a `.env` file in the root directory:
   ```env
   SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
   SHOPIFY_STOREFRONT_API_TOKEN=your-storefront-api-token
   SHOPIFY_STOREFRONT_API_PRIVATE_TOKEN=your-private-token-optional
   SHOPIFY_STOREFRONT_ID=your-storefront-id-optional
   SHOPIFY_STOREFRONT_API_VERSION=2024-01
   SESSION_SECRET=your-random-session-secret
   NODE_ENV=development
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

   The site will be available at `http://localhost:3000` (or the port shown in the terminal).

## 📁 Project Structure

```
app/
├── routes/              # Remix routes (file-based routing)
│   ├── _index.tsx      # Home page (/)
│   ├── products.$handle.tsx  # Product detail pages
│   ├── cart.tsx        # Cart page
│   ├── prescriptions.tsx
│   └── os.tsx
├── components/          # Shared React components
│   ├── mobile/         # Mobile-specific components
│   └── ui/             # UI component library
├── sections/           # Page sections (can be extracted)
├── lib/                # Utilities and server functions
│   ├── shopify.server.ts  # Shopify Storefront API client
│   └── cart.server.ts     # Cart utilities
├── styles/             # CSS files
└── imports/            # Figma-exported components

public/
└── assets/             # Static assets (images, etc.)
```

## 🔗 Connecting to Shopify

### 1. Get Storefront API Credentials

1. Go to your Shopify admin: `https://your-store.myshopify.com/admin`
2. Navigate to **Settings** → **Apps and sales channels**
3. Click **Develop apps** → **Create an app**
4. Name your app (e.g., "Hydrogen Storefront")
5. Click **Configure Admin API scopes** and enable:
   - `read_products`
   - `read_product_listings`
   - `read_collections`
6. Click **Configure Storefront API scopes** and enable:
   - `unauthenticated_read_product_listings`
   - `unauthenticated_read_product_inventory`
   - `unauthenticated_read_collections`
   - `unauthenticated_read_checkouts`
   - `unauthenticated_write_checkouts`
7. Click **Save**
8. Click **Install app**
9. Copy the **Storefront API access token**

### 2. Update Environment Variables

Add the token to your `.env` file:
```env
SHOPIFY_STOREFRONT_API_TOKEN=your-copied-token-here
SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
```

### 3. Test the Connection

Run the dev server and navigate to a product page. If products load from Shopify, the connection is working!

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run typecheck` - Run TypeScript type checking
- `npm run lint` - Run ESLint

## 📦 Routes

### Home Page
- **Route:** `/`
- **File:** `app/routes/_index.tsx`
- **Description:** Responsive home page with mobile/desktop layouts

### Product Pages
- **Route:** `/products/:handle`
- **File:** `app/routes/products.$handle.tsx`
- **Description:** Dynamic product detail pages using Shopify product handles

### Cart
- **Route:** `/cart`
- **File:** `app/routes/cart.tsx`
- **Description:** Shopping cart page

### Other Pages
- `/prescriptions` - Prescriptions page
- `/os` - MentraOS page

## 🎨 Styling

This project uses **Tailwind CSS 4** with the same configuration as the original React app. All Tailwind classes and custom styles have been preserved.

### CSS Files
- `app/styles/index.css` - Main stylesheet
- `app/styles/tailwind.css` - Tailwind directives
- `app/styles/theme.css` - Theme variables
- `app/styles/fonts.css` - Font imports
- Additional responsive and component-specific CSS files

## 🛒 Cart Functionality

The cart uses Shopify's Storefront API and Hydrogen cart utilities:

- **Add to cart:** POST to `/api/cart` with `intent=add`
- **Update cart:** POST to `/api/cart` with `intent=update`
- **Cart state:** Managed via Shopify cart API

## 🚢 Deployment

### Deploy to Shopify Oxygen

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy using Shopify CLI:**
   ```bash
   shopify hydrogen deploy
   ```

3. **Follow the prompts** to connect your store and deploy.

### Deploy to Vercel (Alternative)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Set environment variables** in Vercel dashboard:
   - `SHOPIFY_STORE_DOMAIN`
   - `SHOPIFY_STOREFRONT_API_TOKEN`
   - `SESSION_SECRET`
   - `SHOPIFY_STOREFRONT_API_VERSION`

4. **Configure build settings:**
   - Build command: `npm run build`
   - Output directory: `.output`

## 🔧 Troubleshooting

### Products not loading
- Check that `SHOPIFY_STOREFRONT_API_TOKEN` is set correctly
- Verify Storefront API scopes are enabled in Shopify admin
- Check browser console for API errors

### Styles not loading
- Ensure all CSS files are in `app/styles/`
- Check that `app/root.tsx` includes all necessary stylesheet links
- Verify Tailwind is configured correctly

### Build errors
- Run `npm run typecheck` to find TypeScript errors
- Check that all imports are using correct paths
- Ensure all dependencies are installed

## 📚 Resources

- [Shopify Hydrogen Documentation](https://shopify.dev/docs/custom-storefronts/hydrogen)
- [Remix Documentation](https://remix.run/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🎯 Migration Notes

This project was migrated from a React + Vite application to Shopify Hydrogen 2. Key changes:

- ✅ React Router → Remix file-based routing
- ✅ Client-side routing → Server-side rendering with Remix
- ✅ Mock cart → Shopify Storefront API cart
- ✅ Hardcoded products → Dynamic Shopify products
- ✅ All UI and styling preserved
- ✅ All components migrated

## 📝 License

[Your License Here]
