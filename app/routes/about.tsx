import type {MetaFunction} from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    {title: 'About - Mentra'},
    {name: 'description', content: 'Learn about Mentra and our mission'},
    {property: 'og:title', content: 'About Mentra'},
    {property: 'og:description', content: 'Learn about Mentra'},
    {property: 'og:type', content: 'website'},
  ];
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-[133.778px] py-16">
        <h1 className="text-4xl md:text-5xl font-['Red_Hat_Display:SemiBold',sans-serif] text-[#0a0a0a] mb-8">
          About Mentra
        </h1>
        <div className="max-w-4xl">
          <p className="text-lg text-gray-600 mb-6">
            Welcome to Mentra, where we're reimagining the future of wearable technology.
          </p>
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-['Red_Hat_Display:SemiBold',sans-serif] text-[#0a0a0a] mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600">
                We're building the next generation of AI-powered smart glasses that enhance how you interact with the world around you.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-['Red_Hat_Display:SemiBold',sans-serif] text-[#0a0a0a] mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600">
                To create accessible, open-source smart glasses that put the power of AI in your hands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
