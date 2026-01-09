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
  const {storefront} = createStorefrontClient({
    cache,
    waitUntil,
    i18n,
    publicStorefrontToken: getPublicStorefrontToken(),
    privateStorefrontToken: getPrivateStorefrontToken(),
    storeDomain: getStoreDomain(),
    storefrontId: getStorefrontId(),
    requestGroupId: request.headers.get('request-id'),
    storefrontHeaders: getStorefrontHeaders(request),
  });

  return {storefront, storefrontRedirect};
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
