import imgBb5A1Faf9B1341379FfeB9Da3B25Cd6F1 from "/assets/588337c215139582e6c05119cb943a3d72e06856.png";

function Text() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Red_Hat_Display:Medium',sans-serif] leading-[29.456px] not-italic relative shrink-0 text-[#f5f5f5] text-[20.619px] text-nowrap">Learn more</p>
    </div>
  );
}

function Buttons() {
  return (
    <div className="bg-[#009258] content-stretch flex flex-col h-[53.021px] items-center justify-center px-[23.565px] py-[11.782px] relative rounded-[35.701px] shadow-[0px_1.473px_2.946px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Buttons">
      <Text />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[19.111px] items-start justify-center relative shrink-0 w-[687px]" data-name="Header">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[57.333px] not-italic relative shrink-0 text-[57.333px] text-center text-nowrap text-white">Prescription Ready</p>
      <div className="font-['Red_Hat_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-white w-[731px]">
        <p className="mb-0">Wear them all day. Add your own lenses at any optical shop.</p>
        <p>Don’t worry, we need them to see, too.</p>
      </div>
      <Buttons />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip pl-[80px] pr-0 py-0 relative rounded-[24px] size-full" style={{ backgroundImage: "linear-gradient(-42.8535deg, rgb(47, 47, 47) 5.7717%, rgb(255, 255, 255) 77.02%)" }}>
      <div className="absolute h-[932px] left-[-467px] top-[-310.95px] w-[933px]">
        <div className="absolute inset-[-53.65%_-53.59%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1933 1932">
            <g filter="url(#filter0_f_1_5107)" id="Ellipse 2342">
              <ellipse cx="966.5" cy="966" fill="var(--fill-0, #4B4949)" rx="466.5" ry="466" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1932" id="filter0_f_1_5107" width="1933" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_5107" stdDeviation="250" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Header />
      <div className="relative shrink-0 size-[780px]" data-name="bb5a1faf-9b13-4137-9ffe-b9da3b25cd6f 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBb5A1Faf9B1341379FfeB9Da3B25Cd6F1} />
      </div>
    </div>
  );
}