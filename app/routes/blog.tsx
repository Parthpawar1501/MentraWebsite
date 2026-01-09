import type {MetaFunction} from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    {title: 'Blog & Newsroom - Mentra'},
    {name: 'description', content: 'Latest news and updates from Mentra'},
    {property: 'og:title', content: 'Blog & Newsroom - Mentra'},
    {property: 'og:description', content: 'Latest news and updates from Mentra'},
    {property: 'og:type', content: 'website'},
  ];
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-[133.778px] py-16">
        <h1 className="text-4xl md:text-5xl font-['Red_Hat_Display:SemiBold',sans-serif] text-[#0a0a0a] mb-8">
          Blog & Newsroom
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Stay updated with the latest news, product updates, and stories from Mentra.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-['Red_Hat_Display:SemiBold',sans-serif] text-[#0a0a0a] mb-4">
              Latest Posts
            </h2>
            <p className="text-gray-600">
              Check back soon for our latest blog posts and announcements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
