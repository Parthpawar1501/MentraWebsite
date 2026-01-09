import { createContext, useContext, useState, ReactNode } from 'react';

interface CartContextType {
  addToCart: (variantId: string, quantity?: number) => Promise<void>;
  isAdding: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children, variantId, fetcher }: { children: ReactNode; variantId?: string | null; fetcher?: any }) {
  const [isAdding, setIsAdding] = useState(false);

  const addToCart = async (merchandiseId?: string, quantity: number = 1) => {
    if (isAdding) return;
    
    setIsAdding(true);
    try {
      const id = merchandiseId || variantId || "gid://shopify/ProductVariant/placeholder";
      
      if (fetcher) {
        fetcher.submit(
          {
            intent: 'add',
            merchandiseId: id,
            quantity: quantity.toString(),
          },
          {
            method: 'POST',
            action: '/api/cart',
          }
        );
      } else {
        const response = await fetch('/api/cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            intent: 'add',
            merchandiseId: id,
            quantity: quantity.toString(),
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to add to cart');
        }
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      throw error;
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <CartContext.Provider value={{ addToCart, isAdding }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
