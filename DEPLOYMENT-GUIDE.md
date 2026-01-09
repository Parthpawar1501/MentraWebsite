# Deployment Guide

## Local Development

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create `.env` file:**
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` with your Shopify credentials.

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Verify the site loads:**
   - Open http://localhost:3000 (or the port shown)
   - Check home page loads
   - Test product page: `/products/mentra-live` (or your product handle)
   - Test collection page: `/collections/all` (or your collection handle)
   - Test cart: `/cart`

## Production Build

### Build Locally

```bash
npm run build
```

This creates a production build in `.output/` directory.

### Preview Production Build

```bash
npm run preview
```

## Deploy to Shopify Oxygen

### Prerequisites
- Shopify CLI installed: `npm install -g @shopify/cli @shopify/theme`
- Authenticated with Shopify: `shopify auth login`
- Storefront API token with proper scopes

### Deploy Command

```bash
shopify hydrogen deploy
```

Follow the prompts to:
1. Select your store
2. Enter deployment name
3. Confirm deployment

### Expected Production URL Format

After deployment, your storefront will be available at:
```
https://your-storefront-name.oxygen.shopify.dev
```

Or if using a custom domain:
```
https://your-custom-domain.com
```

## GitHub Actions Deployment

### Required Secrets

Add these secrets to your GitHub repository:

1. `SHOPIFY_STORE_DOMAIN` - Your store domain (e.g., `your-store.myshopify.com`)
2. `SHOPIFY_STOREFRONT_API_TOKEN` - Storefront API token
3. `SHOPIFY_STOREFRONT_API_VERSION` - API version (default: `2024-01`)
4. `SESSION_SECRET` - Random secret string for sessions
5. `SHOPIFY_CLI_TOKEN` - (Optional) CLI token for automated deployment

### Automatic Deployment

The workflow (`.github/workflows/deploy.yml`) will:
1. Build the project on push to `main`/`master`
2. Deploy to Oxygen if `SHOPIFY_CLI_TOKEN` is set
3. Otherwise, build completes and you can deploy manually

### Manual Deployment After Build

If automated deployment is not configured:
```bash
shopify hydrogen deploy
```

## Verification Checklist

After deployment, verify:

- [ ] Home page loads (`/`)
- [ ] Product pages load (`/products/:handle`)
- [ ] Collection pages load (`/collections/:handle`)
- [ ] Cart page loads (`/cart`)
- [ ] Add to cart works
- [ ] Update cart quantity works
- [ ] Remove from cart works
- [ ] Health check responds (`/health`)
- [ ] Mobile responsive layout works
- [ ] Desktop layout works
- [ ] Navigation links work
- [ ] Images load correctly
- [ ] Styles render correctly

## Troubleshooting

### Build Errors

1. Check environment variables are set
2. Verify Shopify credentials are correct
3. Run `npm run typecheck` to find TypeScript errors
4. Check `npm run lint` for code issues

### Deployment Errors

1. Verify Shopify CLI is authenticated: `shopify auth status`
2. Check storefront API token has correct scopes
3. Verify store domain is correct
4. Check Oxygen deployment limits/quota

### Runtime Errors

1. Check browser console for client errors
2. Check server logs in Oxygen dashboard
3. Verify environment variables in Oxygen
4. Test health endpoint: `/health`

## Environment Variables Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `SHOPIFY_STORE_DOMAIN` | Yes | Your Shopify store domain |
| `SHOPIFY_STOREFRONT_API_TOKEN` | Yes | Storefront API access token |
| `SHOPIFY_STOREFRONT_API_VERSION` | No | API version (default: 2024-01) |
| `SHOPIFY_STOREFRONT_ID` | No | Storefront ID (optional) |
| `SHOPIFY_STOREFRONT_API_PRIVATE_TOKEN` | No | Private token (optional) |
| `SESSION_SECRET` | Yes | Random secret for sessions |
| `NODE_ENV` | No | Environment (development/production) |
