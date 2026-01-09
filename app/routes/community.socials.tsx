import type {MetaFunction} from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    {title: 'Socials - Mentra Community'},
    {name: 'description', content: 'Follow Mentra on social media'},
    {property: 'og:title', content: 'Socials - Mentra'},
    {property: 'og:description', content: 'Follow Mentra on social media'},
    {property: 'og:type', content: 'website'},
  ];
};

export default function SocialsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-[133.778px] py-16">
        <h1 className="text-4xl md:text-5xl font-['Red_Hat_Display:SemiBold',sans-serif] text-[#0a0a0a] mb-8">
          Socials
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Follow Mentra on social media for the latest updates, announcements, and community highlights.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
          <a
            href="https://twitter.com/mentraglass"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow hover:border-[#00b869]"
          >
            <h2 className="text-xl font-['Red_Hat_Display:SemiBold',sans-serif] text-[#0a0a0a] mb-4">
              Twitter / X
            </h2>
            <p className="text-gray-600">
              Follow us on Twitter for real-time updates.
            </p>
          </a>
          <a
            href="https://instagram.com/mentraglass"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow hover:border-[#00b869]"
          >
            <h2 className="text-xl font-['Red_Hat_Display:SemiBold',sans-serif] text-[#0a0a0a] mb-4">
              Instagram
            </h2>
            <p className="text-gray-600">
              See photos and stories from the Mentra community.
            </p>
          </a>
          <a
            href="https://linkedin.com/company/mentraglass"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow hover:border-[#00b869]"
          >
            <h2 className="text-xl font-['Red_Hat_Display:SemiBold',sans-serif] text-[#0a0a0a] mb-4">
              LinkedIn
            </h2>
            <p className="text-gray-600">
              Connect with us on LinkedIn for professional updates.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
