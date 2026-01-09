import { useNavigate } from "@remix-run/react";
import NavigationBar from "../components/NavigationBar";
import ScrollReveal from "../components/ScrollReveal";
import svgPaths from "./svg-4mnhiia8zl";
import imgImage197 from "/assets/prescription-image197.png";
import imgImage199 from "/assets/prescription-image199.png";
import imgImage198 from "/assets/prescription-image198.png";
import imgImage201 from "/assets/prescription-image201.png";
import imgFloraImagePoseAdjustment29E8471F1 from "/assets/8a115c324755836e9486c6f7e82fdd6305a3d005.png";
import imgCircle from "/assets/prescription-circle.png";
import imgEllipse2342 from "/assets/prescription-ellipse2342.png";
import imgGroup1597880443 from "/assets/prescription-group1597880443.png";
import imgSocial1 from "/assets/prescription-social1.png";
import imgSocial2 from "/assets/prescription-social2.png";
import imgSocial3 from "/assets/prescription-social3.png";
import imgSocial4 from "/assets/prescription-social4.png";
import imgSocial5 from "/assets/prescription-social5.png";

function StepTrail() {
  return (
    <div className="relative h-[50px] w-[32px]">
      <div className="absolute bg-[#a1aebe] h-[2px] left-0 right-0 top-1/2 translate-y-[-50%]" />
    </div>
  );
}

function StepSymbol({ text = "01" }: { text?: string }) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="absolute left-0 size-[32px] top-0" />
      <div className="absolute left-0 overflow-clip size-[32px] top-0">
        <div className="absolute left-0 size-[32px] top-0">
          <img className="block max-w-none size-full" alt="" src={imgCircle} />
        </div>
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-1/2 not-italic text-[#242e39] text-[13px] text-center top-[calc(50%-8.5px)] translate-x-[-50%]">
          {text}
        </p>
      </div>
    </div>
  );
}

function StepTextVertical() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <StepSymbol />
    </div>
  );
}

function TitleSection() {
  return (
    <div className="content-stretch flex flex-col h-[317px] items-center justify-center overflow-clip p-[10px] relative shrink-0 w-[1720px]" style={{ backgroundImage: "linear-gradient(150.32034107547227deg, rgba(222, 234, 254, 1) 22.5%, rgba(245, 245, 245, 0.3) 63.164%, rgba(0, 184, 105, 0.2) 100%)" }}>
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold leading-[57.333px] relative shrink-0 text-[57.333px] text-[#0a0a0a] text-center">
        Prescriptions
      </p>
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0" data-name="Header">
      <p className="font-['Red_Hat_Display:Regular',sans-serif] font-normal leading-[40px] relative shrink-0 text-[32px] text-[#0d0c0d] text-center tracking-[0.3px] w-[1102px] whitespace-pre-wrap">
        Mentra Live is compatible with your prescription lenses. Go to any of your preferred opticians, including LensCrafters, Sunglass Hut, Costco, Warby Parker, and more to have them swap your Mentra Live lenses with prescription.
      </p>
      <div className="content-stretch flex gap-[21.267px] items-center relative shrink-0">
        <div className="h-[39px] relative shrink-0 w-[243px]" data-name="image 197">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[350.02%] left-[0.06%] max-w-none top-[-125.64%] w-[99.87%]" src={imgImage197} />
          </div>
        </div>
        <div className="h-[68.668px] relative shrink-0 w-[191.631px]" data-name="image 199">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage199} />
        </div>
        <div className="h-[40px] relative shrink-0 w-[236px]" data-name="image 198">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[589.33%] left-[0.1%] max-w-none top-[-245%] w-[99.89%]" src={imgImage198} />
          </div>
        </div>
        <div className="h-[108px] relative shrink-0 w-[175px]" data-name="image 201">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage201} />
        </div>
      </div>
    </div>
  );
}

