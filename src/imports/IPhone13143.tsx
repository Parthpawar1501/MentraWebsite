import svgPaths from "./svg-ys0r4kxewm";
import imgImage171 from "../assets/9bd13b993f4db0d7910a3e77d580330c8196cbda.png";

function Hero() {
  return (
    <div className="absolute bottom-0 h-[736px] left-1/2 translate-x-[-50%] w-[390px]" data-name="Hero">
      <div className="absolute inset-0 rounded-tl-[12.767px] rounded-tr-[12.767px]" data-name="image 171">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[12.767px] rounded-tr-[12.767px] size-full" src={imgImage171} />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[15.568px] relative shrink-0 w-[30.162px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.1624 15.5677">
        <g id="Logo">
          <rect fill="var(--fill-0, white)" height="6.91898" id="Rectangle 1" width="7.14592" y="8.64873" />
          <path d={svgPaths.p27af6b00} fill="var(--fill-0, white)" id="Rectangle 2" />
          <path d={svgPaths.p3353b000} fill="var(--fill-0, white)" id="Rectangle 3" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[5.838px] items-center relative shrink-0">
      <Logo />
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[19.46px] text-center text-nowrap text-white">Mentra</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[6.384px] items-center relative shrink-0 w-[339.401px]">
      <Frame2 />
      <p className="font-['Red_Hat_Display:Bold',sans-serif] leading-[38.302px] not-italic relative shrink-0 text-[34.047px] text-center text-nowrap text-white">Choose Your Reality</p>
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[24.031px] min-w-full not-italic relative shrink-0 text-[17.023px] text-center text-white w-[min-content]">The only AI glasses with an app store.</p>
    </div>
  );
}

function NavigationIcon() {
  return (
    <div className="relative shrink-0 size-[12.767px]" data-name="Navigation Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7674 12.7674">
        <g id="Navigation Icon">
          <g id="Vector"></g>
          <path d={svgPaths.p33fc4e00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function NavigationButton() {
  return (
    <div className="backdrop-blur-[2.66px] backdrop-filter bg-[rgba(255,255,255,0.4)] content-stretch flex items-center justify-center relative rounded-[17.023px] shrink-0 size-[21.279px]" data-name="Navigation Button">
      <NavigationIcon />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex items-end justify-center right-[15.72px] top-[735px]">
      <NavigationButton />
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[782px] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[242.049px] items-center justify-end px-[24.471px] py-[85.116px] relative size-full">
          <Hero />
          <Frame7 />
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function DivGrid() {
  return (
    <div className="h-[47px] shrink-0 sticky top-0 w-full" data-name="div.grid">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[71.167px] py-[10.64px] size-full" />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Red_Hat_Display:Bold',sans-serif] font-['Red_Hat_Display:SemiBold',sans-serif] leading-[15.25px] not-italic relative shrink-0 text-[#0a0a0a] text-[17.023px] text-nowrap">
        <span>{`AI glasses `}</span>|<span>{` Mentra Live`}</span>
      </p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Red_Hat_Display:Bold',sans-serif] leading-[20.777px] not-italic relative shrink-0 text-[#f5f5f5] text-[14.107px] text-nowrap">Buy Now</p>
    </div>
  );
}

function Buttons() {
  return (
    <div className="bg-[#00b869] content-stretch flex flex-col h-[37.399px] items-center justify-center px-[16.622px] py-[8.311px] relative rounded-[25.183px] shadow-[0px_1.039px_2.078px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Buttons">
      <Text />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[16.929px] items-center relative shrink-0">
      <Buttons />
    </div>
  );
}

function DivGrid1() {
  return (
    <div className="backdrop-blur-[26.599px] backdrop-filter bg-[rgba(255,255,255,0.85)] shrink-0 sticky top-0 w-full" data-name="div.grid">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[30px] py-[6.384px] relative w-full">
          <Frame4 />
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function DivGrid2() {
  return (
    <div className="pointer-events-auto sticky top-0 translate-x-[-50%] w-[390px]" data-name="div.grid">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <DivGrid />
        <DivGrid1 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-[0px_0px_0.532px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function NavigationIcon1() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Navigation Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Navigation Icon">
          <path d={svgPaths.pbba6780} id="Vector" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
        </g>
      </svg>
    </div>
  );
}

function Logo1() {
  return (
    <div className="h-[10.167px] relative shrink-0 w-[19.698px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.6979 10.1667">
        <g id="Logo">
          <rect fill="var(--fill-0, #00B869)" height="4.51852" id="Rectangle 1" width="4.66672" y="5.64815" />
          <path d={svgPaths.p2b3e5680} fill="var(--fill-0, #00B869)" id="Rectangle 2" />
          <path d={svgPaths.p1bd05180} fill="var(--fill-0, #00B869)" id="Rectangle 3" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[3.813px] items-center relative shrink-0">
      <Logo1 />
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0a0a0a] text-[12.708px] text-center text-nowrap">Mentra</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[20.333px] items-center justify-center relative shrink-0">
      <Frame3 />
    </div>
  );
}

function ShoppingBag() {
  return (
    <div className="absolute left-[calc(50%-0.53px)] size-[12.767px] top-[calc(50%-0.6px)] translate-x-[-50%] translate-y-[-50%]" data-name="shopping-bag">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7674 12.7674">
        <g clipPath="url(#clip0_33_4002)" id="shopping-bag">
          <path d={svgPaths.p386eeac0} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.957558" />
          <path d="M1.59593 3.42733H11.1715" id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.957558" />
          <path d={svgPaths.p1a8a5300} id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.957558" />
        </g>
        <defs>
          <clipPath id="clip0_33_4002">
            <rect fill="white" height="12.7674" width="12.7674" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NavigationIcon2() {
  return (
    <div className="relative shrink-0 size-[12.767px]" data-name="Navigation Icon">
      <ShoppingBag />
    </div>
  );
}

function NavigationButton1() {
  return (
    <div className="bg-[#009258] content-stretch flex items-center p-[4.256px] relative rounded-[17.023px] shrink-0" data-name="Navigation Button">
      <NavigationIcon2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <NavigationButton1 />
    </div>
  );
}

function NavBar() {
  return (
    <div className="backdrop-blur-[26.599px] backdrop-filter bg-[rgba(255,255,255,0.85)] h-[48px] shrink-0 sticky top-0 w-full" data-name="NavBar">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-between px-[30px] py-[12.767px] relative size-full">
          <NavigationIcon1 />
          <Frame1 />
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function DivGrid3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pointer-events-auto sticky top-0 translate-x-[-50%] w-[390px]" data-name="div.grid">
      <NavBar />
    </div>
  );
}

export default function IPhone() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="iPhone 13 & 14 - 3">
      <Frame />
      <div className="absolute bottom-0 h-[97px] left-1/2 pointer-events-none top-[737px]">
        <DivGrid2 />
      </div>
      <div className="absolute bottom-0 h-[834px] left-1/2 pointer-events-none top-0">
        <DivGrid3 />
      </div>
    </div>
  );
}