import type {MetaFunction} from '@remix-run/node';
import NavigationBar from '../components/NavigationBar';

export const meta: MetaFunction = () => {
  return [
    {title: 'About Mentra - AI Smart Glasses'},
    {name: 'description', content: 'Learn about Mentra - revolutionizing the world with AI-powered smart glasses and open-source technology.'},
    {property: 'og:title', content: 'About Mentra - AI Smart Glasses'},
    {property: 'og:description', content: 'Learn about Mentra - revolutionizing the world with AI-powered smart glasses and open-source technology.'},
    {property: 'og:type', content: 'website'},
  ];
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationBar />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-['Red_Hat_Display:Bold',sans-serif] text-4xl md:text-5xl lg:text-6xl text-[#0a0a0a] mb-6">
            About Mentra
          </h1>
          <p className="font-['Red_Hat_Display:Regular',sans-serif] text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            We're building the future of AI-powered smart glasses to help people see, understand, and interact with the world in entirely new ways.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <h2 className="font-['Red_Hat_Display:SemiBold',sans-serif] text-3xl md:text-4xl text-[#0a0a0a] mb-6">
            Our Mission
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="font-['Red_Hat_Display:Regular',sans-serif] text-gray-700 leading-relaxed mb-4">
              At Mentra, we believe that technology should enhance human capabilities, not replace them. Our mission is to create AI-powered smart glasses that seamlessly integrate into your daily life, providing real-time information, translations, and insights about the world around you.
            </p>
            <p className="font-['Red_Hat_Display:Regular',sans-serif] text-gray-700 leading-relaxed">
              We're committed to open-source technology, giving you full control over your data and the ability to customize your experience. Unlike other smart glasses, Mentra Live puts you in control.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="mb-16">
          <h2 className="font-['Red_Hat_Display:SemiBold',sans-serif] text-3xl md:text-4xl text-[#0a0a0a] mb-6">
            Our Vision
          </h2>
          <p className="font-['Red_Hat_Display:Regular',sans-serif] text-gray-700 leading-relaxed mb-4">
            We envision a world where AI-powered smart glasses are as common as smartphones, helping people navigate language barriers, understand their environment, and access information instantly—all while maintaining privacy and user control.
          </p>
          <p className="font-['Red_Hat_Display:Regular',sans-serif] text-gray-700 leading-relaxed">
            Through our open-source platform and app store, we're building a community of developers and users who are shaping the future of wearable AI technology.
          </p>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="font-['Red_Hat_Display:SemiBold',sans-serif] text-3xl md:text-4xl text-[#0a0a0a] mb-8">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-['Red_Hat_Display:SemiBold',sans-serif] text-xl text-[#0a0a0a] mb-3">
                Open Source
              </h3>
              <p className="font-['Red_Hat_Display:Regular',sans-serif] text-gray-700">
                We believe in transparency and giving users control over their technology and data.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-['Red_Hat_Display:SemiBold',sans-serif] text-xl text-[#0a0a0a] mb-3">
                Privacy First
              </h3>
              <p className="font-['Red_Hat_Display:Regular',sans-serif] text-gray-700">
                Your data belongs to you. We don't sell your information or use it for advertising.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-['Red_Hat_Display:SemiBold',sans-serif] text-xl text-[#0a0a0a] mb-3">
                Innovation
              </h3>
              <p className="font-['Red_Hat_Display:Regular',sans-serif] text-gray-700">
                We're constantly pushing the boundaries of what's possible with wearable AI technology.
              </p>
            </div>
          </div>
        </div>

        {/* Technology Section */}
        <div className="mb-16">
          <h2 className="font-['Red_Hat_Display:SemiBold',sans-serif] text-3xl md:text-4xl text-[#0a0a0a] mb-6">
            Built on MentraOS
          </h2>
          <p className="font-['Red_Hat_Display:Regular',sans-serif] text-gray-700 leading-relaxed mb-4">
            Mentra Live runs on MentraOS, our open-source operating system designed specifically for smart glasses. This gives developers the freedom to create innovative apps and experiences, and gives users the power to customize their glasses to fit their needs.
          </p>
          <a 
            href="/os" 
            className="inline-block font-['Red_Hat_Display:SemiBold',sans-serif] text-[#00b869] hover:text-[#009258] transition-colors"
          >
            Learn more about MentraOS →
          </a>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-[#00b869] rounded-2xl p-12 text-white">
          <h2 className="font-['Red_Hat_Display:Bold',sans-serif] text-3xl md:text-4xl mb-4">
            Join the Revolution
          </h2>
          <p className="font-['Red_Hat_Display:Regular',sans-serif] text-lg mb-8 opacity-90">
            Be part of the future of wearable AI technology
          </p>
          <a 
            href="/buy" 
            className="inline-block bg-white text-[#00b869] px-8 py-4 rounded-full font-['Red_Hat_Display:SemiBold',sans-serif] hover:bg-gray-100 transition-colors"
          >
            Get Mentra Live
          </a>
        </div>
      </div>
    </div>
  );
}
