import { useNavigate } from "@remix-run/react";
import { ChevronLeft, ShoppingCart } from "lucide-react";

/**
 * GLOBAL MOBILE NAVIGATION BAR COMPONENT
 * 
 * This is the mobile navigation bar used across all mobile views.
 * Any updates made here will automatically reflect on all mobile pages.
 * 
 * For desktop navigation, see: NavigationBar.tsx
 */

export default function MobileNavigationBar() {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left: Back/Home Button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 active:opacity-60 transition-opacity"
          aria-label="Go to home page"
        >
          <ChevronLeft className="w-6 h-6 text-[#0a0a0a]" />
        </button>
        
        {/* Center: Logo */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2"
          aria-label="Mentra home"
        >
          <div className="h-[15.568px] w-[30.162px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.1624 15.5677">
              <g id="Logo">
                <rect fill="#00b869" height="6.91898" id="Rectangle 1" width="7.14592" y="8.64873" />
                <path d="M7.14592 0L14.2918 0L14.2918 15.5677L7.14592 15.5677L7.14592 0Z" fill="#00b869" id="Rectangle 2" />
                <path d="M15.8705 0L23.0164 0L23.0164 15.5677L15.8705 15.5677L15.8705 0Z" fill="#00b869" id="Rectangle 3" />
              </g>
            </svg>
          </div>
          <p className="font-['Red_Hat_Display:SemiBold',sans-serif] text-[16px] text-[#0a0a0a]">Mentra</p>
        </button>
        
        {/* Right: Cart Button */}
        <button 
          className="p-2 rounded-full active:bg-gray-100 transition-colors"
          aria-label="View cart"
        >
          <ShoppingCart className="w-5 h-5 text-[#0a0a0a]" />
        </button>
      </div>
    </div>
  );
}