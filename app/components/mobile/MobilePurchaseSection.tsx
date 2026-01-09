import { useState } from "react";
import { ShoppingCart, Heart } from "lucide-react";
import { toast } from "sonner";

interface PurchaseSectionProps {
  onAddToCart?: () => void;
}

export default function MobilePurchaseSection({ onAddToCart }: PurchaseSectionProps) {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const price = 299.00;

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart();
    } else {
      toast.success("Added to cart!", {
        description: `${quantity} x Mentra Live - $${(price * quantity).toFixed(2)}`,
        duration: 3000,
      });
    }
  };

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast.success(isFavorite ? "Removed from favorites" : "Added to favorites", {
      duration: 2000,
    });
  };

  return (
    <div className="w-full py-6 px-6 bg-white border-t border-gray-200">
      <div className="max-w-[390px] mx-auto">
        {/* Price and Quantity */}
        <div className="flex items-center justify-between mb-6">
          {/* Price */}
          <div>
            <p className="font-['Red_Hat_Display:Bold',sans-serif] text-[28px] text-[#0a0a0a]">
              ${(price * quantity).toFixed(2)}
            </p>
            <p className="font-['Red_Hat_Display:Regular',sans-serif] text-[12px] text-gray-600">
              Free shipping • 2-year warranty
            </p>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-3 bg-gray-100 rounded-full px-3 py-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-[#0a0a0a] font-['Red_Hat_Display:Bold',sans-serif] text-[16px] active:scale-90 hover:scale-105 hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="font-['Red_Hat_Display:SemiBold',sans-serif] text-[16px] text-[#0a0a0a] min-w-[24px] text-center transition-transform duration-200">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(Math.min(10, quantity + 1))}
              className="w-7 h-7 flex items-center justify-center rounded-full bg-white text-[#0a0a0a] font-['Red_Hat_Display:Bold',sans-serif] text-[16px] active:scale-90 hover:scale-105 hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow-md"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-[#00b869] text-white px-6 py-4 rounded-full font-['Red_Hat_Display:SemiBold',sans-serif] text-[16px] flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:bg-[#00a05d] active:scale-95 transition-all duration-300 hover:scale-[1.02]"
          >
            <ShoppingCart className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            Add to Cart
          </button>

          {/* Favorite Button */}
          <button
            onClick={handleToggleFavorite}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 active:scale-95 hover:scale-105 ${
              isFavorite
                ? 'bg-red-50 text-red-500 shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:shadow-sm'
            }`}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart 
              className={`w-6 h-6 transition-all duration-300 ${isFavorite ? 'fill-current scale-110' : 'hover:scale-110'}`}
            />
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#00b869]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-['Red_Hat_Display:Regular',sans-serif] text-[12px] text-gray-600">
              In Stock
            </span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#00b869]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
            </svg>
            <span className="font-['Red_Hat_Display:Regular',sans-serif] text-[12px] text-gray-600">
              Free Delivery
            </span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#00b869]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span className="font-['Red_Hat_Display:Regular',sans-serif] text-[12px] text-gray-600">
              Secure Payment
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
