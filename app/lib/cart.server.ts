import type {Cart} from '@shopify/hydrogen/storefront-api-types';

const CART_QUERY = `
  query getCart($cartId: ID!) {
    cart(id: $cartId) {
      id
      checkoutUrl
      totalQuantity
      cost {
        totalAmount {
          amount
          currencyCode
        }
      }
      lines(first: 100) {
        edges {
          node {
            id
            quantity
            cost {
              totalAmount {
                amount
                currencyCode
              }
            }
            merchandise {
              ... on ProductVariant {
                id
                title
                product {
                  title
                }
              }
            }
          }
        }
      }
    }
  }
`;

const CART_CREATE_MUTATION = `
  mutation cartCreate($input: CartInput) {
    cartCreate(input: $input) {
      cart {
        id
        checkoutUrl
        totalQuantity
      }
      userErrors {
        field
        message
      }
    }
  }
`;

const CART_LINES_ADD_MUTATION = `
  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        id
        checkoutUrl
        totalQuantity
        cost {
          totalAmount {
            amount
            currencyCode
          }
        }
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              cost {
                totalAmount {
                  amount
                  currencyCode
                }
              }
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  product {
                    title
                  }
                }
              }
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export async function createCart(
  storefront: ReturnType<typeof import('./shopify.server').createHydrogenStorefront>['storefront'],
): Promise<{id: string; checkoutUrl: string} | null> {
  const {cartCreate: result} = await storefront.mutate(CART_CREATE_MUTATION, {
    variables: {input: {}},
  });

  if (result?.userErrors?.length) {
    console.error('Cart creation errors:', result.userErrors);
    return null;
  }

  return result?.cart || null;
}

export async function addToCart(
  storefront: ReturnType<typeof import('./shopify.server').createHydrogenStorefront>['storefront'],
  cartId: string,
  merchandiseId: string,
  quantity: number = 1,
): Promise<Cart | null> {
  const {cartLinesAdd: result} = await storefront.mutate(CART_LINES_ADD_MUTATION, {
    variables: {
      cartId,
      lines: [{merchandiseId, quantity}],
    },
  });

  if (result?.userErrors?.length) {
    console.error('Add to cart errors:', result.userErrors);
    return null;
  }

  return result?.cart || null;
}

export async function getCart(
  storefront: ReturnType<typeof import('./shopify.server').createHydrogenStorefront>['storefront'],
  cartId: string,
): Promise<Cart | null> {
  const {cart} = await storefront.query(CART_QUERY, {
    variables: {cartId},
  });

  return cart;
}
