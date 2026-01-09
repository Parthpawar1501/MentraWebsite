import type {MetaFunction} from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    {title: 'Contact Us - Mentra'},
    {name: 'description', content: 'Get in touch with the Mentra team'},
    {property: 'og:title', content: 'Contact Us - Mentra'},
    {property: 'og:description', content: 'Get in touch with the Mentra team'},
    {property: 'og:type', content: 'website'},
  ];
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-[133.778px] py-16">
        <h1 className="text-4xl md:text-5xl font-['Red_Hat_Display:SemiBold',sans-serif] text-[#0a0a0a] mb-8">
          Contact Us
        </h1>
        <div className="max-w-2xl">
          <p className="text-lg text-gray-600 mb-8">
            Have a question or want to get in touch? We'd love to hear from you.
          </p>
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-['Red_Hat_Display:SemiBold',sans-serif] text-[#0a0a0a] mb-4">
                General Inquiries
              </h2>
              <p className="text-gray-600">
                Email us at <a href="mailto:hello@mentraglass.com" className="text-[#00b869] hover:underline">hello@mentraglass.com</a>
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-['Red_Hat_Display:SemiBold',sans-serif] text-[#0a0a0a] mb-4">
                Support
              </h2>
              <p className="text-gray-600">
                For technical support, visit our <a href="https://discord.gg/mentra" target="_blank" rel="noopener noreferrer" className="text-[#00b869] hover:underline">Discord community</a> or email <a href="mailto:support@mentraglass.com" className="text-[#00b869] hover:underline">support@mentraglass.com</a>
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-['Red_Hat_Display:SemiBold',sans-serif] text-[#0a0a0a] mb-4">
                Partnerships
              </h2>
              <p className="text-gray-600">
                Interested in partnering with us? Email <a href="mailto:partnerships@mentraglass.com" className="text-[#00b869] hover:underline">partnerships@mentraglass.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
