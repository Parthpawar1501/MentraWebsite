import imgEzgifFrame0351 from "../assets/83fb1abc62c74b98254b83e1c995957305d9c32a.png";

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center not-italic relative shrink-0 text-[#0a0a0a] text-center text-nowrap" data-name="Header">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[72px] relative shrink-0 text-[64px]">
        <span>{`Mentra `}</span>
        <span className="text-[#00b869]">Live</span>
      </p>
      <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[28.667px] relative shrink-0 text-[32px]">Capture video, livestream, ask AI, and take calls on your favorite glasses.</p>
    </div>
  );
}

function NavigationIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Navigation Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Navigation Icon">
          <g id="Vector"></g>
          <g id="Vector_2">
            <path d="M12 5V19Z" fill="var(--fill-0, #00B869)" />
            <path d="M12 5V19" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
          <path d="M5 12H19" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavigationButton() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[#00b869] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[30px]" data-name="Navigation Button">
      <NavigationIcon />
    </div>
  );
}

function Group() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.7)] content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip pl-[8px] pr-[16px] py-0 relative rounded-[32px] shrink-0">
      <NavigationButton />
      <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-center text-nowrap">Touchpad</p>
    </div>
  );
}

function TouchPad() {
  return (
    <div className="absolute content-stretch flex items-end justify-center left-[500px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] top-[105.85px]" data-name="Touch pad">
      <Group />
    </div>
  );
}

function NavigationIcon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Navigation Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Navigation Icon">
          <g id="Vector"></g>
          <g id="Vector_2">
            <path d="M12 5V19Z" fill="var(--fill-0, #00B869)" />
            <path d="M12 5V19" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
          <path d="M5 12H19" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavigationButton1() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[#00b869] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[30px]" data-name="Navigation Button">
      <NavigationIcon1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.7)] content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip pl-[8px] pr-[16px] py-0 relative rounded-[32px] shrink-0">
      <NavigationButton1 />
      <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-center text-nowrap">Flash LED</p>
    </div>
  );
}

function FlashLed() {
  return (
    <div className="absolute content-stretch flex items-end justify-center left-[1110px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] top-[218.85px]" data-name="Flash LED">
      <Group3 />
    </div>
  );
}

function NavigationIcon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Navigation Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Navigation Icon">
          <g id="Vector"></g>
          <g id="Vector_2">
            <path d="M12 5V19Z" fill="var(--fill-0, #00B869)" />
            <path d="M12 5V19" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
          <path d="M5 12H19" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavigationButton2() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[#00b869] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[30px]" data-name="Navigation Button">
      <NavigationIcon2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.7)] content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip pl-[8px] pr-[16px] py-0 relative rounded-[32px] shrink-0">
      <NavigationButton2 />
      <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-center text-nowrap">Enchanced speakers</p>
    </div>
  );
}

function Speakers() {
  return (
    <div className="absolute content-stretch flex items-end justify-center left-[432px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] top-[213.85px]" data-name="Speakers">
      <Group4 />
    </div>
  );
}

function NavigationIcon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Navigation Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Navigation Icon">
          <g id="Vector"></g>
          <g id="Vector_2">
            <path d="M12 5V19Z" fill="var(--fill-0, #00B869)" />
            <path d="M12 5V19" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
          <path d="M5 12H19" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavigationButton3() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[#00b869] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[30px]" data-name="Navigation Button">
      <NavigationIcon3 />
    </div>
  );
}

function Group5() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.7)] content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip pl-[8px] pr-[16px] py-0 relative rounded-[32px] shrink-0">
      <NavigationButton3 />
      <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-center text-nowrap">Enchanced speakers</p>
    </div>
  );
}

function Speakers1() {
  return (
    <div className="absolute content-stretch flex items-end justify-center left-[854px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] top-[358.85px]" data-name="Speakers">
      <Group5 />
    </div>
  );
}

