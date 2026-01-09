import type {LoaderFunctionArgs, MetaFunction} from '@remix-run/node';
import {useLoaderData} from '@remix-run/react';
import {json} from '@remix-run/node';
import {createHydrogenStorefront} from '../lib/shopify.server';
import {Link} from '@remix-run/react';

export const meta: MetaFunction<typeof loader> = ({data}) => {
  if (!data?.collection) {
    return [
      {title: 'Collection Not Found'},
      {name: 'description', content: 'The collection you are looking for does not exist'},
    ];
  }

  const collection = data.collection;
  const image = collection.image?.url || '';

  return [
    {title: collection.title},
    {name: 'description', content: collection.description || ''},
    {property: 'og:title', content: collection.title},
    {property: 'og:description', content: collection.description || ''},
    {property: 'og:image', content: image},
    {property: 'og:type', content: 'website'},
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
      throw new Response('Collection handle is required', {status: 400});
    }

    // Query collection by handle
    const {collection} = await storefront.query(`
    query getCollection($handle: String!) {
      collection(handle: $handle) {
        id
        title
        description
        handle
        image {
          url
          altText
        }
        products(first: 20) {
          edges {
            node {
              id
              title
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
            }
          }
        }
      }
    }
    `, {
      variables: {handle},
    });

    if (!collection) {
      throw new Response('Collection not found', {status: 404});
    }

    return json({collection});
  } catch (error) {
    // In preview mode, return mock data instead of failing
    if (error instanceof Error && error.message.includes('SHOPIFY')) {
      console.warn('Shopify not configured, returning mock collection data for preview');
      return json({
        collection: {
          id: 'preview-collection',
          title: 'Preview Collection',
          description: 'This is a preview deployment. Connect a Shopify store to see real collections.',
          handle: params.handle || 'preview',
          image: null,
          products: {
            edges: [],
          },
        },
      });
    }
    throw error;
  }
}

export default function CollectionPage() {
  const {collection} = useLoaderData<typeof loader>();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">{collection.title}</h1>
      {collection.description && (
        <p className="text-gray-600 mb-8">{collection.description}</p>
      )}

      {collection.products.edges.length === 0 ? (
        <p className="text-gray-600">No products found in this collection.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {collection.products.edges.map(({node: product}) => (
            <Link
              key={product.id}
              to={`/products/${product.handle}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                {product.featuredImage && (
                  <img
                    src={product.featuredImage.url}
                    alt={product.featuredImage.altText || product.title}
                    className="w-full h-64 object-cover"
                  />
                )}
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600">
                    {product.title}
                  </h3>
                  <p className="text-gray-600">
                    {product.priceRange.minVariantPrice.amount}{' '}
                    {product.priceRange.minVariantPrice.currencyCode}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
