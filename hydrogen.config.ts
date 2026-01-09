import {defineConfig} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    storeDomain: process.env.SHOPIFY_STORE_DOMAIN || '',
    storefrontToken: process.env.SHOPIFY_STOREFRONT_API_TOKEN || '',
    storefrontApiVersion: process.env.SHOPIFY_STOREFRONT_API_VERSION || '2024-01',
  },
  serverErrorPage: '/src/error',
});
