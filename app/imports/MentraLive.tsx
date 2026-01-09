import { useState, useEffect } from "react";
import svgPaths from "./svg-mxqnixecfi";
import NavigationBar from "../components/NavigationBar";
import { AccordionSection } from "../components/ProductAccordion";
import { ProductImageGallery } from "../components/ProductImageGallery";
import { StickyPurchaseSection } from "../components/StickyPurchaseSection";
import ScrollReveal from "../components/ScrollReveal";
import imgEzgifFrame1041 from "/assets/b9f2d5b23bcac5129eeedec01451f80a93d424f9.png";
import imgEzgifFrame0021 from "/assets/05bb44a8bc60f1b1e394508505cc2adbe09dfe93.png";
import imgImage137 from "/assets/fc649cd21fa2fac60c9eba2a97d1cc1b3148b755.png";
import imgImage136 from "/assets/8f0cdf4c2da39ff534ce0450cd8e54bbbc05b84e.png";
import imgImage36 from "/assets/2cc255a03f12e9620932efdedf23b34e8544f98f.png";
import imgScreenshot20251205At24128Pm1 from "/assets/af81160268ba6fe50a749109b97cfd9476c5cc3a.png";

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start px-0 py-[80px] relative shrink-0">
      <div className="h-[250px] relative shrink-0 w-[940px]" data-name="ezgif-frame-104 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[375.73%] left-0 max-w-none top-[-140.51%] w-full" src={imgEzgifFrame1041} />
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[100px]">
      <div aria-hidden="true" className="absolute border border-[#00b869] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="h-[27px] relative shrink-0 w-[81px]" data-name="ezgif-frame-104 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[375.73%] left-[-13.22%] max-w-none top-[-140.51%] w-[126.65%]" src={imgEzgifFrame1041} />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[100px]">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="h-[37px] relative shrink-0 w-[81px]" data-name="ezgif-frame-002 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[345.32%] left-[-29.94%] max-w-none top-[-119.42%] w-[156.48%]" src={imgEzgifFrame0021} />
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="List">
      <Frame18 />
      <Frame17 />
    </div>
  );
}

function ProductImages() {
  return (
    <ProductImageGallery
      mainImage={imgEzgifFrame1041}
      thumbnails={[imgEzgifFrame1041, imgEzgifFrame0021]}
    />
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex font-['Red_Hat_Display:Medium',sans-serif] gap-[40px] items-start leading-[0] not-italic relative shrink-0 text-[#686069] text-[16px] tracking-[-0.2px] w-full">
      <div className="basis-0 flex flex-col grow justify-center leading-[1.5] min-h-px min-w-px relative shrink-0">
        <p className="mb-0">{`Discover the innovative Mentra Live Camera Glasses, designed to seamlessly integrate technology into your everyday life. These stylish glasses feature a built-in camera that allows you to capture moments hands-free, making it perfect for adventurers and content creators alike. `}</p>
        <p className="mb-0 text-[16px]">&nbsp;</p>
        <p>With high-definition video capabilities and a sleek design, the Mentra Live Camera Glasses are not just a gadget, but a lifestyle accessory that enhances your experiences.</p>
      </div>
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0">
        <p className="leading-[1.5]">Discover the innovative Mentra Live Camera Glasses, designed to seamlessly integrate technology into your everyday life. These stylish glasses feature a built-in camera that allows you to capture moments hands-free, making it perfect for adventurers and content creators alike. With high-definition video capabilities and a sleek design, the Mentra Live Camera Glasses are not just a gadget, but a lifestyle accessory that enhances your experiences.</p>
      </div>
    </div>
  );
}

function NavigationIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Navigation Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Navigation Icon">
          <g id="Vector"></g>
          <path d="M12 5V19" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M5 12H19" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavigationButton() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center p-[8px] relative rounded-[32px] shrink-0" data-name="Navigation Button">
      <NavigationIcon />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#0d0c0d] text-[28px] text-nowrap tracking-[0.3px]">Features</p>
      <NavigationButton />
    </div>
  );
}

function NavigationIcon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Navigation Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Navigation Icon">
          <g id="Vector"></g>
          <path d="M12 5V19" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M5 12H19" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavigationButton1() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center p-[8px] relative rounded-[32px] shrink-0" data-name="Navigation Button">
      <NavigationIcon1 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#0d0c0d] text-[28px] text-nowrap tracking-[0.3px]">Specifications</p>
      <NavigationButton1 />
    </div>
  );
}

function NavigationIcon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Navigation Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Navigation Icon">
          <g id="Vector"></g>
          <path d="M12 5V19" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M5 12H19" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavigationButton2() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center p-[8px] relative rounded-[32px] shrink-0" data-name="Navigation Button">
      <NavigationIcon2 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#0d0c0d] text-[28px] text-nowrap tracking-[0.3px]">Prescription</p>
      <NavigationButton2 />
    </div>
  );
}

function NavigationIcon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Navigation Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Navigation Icon">
          <g id="Vector"></g>
          <path d="M12 5V19" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M5 12H19" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavigationButton3() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center p-[8px] relative rounded-[32px] shrink-0" data-name="Navigation Button">
      <NavigationIcon3 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#0d0c0d] text-[28px] text-nowrap tracking-[0.3px]">Frequently asked questions</p>
      <NavigationButton3 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#0d0c0d] text-[28px] text-nowrap tracking-[0.3px]">You may also like</p>
    </div>
  );
}

function VuesaxLinearShoppingCart() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/shopping-cart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="shopping-cart">
          <path d={svgPaths.pdd64680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d={svgPaths.p2b957a00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d={svgPaths.pb45e600} fill="var(--fill-0, #00B869)" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d="M9 8H21" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <g id="Vector_5" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function ShoppingCart() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="shopping-cart">
      <VuesaxLinearShoppingCart />
    </div>
  );
}

function Button({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#0a0a0a] hover:bg-[#00b869] relative rounded-[39px] shrink-0 w-full cursor-pointer transition-all duration-300 active:scale-95" 
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[32px] py-[16px] relative w-full">
          <ShoppingCart />
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">
            <p className="leading-[1.7]">Add to Cart</p>
          </div>
        </div>
      </div>
    </button>
  );
}

