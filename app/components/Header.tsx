import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation, useNavigate } from "@remix-run/react";
import svgPaths from "../imports/svg-4mnhiia8zl";
import imgEzgifFrame1041 from "/assets/b9f2d5b23bcac5129eeedec01451f80a93d424f9.png";

/**
 * SHARED HEADER COMPONENT
 * 
 * This is the main navigation header used across ALL pages.
 * Rendered from root layout (app/root.tsx) so it appears identically on every route.
 * 
 * Features:
 * - Desktop dropdown menus with hover
 * - Mobile hamburger menu
 * - Keyboard accessible (Tab, Enter, Escape)
 * - Closes on route change and outside click
 * - Active states for current page
 * - Remix Link/NavLink for internal navigation
 */

// External links - update these if needed
const DISCORD_LINK = "https://discord.gg/mentra"; // Update with actual Discord invite
const DEVELOPER_PORTAL_LINK = "https://developers.mentraglass.com"; // Update with actual dev portal

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
  return (
    <Link 
      to="/"
      className="content-stretch flex gap-[7.167px] items-center relative shrink-0 cursor-pointer" 
    >
      <Logo color="green" />
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[23.889px] text-center text-nowrap" style={{ color: textColor }}>Mentra</p>
    </Link>
  );
}

function ShoppingCartButton({ iconColor = "#FAFAFA" }: { iconColor?: string }) {
  const navigate = useNavigate();
  
  return (
    <button
      onClick={() => navigate('/cart')}
      className="bg-[#009258] content-stretch flex items-center p-[8px] relative rounded-[32px] shrink-0 cursor-pointer hover:bg-[#007a45] hover:shadow-[0px_4px_12px_0px_rgba(0,184,105,0.3)] transition-all duration-300 hover:scale-105 active:scale-95"
      aria-label="View shopping cart"
    >
      <div className="relative shrink-0 size-[24px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="shopping-bag">
            <path d={svgPaths.p245d2140} id="Vector" stroke={iconColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
            <path d="M3 6.44263H21" id="Vector_2" stroke={iconColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
            <path d={svgPaths.pb758480} id="Vector_3" stroke={iconColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          </g>
        </svg>
      </div>
    </button>
  );
}

// AI Glasses Dropdown
function AIGlassesDropdown({ onItemClick }: { onItemClick: () => void }) {
  const location = useLocation();
  
  return (
    <div className="absolute backdrop-blur-[50px] backdrop-filter bg-[rgba(255,255,255,0.95)] content-stretch flex gap-[40px] items-start left-[259px] pb-[40px] pt-[24px] px-[40px] rounded-bl-[24px] rounded-br-[24px] top-[88px] z-[60] shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-gray-100 animate-fade-in-up">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[205.33px]">
        <NavLink 
          to="/products/mentra-live"
          className={({ isActive }) => 
            `content-stretch flex items-start pb-px pl-0 pr-[129.33px] pt-0 relative shrink-0 w-[205.33px] group ${
              isActive ? 'text-[#00b869]' : 'text-[#0a0a0a]'
            }`
          }
          onClick={onItemClick}
        >
          {({ isActive }) => (
            <p className={`font-['Red_Hat_Display:SemiBold',sans-serif] leading-[31.873px] not-italic relative shrink-0 text-[20px] text-center text-nowrap cursor-pointer transition-all duration-300 group-hover:translate-x-1 ${
              isActive ? 'text-[#00b869]' : 'hover:text-[#00b869]'
            }`}>
              Mentra Live
            </p>
          )}
        </NavLink>
        <NavLink 
          to="/prescriptions"
          className={({ isActive }) => 
            `content-stretch flex items-start pb-px pl-0 pr-[89.33px] pt-0 relative shrink-0 w-[205.33px] group ${
              isActive ? 'text-[#00b869]' : 'text-[#0a0a0a]'
            }`
          }
          onClick={onItemClick}
        >
          {({ isActive }) => (
            <p className={`font-['Red_Hat_Display:SemiBold',sans-serif] leading-[31.873px] not-italic relative shrink-0 text-[20px] text-center text-nowrap cursor-pointer transition-all duration-300 group-hover:translate-x-1 ${
              isActive ? 'text-[#00b869]' : 'hover:text-[#00b869]'
            }`}>
              Prescription Lenses
            </p>
          )}
        </NavLink>
      </div>
      <Link 
        to="/products/mentra-live"
        className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 cursor-pointer group transition-all duration-300 hover:scale-105"
        onClick={onItemClick}
      >
        <div className="h-[80px] relative shrink-0 w-[301px] transition-transform duration-300 group-hover:scale-105">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="Mentra Live" className="absolute h-[375.73%] left-0 max-w-none top-[-140.51%] w-full transition-all duration-300 group-hover:brightness-110" src={imgEzgifFrame1041} />
          </div>
        </div>
        <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[31.873px] not-italic relative shrink-0 text-[#0a0a0a] text-[19.111px] text-center text-nowrap transition-colors duration-300 group-hover:text-[#00b869]">Mentra Live</p>
      </Link>
    </div>
  );
}

// Apps & OS Dropdown
function AppsOSDropdown({ onItemClick }: { onItemClick: () => void }) {
  return (
    <div className="absolute backdrop-blur-[50px] backdrop-filter bg-[rgba(255,255,255,0.95)] content-stretch flex items-start left-[421px] pb-[40px] pt-[24px] px-[40px] rounded-bl-[24px] rounded-br-[24px] top-[88px] z-[60] shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-gray-100 animate-fade-in-up">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[205.33px]">
        <NavLink 
          to="/os"
          className="content-stretch flex items-start pb-px pl-0 pr-[89.33px] pt-0 relative shrink-0 w-[205.33px] group"
          onClick={onItemClick}
        >
          {({ isActive }) => (
            <p className={`font-['Red_Hat_Display:SemiBold',sans-serif] leading-[31.873px] not-italic relative shrink-0 text-[20px] text-center text-nowrap cursor-pointer transition-all duration-300 group-hover:translate-x-1 ${
              isActive ? 'text-[#00b869]' : 'text-[#0a0a0a] hover:text-[#00b869]'
            }`}>
              MentraOS
            </p>
          )}
        </NavLink>
        <NavLink 
          to="/apps-os/miniapp-store"
          className="content-stretch flex items-start pb-px pl-0 pr-[129.33px] pt-0 relative shrink-0 w-[205.33px] group"
          onClick={onItemClick}
        >
          {({ isActive }) => (
            <p className={`font-['Red_Hat_Display:SemiBold',sans-serif] leading-[31.873px] not-italic relative shrink-0 text-[20px] text-center text-nowrap cursor-pointer transition-all duration-300 group-hover:translate-x-1 ${
              isActive ? 'text-[#00b869]' : 'text-[#0a0a0a] hover:text-[#00b869]'
            }`}>
              Mentra MiniApp Store
            </p>
          )}
        </NavLink>
        <NavLink 
          to="/apps-os/download"
          className="content-stretch flex items-start pb-px pl-0 pr-[129.33px] pt-0 relative shrink-0 w-[205.33px] group"
          onClick={onItemClick}
        >
          {({ isActive }) => (
            <p className={`font-['Red_Hat_Display:SemiBold',sans-serif] leading-[31.873px] not-italic relative shrink-0 text-[20px] text-center text-nowrap cursor-pointer transition-all duration-300 group-hover:translate-x-1 ${
              isActive ? 'text-[#00b869]' : 'text-[#0a0a0a] hover:text-[#00b869]'
            }`}>
              Download MentraOS
            </p>
          )}
        </NavLink>
        <a 
          href={DEVELOPER_PORTAL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="content-stretch flex items-start pb-px pl-0 pr-[129.33px] pt-0 relative shrink-0 w-[205.33px] group"
          onClick={onItemClick}
        >
          <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[31.873px] not-italic relative shrink-0 text-[#0a0a0a] text-[20px] text-center text-nowrap cursor-pointer transition-all duration-300 group-hover:translate-x-1 hover:text-[#00b869]">
            Developer Portal
          </p>
        </a>
      </div>
    </div>
  );
}

// About Dropdown (previously Company)
function AboutDropdown({ onItemClick }: { onItemClick: () => void }) {
  return (
    <div className="absolute backdrop-blur-[50px] backdrop-filter bg-[rgba(255,255,255,0.95)] content-stretch flex items-start left-[603px] pb-[40px] pt-[24px] px-[40px] rounded-bl-[24px] rounded-br-[24px] top-[88px] z-[60] shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-gray-100 animate-fade-in-up">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
        <NavLink 
          to="/about/mentra"
          className="relative shrink-0 w-[122px] group"
          onClick={onItemClick}
        >
          {({ isActive }) => (
            <p className={`font-['Red_Hat_Display:SemiBold',sans-serif] leading-[31.873px] not-italic relative shrink-0 text-[20px] text-center text-nowrap cursor-pointer transition-all duration-300 group-hover:translate-x-1 ${
              isActive ? 'text-[#00b869]' : 'text-[#0a0a0a] hover:text-[#00b869]'
            }`}>
              About Mentra
            </p>
          )}
        </NavLink>
        <NavLink 
          to="/blog"
          className="content-stretch flex items-start pb-px pl-0 pr-[89.33px] pt-0 relative shrink-0 w-[155px] group"
          onClick={onItemClick}
        >
          {({ isActive }) => (
            <p className={`font-['Red_Hat_Display:SemiBold',sans-serif] leading-[31.873px] not-italic relative shrink-0 text-[20px] text-center text-nowrap cursor-pointer transition-all duration-300 group-hover:translate-x-1 ${
              isActive ? 'text-[#00b869]' : 'text-[#0a0a0a] hover:text-[#00b869]'
            }`}>
              Blog & Newsroom
            </p>
          )}
        </NavLink>
      </div>
    </div>
  );
}

// Community Dropdown
function CommunityDropdown({ onItemClick }: { onItemClick: () => void }) {
  return (
    <div className="absolute backdrop-blur-[50px] backdrop-filter bg-[rgba(255,255,255,0.95)] content-stretch flex items-start left-[753px] pb-[40px] pt-[24px] px-[40px] rounded-bl-[24px] rounded-br-[24px] top-[88px] z-[60] shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-gray-100 animate-fade-in-up">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
        <a 
          href={DISCORD_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="relative shrink-0 w-[122px] group"
          onClick={onItemClick}
        >
          <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[31.873px] not-italic relative shrink-0 text-[#0a0a0a] text-[20px] text-center text-nowrap cursor-pointer transition-all duration-300 group-hover:translate-x-1 hover:text-[#00b869]">
            Discord
          </p>
        </a>
        <NavLink 
          to="/community/socials"
          className="content-stretch flex items-start pb-px pl-0 pr-[129.33px] pt-0 relative shrink-0 w-[205.33px] group"
          onClick={onItemClick}
        >
          {({ isActive }) => (
            <p className={`font-['Red_Hat_Display:SemiBold',sans-serif] leading-[31.873px] not-italic relative shrink-0 text-[20px] text-center text-nowrap cursor-pointer transition-all duration-300 group-hover:translate-x-1 ${
              isActive ? 'text-[#00b869]' : 'text-[#0a0a0a] hover:text-[#00b869]'
            }`}>
              Socials
            </p>
          )}
        </NavLink>
      </div>
    </div>
  );
}

// Desktop Header Component
function DesktopHeader() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const headerRef = useRef<HTMLDivElement>(null);
  
  // Only apply transparent/gradient effect on home page
  const isHomePage = location.pathname === '/';
  
  const [isOverHero, setIsOverHero] = useState(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      const isHome = pathname === '/';
      if (isHome) {
        const heroHeight = window.innerHeight;
        return window.scrollY <= heroHeight;
      }
      return false;
    }
    return true;
  });

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null);
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [activeDropdown]);

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && activeDropdown) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeDropdown]);

  useEffect(() => {
    if (!isHomePage) {
      setIsOverHero(false);
      return;
    }

    const findHeroElement = () => {
      const heroSection = document.querySelector('[data-name="AI glasses"] .h-screen');
      if (heroSection) return heroSection as HTMLElement;
      return document.querySelector('.h-screen') as HTMLElement;
    };

    let observer: IntersectionObserver | null = null;
    let timeoutId: NodeJS.Timeout | null = null;

    const setupObserver = () => {
      const heroElement = findHeroElement();
      if (!heroElement) {
        timeoutId = setTimeout(setupObserver, 200);
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setIsOverHero(entry.isIntersecting);
          });
        },
        {
          threshold: 0,
          rootMargin: '0px 0px -50% 0px'
        }
      );

      observer.observe(heroElement);
    };

    timeoutId = setTimeout(setupObserver, 100);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (observer) observer.disconnect();
    };
  }, [isHomePage]);

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleItemClick = () => {
    setActiveDropdown(null);
  };

  // Text color based on hero state (only on home page) - but change when dropdown is active
  const textColor = (isHomePage && isOverHero && !activeDropdown) ? "white" : "#0a0a0a";
  const iconColor = (isHomePage && isOverHero && !activeDropdown) ? "white" : "#FAFAFA";
  const hoverBg = (isHomePage && isOverHero && !activeDropdown) ? "rgba(255,255,255,0.1)" : "#f5f5f5";

  // Determine if navbar should be transparent (only on home page when over hero AND no dropdown active)
  const shouldBeTransparent = isHomePage && isOverHero && !activeDropdown;

  // Determine active top-level section based on pathname
  const getActiveSection = () => {
    const path = location.pathname;
    if (path.startsWith('/products') || path.startsWith('/prescriptions') || path.startsWith('/buy') || path === '/ai-glasses' || path === '/glasses') {
      return 'aiGlasses';
    }
    if (path.startsWith('/os') || path.startsWith('/apps-os')) {
      return 'appsOS';
    }
    if (path.startsWith('/about') || path.startsWith('/blog')) {
      return 'about';
    }
    if (path.startsWith('/community')) {
      return 'community';
    }
    return null;
  };

  const activeSection = getActiveSection();

  return (
    <div 
      ref={headerRef}
      className={`overflow-visible w-full relative transition-all duration-500 ${
        shouldBeTransparent
          ? 'shadow-none' 
          : 'backdrop-blur-[50px] backdrop-filter shadow-[0px_4px_30px_5px_rgba(0,0,0,0.05)]'
      }`}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main Navbar */}
      <div className={`content-stretch flex flex-col items-start overflow-clip px-4 md:px-6 lg:px-[133.778px] py-[24px] w-full transition-all duration-500 relative ${
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
              <NavLink
                to="/products/mentra-live"
                className={({ isActive }) =>
                  `${(activeDropdown === "aiGlasses" || activeSection === "aiGlasses") ? hoverBg : ""} content-stretch flex flex-col items-center px-[16px] py-[4px] relative rounded-[32px] shrink-0 cursor-pointer transition-colors ${!activeDropdown && shouldBeTransparent ? 'hover:bg-[rgba(255,255,255,0.1)]' : ''} ${!activeDropdown && !shouldBeTransparent ? 'hover:bg-[#f5f5f5]' : ''}`
                }
              >
                {({ isActive }) => (
                  <p className={`font-['Red_Hat_Display:SemiBold',sans-serif] leading-[31.873px] not-italic relative shrink-0 text-[20px] text-center text-nowrap transition-colors duration-500 ${
                    (activeDropdown === "aiGlasses" || activeSection === "aiGlasses" || isActive) ? "text-[#00b869]" : ""
                  }`} style={{ color: (activeDropdown === "aiGlasses" || activeSection === "aiGlasses" || isActive) ? "#00b869" : textColor }}>
                    AI Glasses
                  </p>
                )}
              </NavLink>
            </div>

            {/* Apps and OS */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("appsOS")}
            >
              <NavLink
                to="/os"
                className={({ isActive }) =>
                  `${(activeDropdown === "appsOS" || activeSection === "appsOS") ? hoverBg : ""} content-stretch flex flex-col items-center px-[16px] py-[4px] relative rounded-[32px] shrink-0 cursor-pointer transition-colors ${!activeDropdown && shouldBeTransparent ? 'hover:bg-[rgba(255,255,255,0.1)]' : ''} ${!activeDropdown && !shouldBeTransparent ? 'hover:bg-[#f5f5f5]' : ''}`
                }
              >
                {({ isActive }) => (
                  <p className={`font-['Red_Hat_Display:Medium',sans-serif] leading-[31.873px] not-italic relative shrink-0 text-[20px] text-center text-nowrap transition-colors duration-500 ${
                    (activeDropdown === "appsOS" || activeSection === "appsOS" || isActive) ? "text-[#00b869]" : ""
                  }`} style={{ color: (activeDropdown === "appsOS" || activeSection === "appsOS" || isActive) ? "#00b869" : textColor }}>
                    Apps & OS
                  </p>
                )}
              </NavLink>
            </div>

            {/* About */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("about")}
            >
              <NavLink
                to="/about/mentra"
                className={({ isActive }) =>
                  `${(activeDropdown === "about" || activeSection === "about") ? hoverBg : ""} content-stretch flex flex-col items-center px-[16px] py-[4px] relative rounded-[32px] shrink-0 cursor-pointer transition-colors ${!activeDropdown && shouldBeTransparent ? 'hover:bg-[rgba(255,255,255,0.1)]' : ''} ${!activeDropdown && !shouldBeTransparent ? 'hover:bg-[#f5f5f5]' : ''}`
                }
              >
                {({ isActive }) => (
                  <p className={`font-['Red_Hat_Display:Medium',sans-serif] leading-[31.873px] not-italic relative shrink-0 text-[20px] text-center text-nowrap transition-colors duration-500 ${
                    (activeDropdown === "about" || activeSection === "about" || isActive) ? "text-[#00b869]" : ""
                  }`} style={{ color: (activeDropdown === "about" || activeSection === "about" || isActive) ? "#00b869" : textColor }}>
                    About
                  </p>
                )}
              </NavLink>
            </div>

            {/* Community */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("community")}
            >
              <NavLink
                to="/community"
                className={({ isActive }) =>
                  `${(activeDropdown === "community" || activeSection === "community") ? hoverBg : ""} content-stretch flex flex-col items-center px-[16px] py-[4px] relative rounded-[32px] shrink-0 cursor-pointer transition-colors ${!activeDropdown && shouldBeTransparent ? 'hover:bg-[rgba(255,255,255,0.1)]' : ''} ${!activeDropdown && !shouldBeTransparent ? 'hover:bg-[#f5f5f5]' : ''}`
                }
              >
                {({ isActive }) => (
                  <p className={`font-['Red_Hat_Display:Medium',sans-serif] leading-[31.873px] not-italic relative shrink-0 text-[20px] text-center text-nowrap transition-colors duration-500 ${
                    (activeDropdown === "community" || activeSection === "community" || isActive) ? "text-[#00b869]" : ""
                  }`} style={{ color: (activeDropdown === "community" || activeSection === "community" || isActive) ? "#00b869" : textColor }}>
                    Community
                  </p>
                )}
              </NavLink>
            </div>

            {/* Contact Us */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${isActive ? hoverBg : ""} content-stretch flex flex-col items-center px-[16px] py-[4px] relative rounded-[32px] shrink-0 cursor-pointer transition-colors ${!activeDropdown && shouldBeTransparent ? 'hover:bg-[rgba(255,255,255,0.1)]' : ''} ${!activeDropdown && !shouldBeTransparent ? 'hover:bg-[#f5f5f5]' : ''}`
              }
            >
              {({ isActive }) => (
                <p className={`font-['Red_Hat_Display:Medium',sans-serif] leading-[31.873px] not-italic relative shrink-0 text-[20px] text-center text-nowrap transition-colors duration-500 ${
                  isActive ? "text-[#00b869]" : ""
                }`} style={{ color: isActive ? "#00b869" : textColor }}>
                  Contact Us
                </p>
              )}
            </NavLink>
          </div>

          {/* Right side - Shopping Cart Button */}
          <div className="content-stretch flex items-center justify-center relative shrink-0">
            <ShoppingCartButton iconColor={iconColor} />
          </div>
        </div>
      </div>

      {/* Dropdowns - positioned absolutely to appear seamlessly connected */}
      {activeDropdown === "aiGlasses" && <AIGlassesDropdown onItemClick={handleItemClick} />}
      {activeDropdown === "appsOS" && <AppsOSDropdown onItemClick={handleItemClick} />}
      {activeDropdown === "about" && <AboutDropdown onItemClick={handleItemClick} />}
      {activeDropdown === "community" && <CommunityDropdown onItemClick={handleItemClick} />}
    </div>
  );
}

