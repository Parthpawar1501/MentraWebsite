import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useCart } from "../contexts/CartContext";
import MobileNavigationBar from "./MobileNavigationBar";
import MobileHeroSection from "./mobile/MobileHeroSection";
import MobileInvestorLogos from "./mobile/MobileInvestorLogos";
import MobileProductHeader from "./mobile/MobileProductHeader";
import MobileProductImage from "./mobile/MobileProductImage";
import MobileColorSelector from "./mobile/MobileColorSelector";
import MobileSizeSelector from "./mobile/MobileSizeSelector";
import MobilePurchaseSection from "./mobile/MobilePurchaseSection";
import MobileProductFeatures from "./mobile/MobileProductFeatures";
import MobileReviews from "./mobile/MobileReviews";
import ScrollReveal from "./ScrollReveal";

interface EnhancedMobileMentraLiveProps {
  product?: any;
  variantId?: string | null;
  fetcher?: any;
}

export default function EnhancedMobileMentraLive({ product, variantId, fetcher }: EnhancedMobileMentraLiveProps = {}) {
  const [showStickyBar, setShowStickyBar] = useState(false);
  let cart;
  try {
    cart = useCart();
  } catch {
    cart = null;
  }

  // Show sticky bar after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAddToCart = async () => {
    try {
      const merchandiseId = variantId || product?.variants?.edges?.[0]?.node?.id || "gid://shopify/ProductVariant/placeholder";
      
      if (cart) {
        await cart.addToCart(merchandiseId, 1);
        toast.success("Added to cart!", {
          description: "Mentra Live - $299.00",
          duration: 3000,
        });
      } else if (fetcher) {
        fetcher.submit(
          {
            intent: 'add',
            merchandiseId,
            quantity: '1',
          },
          {
            method: 'POST',
            action: '/api/cart',
          }
        );
        toast.success("Added to cart!", {
          description: "Mentra Live - $299.00",
          duration: 3000,
        });
      } else {
        const response = await fetch('/api/cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            intent: 'add',
            merchandiseId,
            quantity: '1',
          }),
        });

        const data = await response.json();
        
        if (response.ok && data.cart) {
          toast.success("Added to cart!", {
            description: "Mentra Live - $299.00",
            duration: 3000,
          });
        } else {
          toast.error("Failed to add to cart", {
            description: "Please try again",
            duration: 3000,
          });
        }
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast.error("Failed to add to cart", {
        description: "Please try again",
        duration: 3000,
      });
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-white">
      {/* Mobile Navigation - Global component */}
      <MobileNavigationBar />

      {/* Main Content - Built piece by piece */}
      <div className="w-full">
        {/* Hero Section */}
        <MobileHeroSection />

        {/* Investor Logos */}
        <ScrollReveal delay={100} direction="up">
          <MobileInvestorLogos />
        </ScrollReveal>

        {/* Product Header */}
        <ScrollReveal delay={150} direction="up">
          <MobileProductHeader />
        </ScrollReveal>

        {/* Product Image with Interactive Hotspots */}
        <ScrollReveal delay={200} direction="fade" duration={1}>
          <MobileProductImage />
        </ScrollReveal>

        {/* Color Selector */}
        <ScrollReveal delay={250} direction="up">
          <MobileColorSelector />
        </ScrollReveal>

        {/* Size Selector */}
        <ScrollReveal delay={300} direction="up">
          <MobileSizeSelector />
        </ScrollReveal>

        {/* Purchase Section */}
        <ScrollReveal delay={350} direction="up">
          <MobilePurchaseSection onAddToCart={handleAddToCart} />
        </ScrollReveal>

        {/* Product Features & Specs */}
        <ScrollReveal delay={400} direction="up">
          <MobileProductFeatures />
        </ScrollReveal>

        {/* Customer Reviews */}
        <ScrollReveal delay={450} direction="up">
          <MobileReviews />
        </ScrollReveal>

        {/* Footer Spacing */}
        <div className="h-24" />
      </div>

      {/* Sticky Buy Button at bottom - Shows after scroll */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl transition-all duration-300 ${
          showStickyBar ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
        style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}
      >
        <div className="flex items-center justify-between px-4 py-4 max-w-md mx-auto gap-4">
          <div className="flex-shrink-0">
            <p className="font-['Red_Hat_Display:Bold',sans-serif] text-[18px] text-[#0a0a0a] leading-tight">
              $299.00
            </p>
            <p className="font-['Red_Hat_Display:Regular',sans-serif] text-[12px] text-gray-600">
              Mentra Live
            </p>
          </div>
          <button
            onClick={handleAddToCart}
            disabled={cart?.isAdding || false}
            className="bg-[#00b869] disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-3 rounded-full font-['Red_Hat_Display:SemiBold',sans-serif] text-[16px] shadow-lg active:scale-95 transition-all hover:bg-[#00a05d] flex-shrink-0"
          >
            {cart?.isAdding ? 'Adding...' : 'Buy Now'}
          </button>
        </div>
      </div>

      {/* Smooth scroll behavior */}
      <style dangerouslySetInnerHTML={{__html: `
        html {
          scroll-behavior: smooth;
        }
        body {
          overflow-x: hidden;
        }
      `}} />
    </div>
  );
}