function Frame27() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-4 md:px-6 lg:px-[40px] py-0 relative w-full">
        <p className="font-['Red_Hat_Display:Medium',sans-serif] leading-[45.173px] not-italic relative shrink-0 text-[#0a0a0a] text-[28px] text-nowrap">Mentra Live Case</p>
        <p className="font-['Red_Hat_Display:Medium',sans-serif] leading-[45.173px] not-italic relative shrink-0 text-[#0a0a0a] text-[28px] text-nowrap text-right">{`$99 `}</p>
        <Button />
      </div>
    </div>
  );
}

function Frame27Alt() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-4 md:px-6 lg:px-[40px] py-0 relative w-full">
        <p className="font-['Red_Hat_Display:Medium',sans-serif] leading-[45.173px] not-italic relative shrink-0 text-[#0a0a0a] text-[28px] text-nowrap">Charging Cable</p>
        <p className="font-['Red_Hat_Display:Medium',sans-serif] leading-[45.173px] not-italic relative shrink-0 text-[#0a0a0a] text-[28px] text-nowrap text-right">{`$49 `}</p>
        <Button1 />
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="basis-0 bg-[#f5f5f5] content-stretch flex flex-col gap-[40px] grow items-center justify-center min-h-px min-w-px overflow-clip pb-[40px] pt-0 px-0 relative rounded-[32px] shrink-0">
      <div className="h-[303px] relative shrink-0 w-[304px]" data-name="image 137">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage137} />
      </div>
      <Frame27 />
    </div>
  );
}

function VuesaxLinearShoppingCart1() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/shopping-cart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="shopping-cart">
          <path d={svgPaths.pdd64680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d={svgPaths.p2b957a00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d={svgPaths.pb45e600} fill="var(--fill-0, #00B869)" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d="M9 8H21" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <g id="Vector_5" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function ShoppingCart1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="shopping-cart">
      <VuesaxLinearShoppingCart1 />
    </div>
  );
}

function Button1({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#0a0a0a] hover:bg-[#00b869] relative rounded-[39px] shrink-0 w-full cursor-pointer transition-all duration-300 active:scale-95" 
      data-name="Button"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[32px] py-[16px] relative w-full">
          <ShoppingCart1 />
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">
            <p className="leading-[1.7]">Add to Cart</p>
          </div>
        </div>
      </div>
    </button>
  );
}

