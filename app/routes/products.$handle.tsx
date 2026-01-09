import type {LoaderFunctionArgs, MetaFunction} from '@remix-run/node';
import {useLoaderData, useFetcher} from '@remix-run/react';
import {useState, useEffect} from 'react';
import {json} from '@remix-run/node';
import {createHydrogenStorefront} from '../lib/shopify.server';
import MentraLive from '../imports/MentraLive';
import EnhancedMobileMentraLive from '../components/EnhancedMobileMentraLive';
import {Toaster} from '../components/ui/sonner';
import {CartProvider} from '../contexts/CartContext';

export const meta: MetaFunction<typeof loader> = ({data}) => {
  if (!data?.product) {
    return [
      {title: 'Product Not Found'},
      {name: 'description', content: 'The product you are looking for does not exist'},
    ];
  }

  const product = data.product;
  const image = product.featuredImage?.url || '';

  return [
    {title: product.title},
    {name: 'description', content: product.description || ''},
    {property: 'og:title', content: product.title},
    {property: 'og:description', content: product.description || ''},
    {property: 'og:image', content: image},
    {property: 'og:type', content: 'product'},
  ];
};

export async function loader({request, params, context}: LoaderFunctionArgs) {
  // Handle preview mode gracefully when Shopify credentials are placeholders
  const {handle} = params;
  
  try {
    const {storefront} = createHydrogenStorefront({
      request,
      cache: context?.cache,
      waitUntil: context?.waitUntil,
    });

    if (!handle) {
      throw new Response('Product handle is required', {status: 400});
    }

    // Query product by handle
    const {product} = await storefront.query(`
    query getProduct($handle: String!) {
      product(handle: $handle) {
        id
        title
        description
        handle
        featuredImage {
          url
          altText
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        variants(first: 1) {
          edges {
            node {
              id
              title
              price {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
    `, {
      variables: {handle},
    });

    if (!product) {
      throw new Response('Product not found', {status: 404});
    }

    return json({product});
  } catch (error: any) {
    // In preview mode or if Shopify is not configured, return mock data
    // Catch all errors - storefront creation errors, API errors, etc.
    console.warn('Shopify error or not configured, returning mock product data for preview:', error?.message || error);
    
    return json({
      product: {
        id: 'gid://shopify/Product/mentra-live',
        title: 'Mentra Live Camera Glasses',
        description: 'Mentra Live smart glasses with HD camera, speakers, no display, and open-source SDK.',
        handle: handle || 'mentra-live',
        featuredImage: null,
        priceRange: {
          minVariantPrice: {
            amount: '299.00',
            currencyCode: 'USD',
          },
        },
        variants: {
          edges: [{
            node: {
              id: 'gid://shopify/ProductVariant/mentra-live-default',
              title: 'Default Title',
              price: {
                amount: '299.00',
                currencyCode: 'USD',
              },
            },
          }],
        },
      },
    });
  }
}

export default function ProductPage() {
  const {product} = useLoaderData<typeof loader>();
  const [isMobile, setIsMobile] = useState(false);
  const fetcher = useFetcher();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Get variant ID from product data
  const variantId = product?.variants?.edges?.[0]?.node?.id || null;

  // Pass product data and cart handler to components
  return (
    <CartProvider variantId={variantId} fetcher={fetcher}>
      {isMobile ? (
        <EnhancedMobileMentraLive 
          product={product} 
          variantId={variantId}
          fetcher={fetcher}
        />
      ) : (
        <MentraLive 
          product={product} 
          variantId={variantId}
          fetcher={fetcher}
        />
      )}
      <Toaster position="top-center" richColors />
    </CartProvider>
  );
}
