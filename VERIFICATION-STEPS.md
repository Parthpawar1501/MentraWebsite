# Verification Steps

## Exact Commands to Run Locally

### 1. Install Dependencies
```bash
npm install
```

**Expected:** No errors, all packages installed

### 2. Set Up Environment
```bash
cp .env.example .env
```

Then edit `.env` and add your Shopify credentials:
- `SHOPIFY_STORE_DOMAIN`
- `SHOPIFY_STOREFRONT_API_TOKEN`
- `SESSION_SECRET`

### 3. Run Development Server
```bash
npm run dev
```

**Expected:** 
- Server starts on port 3000 (or shown port)
- No build errors
- Console shows "Ready" or similar

### 4. Test Build
```bash
npm run build
```

**Expected:**
- Build completes successfully
- Creates `.output/` directory
- No TypeScript or build errors

### 5. Type Check
```bash
npm run typecheck
```

**Expected:** No TypeScript errors

## Browser Testing Checklist

Open http://localhost:3000 (or your dev port) and test:

### Home Page (`/`)
- [ ] Page loads without errors
- [ ] Desktop layout renders correctly
- [ ] Mobile layout renders correctly (resize browser to <768px)
- [ ] Navigation bar appears
- [ ] All images load
- [ ] Styles render correctly
- [ ] No console errors

### Product Page (`/products/mentra-live`)
Replace `mentra-live` with your actual product handle:
- [ ] Page loads
- [ ] Product information displays (if Shopify connected)
- [ ] Desktop layout works
- [ ] Mobile layout works
- [ ] Add to cart button visible
- [ ] No console errors

### Collection Page (`/collections/all`)
Replace `all` with your actual collection handle:
- [ ] Page loads
- [ ] Collection title displays
- [ ] Products list renders (if Shopify connected)
- [ ] Product cards are clickable
- [ ] No console errors

### Cart Page (`/cart`)
- [ ] Page loads
- [ ] Empty cart message shows if cart is empty
- [ ] Cart items display if items exist
- [ ] Total price displays correctly
- [ ] No console errors

### Health Check (`/health`)
- [ ] Returns JSON: `{"status":"ok","timestamp":"...","environment":"..."}`
- [ ] Status code: 200

### Cart Functionality
1. **Add to Cart:**
   - [ ] Click "Add to Cart" on product page
   - [ ] Toast notification appears (if implemented)
   - [ ] Cart updates
   - [ ] Navigate to `/cart` and see item

2. **Update Quantity:**
   - [ ] Change quantity in cart
   - [ ] Cart updates correctly
   - [ ] Price recalculates

3. **Remove Item:**
   - [ ] Remove item from cart
   - [ ] Cart updates
   - [ ] Item disappears

### Navigation
- [ ] Logo links to home (`/`)
- [ ] Navigation menu items work
- [ ] Footer links work (if present)
- [ ] Mobile menu works (if present)

### Responsive Design
- [ ] Desktop (≥1024px): Full layout
- [ ] Tablet (768-1023px): Responsive layout
- [ ] Mobile (<768px): Mobile layout
- [ ] No horizontal scrolling
- [ ] Touch targets are adequate size

## Expected Production URL Format

After deployment to Shopify Oxygen:

```
https://your-storefront-name.oxygen.shopify.dev
```

Or with custom domain:
```
https://your-custom-domain.com
```

## Common Issues and Fixes

### Issue: "SHOPIFY_STOREFRONT_API_TOKEN is not set"
**Fix:** Add token to `.env` file

### Issue: Build fails with TypeScript errors
**Fix:** Run `npm run typecheck` and fix errors

### Issue: Images not loading
**Fix:** Verify assets are in `public/assets/` and paths use `/assets/...`

### Issue: Styles not loading
**Fix:** Check `app/root.tsx` includes all CSS files

### Issue: Cart not working
**Fix:** Verify Shopify Storefront API token has cart scopes enabled

## Success Criteria

✅ All routes load without errors
✅ Products render from Shopify (if connected)
✅ Collections render from Shopify (if connected)
✅ Cart works end-to-end
✅ Navigation works
✅ Responsive layouts work
✅ Build completes successfully
✅ TypeScript compiles without errors
✅ Health check responds

## Next Steps After Verification

Once all checks pass:
1. Deploy to Shopify Oxygen
2. Test production deployment
3. Archive old code (see Phase 3)
