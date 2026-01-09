import type {MetaFunction} from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    {title: 'About Mentra - Mentra'},
    {name: 'description', content: 'Learn more about Mentra, our team, and our mission'},
    {property: 'og:title', content: 'About Mentra'},
    {property: 'og:description', content: 'Learn more about Mentra'},
    {property: 'og:type', content: 'website'},
  ];
};

export default function AboutMentraPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-[133.778px] py-16">
        <h1 className="text-4xl md:text-5xl font-['Red_Hat_Display:SemiBold',sans-serif] text-[#0a0a0a] mb-8">
          About Mentra
        </h1>
        <div className="max-w-4xl space-y-8">
          <div>
            <h2 className="text-2xl font-['Red_Hat_Display:SemiBold',sans-serif] text-[#0a0a0a] mb-4">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Mentra is a technology company dedicated to creating innovative smart glasses that seamlessly integrate AI into everyday life.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-['Red_Hat_Display:SemiBold',sans-serif] text-[#0a0a0a] mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              To make AI-powered smart glasses accessible to everyone while maintaining open-source principles and user privacy.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-['Red_Hat_Display:SemiBold',sans-serif] text-[#0a0a0a] mb-4">
              What We Build
            </h2>
            <p className="text-lg text-gray-600">
              We develop smart glasses hardware, the MentraOS operating system, and a thriving ecosystem of MiniApps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
