import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "@remix-run/react";
import svgPaths from "../imports/svg-4mnhiia8zl";
import imgEzgifFrame1041 from "/assets/b9f2d5b23bcac5129eeedec01451f80a93d424f9.png";

interface NavigationBarProps {
  onDropdownChange?: (isActive: boolean) => void;
}

/**
 * GLOBAL NAVIGATION BAR COMPONENT
 * 
 * This is the main navigation bar used across all desktop pages.
 * Any updates made here will automatically reflect on:
 * - Home page (AiGlasses.tsx)
 * - Product page (MentraLive.tsx)
 * - Any future pages that import this component
 * 
 * For mobile navigation, see: MobileNavigationBar.tsx
 */

function Logo({ color = "green" }: { color?: "green" | "white" }) {
  const logoColor = color === "white" ? "white" : "#00b869";
  return (
    <div className="h-[19.111px] relative shrink-0 w-[37.028px]" data-name="Logo">
      <div className={`absolute ${color === "white" ? "bg-white" : "bg-[#00b869]"} inset-[55.56%_76.31%_0_0]`} />
      <div className="absolute inset-[0_38.57%_0_18.73%]">
        <div className="absolute inset-0" style={{ "--fill-0": logoColor } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8108 19.1111">
            <path d={svgPaths.p1f327500} fill="var(--fill-0)" id="Rectangle 2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[0_0_0_57.3%]">
        <div className="absolute inset-0" style={{ "--fill-0": logoColor } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8108 19.1111">
            <path d={svgPaths.p1f327500} fill="var(--fill-0)" id="Rectangle 2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MentraLogo({ textColor = "#0a0a0a" }: { textColor?: string }) {
  const navigate = useNavigate();
  // Logo always stays green
  const logoColor = "green";
  
  return (
    <div 
      className="content-stretch flex gap-[7.167px] items-center relative shrink-0 cursor-pointer" 
      onClick={() => navigate('/')}
    >
      <Logo color={logoColor} />
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[23.889px] text-center text-nowrap" style={{ color: textColor }}>Mentra</p>
    </div>
  );
}

function NavigationButton({ iconColor = "#FAFAFA" }: { iconColor?: string }) {
  return (
    <div className="bg-[#009258] content-stretch flex items-center p-[8px] relative rounded-[32px] shrink-0 cursor-pointer hover:bg-[#007a45] hover:shadow-[0px_4px_12px_0px_rgba(0,184,105,0.3)] transition-all duration-300 hover:scale-105 active:scale-95" data-name="Navigation Button">
      <div className="relative shrink-0 size-[24px]" data-name="Navigation Icon">
        <div className="absolute left-[calc(50%-0.28px)] size-[24px] top-[calc(50%-0.41px)] translate-x-[-50%] translate-y-[-50%]" data-name="shopping-bag">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="shopping-bag">
              <path d={svgPaths.p245d2140} id="Vector" stroke={iconColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              <path d="M3 6.44263H21" id="Vector_2" stroke={iconColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              <path d={svgPaths.pb758480} id="Vector_3" stroke={iconColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

// AI Glasses Dropdown Content
function AIGlassesDropdown() {
  const navigate = useNavigate();
  
  return (
    <div className="absolute backdrop-blur-[50px] backdrop-filter bg-[rgba(255,255,255,0.95)] content-stretch flex gap-[40px] items-start left-[259px] pb-[40px] pt-[24px] px-[40px] rounded-bl-[24px] rounded-br-[24px] top-[88px] z-[60] shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-gray-100 animate-fade-in-up">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[205.33px]" data-name="div.grid">
        <div className="content-stretch flex items-start pb-px pl-0 pr-[129.33px] pt-0 relative shrink-0 w-[205.33px]" data-name="Link">
          <p 
            className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[31.873px] not-italic relative shrink-0 text-[#0a0a0a] text-[20px] text-center text-nowrap cursor-pointer hover:text-[#00b869] transition-all duration-300 hover:translate-x-1"
            onClick={() => navigate('/buy')}
          >
            Mentra Live
          </p>
        </div>
        <div className="content-stretch flex items-start pb-px pl-0 pr-[89.33px] pt-0 relative shrink-0 w-[205.33px] group" data-name="Link">
          <p 
            className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[31.873px] not-italic relative shrink-0 text-[#0a0a0a] text-[20px] text-center text-nowrap cursor-pointer hover:text-[#00b869] transition-all duration-300 group-hover:translate-x-1"
            onClick={() => navigate('/prescriptions')}
          >
            Prescription Lenses
          </p>
        </div>
      </div>
      <div 
        className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 cursor-pointer group transition-all duration-300 hover:scale-105"
        onClick={() => navigate('/')}
      >
        <div className="h-[80px] relative shrink-0 w-[301px] transition-transform duration-300 group-hover:scale-105" data-name="ezgif-frame-104 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[375.73%] left-0 max-w-none top-[-140.51%] w-full transition-all duration-300 group-hover:brightness-110" src={imgEzgifFrame1041} />
          </div>
        </div>
        <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[31.873px] not-italic relative shrink-0 text-[#0a0a0a] text-[19.111px] text-center text-nowrap transition-colors duration-300 group-hover:text-[#00b869]">Mentra Live</p>
      </div>
    </div>
  );
}

// Apps and OS Dropdown Content
function AppsOSDropdown() {
  return (
    <div className="absolute backdrop-blur-[50px] backdrop-filter bg-[rgba(255,255,255,0.95)] content-stretch flex items-start left-[421px] pb-[40px] pt-[24px] px-[40px] rounded-bl-[24px] rounded-br-[24px] top-[88px] z-[60] shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-gray-100 animate-fade-in-up">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[205.33px]" data-name="div.grid">
        <div className="content-stretch flex items-start pb-px pl-0 pr-[89.33px] pt-0 relative shrink-0 w-[205.33px] group" data-name="Link">
          <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[31.873px] not-italic relative shrink-0 text-[#0a0a0a] text-[20px] text-center text-nowrap cursor-pointer hover:text-[#00b869] transition-all duration-300 group-hover:translate-x-1">MentraOS</p>
        </div>
        <div className="content-stretch flex items-start pb-px pl-0 pr-[129.33px] pt-0 relative shrink-0 w-[205.33px] group" data-name="Link">
          <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[31.873px] not-italic relative shrink-0 text-[#0a0a0a] text-[20px] text-center text-nowrap cursor-pointer hover:text-[#00b869] transition-all duration-300 group-hover:translate-x-1">Mentra MiniApp Store</p>
        </div>
        <div className="content-stretch flex items-start pb-px pl-0 pr-[129.33px] pt-0 relative shrink-0 w-[205.33px] group" data-name="Link">
          <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[31.873px] not-italic relative shrink-0 text-[#0a0a0a] text-[20px] text-center text-nowrap cursor-pointer hover:text-[#00b869] transition-all duration-300 group-hover:translate-x-1">Download MentraOS</p>
        </div>
        <div className="content-stretch flex items-start pb-px pl-0 pr-[129.33px] pt-0 relative shrink-0 w-[205.33px] group" data-name="Link">
          <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[31.873px] not-italic relative shrink-0 text-[#0a0a0a] text-[20px] text-center text-nowrap cursor-pointer hover:text-[#00b869] transition-all duration-300 group-hover:translate-x-1">Developer Portal</p>
        </div>
      </div>
    </div>
  );
}

// Company Dropdown Content
function CompanyDropdown() {
  const navigate = useNavigate();
  return (
    <div className="absolute backdrop-blur-[50px] backdrop-filter bg-[rgba(255,255,255,0.95)] content-stretch flex items-start left-[603px] pb-[40px] pt-[24px] px-[40px] rounded-bl-[24px] rounded-br-[24px] top-[88px] z-[60] shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-gray-100 animate-fade-in-up">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="div.grid">
        <div className="relative shrink-0 w-[122px] group" data-name="Link">
          <div className="content-stretch flex items-start pb-px pl-0 pr-[129.33px] pt-0 relative w-full" onClick={() => navigate('/about')}>
            <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[31.873px] not-italic relative shrink-0 text-[#0a0a0a] text-[20px] text-center text-nowrap cursor-pointer hover:text-[#00b869] transition-all duration-300 group-hover:translate-x-1">About Mentra</p>
          </div>
        </div>
        <div className="content-stretch flex items-start pb-px pl-0 pr-[89.33px] pt-0 relative shrink-0 w-[155px] group" data-name="Link">
          <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[31.873px] not-italic relative shrink-0 text-[#0a0a0a] text-[20px] text-center text-nowrap cursor-pointer hover:text-[#00b869] transition-all duration-300 group-hover:translate-x-1">{`Blog & Newsroom`}</p>
        </div>
      </div>
    </div>
  );
}

// Community Dropdown Content
function CommunityDropdown() {
  const navigate = useNavigate();
  return (
    <div className="absolute backdrop-blur-[50px] backdrop-filter bg-[rgba(255,255,255,0.95)] content-stretch flex items-start left-[753px] pb-[40px] pt-[24px] px-[40px] rounded-bl-[24px] rounded-br-[24px] top-[88px] z-[60] shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-gray-100 animate-fade-in-up">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="div.grid">
        <div className="relative shrink-0 w-[122px] group" data-name="Link">
          <div className="content-stretch flex items-start pb-px pl-0 pr-[129.33px] pt-0 relative w-full">
            <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[31.873px] not-italic relative shrink-0 text-[#0a0a0a] text-[20px] text-center text-nowrap cursor-pointer hover:text-[#00b869] transition-all duration-300 group-hover:translate-x-1">Discord</p>
          </div>
        </div>
        <div className="content-stretch flex items-start pb-px pl-0 pr-[129.33px] pt-0 relative shrink-0 w-[205.33px] group" data-name="Link">
          <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[31.873px] not-italic relative shrink-0 text-[#0a0a0a] text-[20px] text-center text-nowrap cursor-pointer hover:text-[#00b869] transition-all duration-300 group-hover:translate-x-1">Socials</p>
        </div>
        <div className="content-stretch flex items-start pb-px pl-0 pr-[89.33px] pt-0 relative shrink-0 w-[155px] group" data-name="Link" onClick={() => navigate('/contact')}>
          <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[31.873px] not-italic relative shrink-0 text-[#0a0a0a] text-[20px] text-center text-nowrap cursor-pointer hover:text-[#00b869] transition-all duration-300 group-hover:translate-x-1">Contact Us</p>
        </div>
      </div>
    </div>
  );
}

export default function NavigationBar({ onDropdownChange }: NavigationBarProps = {}) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Only apply transparent/gradient effect on home page
  const isHomePage = location.pathname === '/';
  
  const [isOverHero, setIsOverHero] = useState(() => {
    // Initialize based on current scroll position (only on home page)
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      const isHome = pathname === '/';
      if (isHome) {
        const heroHeight = window.innerHeight;
        return window.scrollY <= heroHeight;
      }
      return false;
    }
    return true; // Default to true on initial render
  });

  useEffect(() => {
    // Only handle scroll-based transparency on home page
    if (!isHomePage) {
      setIsOverHero(false);
      return;
    }

    // Use IntersectionObserver to detect when hero section exits viewport
    // Look for the hero element (Frame26) by its structure
    const findHeroElement = () => {
      // Find the h-screen div that is the hero section (Frame26)
      // It should be within the main AI glasses container
      const heroSection = document.querySelector('[data-name="AI glasses"] .h-screen');
      if (heroSection) return heroSection as HTMLElement;
      
      // Fallback: find first h-screen element (likely the hero)
      return document.querySelector('.h-screen') as HTMLElement;
    };

    let observer: IntersectionObserver | null = null;
    let timeoutId: NodeJS.Timeout | null = null;

    const setupObserver = () => {
      const heroElement = findHeroElement();
      if (!heroElement) {
        // If hero not found, try again after a delay
        timeoutId = setTimeout(setupObserver, 200);
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // When hero is intersecting (visible), we're over hero
            setIsOverHero(entry.isIntersecting);
          });
        },
        {
          // Trigger when hero section starts to exit viewport
          threshold: 0,
          // Trigger when hero is 50% out of view for smoother transition
          rootMargin: '0px 0px -50% 0px'
        }
      );

      observer.observe(heroElement);
    };

    // Small delay to ensure DOM is ready
    timeoutId = setTimeout(setupObserver, 100);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (observer) observer.disconnect();
    };
  }, [isHomePage]);

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
    onDropdownChange?.(true);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
    onDropdownChange?.(false);
  };

  // Text color based on hero state (only on home page) - but change when dropdown is active
  const textColor = (isHomePage && isOverHero && !activeDropdown) ? "white" : "#0a0a0a";
  const iconColor = (isHomePage && isOverHero && !activeDropdown) ? "white" : "#FAFAFA";
  const hoverBg = (isHomePage && isOverHero && !activeDropdown) ? "rgba(255,255,255,0.1)" : "#f5f5f5";

  // Determine if navbar should be transparent (only on home page when over hero AND no dropdown active)
  const shouldBeTransparent = isHomePage && isOverHero && !activeDropdown;

  return (
    <div 
      className={`overflow-visible w-full relative transition-all duration-500 ${
        shouldBeTransparent
          ? 'shadow-none' 
          : 'backdrop-blur-[50px] backdrop-filter shadow-[0px_4px_30px_5px_rgba(0,0,0,0.05)]'
      }`}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main Navbar */}
      <div className={`content-stretch flex flex-col items-start overflow-clip px-[133.778px] py-[24px] w-full transition-all duration-500 relative ${
        shouldBeTransparent
          ? 'bg-transparent' 
          : 'backdrop-blur-[250px] backdrop-filter bg-[rgba(255,255,255,0.85)]'
      }`}>
        {/* Subtle dark gradient overlay when transparent (only on home page when no dropdown) */}
        {shouldBeTransparent && (
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 50%, transparent 100%)'
            }}
          />
        )}
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full z-10">
          {/* Left side - Logo and Nav Items */}
          <div className="content-stretch flex gap-[38.222px] items-center justify-center relative shrink-0">
            <MentraLogo textColor={textColor} />
            
            {/* AI glasses */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("aiGlasses")}
            >
              <div 
                className={`${activeDropdown === "aiGlasses" ? hoverBg : ""} content-stretch flex flex-col items-center px-[16px] py-[4px] relative rounded-[32px] shrink-0 cursor-pointer transition-colors ${!activeDropdown && shouldBeTransparent ? 'hover:bg-[rgba(255,255,255,0.1)]' : ''} ${!activeDropdown && !shouldBeTransparent ? 'hover:bg-[#f5f5f5]' : ''}`}
                onClick={() => navigate('/')}
              >
                <p className={`font-['Red_Hat_Display:SemiBold',sans-serif] leading-[31.873px] not-italic relative shrink-0 ${activeDropdown === "aiGlasses" ? "text-[#00b869]" : ""} text-[20px] text-center text-nowrap transition-colors duration-500`} style={{ color: activeDropdown === "aiGlasses" ? "#00b869" : textColor }}>AI glasses</p>
              </div>
            </div>

            {/* Apps and OS */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("appsOS")}
            >
              <div className={`${activeDropdown === "appsOS" ? hoverBg : ""} content-stretch flex flex-col items-center px-[16px] py-[4px] relative rounded-[32px] shrink-0 cursor-pointer transition-colors ${!activeDropdown && shouldBeTransparent ? 'hover:bg-[rgba(255,255,255,0.1)]' : ''} ${!activeDropdown && !shouldBeTransparent ? 'hover:bg-[#f5f5f5]' : ''}`}>
                <p className={`font-['Red_Hat_Display:Medium',sans-serif] leading-[31.873px] not-italic relative shrink-0 ${activeDropdown === "appsOS" ? "text-[#00b869]" : ""} text-[20px] text-center text-nowrap transition-colors duration-500`} style={{ color: activeDropdown === "appsOS" ? "#00b869" : textColor }}>Apps and OS</p>
              </div>
            </div>

            {/* Company */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("company")}
            >
              <div className={`${activeDropdown === "company" ? hoverBg : ""} content-stretch flex flex-col items-center px-[16px] py-[4px] relative rounded-[32px] shrink-0 cursor-pointer transition-colors ${!activeDropdown && shouldBeTransparent ? 'hover:bg-[rgba(255,255,255,0.1)]' : ''} ${!activeDropdown && !shouldBeTransparent ? 'hover:bg-[#f5f5f5]' : ''}`}>
                <p className={`font-['Red_Hat_Display:Medium',sans-serif] leading-[31.873px] not-italic relative shrink-0 ${activeDropdown === "company" ? "text-[#00b869]" : ""} text-[20px] text-center text-nowrap transition-colors duration-500`} style={{ color: activeDropdown === "company" ? "#00b869" : textColor }}>Company</p>
              </div>
            </div>

            {/* Community */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("community")}
            >
              <div className={`${activeDropdown === "community" ? hoverBg : ""} content-stretch flex flex-col items-center px-[16px] py-[4px] relative rounded-[32px] shrink-0 cursor-pointer transition-colors ${!activeDropdown && shouldBeTransparent ? 'hover:bg-[rgba(255,255,255,0.1)]' : ''} ${!activeDropdown && !shouldBeTransparent ? 'hover:bg-[#f5f5f5]' : ''}`}>
                <p className={`font-['Red_Hat_Display:Medium',sans-serif] leading-[31.873px] not-italic relative shrink-0 ${activeDropdown === "community" ? "text-[#00b869]" : ""} text-[20px] text-center text-nowrap transition-colors duration-500`} style={{ color: activeDropdown === "community" ? "#00b869" : textColor }}>Community</p>
              </div>
            </div>
          </div>

          {/* Right side - Shopping Cart Button */}
          <div className="content-stretch flex items-center justify-center relative shrink-0">
            <NavigationButton iconColor={iconColor} />
          </div>
        </div>
      </div>

      {/* Dropdowns - positioned absolutely to appear seamlessly connected */}
      {activeDropdown === "aiGlasses" && <AIGlassesDropdown />}
      {activeDropdown === "appsOS" && <AppsOSDropdown />}
      {activeDropdown === "company" && <CompanyDropdown />}
      {activeDropdown === "community" && <CommunityDropdown />}
    </div>
  );
}