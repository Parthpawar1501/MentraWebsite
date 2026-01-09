import { useState, useEffect } from "react";
import AiGlasses from "../imports/AiGlasses";
import MobileHomePage from "./mobile/MobileHomePage";

/**
 * Responsive Home Page
 * 
 * Breakpoint Strategy:
 * - Mobile (<768px): Custom mobile layout (MobileHomePage)
 * - Tablet (768-1023px): Desktop layout with responsive scaling
 * - Desktop (1024px+): Desktop layout pixel-perfect (unchanged)
 */
export default function ResponsiveHomePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      // Mobile: < 768px uses custom mobile layout
      // Tablet + Desktop: >= 768px uses desktop layout
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkMobile();

    // Listen for resize
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      {isMobile ? <MobileHomePage /> : <AiGlasses />}
    </>
  );
}