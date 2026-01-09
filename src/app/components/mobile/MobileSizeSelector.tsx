import { useState } from "react";

interface Size {
  id: string;
  label: string;
  available: boolean;
}

const sizes: Size[] = [
  { id: "xs", label: "XS", available: true },
  { id: "s", label: "S", available: true },
  { id: "m", label: "M", available: true },
  { id: "l", label: "L", available: true },
  { id: "xl", label: "XL", available: false },
];

export default function MobileSizeSelector() {
  const [selectedSize, setSelectedSize] = useState<string>("m");

  return (
    <div className="w-full py-6 px-6 bg-white">
      <div className="max-w-[390px] mx-auto">
        {/* Section Title */}
        <div className="mb-4">
          <p className="font-['Red_Hat_Display:SemiBold',sans-serif] text-[16px] text-[#0a0a0a]">
            Size
          </p>
          <p className="font-['Red_Hat_Display:Regular',sans-serif] text-[14px] text-gray-600 mt-1">
            Choose your fit
          </p>
        </div>

        {/* Size Options */}
        <div className="flex gap-3 flex-wrap">
          {sizes.map((size) => (
            <button
              key={size.id}
              onClick={() => size.available && setSelectedSize(size.id)}
              disabled={!size.available}
              className={`min-w-[56px] h-12 px-4 rounded-lg font-['Red_Hat_Display:SemiBold',sans-serif] text-[14px] transition-all duration-300 ease-out ${
                selectedSize === size.id
                  ? 'bg-[#00b869] text-white ring-2 ring-[#00b869] ring-offset-2 scale-105 shadow-lg'
                  : size.available
                  ? 'bg-white text-[#0a0a0a] ring-1 ring-gray-300 hover:ring-[#00b869] hover:scale-105 hover:shadow-md active:scale-95'
                  : 'bg-gray-100 text-gray-400 ring-1 ring-gray-200 cursor-not-allowed opacity-50'
              }`}
              aria-label={`Select size ${size.label}`}
            >
              {size.label}
              {!size.available && (
                <span className="block text-[10px] mt-0.5">Out</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
