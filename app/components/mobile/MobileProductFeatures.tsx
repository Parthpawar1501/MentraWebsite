import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Feature {
  id: string;
  title: string;
  content: string;
  specs?: { label: string; value: string }[];
}

const features: Feature[] = [
  {
    id: "ai",
    title: "AI-Powered Vision",
    content: "Experience the world through AI. Get real-time translations, object recognition, and contextual information about everything you see.",
    specs: [
      { label: "AI Model", value: "GPT-4 Vision" },
      { label: "Processing", value: "On-device + Cloud" },
      { label: "Languages", value: "100+ supported" },
    ],
  },
  {
    id: "camera",
    title: "Ultra HD Camera",
    content: "Capture life's moments in stunning 4K quality. The 13MP camera with HDR captures photos and videos with incredible detail.",
    specs: [
      { label: "Resolution", value: "4K @ 60fps" },
      { label: "Photo", value: "13MP HDR" },
      { label: "Storage", value: "128GB built-in" },
    ],
  },
  {
    id: "audio",
    title: "Premium Audio",
    content: "Open-ear speakers deliver rich, immersive sound while keeping you aware of your surroundings. Perfect for calls, music, and AI responses.",
    specs: [
      { label: "Speakers", value: "Directional audio" },
      { label: "Microphones", value: "4-mic array" },
      { label: "Noise Cancellation", value: "Active" },
    ],
  },
  {
    id: "battery",
    title: "All-Day Battery",
    content: "Up to 8 hours of continuous use on a single charge. Fast charging gives you 2 hours of use in just 15 minutes.",
    specs: [
      { label: "Battery Life", value: "8 hours" },
      { label: "Standby", value: "48 hours" },
      { label: "Charging", value: "USB-C Fast Charge" },
    ],
  },
  {
    id: "design",
    title: "Prescription Ready",
    content: "Works with your existing prescription lenses. Compatible with most frame styles and lens types.",
    specs: [
      { label: "Weight", value: "48g" },
      { label: "Material", value: "Titanium frame" },
      { label: "Water Resistance", value: "IPX4" },
    ],
  },
];

function FeatureAccordion({ feature, isOpen, onToggle }: { 
  feature: Feature; 
  isOpen: boolean; 
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span className="font-['Red_Hat_Display:SemiBold',sans-serif] text-[16px] text-[#0a0a0a] group-hover:text-[#00b869] transition-colors">
          {feature.title}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-gray-600 transition-all duration-300 ease-out group-hover:text-[#00b869] ${
            isOpen ? 'rotate-180 text-[#00b869]' : ''
          }`}
        />
      </button>

      {/* Accordion Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-5 animate-fade-in">
          <p className="font-['Red_Hat_Display:Regular',sans-serif] text-[14px] text-gray-700 leading-relaxed mb-4 transition-opacity duration-300">
            {feature.content}
          </p>

          {feature.specs && (
            <div className="space-y-2">
              {feature.specs.map((spec, index) => (
                <div 
                  key={index} 
                  className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg hover:bg-gray-100 hover:shadow-sm transition-all duration-300 ease-out hover:scale-[1.02] cursor-default"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="font-['Manrope:Regular',sans-serif] text-[13px] text-gray-600 transition-colors">
                    {spec.label}
                  </span>
                  <span className="font-['Manrope:SemiBold',sans-serif] text-[13px] text-[#0a0a0a] transition-colors">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function MobileProductFeatures() {
  const [openFeature, setOpenFeature] = useState<string | null>("ai");

  return (
    <div className="w-full py-8 px-6 bg-white">
      <div className="max-w-[390px] mx-auto">
        {/* Section Header */}
        <div className="mb-6">
          <h3 className="font-['Red_Hat_Display:Bold',sans-serif] text-[24px] text-[#0a0a0a] mb-2">
            Features & Specs
          </h3>
          <p className="font-['Red_Hat_Display:Regular',sans-serif] text-[14px] text-gray-600">
            Everything you need to know about Mentra Live
          </p>
        </div>

        {/* Accordion List */}
        <div className="border-t border-gray-200">
          {features.map((feature) => (
            <FeatureAccordion
              key={feature.id}
              feature={feature}
              isOpen={openFeature === feature.id}
              onToggle={() => setOpenFeature(openFeature === feature.id ? null : feature.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
