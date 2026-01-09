import type {MetaFunction} from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    {title: 'Download MentraOS - Mentra'},
    {name: 'description', content: 'Download MentraOS for your smart glasses'},
    {property: 'og:title', content: 'Download MentraOS'},
    {property: 'og:description', content: 'Download MentraOS for your smart glasses'},
    {property: 'og:type', content: 'website'},
  ];
};

export default function DownloadMentraOSPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-[133.778px] py-16">
        <h1 className="text-4xl md:text-5xl font-['Red_Hat_Display:SemiBold',sans-serif] text-[#0a0a0a] mb-8">
          Download MentraOS
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Download the latest version of MentraOS for your smart glasses.
        </p>
        <div className="max-w-2xl">
          <div className="border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-['Red_Hat_Display:SemiBold',sans-serif] text-[#0a0a0a] mb-4">
              Latest Release
            </h2>
            <p className="text-gray-600 mb-6">
              MentraOS v1.0.0 - Initial release
            </p>
            <button className="bg-[#00b869] text-white px-8 py-3 rounded-full font-['Red_Hat_Display:SemiBold',sans-serif] text-[16px] hover:bg-[#00a05d] transition-colors">
              Download Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
