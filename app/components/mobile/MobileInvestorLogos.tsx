import imgImage178 from "/assets/941ea41c22412686984c524708231da6edbd53ad.png";
import imgImage180 from "/assets/04de4f892e4e3df51d41b04942dade53ac02ab7c.png";
import imgImage177 from "/assets/bb07fd06e6c4321a583b7cfa3b338bcb8bd30d7b.png";
import imgImage176 from "/assets/9afba06bbe7725ea0650b181366d51a6a3782f87.png";
import imgImage185 from "/assets/51d7d50f9b381f963c3ef047a3dd22f068b8e016.png";
import imgImage181 from "/assets/b9a2e40afe9a6295c872f0043640730bdf2a4916.png";
import imgImage179 from "/assets/08d2f54624f59fd5915df0f824ac8912a6b993e1.png";
import imgImage191 from "/assets/50b9de801dda0227d238cfab2648fdf555f1b62a.png";
import { imgSection } from "../../imports/svg-5nkvx";

function InvestorLogo({ image, alt, width, height }: { image: string; alt: string; width: string; height: string }) {
  return (
    <div className="flex flex-col items-center gap-1 flex-shrink-0 transition-all duration-300 hover:scale-105 hover:opacity-80" style={{ width, height: `${parseFloat(height) + 10}px` }}>
      <p className="font-['Red_Hat_Display:Regular',sans-serif] text-[5.581px] text-black text-center">
        Founder of
      </p>
      <div className="flex items-center justify-center transition-opacity duration-300" style={{ width, height }}>
        <img alt={alt} className="max-w-full max-h-full object-contain transition-transform duration-300" src={image} />
      </div>
    </div>
  );
}

export default function MobileInvestorLogos() {
  const logos = [
    { image: imgImage178, alt: "Y Combinator", width: "78px", height: "17px" },
    { image: imgImage180, alt: "Techstars", width: "57px", height: "17px" },
    { image: imgImage177, alt: "500 Startups", width: "105px", height: "16.5px" },
    { image: imgImage176, alt: "Sequoia", width: "118px", height: "26px" },
    { image: imgImage185, alt: "Andreessen Horowitz", width: "78px", height: "26.5px" },
    { image: imgImage181, alt: "Accel", width: "90px", height: "25px" },
    { image: imgImage179, alt: "Greylock", width: "82px", height: "25px" },
    { image: imgImage191, alt: "Kleiner Perkins", width: "63px", height: "20px" },
  ];

  return (
    <div className="w-full py-8 bg-white overflow-hidden">
      <div className="max-w-[390px] mx-auto px-6">
        {/* Header */}
        <p className="font-['Manrope:Regular',sans-serif] text-[12.767px] text-black text-center mb-4">
          Backed by
        </p>

        {/* Scrolling Logo Container with Mask */}
        <div 
          className="relative w-full h-[27px] overflow-hidden"
          style={{ maskImage: `url('${imgSection}')`, maskSize: '100% 100%', maskRepeat: 'no-repeat' }}
        >
          {/* Animated Logo Strip */}
          <div className="absolute flex gap-6 items-center animate-scroll-logos">
            {/* First set */}
            {logos.map((logo, index) => (
              <InvestorLogo key={`logo-1-${index}`} {...logo} />
            ))}
            {/* Duplicate for infinite scroll */}
            {logos.map((logo, index) => (
              <InvestorLogo key={`logo-2-${index}`} {...logo} />
            ))}
            {/* Third set for seamless loop */}
            {logos.map((logo, index) => (
              <InvestorLogo key={`logo-3-${index}`} {...logo} />
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-logos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll-logos {
          animation: scroll-logos 30s linear infinite;
        }

        .animate-scroll-logos:hover {
          animation-play-state: paused;
        }
      `}} />
    </div>
  );
}