import type {MetaFunction} from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    {title: 'Community - Mentra'},
    {name: 'description', content: 'Join the Mentra community'},
    {property: 'og:title', content: 'Community - Mentra'},
    {property: 'og:description', content: 'Join the Mentra community'},
    {property: 'og:type', content: 'website'},
  ];
};

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-[133.778px] py-16">
        <h1 className="text-4xl md:text-5xl font-['Red_Hat_Display:SemiBold',sans-serif] text-[#0a0a0a] mb-8">
          Community
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Connect with the Mentra community of developers, creators, and enthusiasts.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <a
            href="https://discord.gg/mentra"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow hover:border-[#00b869]"
          >
            <h2 className="text-xl font-['Red_Hat_Display:SemiBold',sans-serif] text-[#0a0a0a] mb-4">
              Discord
            </h2>
            <p className="text-gray-600">
              Join our Discord server to chat with the community and get support.
            </p>
          </a>
          <a
            href="/community/socials"
            className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow hover:border-[#00b869]"
          >
            <h2 className="text-xl font-['Red_Hat_Display:SemiBold',sans-serif] text-[#0a0a0a] mb-4">
              Socials
            </h2>
            <p className="text-gray-600">
              Follow us on social media for updates and announcements.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
