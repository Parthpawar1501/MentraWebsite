import imgImage171 from "/assets/9bd13b993f4db0d7910a3e77d580330c8196cbda.png";
import svgPaths from "../../imports/svg-nrlb2kvmui";

function Logo() {
  return (
    <div className="h-[15.568px] w-[30.162px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.1624 15.5677">
        <g id="Logo">
          <rect fill="white" height="6.91898" id="Rectangle 1" width="7.14592" y="8.64873" />
          <path d={svgPaths.p27af6b00} fill="white" id="Rectangle 2" />
          <path d={svgPaths.p3353b000} fill="white" id="Rectangle 3" />
        </g>
      </svg>
    </div>
  );
}

export default function MobileHeroSection() {
  return (
    <div className="relative w-full h-[782px] overflow-hidden">
      {/* Hero Image Background */}
      <div className="absolute inset-0">
        <img 
          alt="Mentra AI Glasses Hero" 
          className="absolute inset-0 w-full h-full object-cover rounded-tl-[12.767px] rounded-tr-[12.767px]" 
          src={imgImage171} 
        />
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col items-center justify-end px-6 py-[85px]">
        {/* Logo and Title */}
        <div className="flex flex-col gap-[6.384px] items-center w-full max-w-[339px]">
          {/* Logo */}
          <div className="flex gap-[5.838px] items-center">
            <Logo />
            <p className="font-['Red_Hat_Display:SemiBold',sans-serif] text-[19.46px] text-white">
              Mentra
            </p>
          </div>

          {/* Main Headline */}
          <h1 className="font-['Red_Hat_Display:Bold',sans-serif] text-[34.047px] leading-[38.302px] text-center text-white">
            Choose Your Reality
          </h1>

          {/* Subheadline */}
          <p className="font-['Red_Hat_Display:SemiBold',sans-serif] text-[17.023px] leading-[24.031px] text-center text-white">
            The only AI glasses with an app store.
          </p>
        </div>

        {/* Scroll Indicator (Optional) */}
        <button 
          className="absolute right-[19px] top-[513px] backdrop-blur-[2.66px] bg-white/40 rounded-full size-[21.279px] flex items-center justify-center"
          aria-label="Scroll down"
        >
          <svg className="size-[12.767px]" fill="none" viewBox="0 0 12.7674 12.7674">
            <path d={svgPaths.p33fc4e00} fill="white" />
          </svg>
        </button>
      </div>
    </div>
  );
}
