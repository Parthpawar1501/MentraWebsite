import { useState } from "react";
import { Check } from "lucide-react";

interface Color {
  id: string;
  name: string;
  hex: string;
  image?: string;
}

const colors: Color[] = [
  { id: "black", name: "Matte Black", hex: "#1a1a1a" },
  { id: "white", name: "Pearl White", hex: "#f5f5f5" },
  { id: "blue", name: "Ocean Blue", hex: "#4a90e2" },
  { id: "green", name: "Forest Green", hex: "#00b869" },
  { id: "red", name: "Crimson Red", hex: "#e74c3c" },
];

export default function MobileColorSelector() {
  const [selectedColor, setSelectedColor] = useState<string>("black");

  return (
    <div className="w-full py-6 px-6 bg-white">
      <div className="max-w-[390px] mx-auto">
        {/* Section Title */}
        <div className="mb-4">
          <p className="font-['Red_Hat_Display:SemiBold',sans-serif] text-[16px] text-[#0a0a0a]">
            Color
          </p>
          <p className="font-['Red_Hat_Display:Regular',sans-serif] text-[14px] text-gray-600 mt-1">
            {colors.find(c => c.id === selectedColor)?.name}
          </p>
        </div>

        {/* Color Options */}
        <div className="flex gap-3 flex-wrap">
          {colors.map((color) => (
            <button
              key={color.id}
              onClick={() => setSelectedColor(color.id)}
              className={`relative w-12 h-12 rounded-full transition-all duration-300 ease-out ${
                selectedColor === color.id
                  ? 'ring-2 ring-[#00b869] ring-offset-2 scale-110 shadow-lg'
                  : 'ring-1 ring-gray-200 hover:scale-105 hover:ring-[#00b869] hover:shadow-md active:scale-95'
              }`}
              style={{ backgroundColor: color.hex }}
              aria-label={`Select ${color.name}`}
            >
              {selectedColor === color.id && (
                <div className="absolute inset-0 flex items-center justify-center animate-scale-in">
                  <div className="bg-white rounded-full p-0.5 shadow-sm">
                    <Check className="w-4 h-4 text-[#00b869] animate-fade-in" />
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
