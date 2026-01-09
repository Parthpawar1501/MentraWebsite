# Vercel Deployment Guide

This guide explains how to deploy the Shopify Hydrogen + Remix app to Vercel for preview purposes.

## Prerequisites

- GitHub account
- Vercel account (sign up at https://vercel.com)
- Node.js 18+ installed locally

## Step 1: Push to GitHub

Ensure all changes are committed and pushed to your GitHub repository:

```bash
git add .
git commit -m "Add Vercel deployment configuration"
git push origin main
```

## Step 2: Connect Repository to Vercel

1. **Log in to Vercel:**
   - Go to https://vercel.com
   - Sign in with your GitHub account

2. **Import Project:**
   - Click "Add New..." → "Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Project Settings:**
   - **Framework Preset:** Other (or Remix if available)
   - **Root Directory:** `/` (leave as default)
   - **Build Command:** `npm run build`
   - **Output Directory:** `build/client`
   - **Install Command:** `npm install --legacy-peer-deps`
   - **Node.js Version:** 18.x (or latest)

## Step 3: Set Environment Variables

In the Vercel project settings, go to "Environment Variables" and add:

### Required for Preview (Placeholder Values):

```
SHOPIFY_STORE_DOMAIN=preview-store.myshopify.com
SHOPIFY_STOREFRONT_API_TOKEN=preview-token-placeholder
SHOPIFY_STOREFRONT_API_VERSION=2024-01
SESSION_SECRET=preview-session-secret-change-in-production
```

### Optional:

```
NODE_ENV=production
```

**Note:** These are placeholder values for preview deployment. Replace with real Shopify credentials when connecting to an actual store.

## Step 4: Deploy

1. Click "Deploy" in Vercel dashboard
2. Wait for the build to complete
3. Vercel will automatically:
   - Install dependencies
   - Run the build command
   - Deploy to a preview URL

## Step 5: Access Your Deployment

After deployment completes:

1. **Preview URL Format:**
   ```
   https://your-project-name-{hash}.vercel.app
   ```

2. **Production URL (after connecting main branch):**
   ```
   https://your-project-name.vercel.app
   ```

3. **Find Your URL:**
   - Go to your project dashboard in Vercel
   - Click on the latest deployment
   - Copy the "Visit" URL

## Preview Deployment Behavior

Since this is a preview deployment without a real Shopify store:

- ✅ **All routes will load** (home, products, collections, etc.)
- ✅ **UI renders correctly** with all components
- ⚠️ **Product/Collection pages** show mock data with placeholder messages
- ⚠️ **Cart functionality** returns mock responses
- ⚠️ **Shopify API calls** are gracefully handled with fallback data

## Testing the Deployment

1. **Home Page:** `https://your-url.vercel.app/`
2. **Product Page:** `https://your-url.vercel.app/products/mentra-live`
3. **Collection Page:** `https://your-url.vercel.app/collections/all`
4. **Cart Page:** `https://your-url.vercel.app/cart`
5. **Health Check:** `https://your-url.vercel.app/health`

## Updating Environment Variables for Real Shopify Store

When ready to connect to a real Shopify store:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Update:
   - `SHOPIFY_STORE_DOMAIN` - Your actual store domain (e.g., `your-store.myshopify.com`)
   - `SHOPIFY_STOREFRONT_API_TOKEN` - Your Storefront API token from Shopify admin
3. Redeploy or wait for automatic redeployment

## Deployment Configuration Files

The following files control Vercel deployment:

- **`vercel.json`** - Vercel configuration
- **`api/server.js`** - Serverless function handler for Remix
- **`package.json`** - Build scripts and dependencies

## Troubleshooting

### Build Fails

- Check build logs in Vercel dashboard
- Ensure `SHOPIFY_STORE_DOMAIN` and `SHOPIFY_STOREFRONT_API_TOKEN` are set (even if placeholders)
- Verify Node.js version is 18+

### Routes Return 404

- Ensure `vercel.json` rewrites are configured correctly
- Check that `api/server.js` exists and exports default handler
- Verify build output includes `build/server/index.js`

### Shopify Errors in Preview

- This is expected! Preview mode uses placeholder credentials
- Routes will show mock data instead of failing
- Update environment variables with real credentials to enable Shopify features

### Serverless Function Timeout

- Current max duration: 30 seconds
- Can be increased in `vercel.json` under `functions.api.server.js.maxDuration`
- Vercel Pro plan required for longer timeouts

## Automatic Deployments

Vercel automatically deploys:
- Every push to `main` branch → Production
- Every push to other branches → Preview deployment
- Pull requests → Preview deployment with unique URL

## Next Steps

1. ✅ Deploy to Vercel (this guide)
2. ⏳ Test all routes in preview deployment
3. ⏳ Connect real Shopify store (update environment variables)
4. ⏳ Test Shopify integration (products, cart, checkout)
5. ⏳ Set up custom domain (optional)

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Remix Documentation](https://remix.run/docs)
- [Shopify Hydrogen Documentation](https://shopify.dev/docs/custom-storefronts/hydrogen)