function StepsSection() {
  return (
    <div className="h-[758.99px] overflow-clip relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-[1452px]" data-name="Easiest Smart Glasses">
      <div className="absolute bg-white h-[758.992px] left-0 top-0 w-[1452px]">
        <div className="absolute bg-[#f5f5f5] h-[588px] left-px rounded-[24px] top-[calc(50%-0.5px)] translate-y-[-50%] w-[1449px]" />
        <div className="absolute content-stretch flex gap-[20px] items-start justify-center left-[81px] top-[204px]">
          <div className="content-stretch flex flex-col items-start justify-center pb-0 pt-[6px] px-0 relative shrink-0" data-name="Stepper Vertical">
            <StepTextVertical />
            <div className="flex h-[50px] items-center justify-center relative shrink-0 w-[32px]">
              <div className="flex-none rotate-[270deg]">
                <StepTrail />
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Step Text - Vertical">
              <StepSymbol text="01" />
            </div>
            <div className="flex h-[50px] items-center justify-center relative shrink-0 w-[32px]">
              <div className="flex-none rotate-[270deg]">
                <StepTrail />
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Step Text - Vertical">
              <StepSymbol text="02" />
            </div>
            <div className="flex h-[50px] items-center justify-center relative shrink-0 w-[32px]">
              <div className="flex-none rotate-[270deg]">
                <StepTrail />
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Step Text - Vertical">
              <StepSymbol text="03" />
            </div>
          </div>
          <div className="font-['Red_Hat_Display:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[32px] text-[#0d0c0d] tracking-[0.3px] w-[630px] whitespace-pre-wrap">
            <p className="mb-[40px]">Order your Mentra Live smart glasses</p>
            <p className="mb-[40px]">Bring them to your optician or lens provider</p>
            <p className="mb-[40px]">Have your lenses swapped to your prescription.</p>
          </div>
        </div>
        <div className="absolute left-[581px] size-[889px] top-[-216px]" data-name="FLORA-Image Pose Adjustment-29e8471f 1">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFloraImagePoseAdjustment29E8471F1} />
        </div>
      </div>
    </div>
  );
}

function CTASection() {
  const navigate = useNavigate();
  
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip pl-[80px] pr-0 py-[80px] relative rounded-[24px] shrink-0 w-[1452px]" style={{ backgroundImage: "linear-gradient(235.05791324405897deg, rgba(15, 51, 32, 1) 30.484%, rgba(51, 202, 128, 1) 84.384%), linear-gradient(-23.938442012740907deg, rgba(26, 68, 139, 1) 5.7717%, rgba(183, 88, 153, 1) 49.617%, rgba(219, 127, 128, 1) 77.02%)" }}>
      <div className="absolute h-[932px] left-[-746px] top-[-524.92px] w-[933px]">
        <div className="absolute inset-[-53.65%_-53.59%]">
          <img alt="" className="block max-w-none size-full" src={imgEllipse2342} />
        </div>
      </div>
      <div className="absolute h-[644px] left-[385px] top-[-450.92px] w-[720.827px]">
        <div className="absolute inset-[-77.64%_-69.36%]">
          <img alt="" className="block max-w-none size-full" src={imgGroup1597880443} />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[19.111px] items-center justify-center relative shrink-0 w-[687px]" data-name="Header">
        <p className="font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold leading-[57.333px] relative shrink-0 text-[57.333px] text-white text-center">
          Have questions?
        </p>
        <p className="font-['Red_Hat_Display:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[24px] text-white text-center text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[min-content] whitespace-pre-wrap">
          Our team is dedicated to providing you with the support you need, so don't hesitate to reach out to us anytime!
        </p>
        <button
          onClick={() => navigate('/buy')}
          className="bg-[#fcfcfc] content-stretch flex flex-col h-[53.021px] items-center justify-center px-[23.565px] py-[11.782px] relative rounded-[35.701px] shadow-[0px_1.473px_2.946px_0px_rgba(0,0,0,0.1)] shrink-0 cursor-pointer hover:bg-[#f5f5f5] transition-colors"
          data-name="Buttons"
        >
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
            <p className="font-['Red_Hat_Display:Medium',sans-serif] font-medium leading-[29.456px] relative shrink-0 text-[20.62px] text-[#0a0a0a]">
              Buy Now
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}

