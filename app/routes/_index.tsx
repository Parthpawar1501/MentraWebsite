import type {MetaFunction} from '@remix-run/node';
import {useState, useEffect} from 'react';
import {useLoaderData} from '@remix-run/react';
import AiGlasses from '../imports/AiGlasses';
import MobileHomePage from '../components/mobile/MobileHomePage';
import {Toaster} from '../components/ui/sonner';

export const meta: MetaFunction = () => {
  return [
    {title: 'Mentra - AI Smart Glasses'},
    {name: 'description', content: 'Experience the future with Mentra AI Smart Glasses'},
    {property: 'og:title', content: 'Mentra - AI Smart Glasses'},
    {property: 'og:description', content: 'Experience the future with Mentra AI Smart Glasses'},
    {property: 'og:type', content: 'website'},
  ];
};

/**
 * Responsive Home Page
 * 
 * Breakpoint Strategy:
 * - Mobile (<768px): Custom mobile layout (MobileHomePage)
 * - Tablet (768-1023px): Desktop layout with responsive scaling
 * - Desktop (1024px+): Desktop layout pixel-perfect (unchanged)
 */
export default function Index() {
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
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      {isMobile ? <MobileHomePage /> : <AiGlasses />}
      <Toaster position="top-center" richColors />
    </>
  );
}
