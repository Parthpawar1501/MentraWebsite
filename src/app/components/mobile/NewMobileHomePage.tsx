import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import IPhone13143 from "../../../imports/IPhone13143";
import IPhone13141339010 from "../../../imports/IPhone13141-33-9010";

/**
 * New Mobile Home Page
 * 
 * Features:
 * - Full-page hero image (IPhone13143)
 * - Rest of content from main mobile design (IPhone13141339010)
 * - Sticky bottom nav that disappears when footer is visible
 * - Hamburger menu integration
 */
export default function NewMobileHomePage() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBottomNav, setShowBottomNav] = useState(true);
  const footerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (menuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
  }, [menuOpen]);

  // Intersection Observer to hide bottom nav when footer is visible
  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Hide bottom nav when footer is intersecting viewport
          setShowBottomNav(!entry.isIntersecting);
        });
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -80px 0px', // Trigger before footer fully visible
      }
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Click handler for interactive elements
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Hamburger menu toggle (top-left icon in NavBar)
      const hamburgerIcon = target.closest('[data-name="Navigation Icon"]');
      const topNavBar = hamburgerIcon?.closest('[data-name="NavBar"]');
      
      if (hamburgerIcon && topNavBar) {
        e.preventDefault();
        e.stopPropagation();
        setMenuOpen(!menuOpen);
        return;
      }
      
      // Shopping bag navigation (top-right in NavBar)
      const shoppingBag = target.closest('[data-name="shopping-bag"]');
      const shoppingBagParent = shoppingBag?.closest('[data-name="NavBar"]');
      
      if (shoppingBag && shoppingBagParent) {
        e.preventDefault();
        e.stopPropagation();
        navigate('/buy');
        return;
      }
      
      // Bottom nav "Buy Now" button
      const buyButton = target.closest('[data-name="Buttons"]');
      if (buyButton) {
        e.preventDefault();
        e.stopPropagation();
        navigate('/buy');
        return;
      }
      
      // Hero circular navigation button (scroll down)
      const circularNavButton = target.closest('[data-name="Navigation Button"]');
      const isInHero = circularNavButton?.closest('[data-name="iPhone 13 & 14 - 3"]');
      
      if (circularNavButton && isInHero) {
        e.preventDefault();
        e.stopPropagation();
        // Scroll to content below hero
        if (contentRef.current) {
          contentRef.current.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
        }
        return;
      }
    };

    document.addEventListener('click', handleDocumentClick, true);
    return () => document.removeEventListener('click', handleDocumentClick, true);
  }, [navigate, menuOpen]);

  return (
    <>
      {/* Main Content */}
      <div className="w-full bg-white relative overflow-x-hidden">
        {/* Full-Page Hero Section */}
        <div className="relative w-full" style={{ height: '100vh', maxHeight: '844px' }}>
          <IPhone13143 />
        </div>

        {/* Rest of Content - Main mobile homepage sections */}
        <div ref={contentRef} className="relative bg-white mobile-content-without-hero w-full overflow-x-hidden">
          {/* Use the main mobile component for all other sections */}
          <div className="w-full max-w-full overflow-x-hidden">
            <IPhone13141339010 />
          </div>
          
          {/* Footer marker for intersection observer */}
          <div ref={footerRef} className="h-1 w-full" />
        </div>
      </div>

      {/* Sticky Bottom Navigation - Hides when footer is visible */}
      <div
        className={`
          fixed bottom-0 left-0 right-0 z-[9997]
          transition-transform duration-300 ease-in-out
          ${showBottomNav ? 'translate-y-0' : 'translate-y-full'}
        `}
        style={{ pointerEvents: showBottomNav ? 'auto' : 'none' }}
      >
        <div className="backdrop-blur-[26.599px] backdrop-filter bg-[rgba(255,255,255,0.85)] w-full border-t border-[#e5e5e5]/50">
          <div className="max-w-[390px] mx-auto px-[30px] py-[10px] flex items-center justify-between">
            {/* Left: Product name */}
            <div className="content-stretch flex items-center">
              <p className="font-['Red_Hat_Display:Bold',sans-serif] font-['Red_Hat_Display:SemiBold',sans-serif] leading-[15.25px] text-[#0a0a0a] text-[17.023px] whitespace-nowrap">
                <span>AI glasses </span>|<span> Mentra Live</span>
              </p>
            </div>
            
            {/* Right: Buy Now button */}
            <button
              onClick={() => navigate('/buy')}
              className="bg-[#00b869] hover:bg-[#009258] active:bg-[#007a47] content-stretch flex flex-col h-[37.399px] items-center justify-center px-[16.622px] py-[8.311px] rounded-[25.183px] shadow-[0px_1.039px_2.078px_0px_rgba(0,0,0,0.1)] transition-all active:scale-[0.98]"
            >
              <p className="font-['Red_Hat_Display:Bold',sans-serif] leading-[20.777px] text-[#f5f5f5] text-[14.107px] whitespace-nowrap">
                Buy Now
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]"
            onClick={() => setMenuOpen(false)}
            style={{ touchAction: 'none' }}
          />
          
          {/* Menu Panel */}
          <div 
            className="fixed top-0 left-0 bottom-0 w-[min(85vw,320px)] bg-white shadow-2xl z-[9999] overflow-y-auto"
            style={{
              animation: 'slideInLeft 280ms cubic-bezier(0.4, 0, 0.2, 1)',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {/* Menu Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-5 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                {/* Mentra Logo */}
                <div className="w-7 h-7">
                  <svg viewBox="0 0 30.1624 15.5677" fill="none">
                    <rect fill="#00b869" height="6.91898" width="7.14592" y="8.64873" />
                    <path d="M5.65026 0L18.5295 8.64873V15.5677L5.65026 6.91898V0Z" fill="#00b869" />
                    <path d="M17.2832 0L30.1624 8.64873V15.5677L17.2832 6.91898V0Z" fill="#00b869" />
                  </svg>
                </div>
                <span className="font-['Red_Hat_Display:SemiBold',sans-serif] text-lg text-[#0a0a0a]">
                  Mentra
                </span>
              </div>
              
              {/* Close button */}
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 -mr-2 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors"
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Menu Content */}
            <nav className="px-6 py-6">
              <div className="flex flex-col gap-1">
                {/* Home */}
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    navigate('/');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full text-left px-4 py-3.5 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors group"
                >
                  <span className="font-['Red_Hat_Display:SemiBold',sans-serif] text-base text-[#0a0a0a] group-hover:text-[#00b869]">
                    Home
                  </span>
                </button>

                {/* AI Glasses */}
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    navigate('/');
                  }}
                  className="w-full text-left px-4 py-3.5 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors group"
                >
                  <span className="font-['Red_Hat_Display:SemiBold',sans-serif] text-base text-[#0a0a0a] group-hover:text-[#00b869]">
                    AI Glasses
                  </span>
                </button>

                {/* Mentra Live */}
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    navigate('/buy');
                  }}
                  className="w-full text-left px-4 py-3.5 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-['Red_Hat_Display:SemiBold',sans-serif] text-base text-[#0a0a0a] group-hover:text-[#00b869]">
                      Mentra Live
                    </span>
                    <span className="px-2 py-0.5 bg-[#00b869] text-white text-xs font-['Red_Hat_Display:SemiBold',sans-serif] rounded">
                      New
                    </span>
                  </div>
                </button>

                <div className="h-px bg-gray-200 my-4" />

                {/* About */}
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-left px-4 py-3.5 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors group"
                >
                  <span className="font-['Red_Hat_Display:Regular',sans-serif] text-base text-gray-600 group-hover:text-[#00b869]">
                    About
                  </span>
                </button>

                {/* Technology */}
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-left px-4 py-3.5 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors group"
                >
                  <span className="font-['Red_Hat_Display:Regular',sans-serif] text-base text-gray-600 group-hover:text-[#00b869]">
                    Technology
                  </span>
                </button>

                {/* Support */}
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-left px-4 py-3.5 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors group"
                >
                  <span className="font-['Red_Hat_Display:Regular',sans-serif] text-base text-gray-600 group-hover:text-[#00b869]">
                    Support
                  </span>
                </button>
              </div>
            </nav>

            {/* Menu Footer */}
            <div className="sticky bottom-0 bg-white border-t border-gray-100 p-6 mt-auto">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  navigate('/buy');
                }}
                className="w-full bg-[#00b869] hover:bg-[#009258] active:bg-[#007a47] text-white py-4 rounded-full font-['Red_Hat_Display:SemiBold',sans-serif] text-base shadow-lg shadow-[#00b869]/20 transition-all active:scale-[0.98]"
              >
                Shop Mentra Live
              </button>
            </div>
          </div>
        </>
      )}

      {/* Animations & Styles */}
      <style>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0.8;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        /* Hide the duplicate hero section from IPhone13141339010 */
        .mobile-content-without-hero > div > div[data-name="iPhone 13 & 14 - 33"]:first-child > div:first-child,
        .mobile-content-without-hero > div > div[data-name="iPhone 13 & 14 - 1"]:first-child > div:first-child {
          display: none !important;
        }
        
        /* Ensure all mobile sections are visible */
        .mobile-content-without-hero * {
          opacity: 1 !important;
          visibility: visible !important;
        }
        
        /* Prevent horizontal scroll on mobile */
        .mobile-content-without-hero,
        .mobile-content-without-hero > * {
          max-width: 100vw !important;
          overflow-x: hidden !important;
        }
        
        /* Remove extra space below footer */
        [data-name="iPhone 13 & 14 - 1"] {
          padding-bottom: 0 !important;
          margin-bottom: 0 !important;
          height: auto !important;
        }
        
        /* Fix absolute positioned divs that create extra space */
        [data-name="iPhone 13 & 14 - 1"] > div[class*="absolute"][class*="h-\["] {
          height: auto !important;
          max-height: 100% !important;
        }
        
        /* Ensure footer has no extra space */
        [data-name="Footer"] {
          margin-bottom: 0 !important;
          padding-bottom: 0 !important;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        button, a {
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
        }
        
        * {
          -webkit-overflow-scrolling: touch;
        }
        
        /* Mobile container fixes */
        @media (max-width: 767px) {
          body {
            overflow-x: hidden !important;
            max-width: 100vw !important;
          }
          
          .mobile-content-without-hero img {
            max-width: 100% !important;
            height: auto !important;
          }
        }
      `}</style>
    </>
  );
}