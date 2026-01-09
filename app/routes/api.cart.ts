import type {ActionFunctionArgs} from '@remix-run/node';
import {json} from '@remix-run/node';
import {createHydrogenStorefront} from '../lib/shopify.server';
import {createCart, addToCart} from '../lib/cart.server';

export async function action({request, context}: ActionFunctionArgs) {
  // Handle preview mode gracefully
  try {
    const {storefront} = createHydrogenStorefront({
      request,
      cache: context?.cache,
      waitUntil: context?.waitUntil,
    });

    const formData = await request.formData();
    const intent = formData.get('intent');
    const cartId = formData.get('cartId') as string | null;
    const merchandiseId = formData.get('merchandiseId') as string | null;
    const quantity = parseInt(formData.get('quantity') as string) || 1;

    if (intent === 'add') {
      if (!merchandiseId) {
        return json({error: 'Merchandise ID is required'}, {status: 400});
      }

      let newCartId = cartId;
      if (!newCartId) {
        const newCart = await createCart(storefront);
        if (!newCart) {
          return json({error: 'Failed to create cart'}, {status: 500});
        }
        newCartId = newCart.id;
      }

      const cart = await addToCart(storefront, newCartId, merchandiseId, quantity);
      if (!cart) {
        return json({error: 'Failed to add to cart'}, {status: 500});
      }

      return json({cart, cartId: newCartId}, {
        headers: {
          'Set-Cookie': `cart-id=${newCartId}; Path=/; HttpOnly; SameSite=Lax`,
        },
      });
    }

    return json({error: 'Invalid intent'}, {status: 400});
  } catch (error) {
    // In preview mode, return mock success response
    if (error instanceof Error && error.message.includes('SHOPIFY')) {
      console.warn('Shopify not configured, returning mock cart response for preview');
      return json({
        cart: {
          id: 'preview-cart',
          checkoutUrl: '#',
          totalQuantity: 1,
          cost: {
            totalAmount: {
              amount: '0.00',
              currencyCode: 'USD',
            },
          },
          lines: {
            edges: [],
          },
        },
        cartId: 'preview-cart-id',
      }, {
        headers: {
          'Set-Cookie': 'cart-id=preview-cart-id; Path=/; HttpOnly; SameSite=Lax',
        },
      });
    }
    throw error;
  }
}