// Mobile Header Component
function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isMenuOpen]);

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (openDropdown) {
          setOpenDropdown(null);
        } else if (isMenuOpen) {
          setIsMenuOpen(false);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen, openDropdown]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <>
      {/* Mobile Header Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full active:bg-gray-100 transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6 text-[#0a0a0a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Logo */}
          <Link 
            to="/"
            className="flex items-center gap-2"
            onClick={handleLinkClick}
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
          </Link>

          {/* Cart Button */}
          <button 
            onClick={() => {
              navigate('/cart');
              handleLinkClick();
            }}
            className="p-2 rounded-full active:bg-gray-100 transition-colors"
            aria-label="View shopping cart"
          >
            <svg className="w-5 h-5 text-[#0a0a0a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={handleLinkClick} />
      )}

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-[60px] left-0 right-0 bottom-0 z-40 bg-white transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col px-4 py-6 space-y-4">
          {/* AI Glasses */}
          <div>
            <button
              onClick={() => toggleDropdown('aiGlasses')}
              className="w-full flex items-center justify-between py-3 text-[18px] font-['Red_Hat_Display:SemiBold',sans-serif] text-[#0a0a0a]"
              aria-expanded={openDropdown === 'aiGlasses'}
            >
              <span>AI Glasses</span>
              <svg 
                className={`w-5 h-5 transition-transform ${openDropdown === 'aiGlasses' ? 'rotate-180' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'aiGlasses' && (
              <div className="pl-4 space-y-2">
                <Link 
                  to="/products/mentra-live"
                  className="block py-2 text-[16px] font-['Red_Hat_Display:Regular',sans-serif] text-[#686069] hover:text-[#00b869] transition-colors"
                  onClick={handleLinkClick}
                >
                  Mentra Live
                </Link>
                <Link 
                  to="/prescriptions"
                  className="block py-2 text-[16px] font-['Red_Hat_Display:Regular',sans-serif] text-[#686069] hover:text-[#00b869] transition-colors"
                  onClick={handleLinkClick}
                >
                  Prescription Lenses
                </Link>
              </div>
            )}
          </div>

          {/* Apps & OS */}
          <div>
            <button
              onClick={() => toggleDropdown('appsOS')}
              className="w-full flex items-center justify-between py-3 text-[18px] font-['Red_Hat_Display:SemiBold',sans-serif] text-[#0a0a0a]"
              aria-expanded={openDropdown === 'appsOS'}
            >
              <span>Apps & OS</span>
              <svg 
                className={`w-5 h-5 transition-transform ${openDropdown === 'appsOS' ? 'rotate-180' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'appsOS' && (
              <div className="pl-4 space-y-2">
                <Link 
                  to="/os"
                  className="block py-2 text-[16px] font-['Red_Hat_Display:Regular',sans-serif] text-[#686069] hover:text-[#00b869] transition-colors"
                  onClick={handleLinkClick}
                >
                  MentraOS
                </Link>
                <Link 
                  to="/apps-os/miniapp-store"
                  className="block py-2 text-[16px] font-['Red_Hat_Display:Regular',sans-serif] text-[#686069] hover:text-[#00b869] transition-colors"
                  onClick={handleLinkClick}
                >
                  Mentra MiniApp Store
                </Link>
                <Link 
                  to="/apps-os/download"
                  className="block py-2 text-[16px] font-['Red_Hat_Display:Regular',sans-serif] text-[#686069] hover:text-[#00b869] transition-colors"
                  onClick={handleLinkClick}
                >
                  Download MentraOS
                </Link>
                <a 
                  href={DEVELOPER_PORTAL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 text-[16px] font-['Red_Hat_Display:Regular',sans-serif] text-[#686069] hover:text-[#00b869] transition-colors"
                  onClick={handleLinkClick}
                >
                  Developer Portal
                </a>
              </div>
            )}
          </div>

          {/* About */}
          <div>
            <button
              onClick={() => toggleDropdown('about')}
              className="w-full flex items-center justify-between py-3 text-[18px] font-['Red_Hat_Display:SemiBold',sans-serif] text-[#0a0a0a]"
              aria-expanded={openDropdown === 'about'}
            >
              <span>About</span>
              <svg 
                className={`w-5 h-5 transition-transform ${openDropdown === 'about' ? 'rotate-180' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'about' && (
              <div className="pl-4 space-y-2">
                <Link 
                  to="/about/mentra"
                  className="block py-2 text-[16px] font-['Red_Hat_Display:Regular',sans-serif] text-[#686069] hover:text-[#00b869] transition-colors"
                  onClick={handleLinkClick}
                >
                  About Mentra
                </Link>
                <Link 
                  to="/blog"
                  className="block py-2 text-[16px] font-['Red_Hat_Display:Regular',sans-serif] text-[#686069] hover:text-[#00b869] transition-colors"
                  onClick={handleLinkClick}
                >
                  Blog & Newsroom
                </Link>
              </div>
            )}
          </div>

          {/* Community */}
          <div>
            <button
              onClick={() => toggleDropdown('community')}
              className="w-full flex items-center justify-between py-3 text-[18px] font-['Red_Hat_Display:SemiBold',sans-serif] text-[#0a0a0a]"
              aria-expanded={openDropdown === 'community'}
            >
              <span>Community</span>
              <svg 
                className={`w-5 h-5 transition-transform ${openDropdown === 'community' ? 'rotate-180' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'community' && (
              <div className="pl-4 space-y-2">
                <a 
                  href={DISCORD_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 text-[16px] font-['Red_Hat_Display:Regular',sans-serif] text-[#686069] hover:text-[#00b869] transition-colors"
                  onClick={handleLinkClick}
                >
                  Discord
                </a>
                <Link 
                  to="/community/socials"
                  className="block py-2 text-[16px] font-['Red_Hat_Display:Regular',sans-serif] text-[#686069] hover:text-[#00b869] transition-colors"
                  onClick={handleLinkClick}
                >
                  Socials
                </Link>
              </div>
            )}
          </div>

          {/* Contact Us */}
          <Link 
            to="/contact"
            className="block py-3 text-[18px] font-['Red_Hat_Display:SemiBold',sans-serif] text-[#0a0a0a] hover:text-[#00b869] transition-colors"
            onClick={handleLinkClick}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}

// Main Header Component - Responsive
export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
      {/* Add padding for mobile header */}
      {isMobile && <div className="h-[60px]" />}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.2s ease-out;
        }
      `}} />
    </>
  );
}
