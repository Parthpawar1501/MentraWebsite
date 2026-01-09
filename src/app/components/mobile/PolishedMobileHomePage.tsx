import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import IPhone4 from "../../../imports/IPhone13141-33-9010";

/**
 * Polished Mobile Home Page
 * 
 * A refined, production-quality mobile homepage that matches the desktop experience.
 * 
 * Features:
 * - Pixel-perfect Figma design
 * - Smooth navigation
 * - Interactive hamburger menu
 * - All content sections from desktop
 * - Polished animations
 * - Professional UX
 */
export default function PolishedMobileHomePage() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [menuOpen]);

  // Click handler for interactive elements
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Hamburger menu toggle (top-left icon)
      const hamburgerIcon = target.closest('[data-name="Navigation Icon"]');
      const hamburgerParent = hamburgerIcon?.closest('[data-name="NavBar"]');
      
      if (hamburgerIcon && hamburgerParent) {
        e.preventDefault();
        e.stopPropagation();
        setMenuOpen(!menuOpen);
        return;
      }
      
      // Shopping bag navigation (top-right)
      const shoppingBag = target.closest('[data-name="Shopping Bag"]');
      if (shoppingBag) {
        e.preventDefault();
        navigate('/buy');
        return;
      }
      
      // Buy buttons and CTAs
      const navButton = target.closest('[data-name="Navigation Button"]');
      if (navButton && !hamburgerIcon) {
        e.preventDefault();
        navigate('/buy');
        return;
      }
    };

    document.addEventListener('click', handleDocumentClick, true);
    return () => document.removeEventListener('click', handleDocumentClick, true);
  }, [navigate, menuOpen]);

  return (
    <>
      {/* Main Content */}
      <div className="w-full min-h-screen bg-white relative mobile-container">
        <IPhone4 />
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
            className="fixed top-0 left-0 bottom-0 w-[min(85vw,320px)] bg-white shadow-2xl z-[9999] overflow-y-auto mobile-scroll-optimized"
            style={{
              animation: 'slideInLeft 280ms cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {/* Menu Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-5 flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
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

      {/* Animations */}
      <style dangerouslySetInnerHTML={{__html: `
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
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Optimize touch targets */
        button, a {
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
        }
        
        /* Prevent iOS zoom on input focus */
        input, select, textarea {
          font-size: 16px;
        }
        
        /* Smooth momentum scrolling */
        * {
          -webkit-overflow-scrolling: touch;
        }
      `}} />
    </>
  );
}