import { useState, useEffect } from "react";
import { useNavigate } from "@remix-run/react";

/**
 * Mobile Sticky Navigation Bar
 * 
 * A polished sticky navigation that appears as you scroll down.
 * Provides quick access to menu and cart.
 */
export default function MobileStickyNav({ onMenuClick }: { onMenuClick: () => void }) {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsTop(scrollY < 50);
      setIsVisible(scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-[9997] transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm">
        <div className="max-w-[390px] mx-auto px-6 py-3 flex items-center justify-between">
          {/* Hamburger Menu */}
          <button
            onClick={onMenuClick}
            className="p-2 -ml-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors"
            aria-label="Open menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6">
              <svg viewBox="0 0 30.1624 15.5677" fill="none">
                <rect fill="#00b869" height="6.91898" width="7.14592" y="8.64873" />
                <path d="M5.65026 0L18.5295 8.64873V15.5677L5.65026 6.91898V0Z" fill="#00b869" />
                <path d="M17.2832 0L30.1624 8.64873V15.5677L17.2832 6.91898V0Z" fill="#00b869" />
              </svg>
            </div>
            <span className="font-['Red_Hat_Display:SemiBold',sans-serif] text-base text-[#0a0a0a]">
              Mentra
            </span>
          </div>

          {/* Cart */}
          <button
            onClick={() => navigate('/buy')}
            className="p-2 -mr-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors"
            aria-label="View cart"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 10a4 4 0 0 1-8 0" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
