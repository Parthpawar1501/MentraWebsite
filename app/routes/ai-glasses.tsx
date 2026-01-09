import type {MetaFunction} from '@remix-run/node';
import {useState, useEffect} from 'react';
import AiGlasses from '../imports/AiGlasses';
import MobileHomePage from '../components/mobile/MobileHomePage';
import {Toaster} from '../components/ui/sonner';

export const meta: MetaFunction = () => {
  return [
    {title: 'AI Glasses - Mentra'},
    {name: 'description', content: 'Discover Mentra AI Smart Glasses - Experience the future of wearable technology'},
    {property: 'og:title', content: 'AI Glasses - Mentra'},
    {property: 'og:description', content: 'Discover Mentra AI Smart Glasses'},
    {property: 'og:type', content: 'website'},
  ];
};

export default function AIGlassesPage() {
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
      {isMobile ? <MobileHomePage /> : <AiGlasses />}
      <Toaster position="top-center" richColors />
    </>
  );
}
