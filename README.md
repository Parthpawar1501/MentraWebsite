
# Mentra Website - Shopify Hydrogen 2 Storefront

This is a Shopify Hydrogen 2 storefront built with Remix, TypeScript, and Tailwind CSS.

## Quick Start

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm
- Shopify store with Storefront API access

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` with your Shopify credentials.

3. **Run development server:**
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run start` - Start production server
- `npm run typecheck` - Run TypeScript type checking
- `npm run lint` - Run ESLint

## Routes

- `/` - Home page
- `/products/:handle` - Product detail pages
- `/collections/:handle` - Collection listing pages
- `/cart` - Shopping cart
- `/prescriptions` - Prescriptions page
- `/os` - MentraOS page
- `/health` - Health check endpoint

## Documentation

- [Deployment Guide](./DEPLOYMENT-GUIDE.md) - How to deploy to Shopify Oxygen
- [Verification Steps](./VERIFICATION-STEPS.md) - Testing checklist
- [Migration Summary](./MIGRATION-SUMMARY.md) - Migration details
- [Audit Report](./AUDIT-REPORT.md) - Initial audit findings

## Deployment

Deploy to Shopify Oxygen:
```bash
shopify hydrogen deploy
```

See [DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md) for detailed instructions.

## Project Structure

```
app/
├── routes/          # Remix routes
├── components/      # React components
├── lib/            # Server utilities
├── styles/         # CSS files
└── imports/        # Figma components

public/
└── assets/         # Static assets
```

## Environment Variables

See `.env.example` for required variables:
- `SHOPIFY_STORE_DOMAIN`
- `SHOPIFY_STOREFRONT_API_TOKEN`
- `SESSION_SECRET`
- `SHOPIFY_STOREFRONT_API_VERSION`

## License

[Your License Here]
  