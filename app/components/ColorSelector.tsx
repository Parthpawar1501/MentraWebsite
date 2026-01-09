import { useState } from "react";

interface ColorOption {
  name: string;
  color: string;
  image?: string;
}

interface ColorSelectorProps {
  colors: ColorOption[];
  defaultColor?: string;
  onColorChange?: (color: ColorOption) => void;
}

export function ColorSelector({ colors, defaultColor, onColorChange }: ColorSelectorProps) {
  const [selectedColor, setSelectedColor] = useState(
    colors.find(c => c.name === defaultColor) || colors[0]
  );

  const handleColorChange = (color: ColorOption) => {
    setSelectedColor(color);
    onColorChange?.(color);
  };

  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      {colors.map((color) => (
        <button
          key={color.name}
          onClick={() => handleColorChange(color)}
          className={`relative shrink-0 size-[60px] rounded-full transition-all duration-300 ease-out hover:scale-110 active:scale-95 ${
            selectedColor.name === color.name
              ? 'ring-4 ring-[#00b869] ring-offset-4 scale-110 shadow-lg'
              : 'ring-2 ring-[#e5e5e5] ring-offset-2 hover:ring-[#00b869] hover:shadow-md'
          }`}
          aria-label={`Select ${color.name} color`}
          aria-pressed={selectedColor.name === color.name}
        >
          <div
            className="size-full rounded-full border border-[#e5e5e5] border-solid overflow-hidden"
            style={{ backgroundColor: color.color }}
          >
            {color.image && (
              <img
                src={color.image}
                alt={color.name}
                className="size-full object-cover"
              />
            )}
          </div>
          
          {/* Checkmark for selected color */}
          {selectedColor.name === color.name && (
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="size-6 text-white drop-shadow-lg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          )}
        </button>
      ))}
    </div>
  );
}
