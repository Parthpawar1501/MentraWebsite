import type {LoaderFunctionArgs, MetaFunction} from '@remix-run/node';
import {useLoaderData, useFetcher} from '@remix-run/react';
import {useState, useEffect} from 'react';
import {json} from '@remix-run/node';
import {createHydrogenStorefront} from '../lib/shopify.server';
import MentraLive from '../imports/MentraLive';
import EnhancedMobileMentraLive from '../components/EnhancedMobileMentraLive';
import {Toaster} from '../components/ui/sonner';
import {CartProvider} from '../contexts/CartContext';

export const meta: MetaFunction = () => {
  return [
    {title: 'Buy Mentra Live - AI Smart Glasses'},
    {name: 'description', content: 'Buy Mentra Live Camera Glasses - HD camera, speakers, open-source SDK. Order now!'},
    {property: 'og:title', content: 'Buy Mentra Live - AI Smart Glasses'},
    {property: 'og:description', content: 'Buy Mentra Live Camera Glasses - HD camera, speakers, open-source SDK. Order now!'},
    {property: 'og:type', content: 'product'},
  ];
};

export async function loader({request, context}: LoaderFunctionArgs) {
  // Try to load the product with handle "mentra-live"
  const handle = 'mentra-live';
  
  try {
    const {storefront} = createHydrogenStorefront({
      request,
      cache: context?.cache,
      waitUntil: context?.waitUntil,
    });

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

    if (product) {
      return json({product});
    }
  } catch (error: any) {
    // If error, continue to return mock data
    console.warn('Shopify error, using mock data:', error?.message || error);
  }
  
  // Return mock product data for Mentra Live
  return json({
    product: {
      id: 'gid://shopify/Product/mentra-live',
      title: 'Mentra Live Camera Glasses',
      description: 'Mentra Live smart glasses with HD camera, speakers, no display, and open-source SDK.',
      handle: 'mentra-live',
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

export default function BuyPage() {
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
