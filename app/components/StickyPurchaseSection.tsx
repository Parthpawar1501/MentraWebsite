import { useState, useEffect } from "react";
import { useCart } from "../contexts/CartContext";
import { toast } from "sonner";

interface StickyPurchaseSectionProps {
  productName: string;
  price: string;
  onAddToCart?: () => void;
}

export function StickyPurchaseSection({ productName, price, onAddToCart }: StickyPurchaseSectionProps) {
  const [isSticky, setIsSticky] = useState(false);
  const cart = useCart();

  const handleAddToCart = async () => {
    try {
      if (onAddToCart) {
        onAddToCart();
      } else {
        await cart.addToCart();
        toast.success("Added to cart!", {
          description: `${productName} - ${price}`,
          duration: 3000,
        });
      }
    } catch (error) {
      toast.error("Failed to add to cart", {
        description: "Please try again",
        duration: 3000,
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Make sticky after scrolling 300px
      setIsSticky(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`transition-all duration-300 ${
        isSticky
          ? 'fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#e5e5e5] shadow-[0_-4px_20px_rgba(0,0,0,0.1)] animate-slideUp'
          : 'relative'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-[40px] py-[20px]">
        <div className="flex items-center justify-between gap-4 md:gap-[32px]">
          {/* Product info */}
          <div className="flex flex-col gap-[4px]">
            <p className="font-['Red_Hat_Display:SemiBold',sans-serif] text-[#0d0c0d] text-[20px] leading-[1.4]">
              {productName}
            </p>
            <p className="font-['Red_Hat_Display:SemiBold',sans-serif] text-[#00b869] text-[24px] leading-[1.4]">
              {price}
            </p>
          </div>

          {/* Add to cart button */}
          <button
            onClick={handleAddToCart}
            disabled={cart.isAdding}
            className="bg-[#0a0a0a] hover:bg-[#00b869] disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 md:px-[48px] py-[16px] rounded-[39px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] transition-all duration-300 ease-out hover:scale-105 active:scale-95 shadow-lg hover:shadow-[0px_6px_20px_rgba(0,184,105,0.4)] flex items-center gap-[8px] whitespace-nowrap group"
          >
            <svg className="size-[20px]" fill="none" viewBox="0 0 24 24">
              <path d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
              <path d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
              <path d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
              <path d="M9 8H21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
            </svg>
            {cart.isAdding ? 'Adding...' : 'Add to Cart'}
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}} />
    </div>
  );
}