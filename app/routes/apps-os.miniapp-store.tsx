import type {MetaFunction} from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    {title: 'Mentra MiniApp Store - Mentra'},
    {name: 'description', content: 'Discover MiniApps for your Mentra smart glasses'},
    {property: 'og:title', content: 'Mentra MiniApp Store'},
    {property: 'og:description', content: 'Discover MiniApps for your Mentra smart glasses'},
    {property: 'og:type', content: 'website'},
  ];
};

export default function MiniAppStorePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-[133.778px] py-16">
        <h1 className="text-4xl md:text-5xl font-['Red_Hat_Display:SemiBold',sans-serif] text-[#0a0a0a] mb-8">
          Mentra MiniApp Store
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover and download MiniApps to enhance your Mentra smart glasses experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-['Red_Hat_Display:SemiBold',sans-serif] text-[#0a0a0a] mb-4">
              Featured Apps
            </h2>
            <p className="text-gray-600">
              Coming soon - Browse featured MiniApps for your glasses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