function PrescriptionFooter() {
  return (
    <div className="border-[#e5e5e5] border-b-0 border-l-0 border-r-0 border-solid border-t content-stretch flex items-start px-0 py-[48px] relative shrink-0 w-full" data-name="Footer">
      <div className="content-stretch flex flex-[1_0_0] items-start justify-between min-h-px min-w-px relative shrink-0">
        {/* Logo and Social Links */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[205.33px]" data-name="div.grid">
          <div className="content-stretch flex gap-[7.167px] items-center relative shrink-0">
            <div className="h-[19.111px] relative shrink-0 w-[37.028px]" data-name="Logo">
              <div className="absolute bg-[#00b869] inset-[55.56%_76.31%_0_0]" />
              <div className="absolute inset-[0_38.57%_0_18.73%]">
                <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 184, 105, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8108 19.1111">
                    <path d={svgPaths.p1f327500} fill="var(--fill-0, #00B869)" id="Rectangle 2" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[0_0_0_57.3%]">
                <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 184, 105, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8108 19.1111">
                    <path d={svgPaths.p1f327500} fill="var(--fill-0, #00B869)" id="Rectangle 2" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[23.889px] text-[#0a0a0a] text-center">
              Mentra
            </p>
          </div>
          <div className="content-stretch flex gap-[8px] items-start pl-0 pr-[25.33px] py-0 relative shrink-0 w-full" data-name="div.grid">
            <div className="bg-[#00b869] content-stretch flex items-start p-[6px] relative rounded-[9999px] shrink-0 w-[28px]" data-name="Link">
              <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0 w-[16px]" data-name="SVG">
                <div className="relative shrink-0 size-[16px]" data-name="Frame">
                  <img alt="" className="block max-w-none size-full" src={imgSocial1} />
                </div>
              </div>
            </div>
            <div className="bg-[#00b869] content-stretch flex items-start p-[6px] relative rounded-[9999px] shrink-0 w-[28px]" data-name="Link">
              <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0 w-[16px]" data-name="SVG">
                <div className="relative shrink-0 size-[16px]" data-name="Frame">
                  <img alt="" className="block max-w-none size-full" src={imgSocial2} />
                </div>
              </div>
            </div>
            <div className="bg-[#00b869] content-stretch flex items-start p-[6px] relative rounded-[9999px] shrink-0 w-[28px]" data-name="Link">
              <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0 w-[16px]" data-name="SVG">
                <div className="relative shrink-0 size-[16px]" data-name="Frame">
                  <img alt="" className="block max-w-none size-full" src={imgSocial3} />
                </div>
              </div>
            </div>
            <div className="bg-[#00b869] content-stretch flex items-start p-[6px] relative rounded-[9999px] shrink-0 w-[28px]" data-name="Link">
              <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0 w-[16px]" data-name="SVG">
                <div className="relative shrink-0 size-[16px]" data-name="Frame">
                  <img alt="" className="block max-w-none size-full" src={imgSocial4} />
                </div>
              </div>
            </div>
            <div className="bg-[#00b869] content-stretch flex items-start p-[6px] relative rounded-[9999px] shrink-0 w-[28px]" data-name="Link">
              <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0 w-[16px]" data-name="SVG">
                <div className="relative shrink-0 size-[16px]" data-name="Frame">
                  <img alt="" className="block max-w-none size-full" src={imgSocial5} />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-start pl-0 pr-[71.33px] py-0 relative shrink-0 w-full" data-name="p.text-xs">
            <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] font-normal justify-center leading-[16px] relative shrink-0 text-[#8f9199] text-[12px] whitespace-nowrap">
              <p className="mb-0">© Copyright 2025 Mentra Labs, Inc</p>
              <p>All rights reserved.</p>
            </div>
          </div>
        </div>
        
        {/* Mentra Store */}
        <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-[205.33px]" data-name="div.grid">
          <div className="content-stretch flex items-start pl-0 pr-[168.33px] py-0 relative shrink-0 w-[205.33px]" data-name="Link">
            <div className="flex flex-col font-['Red_Hat_Display:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3d3e43] text-[15px] whitespace-nowrap">
              <p className="leading-[24px]">Mentra Store</p>
            </div>
          </div>
          <div className="content-stretch flex items-start pb-px pl-0 pr-[129.33px] pt-0 relative shrink-0 w-[205.33px]" data-name="Link">
            <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#71737c] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">AI glasses</p>
            </div>
          </div>
          <div className="content-stretch flex items-start pb-px pl-0 pr-[89.33px] pt-0 relative shrink-0 w-[205.33px]" data-name="Link">
            <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#71737c] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">App download</p>
            </div>
          </div>
          <div className="content-stretch flex items-start pb-px pl-0 pr-[89.33px] pt-0 relative shrink-0 w-[205.33px]" data-name="Link">
            <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#71737c] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">OS</p>
            </div>
          </div>
          <div className="content-stretch flex items-start pb-px pl-0 pr-[105.33px] pt-0 relative shrink-0 w-[205.33px]" data-name="Link">
            <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#71737c] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">Contact us</p>
            </div>
          </div>
          <div className="content-stretch flex items-start pb-px pl-0 pr-[102.33px] pt-0 relative shrink-0 w-[205.33px]" data-name="Link">
            <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#71737c] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">FAQs</p>
            </div>
          </div>
          <div className="content-stretch flex items-start pb-px pl-0 pr-[113.33px] pt-0 relative shrink-0 w-[205.33px]" data-name="Link">
            <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#71737c] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">Blog</p>
            </div>
          </div>
        </div>
        
        {/* Customer care */}
        <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-[205.33px]" data-name="div.grid">
          <div className="content-stretch flex items-start pl-0 pr-[168.33px] py-0 relative shrink-0 w-[205.33px]" data-name="Link">
            <div className="flex flex-col font-['Red_Hat_Display:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3d3e43] text-[15px] whitespace-nowrap">
              <p className="leading-[24px]">Customer care</p>
            </div>
          </div>
          <div className="content-stretch flex items-start pb-px pl-0 pr-[129.33px] pt-0 relative shrink-0 w-[205.33px]" data-name="Link">
            <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#71737c] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">Return policy</p>
            </div>
          </div>
          <div className="content-stretch flex items-start pb-px pl-0 pr-[89.33px] pt-0 relative shrink-0 w-[205.33px]" data-name="Link">
            <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#71737c] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">Shipping policy</p>
            </div>
          </div>
          <div className="content-stretch flex items-start pb-px pl-0 pr-[105.33px] pt-0 relative shrink-0 w-[205.33px]" data-name="Link">
            <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#71737c] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">Help center</p>
            </div>
          </div>
          <div className="content-stretch flex items-start pb-px pl-0 pr-[102.33px] pt-0 relative shrink-0 w-[205.33px]" data-name="Link">
            <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#71737c] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">Privacy policy</p>
            </div>
          </div>
          <div className="content-stretch flex items-start pb-px pl-0 pr-[113.33px] pt-0 relative shrink-0 w-[205.33px]" data-name="Link">
            <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#71737c] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">Terns of service</p>
            </div>
          </div>
        </div>
        
        {/* Community */}
        <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-[205.33px]" data-name="div.grid">
          <div className="content-stretch flex items-start pl-0 pr-[168.33px] py-0 relative shrink-0 w-[205.33px]" data-name="Link">
            <div className="flex flex-col font-['Red_Hat_Display:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3d3e43] text-[15px] whitespace-nowrap">
              <p className="leading-[24px]">Community</p>
            </div>
          </div>
          <div className="content-stretch flex items-start pb-px pl-0 pr-[129.33px] pt-0 relative shrink-0 w-[205.33px]" data-name="Link">
            <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#71737c] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">Creators</p>
            </div>
          </div>
          <div className="content-stretch flex items-start pb-px pl-0 pr-[89.33px] pt-0 relative shrink-0 w-[205.33px]" data-name="Link">
            <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#71737c] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">Developers</p>
            </div>
          </div>
          <div className="content-stretch flex items-start pb-px pl-0 pr-[105.33px] pt-0 relative shrink-0 w-[205.33px]" data-name="Link">
            <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#71737c] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">Businesses</p>
            </div>
          </div>
          <div className="content-stretch flex items-start pb-px pl-0 pr-[102.33px] pt-0 relative shrink-0 w-[205.33px]" data-name="Link">
            <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#71737c] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">Download SDKs</p>
            </div>
          </div>
        </div>
        
        {/* Company */}
        <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-[205.34px]" data-name="div.grid">
          <div className="content-stretch flex items-start pl-0 pr-[137.34px] py-0 relative shrink-0 w-[205.34px]" data-name="p.appearance-none">
            <div className="flex flex-col font-['Red_Hat_Display:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3d3e43] text-[16px] whitespace-nowrap">
              <p className="leading-[24px]">Company</p>
            </div>
          </div>
          <div className="content-stretch flex items-start pb-px pl-0 pr-[174.34px] pt-0 relative shrink-0 w-[205.34px]" data-name="Link">
            <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#71737c] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">About Mentra</p>
            </div>
          </div>
          <div className="content-stretch flex items-start pb-px pl-0 pr-[159.34px] pt-0 relative shrink-0 w-[205.34px]" data-name="Link">
            <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#71737c] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">Careers</p>
            </div>
          </div>
          <div className="content-stretch flex items-start pb-px pl-0 pr-[165.34px] pt-0 relative shrink-0 w-[205.34px]" data-name="Link">
            <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#71737c] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">Newsroom</p>
            </div>
          </div>
          <div className="content-stretch flex items-start pb-px pl-0 pr-[154.34px] pt-0 relative shrink-0 w-[205.34px]" data-name="Link">
            <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#71737c] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">For investors</p>
            </div>
          </div>
          <div className="content-stretch flex items-start pb-px pl-0 pr-[103.34px] pt-0 relative shrink-0 w-[205.34px]" data-name="Link">
            <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#71737c] text-[14px] whitespace-nowrap">
              <p className="leading-[20px]">Contact Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Prescriptions() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="Prescriptions">
      <NavigationBar />
      <div className="content-stretch flex flex-col gap-[80px] items-center justify-center overflow-clip px-[133.778px] py-[90px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[80px] items-center pb-[80px] pt-0 px-0 relative shrink-0 w-[1452px]">
          <ScrollReveal direction="fade" delay={0} duration={0.8}>
            <TitleSection />
          </ScrollReveal>
          <ScrollReveal direction="up" delay={50} distance={40} duration={0.8}>
            <HeaderSection />
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100} distance={40} duration={1}>
            <StepsSection />
          </ScrollReveal>
          <ScrollReveal direction="up" delay={150} distance={40} duration={0.8}>
            <CTASection />
          </ScrollReveal>
        </div>
        <ScrollReveal direction="up" delay={200} distance={40} duration={0.8}>
          <PrescriptionFooter />
        </ScrollReveal>
      </div>
    </div>
  );
}
