import svgPaths from "./svg-716j1jt04l";
import imgFrame15978804111 from "/assets/0d7a9e419e1ca84eb84a7ee2129d581788c6164a.png";

function Frame3() {
  return (
    <div className="absolute h-[573px] left-px top-[130.13px] w-[1449px]">
      <div className="absolute inset-[0_-1.38%_-6.98%_-1.38%]" style={{ "--fill-0": "rgba(245, 245, 245, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1489 613">
          <g filter="url(#filter0_dd_13_8022)" id="Frame 1984078264">
            <g clipPath="url(#clip0_13_8022)">
              <path d={svgPaths.p3d3cb680} fill="var(--fill-0, #F5F5F5)" />
              <g filter="url(#filter1_f_13_8022)" id="Ellipse 2342">
                <circle cx="1515.5" cy="559.5" fill="var(--fill-0, #40CF8F)" r="269.5" />
              </g>
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="613" id="filter0_dd_13_8022" width="1489" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="erode" radius="6" result="effect1_dropShadow_13_8022" />
              <feOffset dy="8" />
              <feGaussianBlur stdDeviation="5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_13_8022" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="erode" radius="5" result="effect2_dropShadow_13_8022" />
              <feOffset dy="20" />
              <feGaussianBlur stdDeviation="12.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="effect1_dropShadow_13_8022" mode="normal" result="effect2_dropShadow_13_8022" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_13_8022" mode="normal" result="shape" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1539" id="filter1_f_13_8022" width="1539" x="746" y="-210">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_13_8022" stdDeviation="250" />
            </filter>
            <clipPath id="clip0_13_8022">
              <path d={svgPaths.p3d3cb680} fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Manrope:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-black w-[553px]">{`It’s the industry-leading operating system built for  Even Realities, Vuzix and more.`}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[83px] top-[219.13px]">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0a0a0a] text-[56px] w-[711px]">The Only Smart Glasses with an App Store</p>
      <p className="font-['Manrope:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[28px] text-black w-[min-content]">{`MentraOS gives you access to captions, AI, and other Mini Apps on your smart glasses. `}</p>
      <Frame />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="relative size-full">
      <Frame3 />
      <Frame1 />
      <div className="absolute h-[705px] left-[890px] top-[-0.12px] w-[433px]" data-name="Frame 1597880411 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame15978804111} />
      </div>
    </div>
  );
}