function Frame28() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-4 md:px-6 lg:px-[40px] py-0 relative w-full">
        <p className="font-['Red_Hat_Display:Medium',sans-serif] leading-[45.173px] not-italic relative shrink-0 text-[#0a0a0a] text-[28px] text-nowrap">Charging Cable</p>
        <p className="font-['Red_Hat_Display:Medium',sans-serif] leading-[45.173px] not-italic relative shrink-0 text-[#0a0a0a] text-[28px] text-nowrap text-right">{`$49 `}</p>
        <Button1 />
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="basis-0 bg-[#f5f5f5] content-stretch flex flex-col gap-[40px] grow items-center justify-center min-h-px min-w-px overflow-clip pb-[40px] pt-0 px-0 relative rounded-[32px] shrink-0">
      <div className="h-[303px] relative shrink-0 w-[304px]" data-name="image 136">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage136} />
      </div>
      <Frame27Alt />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function FeatureContent() {
  return (
    <>
      <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
        {[...Array(2).keys()].map((_, i) => (
          <div key={i} className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px relative shrink-0">
            <div className="aspect-[468/260] relative rounded-[32px] shrink-0 w-full">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32px]">
                <img alt="" className="absolute h-[101.15%] left-[-0.21%] max-w-none top-0 w-[100.21%]" src={imgScreenshot20251205At24128Pm1} />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full">
              <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[40px] relative shrink-0 text-[#0d0c0d] text-[28px] tracking-[0.3px] w-full">Mentra AI</p>
              <div className="flex flex-col font-['Red_Hat_Display:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#686069] text-[16px] tracking-[-0.2px] w-full">
                <p className="leading-[1.5]">With high-definition video capabilities and a sleek design, the Mentra Live Camera Glasses are not just a gadget, but a lifestyle accessory that enhances your experiences.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="content-stretch flex items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[458.221px]">
          <div className="aspect-[468/260] relative rounded-[32px] shrink-0 w-full">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32px]">
              <img alt="" className="absolute h-[101.15%] left-[-0.21%] max-w-none top-0 w-[100.21%]" src={imgScreenshot20251205At24128Pm1} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function FAQContent() {
  return (
    <>
      <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
        {/* Product & Purchase */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[40px] relative shrink-0 text-[#0d0c0d] text-[24px] tracking-[0.3px] w-full">Product & Purchase</p>
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[32px] relative shrink-0 text-[#0d0c0d] text-[20px] tracking-[0.3px]">How much does it cost?</p>
              <div className="flex flex-col font-['Red_Hat_Display:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#686069] text-[16px] tracking-[-0.2px] w-full">
                <p className="leading-[1.5]">Mentra Live costs $299, which includes glasses, charging case, and charging cable. Due to demand, we only permit 3 orders per customer at this time. Business bulk orders may be considered by contacting us.</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[32px] relative shrink-0 text-[#0d0c0d] text-[20px] tracking-[0.3px]">Which countries do you ship to?</p>
              <div className="flex flex-col font-['Red_Hat_Display:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#686069] text-[16px] tracking-[-0.2px] w-full">
                <p className="leading-[1.5]">We are currently only shipping within the United States, but more countries will gain access throughout 2026.</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[32px] relative shrink-0 text-[#0d0c0d] text-[20px] tracking-[0.3px]">When will my order ship?</p>
              <div className="flex flex-col font-['Red_Hat_Display:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#686069] text-[16px] tracking-[-0.2px] w-full">
                <p className="leading-[1.5]">Batch 1 ships February 13th, 2026. Batch 2 will ship in March.</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[32px] relative shrink-0 text-[#0d0c0d] text-[20px] tracking-[0.3px]">What is Founder's 1000 Club?</p>
              <div className="flex flex-col font-['Red_Hat_Display:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#686069] text-[16px] tracking-[-0.2px] w-full">
                <p className="leading-[1.5]">Batch 1 is sold out when we reach 1,000 purchases. Being a Batch 1 owner of Mentra Live automatically gets you access to the Founder's 1000 Club. As a member, you get early access to upcoming Mentra MiniApps, experimental features, and private community drops. You'll also be able to influence the future of the Mentra ecosystem, joining a special private Discord group with the founders.</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[32px] relative shrink-0 text-[#0d0c0d] text-[20px] tracking-[0.3px]">Can I use prescription lenses?</p>
              <div className="flex flex-col font-['Red_Hat_Display:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#686069] text-[16px] tracking-[-0.2px] w-full">
                <p className="leading-[1.5]">Yes. You can swap your Mentra Live lenses through any optician.</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[32px] relative shrink-0 text-[#0d0c0d] text-[20px] tracking-[0.3px]">Is it waterproof?</p>
              <div className="flex flex-col font-['Red_Hat_Display:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#686069] text-[16px] tracking-[-0.2px] w-full">
                <p className="leading-[1.5]">You cannot swim with Mentra Lives, but they are fine for rain, sweat, and everyday use.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features & Capabilities */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[40px] relative shrink-0 text-[#0d0c0d] text-[24px] tracking-[0.3px] w-full">Features & Capabilities</p>
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[32px] relative shrink-0 text-[#0d0c0d] text-[20px] tracking-[0.3px]">What can it do?</p>
              <div className="flex flex-col font-['Red_Hat_Display:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#686069] text-[16px] tracking-[-0.2px] w-full">
                <p className="leading-[1.5]">Mentra Live's app store allows your smart glasses experience to constantly evolve and change. Mentra Live gives your AI eyes to see the world. Ask AI about what you're seeing, or interact with it in real time to enhance your experience. You can also livestream your view to Twitch, X, YouTube, TikTok, OnlyFans, and other streaming platforms, and capture photos, listen to music, take calls, take notes, and much more.</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[32px] relative shrink-0 text-[#0d0c0d] text-[20px] tracking-[0.3px]">What makes it unique?</p>
              <div className="flex flex-col font-['Red_Hat_Display:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#686069] text-[16px] tracking-[-0.2px] w-full">
                <p className="leading-[1.5]">Mentra Live is the only smart glasses with an app store, which means your experience can constantly evolve. With other glasses, your experience is locked into a close ecosystem. Your data and information is used to serve you ads and gain information about your life. (i.e., Meta!) With Mentra Live, it's your data, your apps, your glasses. Lightweight, they're built for everyday wear to be a seamless part of your life.</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[32px] relative shrink-0 text-[#0d0c0d] text-[20px] tracking-[0.3px]">Does it have a display?</p>
              <div className="flex flex-col font-['Red_Hat_Display:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#686069] text-[16px] tracking-[-0.2px] w-full">
                <p className="leading-[1.5]">No. That's on purpose – lighter, longer-lasting, and more comfortable. Displays add weight, drain the battery, and slow you down. Mentra Lives are some of the lightest smart glasses on the market (not to mention amongst the most affordable). However, Mentra Display will be coming in Fall 2026.</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[32px] relative shrink-0 text-[#0d0c0d] text-[20px] tracking-[0.3px]">What is a MiniApp?</p>
              <div className="flex flex-col font-['Red_Hat_Display:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#686069] text-[16px] tracking-[-0.2px] w-full">
                <p className="leading-[1.5]">MiniApps are the apps you can find in our Mentra app on iOS (Apple App Store) and Android (Google Play Store). When you use Even Realities, Vuzix, or Mentra Live, through the app, you can find numerous apps that enhance your experience. MiniApps like: Merge - proactive AI that answers your questions before you ask, Live Captions - real-time subtitles for the deaf and hard-of-hearing, Live Translation - understand every language, Notes - AI note taker, and more!</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[32px] relative shrink-0 text-[#0d0c0d] text-[20px] tracking-[0.3px]">How long does the battery last?</p>
              <div className="flex flex-col font-['Red_Hat_Display:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#686069] text-[16px] tracking-[-0.2px] w-full">
                <p className="leading-[1.5]">We've optimized Mentra Live for long battery life. All-day wear: 10+ hours of mixed use. Music: 5+ hours. Live streaming: 40+ mins. Video recording: 1+ hours.</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[32px] relative shrink-0 text-[#0d0c0d] text-[20px] tracking-[0.3px]">Can I use it without internet?</p>
              <div className="flex flex-col font-['Red_Hat_Display:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#686069] text-[16px] tracking-[-0.2px] w-full">
                <p className="leading-[1.5]">Yes. Connected through your phone's cell service, you can take calls, listen to music, and run numerous apps from the Mentra MiniApp Store.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical & Support */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[40px] relative shrink-0 text-[#0d0c0d] text-[24px] tracking-[0.3px] w-full">Technical & Support</p>
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[32px] relative shrink-0 text-[#0d0c0d] text-[20px] tracking-[0.3px]">What is MentraOS?</p>
              <div className="flex flex-col font-['Red_Hat_Display:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#686069] text-[16px] tracking-[-0.2px] w-full">
                <p className="leading-[1.5]">MentraOS is an open-source operating system (OS). It's the industry-leading OS, built for Even Realities, Vuzix, Mentra Live, and more. Open source means a product's design or source code is publicly accessible, allowing anyone to view, modify, and distribute it, fostering collaborative development and transparency.</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[32px] relative shrink-0 text-[#0d0c0d] text-[20px] tracking-[0.3px]">Does Mentra Live store my data?</p>
              <div className="flex flex-col font-['Red_Hat_Display:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#686069] text-[16px] tracking-[-0.2px] w-full">
                <p className="leading-[1.5]">MentraOS only stores your email address and the apps you have installed. Users can view all their data and delete all their data directly in the Mentra app.</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[32px] relative shrink-0 text-[#0d0c0d] text-[20px] tracking-[0.3px]">Does it work with iOS and Android?</p>
              <div className="flex flex-col font-['Red_Hat_Display:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#686069] text-[16px] tracking-[-0.2px] w-full">
                <p className="leading-[1.5]">Yes, through the Mentra app.</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[32px] relative shrink-0 text-[#0d0c0d] text-[20px] tracking-[0.3px]">Can developers build apps?</p>
              <div className="flex flex-col font-['Red_Hat_Display:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#686069] text-[16px] tracking-[-0.2px] w-full">
                <p className="leading-[1.5]">Absolutely. MentraOS and SDK are fully open source. Build apps for the next great interface in our lives.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SpecificationsContent() {
  return (
    <>
      <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
        <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
          <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[40px] relative shrink-0 text-[#0d0c0d] text-[24px] tracking-[0.3px] w-full">In the box</p>
          <div className="flex flex-col font-['Red_Hat_Display:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#686069] text-[16px] tracking-[-0.2px] w-full">
            <p className="leading-[1.5]">
              Glasses<br />
              Charging case<br />
              USB-C Cable<br />
              Microfiber cloth
            </p>
          </div>
        </div>
        <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
          <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full">
            <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[40px] relative shrink-0 text-[#0d0c0d] text-[24px] tracking-[0.3px] w-full">Frame description</p>
            <div className="flex flex-col font-['Red_Hat_Display:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#686069] text-[16px] tracking-[-0.2px] w-full">
              <p className="leading-[1.5]">
                Glasses<br />
                Charging case<br />
                USB-C Cable<br />
                Microfiber cloth
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
        <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
          <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[40px] relative shrink-0 text-[#0d0c0d] text-[24px] tracking-[0.3px] w-full">Lens information</p>
          <div className="flex flex-col font-['Red_Hat_Display:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#686069] text-[16px] tracking-[-0.2px] w-full">
            <p className="leading-[1.5]">
              Glasses<br />
              Charging case<br />
              USB-C Cable<br />
              Microfiber cloth
            </p>
          </div>
        </div>
        <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
          <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[40px] relative shrink-0 text-[#0d0c0d] text-[24px] tracking-[0.3px] w-full">Product dimensions</p>
          <div className="flex flex-col font-['Red_Hat_Display:Medium',sans-serif] justify-center leading-[1.5] relative shrink-0 text-[#686069] text-[16px] tracking-[-0.2px] w-full">
            <p className="mb-0">Hinge to hinge (mm) 133</p>
            <p className="mb-0">Lens height (mm) 42</p>
            <p className="mb-0">Lens width (mm) 52</p>
            <p className="mb-0">Bridge width (mm) 20</p>
            <p>Temple length (mm) 150</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
        <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
          <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full">
            <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[40px] relative shrink-0 text-[#0d0c0d] text-[24px] tracking-[0.3px] w-full">Weight</p>
            <div className="flex flex-col font-['Red_Hat_Display:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#686069] text-[16px] tracking-[-0.2px] w-full">
              <p className="leading-[1.5]">
                Glasses<br />
                Charging case<br />
                USB-C Cable<br />
                Microfiber cloth
              </p>
            </div>
          </div>
        </div>
        <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
          <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[40px] relative shrink-0 text-[#0d0c0d] text-[24px] tracking-[0.3px] w-full">Camera</p>
          <div className="flex flex-col font-['Red_Hat_Display:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#686069] text-[16px] tracking-[-0.2px] w-full">
            <p className="leading-[1.5]">
              13MP camera<br />
              1080p HD video recording<br />
              Wide-angle lens
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
        <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
          <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[40px] relative shrink-0 text-[#0d0c0d] text-[24px] text-nowrap tracking-[0.3px]">Battery</p>
          <div className="flex flex-col font-['Red_Hat_Display:Medium',sans-serif] justify-center leading-[0] min-w-full relative shrink-0 text-[#686069] text-[16px] tracking-[-0.2px] w-[min-content]">
            <p className="leading-[1.5]">
              Up to 4 hours continuous use<br />
              Additional 24 hours with case
            </p>
          </div>
        </div>
        <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
          <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[40px] relative shrink-0 text-[#0d0c0d] text-[24px] text-nowrap tracking-[0.3px]">Memory</p>
          <div className="flex flex-col font-['Red_Hat_Display:Medium',sans-serif] justify-center leading-[0] min-w-full relative shrink-0 text-[#686069] text-[16px] tracking-[-0.2px] w-[min-content]">
            <p className="leading-[1.5]">
              32GB internal storage
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
        <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
          <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[40px] relative shrink-0 text-[#0d0c0d] text-[24px] text-nowrap tracking-[0.3px]">Connectivity</p>
          <div className="flex flex-col font-['Red_Hat_Display:Medium',sans-serif] justify-center leading-[0] min-w-full relative shrink-0 text-[#686069] text-[16px] tracking-[-0.2px] w-[min-content]">
            <p className="leading-[1.5]">
              Bluetooth 5.0<br />
              Wi-Fi enabled
            </p>
          </div>
        </div>
        <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
          <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full">
            <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[40px] relative shrink-0 text-[#0d0c0d] text-[24px] text-nowrap tracking-[0.3px]">Warranty</p>
            <div className="flex flex-col font-['Red_Hat_Display:Medium',sans-serif] justify-center leading-[0] min-w-full relative shrink-0 text-[#686069] text-[16px] tracking-[-0.2px] w-[min-content]">
              <p className="leading-[1.5]">
                1 year limited warranty
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Frame7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start pb-0 px-4 md:px-6 lg:pl-[133.778px] lg:pr-[133.778px] pt-[80px] relative w-full">
          <ScrollReveal direction="fade" duration={0.8}>
            <ProductImages />
          </ScrollReveal>
          
          <ScrollReveal delay={100} direction="up" distance={40}>
            <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#0d0c0d] text-[28px] text-nowrap tracking-[0.3px]">About Mentra Live Camera Glasses</p>
          </ScrollReveal>
          
          <ScrollReveal delay={150} direction="up" distance={40}>
            <Frame30 />
          </ScrollReveal>
          
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(229, 229, 229, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 948.442 1">
                <line id="Line 13" stroke="var(--stroke-0, #E5E5E5)" x2="948.442" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          
          <ScrollReveal delay={200} direction="up" distance={40}>
            <AccordionSection title="Features" defaultOpen={false}>
              <FeatureContent />
            </AccordionSection>
          </ScrollReveal>
          
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(229, 229, 229, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 948.442 1">
                <line id="Line 13" stroke="var(--stroke-0, #E5E5E5)" x2="948.442" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          
          <ScrollReveal delay={250} direction="up" distance={40}>
            <AccordionSection title="Specifications" defaultOpen={false}>
              <SpecificationsContent />
            </AccordionSection>
          </ScrollReveal>
          
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(229, 229, 229, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 948.442 1">
                <line id="Line 13" stroke="var(--stroke-0, #E5E5E5)" x2="948.442" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          
          <ScrollReveal delay={300} direction="up" distance={40}>
            <AccordionSection title="Prescription" defaultOpen={false}>
              <div className="font-['Red_Hat_Display:Regular',sans-serif] font-normal leading-[1.5] not-italic relative text-[#686069] text-[16px]">
                <p>Mentra Live is compatible with your prescription lenses. Go to any of your preferred opticians, including LensCrafters, Sunglass Hut, Costco, Warby Parker, and more to have them swap your Mentra Live lenses with prescription.</p>
              </div>
            </AccordionSection>
          </ScrollReveal>
          
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(229, 229, 229, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 948.442 1">
                <line id="Line 13" stroke="var(--stroke-0, #E5E5E5)" x2="948.442" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          
          <ScrollReveal delay={350} direction="up" distance={40}>
            <AccordionSection title="Frequently asked questions" defaultOpen={false}>
              <FAQContent />
            </AccordionSection>
          </ScrollReveal>
          
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(229, 229, 229, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 948.442 1">
                <line id="Line 13" stroke="var(--stroke-0, #E5E5E5)" x2="948.442" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          
          <ScrollReveal delay={400} direction="up" distance={40}>
            <Frame35 />
          </ScrollReveal>
          
          <ScrollReveal delay={450} direction="up" distance={40}>
            <Frame36 />
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="relative shrink-0 size-[60px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="Group 1597880412">
          <circle cx="30" cy="30" fill="var(--fill-0, #F5F5F5)" id="Ellipse 148" r="29.5" stroke="var(--stroke-0, #E5E5E5)" />
          <circle cx="30.2812" cy="29.7227" fill="var(--fill-0, #0A0A0A)" id="Ellipse 149" r="27.5" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="relative shrink-0 size-[60px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="Group 1597880413">
          <circle cx="30" cy="30" fill="var(--fill-0, #F5F5F5)" id="Ellipse 148" r="29.5" stroke="var(--stroke-0, #E5E5E5)" />
          <circle cx="30.2812" cy="29.7227" fill="var(--fill-0, white)" id="Ellipse 149" r="27.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Group5 />
      <Group6 />
    </div>
  );
}

function Price() {
  return (
    <div className="content-stretch flex gap-[8px] items-center leading-[1.7] not-italic relative shrink-0 text-nowrap w-full" data-name="Price">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] relative shrink-0 text-[#0d0c0d] text-[24px]">$299.00</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Red_Hat_Display:Regular',sans-serif] line-through relative shrink-0 text-[#807681] text-[16px]">$349.99</p>
    </div>
  );
}

function Group() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Group">
      <p className="font-['Red_Hat_Display:Medium',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#00b869] text-[14px] text-nowrap">12 Left</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(229, 229, 229, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 424 1">
            <line id="Line 12" stroke="var(--stroke-0, #E5E5E5)" x2="424" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Price />
    </div>
  );
}

function Group1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Group">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#0d0c0d] text-[28px] tracking-[0.3px] w-[415px]">Mentra Live Camera Glasses</p>
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#00b869] text-[24px] text-nowrap">$299.00</p>
      <div className="flex flex-col font-['Red_Hat_Display:Medium',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#686069] text-[16px] tracking-[-0.2px] w-[min-content]">
        <p className="leading-[1.5]">Mentra Live smart glasses have HD camera, speakers, no display, and open-source SDK.</p>
      </div>
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[1.7] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] text-nowrap">Color : Black</p>
      <Frame29 />
      <Group />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#0a0a0a] relative rounded-[39px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[32px] py-[16px] relative w-full">
          <div className="flex flex-col font-['Red_Hat_Display:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
            <p className="leading-[24px]">Order Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VuesaxLinearShoppingCart2() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/shopping-cart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="shopping-cart">
          <path d={svgPaths.pdd64680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d={svgPaths.p2b957a00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d={svgPaths.pb45e600} fill="var(--fill-0, #00B869)" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <path d="M9 8H21" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <g id="Vector_5" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function ShoppingCart2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="shopping-cart">
      <VuesaxLinearShoppingCart2 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white relative rounded-[32px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[32px] py-[16px] relative w-full">
          <ShoppingCart2 />
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0d0c0d] text-[14px] text-center text-nowrap">
            <p className="leading-[1.7]">Add to Cart</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#0a0a0a] border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-full" data-name="Right">
      <Group1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function VuesaxBoldCup() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/cup">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="cup">
          <path d={svgPaths.p21565d80} fill="var(--fill-0, #00B869)" id="Vector" />
          <path d={svgPaths.p3e5ee800} fill="var(--fill-0, #00B869)" id="Vector_2" />
          <g id="Vector_3" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Cup() {
  return (
    <div className="absolute left-[10px] size-[20px] top-[10px]" data-name="cup">
      <VuesaxBoldCup />
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#f8f7f8] relative rounded-[253.425px] shrink-0 size-[40px]" data-name="Icon">
      <Cup />
    </div>
  );
}

function VuesaxLinearArrowRight() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-right">
          <path d={svgPaths.p232a3c80} id="Vector" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow-right">
      <VuesaxLinearArrowRight />
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[39px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Red_Hat_Display:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#00b869] text-[12px] text-center text-nowrap tracking-[-0.2px]">
        <p className="leading-[16px]">View More</p>
      </div>
      <ArrowRight />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Icon />
      <div className="basis-0 flex flex-col font-['Red_Hat_Display:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-black tracking-[-0.2px]">
        <p className="leading-[1.5]">Best Seller Product</p>
      </div>
      <Button4 />
    </div>
  );
}

function VuesaxBoldVerify() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/verify">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="verify">
          <path d={svgPaths.p6440df0} fill="var(--fill-0, #008000)" id="Vector" />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function Verify() {
  return (
    <div className="absolute left-[11px] size-[18px] top-[11px]" data-name="verify">
      <VuesaxBoldVerify />
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[#f8f7f8] relative rounded-[253.425px] shrink-0 size-[40px]" data-name="Icon">
      <Verify />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Icon1 />
      <div className="flex flex-col font-['Red_Hat_Display:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.2px] w-[372px]">
        <p className="leading-[1.5]">100% satisfaction guarantee</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      <div className="flex flex-col font-['Red_Hat_Display:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#686069] text-[16px] tracking-[-0.2px] w-full">
        <p className="leading-[1.5]">About Product</p>
      </div>
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start pb-[144px] px-4 md:px-6 lg:px-[133.78px] pt-[80px] relative shrink-0">
      <Right />
      <Frame25 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-start px-0 py-[80px] relative shrink-0 w-full">
      <Frame7 />
      <Frame24 />
    </div>
  );
}

function Group2() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[calc(50%-76.5px)] mt-[14px] place-items-start relative">
      <p className="[grid-area:1_/_1] font-['Red_Hat_Display:Regular',sans-serif] leading-[0.95] ml-[40.74px] mt-[3px] not-italic relative text-[20px] text-black text-nowrap">Join Discord</p>
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[26.739px]" data-name="image 36">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage36} />
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[calc(50%+121.5px)] mt-[238px] place-items-start relative">
      <div className="[grid-area:1_/_1] backdrop-blur-[15px] backdrop-filter border-2 border-black border-solid h-[53px] ml-0 mt-0 relative rounded-[91px] w-[223px]">
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
      </div>
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['Red_Hat_Display:Bold',sans-serif] leading-[1.25] ml-[379.5px] mt-0 not-italic relative text-[64px] text-black text-center text-nowrap translate-x-[-50%]">Ready to choose your reality?</p>
      <p className="[grid-area:1_/_1] font-['Red_Hat_Display:Regular',sans-serif] leading-[1.25] ml-[379.5px] mt-[94px] not-italic relative text-[48px] text-black text-center translate-x-[-50%]">Open source moves quickly. Stay up-to-date.</p>
      <div className="[grid-area:1_/_1] backdrop-blur-[15px] backdrop-filter bg-[#00b869] h-[53px] ml-[285px] mt-[238px] relative rounded-[91px] w-[197px]">
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
      </div>
      <div className="[grid-area:1_/_1] backdrop-blur-[15px] backdrop-filter border border-[#c4c4c4] border-solid h-[53px] ml-0 mt-[237px] relative rounded-[91px] w-[482px]">
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
      </div>
      <p className="[grid-area:1_/_1] font-['Red_Hat_Display:Regular',sans-serif] leading-[0.95] ml-[58.5px] mt-[254.94px] not-italic relative text-[#838383] text-[20px] text-center text-nowrap translate-x-[-50%]">Email</p>
      <p className="[grid-area:1_/_1] font-['Red_Hat_Display:Regular',sans-serif] leading-[0.95] ml-[383px] mt-[255px] not-italic relative text-[20px] text-black text-center text-nowrap translate-x-[-50%]">Join Newsletter</p>
      <Group3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[40px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[144px] relative w-full">
          <Group4 />
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[19.111px] relative shrink-0 w-[37.028px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.0278 19.1111">
        <g id="Logo">
          <rect fill="var(--fill-0, #00B869)" height="8.49383" id="Rectangle 1" width="8.77242" y="10.6173" />
          <path d={svgPaths.p1f441b00} fill="var(--fill-0, #00B869)" id="Rectangle 2" />
          <path d={svgPaths.p22afbb00} fill="var(--fill-0, #00B869)" id="Rectangle 3" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[7.167px] items-center relative shrink-0">
      <Logo />
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0a0a0a] text-[23.889px] text-center text-nowrap">Mentra</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.pea09c00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svg() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0 w-[16px]" data-name="SVG">
      <Frame />
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#00b869] content-stretch flex items-start p-[6px] relative rounded-[9999px] shrink-0 w-[28px]" data-name="Link">
      <Svg />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p18088d00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svg1() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0 w-[16px]" data-name="SVG">
      <Frame1 />
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[#00b869] content-stretch flex items-start p-[6px] relative rounded-[9999px] shrink-0 w-[28px]" data-name="Link">
      <Svg1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p3df51d80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svg2() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0 w-[16px]" data-name="SVG">
      <Frame2 />
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-[#00b869] content-stretch flex items-start p-[6px] relative rounded-[9999px] shrink-0 w-[28px]" data-name="Link">
      <Svg2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p2ce6b700} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svg3() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0 w-[16px]" data-name="SVG">
      <Frame3 />
    </div>
  );
}

function Link3() {
  return (
    <div className="bg-[#00b869] content-stretch flex items-start p-[6px] relative rounded-[9999px] shrink-0 w-[28px]" data-name="Link">
      <Svg3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p16a4e940} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svg4() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative shrink-0 w-[16px]" data-name="SVG">
      <Frame4 />
    </div>
  );
}

function Link4() {
  return (
    <div className="bg-[#00b869] content-stretch flex items-start p-[6px] relative rounded-[9999px] shrink-0 w-[28px]" data-name="Link">
      <Svg4 />
    </div>
  );
}

function DivGrid() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.grid">
      <div className="content-stretch flex gap-[8px] items-start pl-0 pr-[25.33px] py-0 relative w-full">
        <Link />
        <Link1 />
        <Link2 />
        <Link3 />
        <Link4 />
      </div>
    </div>
  );
}

function PTextXs() {
  return (
    <div className="relative shrink-0 w-full" data-name="p.text-xs">
      <div className="content-stretch flex items-start pl-0 pr-[71.33px] py-0 relative w-full">
        <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] justify-center leading-[16px] not-italic relative shrink-0 text-[#8f9199] text-[12px] text-nowrap">
          <p className="mb-0">© Copyright 2025 Mentra Labs, Inc</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

function DivGrid1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[205.33px]" data-name="div.grid">
      <Frame10 />
      <DivGrid />
      <PTextXs />
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex items-start pl-0 pr-[168.33px] py-0 relative shrink-0 w-[205.33px]" data-name="Link">
      <div className="flex flex-col font-['Red_Hat_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3d3e43] text-[15px] text-nowrap">
        <p className="leading-[24px]">Mentra Store</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex items-start pb-px pl-0 pr-[129.33px] pt-0 relative shrink-0 w-[205.33px]" data-name="Link">
      <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71737c] text-[14px] text-nowrap">
        <p className="leading-[20px]">AI glasses</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex items-start pb-px pl-0 pr-[89.33px] pt-0 relative shrink-0 w-[205.33px]" data-name="Link">
      <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71737c] text-[14px] text-nowrap">
        <p className="leading-[20px]">App download</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex items-start pb-px pl-0 pr-[89.33px] pt-0 relative shrink-0 w-[205.33px]" data-name="Link">
      <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71737c] text-[14px] text-nowrap">
        <p className="leading-[20px]">OS</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex items-start pb-px pl-0 pr-[105.33px] pt-0 relative shrink-0 w-[205.33px]" data-name="Link">
      <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71737c] text-[14px] text-nowrap">
        <p className="leading-[20px]">Contact us</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex items-start pb-px pl-0 pr-[102.33px] pt-0 relative shrink-0 w-[205.33px]" data-name="Link">
      <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71737c] text-[14px] text-nowrap">
        <p className="leading-[20px]">FAQs</p>
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex items-start pb-px pl-0 pr-[113.33px] pt-0 relative shrink-0 w-[205.33px]" data-name="Link">
      <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71737c] text-[14px] text-nowrap">
        <p className="leading-[20px]">Blog</p>
      </div>
    </div>
  );
}

function DivGrid2() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-[205.33px]" data-name="div.grid">
      <Link5 />
      <Link6 />
      <Link7 />
      <Link8 />
      <Link9 />
      <Link10 />
      <Link11 />
    </div>
  );
}

function Link12() {
  return (
    <div className="content-stretch flex items-start pl-0 pr-[168.33px] py-0 relative shrink-0 w-[205.33px]" data-name="Link">
      <div className="flex flex-col font-['Red_Hat_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3d3e43] text-[15px] text-nowrap">
        <p className="leading-[24px]">Customer care</p>
      </div>
    </div>
  );
}

function Link13() {
  return (
    <div className="content-stretch flex items-start pb-px pl-0 pr-[129.33px] pt-0 relative shrink-0 w-[205.33px]" data-name="Link">
      <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71737c] text-[14px] text-nowrap">
        <p className="leading-[20px]">Return policy</p>
      </div>
    </div>
  );
}

function Link14() {
  return (
    <div className="content-stretch flex items-start pb-px pl-0 pr-[89.33px] pt-0 relative shrink-0 w-[205.33px]" data-name="Link">
      <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71737c] text-[14px] text-nowrap">
        <p className="leading-[20px]">Shipping policy</p>
      </div>
    </div>
  );
}

function Link15() {
  return (
    <div className="content-stretch flex items-start pb-px pl-0 pr-[105.33px] pt-0 relative shrink-0 w-[205.33px]" data-name="Link">
      <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71737c] text-[14px] text-nowrap">
        <p className="leading-[20px]">Help center</p>
      </div>
    </div>
  );
}

function Link16() {
  return (
    <div className="content-stretch flex items-start pb-px pl-0 pr-[102.33px] pt-0 relative shrink-0 w-[205.33px]" data-name="Link">
      <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71737c] text-[14px] text-nowrap">
        <p className="leading-[20px]">Privacy policy</p>
      </div>
    </div>
  );
}

function Link17() {
  return (
    <div className="content-stretch flex items-start pb-px pl-0 pr-[113.33px] pt-0 relative shrink-0 w-[205.33px]" data-name="Link">
      <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71737c] text-[14px] text-nowrap">
        <p className="leading-[20px]">Terns of service</p>
      </div>
    </div>
  );
}

function DivGrid3() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-[205.33px]" data-name="div.grid">
      <Link12 />
      <Link13 />
      <Link14 />
      <Link15 />
      <Link16 />
      <Link17 />
    </div>
  );
}

function Link18() {
  return (
    <div className="content-stretch flex items-start pl-0 pr-[168.33px] py-0 relative shrink-0 w-[205.33px]" data-name="Link">
      <div className="flex flex-col font-['Red_Hat_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3d3e43] text-[15px] text-nowrap">
        <p className="leading-[24px]">Community</p>
      </div>
    </div>
  );
}

function Link19() {
  return (
    <div className="content-stretch flex items-start pb-px pl-0 pr-[129.33px] pt-0 relative shrink-0 w-[205.33px]" data-name="Link">
      <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71737c] text-[14px] text-nowrap">
        <p className="leading-[20px]">Creators</p>
      </div>
    </div>
  );
}

function Link20() {
  return (
    <div className="content-stretch flex items-start pb-px pl-0 pr-[89.33px] pt-0 relative shrink-0 w-[205.33px]" data-name="Link">
      <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71737c] text-[14px] text-nowrap">
        <p className="leading-[20px]">Developers</p>
      </div>
    </div>
  );
}

function Link21() {
  return (
    <div className="content-stretch flex items-start pb-px pl-0 pr-[105.33px] pt-0 relative shrink-0 w-[205.33px]" data-name="Link">
      <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71737c] text-[14px] text-nowrap">
        <p className="leading-[20px]">Businesses</p>
      </div>
    </div>
  );
}

function Link22() {
  return (
    <div className="content-stretch flex items-start pb-px pl-0 pr-[102.33px] pt-0 relative shrink-0 w-[205.33px]" data-name="Link">
      <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71737c] text-[14px] text-nowrap">
        <p className="leading-[20px]">Download SDKs</p>
      </div>
    </div>
  );
}

function DivGrid4() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-[205.33px]" data-name="div.grid">
      <Link18 />
      <Link19 />
      <Link20 />
      <Link21 />
      <Link22 />
    </div>
  );
}

function PAppearanceNone() {
  return (
    <div className="content-stretch flex items-start pl-0 pr-[137.34px] py-0 relative shrink-0 w-[205.34px]" data-name="p.appearance-none">
      <div className="flex flex-col font-['Red_Hat_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3d3e43] text-[16px] text-nowrap">
        <p className="leading-[24px]">Company</p>
      </div>
    </div>
  );
}

function Link23() {
  return (
    <div className="content-stretch flex items-start pb-px pl-0 pr-[174.34px] pt-0 relative shrink-0 w-[205.34px]" data-name="Link">
      <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71737c] text-[14px] text-nowrap">
        <p className="leading-[20px]">About Mentra</p>
      </div>
    </div>
  );
}

function Link24() {
  return (
    <div className="content-stretch flex items-start pb-px pl-0 pr-[159.34px] pt-0 relative shrink-0 w-[205.34px]" data-name="Link">
      <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71737c] text-[14px] text-nowrap">
        <p className="leading-[20px]">Careers</p>
      </div>
    </div>
  );
}

function Link25() {
  return (
    <div className="content-stretch flex items-start pb-px pl-0 pr-[165.34px] pt-0 relative shrink-0 w-[205.34px]" data-name="Link">
      <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71737c] text-[14px] text-nowrap">
        <p className="leading-[20px]">Newsroom</p>
      </div>
    </div>
  );
}

function Link26() {
  return (
    <div className="content-stretch flex items-start pb-px pl-0 pr-[154.34px] pt-0 relative shrink-0 w-[205.34px]" data-name="Link">
      <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71737c] text-[14px] text-nowrap">
        <p className="leading-[20px]">For investors</p>
      </div>
    </div>
  );
}

function Link27() {
  return (
    <div className="content-stretch flex items-start pb-px pl-0 pr-[103.34px] pt-0 relative shrink-0 w-[205.34px]" data-name="Link">
      <div className="flex flex-col font-['Red_Hat_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#71737c] text-[14px] text-nowrap">
        <p className="leading-[20px]">Contact Support</p>
      </div>
    </div>
  );
}

function DivGrid5() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-[205.34px]" data-name="div.grid">
      <PAppearanceNone />
      <Link23 />
      <Link24 />
      <Link25 />
      <Link26 />
      <Link27 />
    </div>
  );
}

function DivRelative() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full max-w-[1200px]" data-name="div.relative">
      <DivGrid1 />
      <DivGrid2 />
      <DivGrid3 />
      <DivGrid4 />
      <DivGrid5 />
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex items-center justify-center px-0 py-[48px] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-center justify-center relative shrink-0 w-full max-w-[1452px]">
        <DivRelative />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[160px] items-center justify-center px-4 md:px-6 lg:px-[133.778px] py-[144px] relative w-full max-w-full">
          <Frame5 />
          <Footer />
        </div>
      </div>
    </div>
  );
}

function Logo1() {
  return (
    <div className="h-[19.111px] relative shrink-0 w-[37.028px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.0278 19.1111">
        <g id="Logo">
          <rect fill="var(--fill-0, #00B869)" height="8.49383" id="Rectangle 1" width="8.77242" y="10.6173" />
          <path d={svgPaths.p1f441b00} fill="var(--fill-0, #00B869)" id="Rectangle 2" />
          <path d={svgPaths.p22afbb00} fill="var(--fill-0, #00B869)" id="Rectangle 3" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[7.167px] items-center relative shrink-0">
      <Logo1 />
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0a0a0a] text-[23.889px] text-center text-nowrap">Mentra</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-center px-[16px] py-[4px] relative rounded-[32px] shrink-0">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[31.873px] not-italic relative shrink-0 text-[#00b869] text-[20px] text-center text-nowrap">AI glasses</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-center px-[16px] py-[4px] relative rounded-[32px] shrink-0">
      <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[31.873px] not-italic relative shrink-0 text-[#0a0a0a] text-[20px] text-center text-nowrap">Apps and OS</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-center px-[16px] py-[4px] relative rounded-[32px] shrink-0">
      <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[31.873px] not-italic relative shrink-0 text-[#0a0a0a] text-[20px] text-center text-nowrap">Company</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-center px-[16px] py-[4px] relative rounded-[32px] shrink-0">
      <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[31.873px] not-italic relative shrink-0 text-[#0a0a0a] text-[20px] text-center text-nowrap">Community</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[38.222px] items-center justify-center relative shrink-0">
      <Frame14 />
      <Frame6 />
      <Frame11 />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function ShoppingBag() {
  return (
    <div className="absolute left-[calc(50%-0.28px)] size-[24px] top-[calc(50%-0.41px)] translate-x-[-50%] translate-y-[-50%]" data-name="shopping-bag">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="shopping-bag">
          <path d={svgPaths.p245d2140} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          <path d="M3 6.44263H21" id="Vector_2" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
          <path d={svgPaths.pb758480} id="Vector_3" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function NavigationIcon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Navigation Icon">
      <ShoppingBag />
    </div>
  );
}

function NavigationButton4() {
  return (
    <div className="bg-[#009258] content-stretch flex items-center p-[8px] relative rounded-[32px] shrink-0" data-name="Navigation Button">
      <NavigationIcon4 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <NavigationButton4 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[1452.444px]">
      <Frame9 />
      <Frame15 />
    </div>
  );
}

function NavBar() {
  return (
    <div className="backdrop-blur-[250px] backdrop-filter bg-[rgba(255,255,255,0.85)] content-stretch flex h-[90px] items-start justify-between overflow-clip pointer-events-auto px-4 md:px-6 lg:px-[133.778px] py-[24px] shadow-[0px_4px_30px_5px_rgba(0,0,0,0.05)] sticky top-0 w-full max-w-[1720px] mx-auto" data-name="NavBar">
      <Frame19 />
    </div>
  );
}

interface MentraLiveProps {
  product?: any;
  variantId?: string | null;
  fetcher?: any;
}

export default function MentraLive({ product, variantId, fetcher }: MentraLiveProps = {}) {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Mentra Live">
      <NavigationBar />
      <ScrollReveal direction="fade" duration={0.8}>
        <Frame26 />
      </ScrollReveal>
      <ScrollReveal delay={150} direction="up" distance={60}>
        <Frame8 />
      </ScrollReveal>
      
      <StickyPurchaseSection
        productName="Mentra Live Camera Glasses"
        price="$299.00"
      />

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideInRight {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slideInRight {
          animation: slideInRight 0.4s ease-out;
        }
      `}} />
    </div>
  );
}