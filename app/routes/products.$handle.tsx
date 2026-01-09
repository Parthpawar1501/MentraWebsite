import type {LoaderFunctionArgs, MetaFunction} from '@remix-run/node';
import {useLoaderData} from '@remix-run/react';
import {useState, useEffect} from 'react';
import {json} from '@remix-run/node';
import {createHydrogenStorefront} from '../lib/shopify.server';
import MentraLiveDesktop from '../imports/MentraLive';
import EnhancedMobileMentraLive from '../components/EnhancedMobileMentraLive';
import {Toaster} from '../components/ui/sonner';

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
  try {
    const {storefront} = createHydrogenStorefront({
      request,
      cache: context?.cache,
      waitUntil: context?.waitUntil,
    });

    const {handle} = params;
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
  } catch (error) {
    // In preview mode, return mock data instead of failing
    if (error instanceof Error && error.message.includes('SHOPIFY')) {
      console.warn('Shopify not configured, returning mock product data for preview');
      return json({
        product: {
          id: 'preview-product',
          title: 'Preview Product',
          description: 'This is a preview deployment. Connect a Shopify store to see real products.',
          handle: params.handle || 'preview',
          featuredImage: null,
          priceRange: {
            minVariantPrice: {
              amount: '0.00',
              currencyCode: 'USD',
            },
          },
          variants: {
            edges: [],
          },
        },
      });
    }
    throw error;
  }
}

export default function ProductPage() {
  const {product} = useLoaderData<typeof loader>();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // For now, use the existing component structure
  // Later we can integrate product data from Shopify
  return (
    <>
      {isMobile ? <EnhancedMobileMentraLive /> : <MentraLiveDesktop />}
      <Toaster position="top-center" richColors />
    </>
  );
}
