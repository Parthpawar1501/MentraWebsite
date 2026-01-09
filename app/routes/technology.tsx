import type {MetaFunction} from '@remix-run/node';
import NavigationBar from '../components/NavigationBar';

export const meta: MetaFunction = () => {
  return [
    {title: 'Technology - Mentra Smart Glasses'},
    {name: 'description', content: 'Discover the cutting-edge technology powering Mentra Live smart glasses - AI vision, open-source OS, and innovative features.'},
    {property: 'og:title', content: 'Technology - Mentra Smart Glasses'},
    {property: 'og:description', content: 'Discover the cutting-edge technology powering Mentra Live smart glasses.'},
    {property: 'og:type', content: 'website'},
  ];
};

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationBar />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-['Red_Hat_Display:Bold',sans-serif] text-4xl md:text-5xl lg:text-6xl text-[#0a0a0a] mb-6">
            Technology
          </h1>
          <p className="font-['Red_Hat_Display:Regular',sans-serif] text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Cutting-edge AI and hardware technology designed to enhance your daily life
          </p>
        </div>

        {/* AI Vision Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-[#00b869] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h2 className="font-['Red_Hat_Display:SemiBold',sans-serif] text-3xl md:text-4xl text-[#0a0a0a]">
              AI Vision Technology
            </h2>
          </div>
          <p className="font-['Red_Hat_Display:Regular',sans-serif] text-gray-700 leading-relaxed mb-4">
            Mentra Live features advanced AI vision capabilities that allow you to see the world through AI. Our glasses can recognize objects, translate text in real-time, identify landmarks, and provide contextual information about everything you see.
          </p>
          <ul className="list-disc list-inside space-y-2 font-['Red_Hat_Display:Regular',sans-serif] text-gray-700">
            <li>Real-time object recognition and classification</li>
            <li>Instant text translation in 100+ languages</li>
            <li>Contextual information about your surroundings</li>
            <li>Accessibility features for visually impaired users</li>
          </ul>
        </div>

        {/* Hardware Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-[#00b869] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h2 className="font-['Red_Hat_Display:SemiBold',sans-serif] text-3xl md:text-4xl text-[#0a0a0a]">
              Hardware Specifications
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-['Red_Hat_Display:SemiBold',sans-serif] text-xl text-[#0a0a0a] mb-3">
                Camera
              </h3>
              <p className="font-['Red_Hat_Display:Regular',sans-serif] text-gray-700">
                High-definition camera for video recording, live streaming, and AI vision processing
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-['Red_Hat_Display:SemiBold',sans-serif] text-xl text-[#0a0a0a] mb-3">
                Audio
              </h3>
              <p className="font-['Red_Hat_Display:Regular',sans-serif] text-gray-700">
                Built-in speakers and microphones for calls, music, and voice commands
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-['Red_Hat_Display:SemiBold',sans-serif] text-xl text-[#0a0a0a] mb-3">
                Battery Life
              </h3>
              <p className="font-['Red_Hat_Display:Regular',sans-serif] text-gray-700">
                10+ hours of mixed use, 5+ hours of music, 40+ minutes of live streaming
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-['Red_Hat_Display:SemiBold',sans-serif] text-xl text-[#0a0a0a] mb-3">
                Design
              </h3>
              <p className="font-['Red_Hat_Display:Regular',sans-serif] text-gray-700">
                Lightweight, prescription-ready frames designed for everyday wear
              </p>
            </div>
          </div>
        </div>

        {/* MentraOS Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-[#00b869] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h2 className="font-['Red_Hat_Display:SemiBold',sans-serif] text-3xl md:text-4xl text-[#0a0a0a]">
              MentraOS - Open Source Platform
            </h2>
          </div>
          <p className="font-['Red_Hat_Display:Regular',sans-serif] text-gray-700 leading-relaxed mb-4">
            MentraOS is our open-source operating system built specifically for smart glasses. It provides developers with the tools and APIs needed to create innovative apps, while giving users complete control over their device and data.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mb-4">
            <h3 className="font-['Red_Hat_Display:SemiBold',sans-serif] text-xl text-[#0a0a0a] mb-3">
              Key Features
            </h3>
            <ul className="list-disc list-inside space-y-2 font-['Red_Hat_Display:Regular',sans-serif] text-gray-700">
              <li>Open-source SDK for developers</li>
              <li>App store with MiniApps ecosystem</li>
              <li>Privacy-first architecture</li>
              <li>Customizable user experience</li>
              <li>Cross-platform compatibility</li>
            </ul>
          </div>
          <a 
            href="/os" 
            className="inline-block font-['Red_Hat_Display:SemiBold',sans-serif] text-[#00b869] hover:text-[#009258] transition-colors"
          >
            Explore MentraOS →
          </a>
        </div>

        {/* App Store Section */}
        <div className="mb-16">
          <h2 className="font-['Red_Hat_Display:SemiBold',sans-serif] text-3xl md:text-4xl text-[#0a0a0a] mb-6">
            MiniApps Ecosystem
          </h2>
          <p className="font-['Red_Hat_Display:Regular',sans-serif] text-gray-700 leading-relaxed mb-4">
            Unlike other smart glasses with locked ecosystems, Mentra Live features an open app store where developers can create and share MiniApps. This means your glasses can constantly evolve with new features and capabilities.
          </p>
          <p className="font-['Red_Hat_Display:Regular',sans-serif] text-gray-700 leading-relaxed">
            From productivity tools to entertainment apps, the possibilities are endless. Your data stays yours, and you choose which apps to install.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-[#00b869] rounded-2xl p-12 text-white">
          <h2 className="font-['Red_Hat_Display:Bold',sans-serif] text-3xl md:text-4xl mb-4">
            Experience the Technology
          </h2>
          <p className="font-['Red_Hat_Display:Regular',sans-serif] text-lg mb-8 opacity-90">
            Get your hands on Mentra Live and see the future of smart glasses
          </p>
          <a 
            href="/buy" 
            className="inline-block bg-white text-[#00b869] px-8 py-4 rounded-full font-['Red_Hat_Display:SemiBold',sans-serif] hover:bg-gray-100 transition-colors"
          >
            Buy Mentra Live
          </a>
        </div>
      </div>
    </div>
  );
}
