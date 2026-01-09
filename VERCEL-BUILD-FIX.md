# Vercel Build Error Fix - Dependency Resolution

## Error
```
npm error ERESOLVE could not resolve
npm error peerOptional vite@"^5.1.0" from @shopify/hydrogen@2024.10.1
npm error Found: vite@6.3.5
```

## Root Cause
Vercel runs `npm install` in multiple stages:
1. Initial install (respects `installCommand` with `--legacy-peer-deps`)
2. Post-build install for serverless functions (doesn't use the flag)

The conflict occurs because:
- `@shopify/hydrogen@2024.10.1` requires `vite@^5.1.0`
- We have `vite@6.3.5` installed
- The second install step doesn't use `--legacy-peer-deps`

## Fix Applied

### Created `.npmrc` file
```
legacy-peer-deps=true
```

This ensures **all** npm install commands (including Vercel's post-build installs) automatically use the `--legacy-peer-deps` flag.

## Changes Made

### Created:
- **`.npmrc`** - Sets `legacy-peer-deps=true` globally

## Why This Works

- `.npmrc` is automatically read by npm
- Applies to all npm commands, including Vercel's internal installs
- No need to specify the flag manually
- Works across all CI/CD environments

## Next Steps

1. Commit and push the `.npmrc` file:
   ```bash
   git add .npmrc
   git commit -m "Add .npmrc to fix Vercel dependency resolution"
   git push origin main
   ```

2. Vercel will automatically redeploy with the fix

3. The build should now complete successfully

## Alternative Solutions (if needed)

If `.npmrc` doesn't fully resolve the issue, consider:

1. **Pin Hydrogen version** to a specific version that works:
   ```json
   "@shopify/hydrogen": "2024.1.0"
   ```

2. **Downgrade Vite** to 5.x (if Hydrogen compatibility is critical):
   ```json
   "vite": "^5.4.21"
   ```

3. **Update Hydrogen** to latest version that supports Vite 6:
   ```bash
   npm install @shopify/hydrogen@latest --legacy-peer-deps
   ```

## Notes

- The `.npmrc` approach is preferred as it's non-invasive
- It maintains your current dependency versions
- Works for both local development and CI/CD
