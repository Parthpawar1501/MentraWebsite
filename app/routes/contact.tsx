import type {MetaFunction} from '@remix-run/node';
import {useState} from 'react';
import NavigationBar from '../components/NavigationBar';
import {Toaster} from '../components/ui/sonner';
import {toast} from 'sonner';

export const meta: MetaFunction = () => {
  return [
    {title: 'Contact Us - Mentra Smart Glasses'},
    {name: 'description', content: 'Get in touch with the Mentra team. We\'re here to answer your questions and help you with your smart glasses.'},
    {property: 'og:title', content: 'Contact Us - Mentra Smart Glasses'},
    {property: 'og:description', content: 'Get in touch with the Mentra team.'},
    {property: 'og:type', content: 'website'},
  ];
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent!', {
        description: 'We\'ll get back to you soon.',
        duration: 3000,
      });
      setFormData({name: '', email: '', subject: '', message: ''});
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <NavigationBar />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-['Red_Hat_Display:Bold',sans-serif] text-4xl md:text-5xl lg:text-6xl text-[#0a0a0a] mb-6">
            Contact Us
          </h1>
          <p className="font-['Red_Hat_Display:Regular',sans-serif] text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="font-['Red_Hat_Display:SemiBold',sans-serif] text-2xl md:text-3xl text-[#0a0a0a] mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-['Red_Hat_Display:SemiBold',sans-serif] text-sm text-[#0a0a0a] mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b869] focus:border-transparent font-['Red_Hat_Display:Regular',sans-serif]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-['Red_Hat_Display:SemiBold',sans-serif] text-sm text-[#0a0a0a] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b869] focus:border-transparent font-['Red_Hat_Display:Regular',sans-serif]"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block font-['Red_Hat_Display:SemiBold',sans-serif] text-sm text-[#0a0a0a] mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b869] focus:border-transparent font-['Red_Hat_Display:Regular',sans-serif]"
                >
                  <option value="">Select a subject</option>
                  <option value="product">Product Question</option>
                  <option value="support">Technical Support</option>
                  <option value="order">Order Inquiry</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block font-['Red_Hat_Display:SemiBold',sans-serif] text-sm text-[#0a0a0a] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b869] focus:border-transparent font-['Red_Hat_Display:Regular',sans-serif] resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#00b869] hover:bg-[#009258] disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-full font-['Red_Hat_Display:SemiBold',sans-serif] transition-colors"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="font-['Red_Hat_Display:SemiBold',sans-serif] text-2xl md:text-3xl text-[#0a0a0a] mb-6">
              Get in Touch
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-['Red_Hat_Display:SemiBold',sans-serif] text-xl text-[#0a0a0a] mb-3">
                  General Inquiries
                </h3>
                <p className="font-['Red_Hat_Display:Regular',sans-serif] text-gray-700">
                  <a href="mailto:hello@mentraglass.com" className="text-[#00b869] hover:text-[#009258] transition-colors">
                    hello@mentraglass.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-['Red_Hat_Display:SemiBold',sans-serif] text-xl text-[#0a0a0a] mb-3">
                  Support
                </h3>
                <p className="font-['Red_Hat_Display:Regular',sans-serif] text-gray-700">
                  <a href="mailto:support@mentraglass.com" className="text-[#00b869] hover:text-[#009258] transition-colors">
                    support@mentraglass.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-['Red_Hat_Display:SemiBold',sans-serif] text-xl text-[#0a0a0a] mb-3">
                  Partnerships
                </h3>
                <p className="font-['Red_Hat_Display:Regular',sans-serif] text-gray-700">
                  <a href="mailto:partnerships@mentraglass.com" className="text-[#00b869] hover:text-[#009258] transition-colors">
                    partnerships@mentraglass.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-['Red_Hat_Display:SemiBold',sans-serif] text-xl text-[#0a0a0a] mb-3">
                  Community
                </h3>
                <div className="space-y-2">
                  <p className="font-['Red_Hat_Display:Regular',sans-serif] text-gray-700">
                    Join our Discord community to connect with other users and developers.
                  </p>
                  <a 
                    href="https://discord.gg/mentra" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block font-['Red_Hat_Display:SemiBold',sans-serif] text-[#00b869] hover:text-[#009258] transition-colors"
                  >
                    Join Discord →
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-['Red_Hat_Display:SemiBold',sans-serif] text-xl text-[#0a0a0a] mb-3">
                  Response Time
                </h3>
                <p className="font-['Red_Hat_Display:Regular',sans-serif] text-gray-700">
                  We typically respond within 24-48 hours. For urgent matters, please mention "URGENT" in your subject line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-center" richColors />
    </div>
  );
}
