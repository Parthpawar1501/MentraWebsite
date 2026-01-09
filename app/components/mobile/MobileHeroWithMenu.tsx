import { useState } from "react";
import { X, ChevronRight, ShoppingBag } from "lucide-react";
import { useNavigate } from "@remix-run/react";
import imgImage171 from "/assets/9bd13b993f4db0d7910a3e77d580330c8196cbda.png";
import svgPaths from "../../imports/svg-druisifc63";

// Hamburger Menu Icon
function HamburgerIcon() {
  return (
    <svg className="w-[22px] h-[22px]" fill="none" viewBox="0 0 22 22">
      <path 
        d="M3 6H19M3 11H19M3 16H19" 
        stroke="#00B869" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="1.83333" 
      />
    </svg>
  );
}

// Logo Component
function Logo({ color = "white" }: { color?: string }) {
  return (
    <div className="flex gap-[3.813px] items-center">
      <div className="h-[10.167px] w-[19.698px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.6979 10.1667">
          <g>
            <rect fill={color === "white" ? "white" : "#00B869"} height="4.51852" width="4.66672" y="5.64815" />
            <path d={svgPaths.p2b3e5680} fill={color === "white" ? "white" : "#00B869"} />
            <path d={svgPaths.p1bd05180} fill={color === "white" ? "white" : "#00B869"} />
          </g>
        </svg>
      </div>
      <p className={`font-['Red_Hat_Display:SemiBold',sans-serif] text-[12.708px] ${color === "white" ? "text-white" : "text-[#0a0a0a]"}`}>
        Mentra
      </p>
    </div>
  );
}

// Mobile Navigation Menu (Slide-out)
function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const navigate = useNavigate();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "AI Glasses", path: "/" },
    { label: "Mentra Live", path: "/buy" },
    { label: "About", path: "/" },
    { label: "Support", path: "/" },
    { label: "Contact", path: "/" },
  ];

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div 
        className={`fixed top-0 left-0 bottom-0 w-[280px] bg-white z-50 shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <Logo color="green" />
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="py-4">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                navigate(item.path);
                onClose();
              }}
              className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 active:bg-gray-100 transition-colors group"
            >
              <span className="font-['Red_Hat_Display:SemiBold',sans-serif] text-[16px] text-[#0a0a0a] group-hover:text-[#00b869] transition-colors">
                {item.label}
              </span>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#00b869] transition-colors" />
            </button>
          ))}
        </nav>

        {/* Menu Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
          <button className="w-full bg-[#00b869] text-white py-3 rounded-full font-['Red_Hat_Display:SemiBold',sans-serif] text-[14px] shadow-lg active:scale-95 transition-transform">
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
}

// Top Navigation Bar
function TopNavBar({ onMenuOpen }: { onMenuOpen: () => void }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 backdrop-blur-[26.599px] bg-white/85 h-[48px]">
      <div className="flex items-center justify-between px-[30px] py-[12.767px] h-full">
        {/* Hamburger Menu Button */}
        <button 
          onClick={onMenuOpen}
          className="p-1 active:scale-95 transition-transform"
          aria-label="Open menu"
        >
          <HamburgerIcon />
        </button>

        {/* Center Logo */}
        <Logo color="green" />

        {/* Shopping Bag */}
        <button 
          className="bg-[#009258] p-[4.256px] rounded-full active:scale-95 transition-transform"
          aria-label="View cart"
        >
          <div className="relative w-[12.767px] h-[12.767px]">
            <svg className="block size-full" fill="none" viewBox="0 0 12.7674 12.7674">
              <g>
                <path 
                  d={svgPaths.p386eeac0} 
                  stroke="#FAFAFA" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="0.957558" 
                />
                <path 
                  d="M1.59593 3.42733H11.1715" 
                  stroke="#FAFAFA" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="0.957558" 
                />
                <path 
                  d={svgPaths.p1a8a5300} 
                  stroke="#FAFAFA" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="0.957558" 
                />
              </g>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

// Bottom Sticky Bar
function BottomStickyBar({ onBuyNow }: { onBuyNow: () => void }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 backdrop-blur-[26.599px] bg-white/85 border-t border-gray-200">
      <div className="flex items-center justify-between px-[30px] py-[10.64px]">
        {/* Product Title */}
        <p className="font-['Red_Hat_Display:Bold',sans-serif] text-[17.023px] text-[#0a0a0a]">
          <span>AI glasses </span>
          <span className="font-['Red_Hat_Display:SemiBold',sans-serif]">| Mentra Live</span>
        </p>

        {/* Buy Now Button */}
        <button
          onClick={onBuyNow}
          className="bg-[#00b869] text-white px-[16.622px] py-[8.311px] rounded-full font-['Red_Hat_Display:Bold',sans-serif] text-[14.107px] shadow-md active:scale-95 transition-transform"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

// Main Hero Section Component
export default function MobileHeroWithMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate("/buy");
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Mobile Menu */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Top Navigation */}
      <TopNavBar onMenuOpen={() => setMenuOpen(true)} />

      {/* Hero Section */}
      <div className="relative w-full h-full">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img 
            alt="Mentra AI Glasses - Choose Your Reality" 
            className="w-full h-full object-cover" 
            src={imgImage171} 
          />
        </div>

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-[140px]">
          <div className="flex flex-col gap-[6.384px] items-center max-w-[339px]">
            {/* Logo */}
            <Logo color="white" />

            {/* Main Headline */}
            <h1 className="font-['Red_Hat_Display:Bold',sans-serif] text-[34.047px] leading-[38.302px] text-center text-white">
              Choose Your Reality
            </h1>

            {/* Subheadline */}
            <p className="font-['Red_Hat_Display:SemiBold',sans-serif] text-[17.023px] leading-[24.031px] text-center text-white">
              The only AI glasses with an app store.
            </p>
          </div>

          {/* Scroll Indicator */}
          <button 
            className="absolute right-[19px] bottom-[20px] backdrop-blur-[2.66px] bg-white/40 rounded-full size-[21.279px] flex items-center justify-center animate-bounce"
            aria-label="Scroll down"
          >
            <svg className="w-[12.767px] h-[12.767px]" fill="none" viewBox="0 0 12.7674 12.7674">
              <path d={svgPaths.p33fc4e00} fill="white" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom Sticky Bar */}
      <BottomStickyBar onBuyNow={handleBuyNow} />

      {/* Prevent body scroll when menu is open */}
      {menuOpen && (
        <style dangerouslySetInnerHTML={{__html: `
          body {
            overflow: hidden;
          }
        `}} />
      )}
    </div>
  );
}