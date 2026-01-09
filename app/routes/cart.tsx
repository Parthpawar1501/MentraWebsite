import type {LoaderFunctionArgs, MetaFunction} from '@remix-run/node';
import {useLoaderData} from '@remix-run/react';
import {json} from '@remix-run/node';
import {createHydrogenStorefront} from '../lib/shopify.server';
import {getCart} from '../lib/cart.server';

export const meta: MetaFunction = () => {
  return [
    {title: 'Cart - Mentra'},
    {name: 'description', content: 'Your shopping cart'},
  ];
};

export async function loader({request, context}: LoaderFunctionArgs) {
  // Handle preview mode gracefully
  try {
    const {storefront} = createHydrogenStorefront({
      request,
      cache: context?.cache,
      waitUntil: context?.waitUntil,
    });

    // Get cart ID from cookie
    const cookieHeader = request.headers.get('Cookie') || '';
    const cartIdMatch = cookieHeader.match(/cart-id=([^;]+)/);
    const cartId = cartIdMatch ? cartIdMatch[1] : null;

    let cart = null;
    if (cartId) {
      cart = await getCart(storefront, cartId);
    }

    return json({cart});
  } catch (error) {
    // In preview mode, return empty cart instead of failing
    if (error instanceof Error && error.message.includes('SHOPIFY')) {
      console.warn('Shopify not configured, returning empty cart for preview');
      return json({cart: null});
    }
    throw error;
  }
}

export default function CartPage() {
  const {cart} = useLoaderData<typeof loader>();

  if (!cart || !cart.lines || cart.lines.edges.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        <p className="text-gray-600">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <div className="space-y-4">
        {cart.lines.edges.map(({node: line}) => (
          <div key={line.id} className="flex items-center justify-between border-b pb-4">
            <div>
              <h3 className="font-semibold">{line.merchandise.title}</h3>
              <p className="text-gray-600">Quantity: {line.quantity}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">
                {line.cost.totalAmount.amount} {line.cost.totalAmount.currencyCode}
              </p>
            </div>
          </div>
        ))}
        <div className="mt-8 pt-4 border-t">
          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>
              {cart.cost.totalAmount.amount} {cart.cost.totalAmount.currencyCode}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
