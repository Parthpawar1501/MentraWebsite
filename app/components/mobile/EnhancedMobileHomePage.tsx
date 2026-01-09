import { useState, useEffect } from "react";
import { useNavigate } from "@remix-run/react";
import IPhone4 from "../../imports/IPhone13141-33-6513";

/**
 * Enhanced Mobile Home Page
 * 
 * Wraps the Figma mobile design with interactive navigation functionality.
 * 
 * Features:
 * - Full Figma pixel-perfect mobile design
 * - Interactive hamburger menu
 * - Working navigation links
 * - Smooth scroll behavior
 * - Optimized for mobile devices
 */
export default function EnhancedMobileHomePage() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Add click listeners to make buttons interactive
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if clicking hamburger menu button
      if (target.closest('[data-name="Navigation Icon"]')) {
        setMenuOpen(!menuOpen);
      }
      
      // Check if clicking shopping bag
      if (target.closest('[data-name="Shopping Bag"]')) {
        navigate('/buy');
      }
      
      // Check if clicking "Choose Your Reality" CTA or Buy buttons
      if (target.closest('[data-name="Navigation Button"]') && !target.closest('[data-name="Navigation Icon"]')) {
        navigate('/buy');
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [navigate, menuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <div className="w-full min-h-screen bg-white relative">
      {/* Figma Mobile Design */}
      <IPhone4 />

      {/* Overlay Menu (slides in when hamburger is clicked) */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[100]"
            onClick={() => setMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div 
            className="fixed top-0 left-0 bottom-0 w-[280px] bg-white shadow-2xl z-[101] animate-slide-in"
            style={{
              animation: 'slideInLeft 300ms ease-out'
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Menu Content */}
            <div className="flex flex-col h-full pt-20 px-6">
              {/* Navigation Items */}
              <nav className="flex flex-col gap-6">
                <button 
                  onClick={() => { setMenuOpen(false); navigate('/'); }}
                  className="text-left text-xl font-['Red_Hat_Display:SemiBold',sans-serif] hover:text-[#00b869] transition-colors py-2"
                >
                  Home
                </button>
                <button 
                  onClick={() => { setMenuOpen(false); navigate('/'); }}
                  className="text-left text-xl font-['Red_Hat_Display:SemiBold',sans-serif] hover:text-[#00b869] transition-colors py-2"
                >
                  AI Glasses
                </button>
                <button 
                  onClick={() => { setMenuOpen(false); navigate('/buy'); }}
                  className="text-left text-xl font-['Red_Hat_Display:SemiBold',sans-serif] hover:text-[#00b869] transition-colors py-2"
                >
                  Mentra Live
                </button>
                <button 
                  onClick={() => { setMenuOpen(false); navigate('/about'); }}
                  className="text-left text-xl font-['Red_Hat_Display:SemiBold',sans-serif] hover:text-[#00b869] transition-colors py-2"
                >
                  About
                </button>
                <button 
                  onClick={() => { setMenuOpen(false); navigate('/support'); }}
                  className="text-left text-xl font-['Red_Hat_Display:SemiBold',sans-serif] hover:text-[#00b869] transition-colors py-2"
                >
                  Support
                </button>
                <button 
                  onClick={() => { setMenuOpen(false); navigate('/contact'); }}
                  className="text-left text-xl font-['Red_Hat_Display:SemiBold',sans-serif] hover:text-[#00b869] transition-colors py-2"
                >
                  Contact
                </button>
              </nav>

              {/* Shop Now Button at Bottom */}
              <div className="mt-auto mb-8">
                <button
                  onClick={() => { setMenuOpen(false); navigate('/buy'); }}
                  className="w-full bg-[#00b869] text-white py-4 rounded-full font-['Red_Hat_Display:SemiBold',sans-serif] text-lg shadow-lg active:scale-95 transition-transform"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        
        .animate-slide-in {
          animation: slideInLeft 300ms ease-out;
        }
        
        /* Smooth scroll */
        html {
          scroll-behavior: smooth;
        }
      `}} />
    </div>
  );
}
