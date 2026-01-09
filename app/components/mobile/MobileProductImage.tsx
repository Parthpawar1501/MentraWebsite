import { useState } from "react";
import imgEzgifFrame0351 from "/assets/83fb1abc62c74b98254b83e1c995957305d9c32a.png";
import svgPaths from "../../imports/svg-nrlb2kvmui";

interface Hotspot {
  id: string;
  label: string;
  position: { left: string; top: string };
}

const hotspots: Hotspot[] = [
  { id: "touchpad", label: "Touch pad", position: { left: "34.5%", top: "23%" } },
  { id: "flash", label: "Flash LED", position: { left: "76.5%", top: "47%" } },
  { id: "speakers", label: "Speakers", position: { left: "29.7%", top: "46%" } },
  { id: "speakers2", label: "Speakers", position: { left: "58.8%", top: "77%" } },
  { id: "charging", label: "Charging connector", position: { left: "25.1%", top: "69%" } },
  { id: "action", label: "Action Button", position: { left: "44%", top: "0%" } },
  { id: "camera", label: "Camera", position: { left: "49%", top: "3.2%" } },
  { id: "microphone", label: "Microphone", position: { left: "64%", top: "30%" } },
];

function HotspotButton({ hotspot, isActive, onClick }: { 
  hotspot: Hotspot; 
  isActive: boolean; 
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`absolute backdrop-blur-[2.19px] backdrop-filter rounded-[14.017px] size-[17.521px] flex items-center justify-center transition-all duration-300 ease-out ${
        isActive 
          ? 'bg-[#00b869]/80 scale-125 shadow-xl ring-2 ring-[#00b869] ring-offset-2' 
          : 'bg-white/40 hover:bg-white/70 hover:scale-110 hover:shadow-md active:scale-95'
      }`}
      style={{ left: hotspot.position.left, top: hotspot.position.top }}
      aria-label={hotspot.label}
    >
      <div className="size-[13.14px] bg-white/70 rounded-[14.017px] flex items-center justify-center">
        <svg className="size-[10.512px]" fill="none" viewBox="0 0 19.438 19.438">
          <g>
            <path 
              d="M12 5V19" 
              stroke={isActive ? "#00B869" : "#00B869"} 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="0.876033" 
            />
            <path 
              d="M5 12H19" 
              stroke={isActive ? "#00B869" : "#00B869"} 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="0.876033" 
            />
          </g>
        </svg>
      </div>
    </button>
  );
}

export default function MobileProductImage() {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  return (
    <div className="w-full py-8 px-6 bg-white">
      <div className="max-w-[636px] mx-auto">
        {/* Product Image with Hotspots */}
        <div className="relative w-full h-[203px]">
          {/* Main Product Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              alt="Mentra Live AR Glasses" 
              className="max-w-full max-h-full object-contain" 
              src={imgEzgifFrame0351} 
            />
          </div>

          {/* Interactive Hotspots */}
          {hotspots.map((hotspot) => (
            <HotspotButton
              key={hotspot.id}
              hotspot={hotspot}
              isActive={activeHotspot === hotspot.id}
              onClick={() => setActiveHotspot(activeHotspot === hotspot.id ? null : hotspot.id)}
            />
          ))}
        </div>

        {/* Active Hotspot Label */}
        {activeHotspot && (
          <div className="mt-4 text-center animate-fade-in-up">
            <p className="font-['Red_Hat_Display:SemiBold',sans-serif] text-[14px] text-[#00b869] transition-all duration-300 animate-scale-in">
              {hotspots.find(h => h.id === activeHotspot)?.label}
            </p>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .hotspot-tooltip-enter {
          animation: fadeIn 0.2s ease-out;
        }
      `}} />
    </div>
  );
}