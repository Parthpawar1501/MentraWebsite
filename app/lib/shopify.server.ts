import {createStorefrontClient, storefrontRedirect} from '@shopify/hydrogen';
import type {I18nLocale} from '@shopify/hydrogen';

export function getStorefrontHeaders(request: Request) {
  const headers = new Headers(request.headers);
  const userAgent = headers.get('user-agent');
  if (userAgent) {
    headers.set('user-agent', userAgent);
  }
  return headers;
}

export function createHydrogenStorefront({
  cache,
  waitUntil,
  i18n,
  request,
}: {
  cache?: Cache;
  waitUntil?: ExecutionContext['waitUntil'];
  i18n?: I18nLocale;
  request: Request;
}) {
  try {
    const token = getPublicStorefrontToken();
    const domain = getStoreDomain();
    
    const {storefront} = createStorefrontClient({
      cache,
      waitUntil,
      i18n,
      publicStorefrontToken: token,
      privateStorefrontToken: getPrivateStorefrontToken(),
      storeDomain: domain,
      storefrontId: getStorefrontId(),
      requestGroupId: request.headers.get('request-id'),
      storefrontHeaders: getStorefrontHeaders(request),
    });

    return {storefront, storefrontRedirect};
  } catch (error) {
    // If storefront creation fails (e.g., invalid credentials), throw with special flag
    const wrappedError = error instanceof Error ? error : new Error(String(error));
    (wrappedError as any).isStorefrontError = true;
    throw wrappedError;
  }
}

function getPublicStorefrontToken() {
  const token = process.env.SHOPIFY_STOREFRONT_API_TOKEN;
  // For preview deployments, allow placeholder values
  if (!token || token === 'preview-token-placeholder') {
    console.warn('SHOPIFY_STOREFRONT_API_TOKEN not set or using placeholder - Shopify features will not work');
    return 'preview-token-placeholder';
  }
  return token;
}

function getPrivateStorefrontToken() {
  return process.env.SHOPIFY_STOREFRONT_API_PRIVATE_TOKEN || undefined;
}

function getStoreDomain() {
  const domain = process.env.SHOPIFY_STORE_DOMAIN;
  // For preview deployments, allow placeholder values
  if (!domain || domain === 'preview-store.myshopify.com') {
    console.warn('SHOPIFY_STORE_DOMAIN not set or using placeholder - Shopify features will not work');
    return 'preview-store.myshopify.com';
  }
  return domain;
}

function getStorefrontId() {
  return process.env.SHOPIFY_STOREFRONT_ID || '';
}