function NavigationIcon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Navigation Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Navigation Icon">
          <g id="Vector"></g>
          <g id="Vector_2">
            <path d="M12 5V19Z" fill="var(--fill-0, #00B869)" />
            <path d="M12 5V19" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
          <path d="M5 12H19" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavigationButton4() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[#00b869] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[30px]" data-name="Navigation Button">
      <NavigationIcon4 />
    </div>
  );
}

function Group6() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.7)] content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip pl-[8px] pr-[16px] py-0 relative rounded-[32px] shrink-0">
      <NavigationButton4 />
      <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-center text-nowrap">Charging connector</p>
    </div>
  );
}

function ChargingConnector() {
  return (
    <div className="absolute content-stretch flex items-end justify-center left-[365px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] top-[318.85px]" data-name="Charging connector">
      <Group6 />
    </div>
  );
}

function NavigationIcon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Navigation Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Navigation Icon">
          <g id="Vector"></g>
          <g id="Vector_2">
            <path d="M12 5V19Z" fill="var(--fill-0, #00B869)" />
            <path d="M12 5V19" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
          <path d="M5 12H19" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavigationButton5() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[#00b869] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[30px]" data-name="Navigation Button">
      <NavigationIcon5 />
    </div>
  );
}

function Group7() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.7)] content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip pl-[8px] pr-[16px] py-0 relative rounded-[32px] shrink-0">
      <NavigationButton5 />
      <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-center text-nowrap">Action button</p>
    </div>
  );
}

function ActionButton() {
  return (
    <div className="absolute content-stretch flex items-end justify-center right-[816px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] top-0" data-name="Action Button">
      <Group7 />
    </div>
  );
}

function NavigationIcon6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Navigation Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Navigation Icon">
          <g id="Vector"></g>
          <g id="Vector_2">
            <path d="M12 5V19Z" fill="var(--fill-0, #00B869)" />
            <path d="M12 5V19" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
          <path d="M5 12H19" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavigationButton6() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[#00b869] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[30px]" data-name="Navigation Button">
      <NavigationIcon6 />
    </div>
  );
}

function Group8() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.7)] content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip pl-[8px] pr-[16px] py-0 relative rounded-[32px] shrink-0">
      <NavigationButton6 />
      <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-center text-nowrap">Ultra-wide 12MP camera</p>
    </div>
  );
}

function Camera() {
  return (
    <div className="absolute content-stretch flex items-end justify-center left-[711px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] top-[15px]" data-name="Camera">
      <Group8 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[310px] top-0">
      <div className="absolute h-[460px] left-[calc(50%-6px)] top-[4.15px] translate-x-[-50%] w-[820px]" data-name="ezgif-frame-035 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[178.44%] left-0 max-w-none top-[-53.16%] w-full" src={imgEzgifFrame0351} />
        </div>
      </div>
      <TouchPad />
      <FlashLed />
      <Speakers />
      <Speakers1 />
      <ChargingConnector />
      <ActionButton />
      <Camera />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[310px] top-0">
      <Group1 />
    </div>
  );
}

function NavigationIcon7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Navigation Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Navigation Icon">
          <g id="Vector"></g>
          <g id="Vector_2">
            <path d="M12 5V19Z" fill="var(--fill-0, #00B869)" />
            <path d="M12 5V19" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
          <path d="M5 12H19" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavigationButton7() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[#00b869] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[30px]" data-name="Navigation Button">
      <NavigationIcon7 />
    </div>
  );
}

function Group9() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.7)] content-stretch flex gap-[8px] h-[40px] items-center justify-center overflow-clip pl-[8px] pr-[16px] py-0 relative rounded-[32px] shrink-0">
      <NavigationButton7 />
      <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-center text-nowrap">Microphone</p>
    </div>
  );
}

function Microphone() {
  return (
    <div className="absolute content-stretch flex items-end justify-center left-[931px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] top-[140.85px]" data-name="Microphone">
      <Group9 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[464px] relative shrink-0 w-[1452px]">
      <Group2 />
      <Microphone />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center relative size-full">
      <Header />
      <Frame1 />
    </div>
  );
}