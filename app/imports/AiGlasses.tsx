import { useState, useEffect, useRef } from "react";
import { useNavigate } from "@remix-run/react";
import svgPaths from "./svg-vm45n54l9";
import EasiestSmartGlassesSection from "./Frame1984078268-12-5215";
import ComparisonTable from "./Frame1618873011-12-7678";
import PrescriptionReadySection from "./Frame1984078242-12-7749";
import AppStoreSection from "./Frame1984078232";
import GetYourMentraGlassesSection from "./Frame1984078261";
import NavigationBar from "../components/NavigationBar";
import ScrollReveal from "../components/ScrollReveal";
import FAQSection from "../components/FAQSection";
import { PlayPauseControl } from "../components/PlayPauseControl";
import imgImage171 from "/assets/9bd13b993f4db0d7910a3e77d580330c8196cbda.png";
import imgImage178 from "/assets/941ea41c22412686984c524708231da6edbd53ad.png";
import imgImage180 from "/assets/04de4f892e4e3df51d41b04942dade53ac02ab7c.png";
import imgImage177 from "/assets/bb07fd06e6c4321a583b7cfa3b338bcb8bd30d7b.png";
import imgImage176 from "/assets/9afba06bbe7725ea0650b181366d51a6a3782f87.png";
import imgImage185 from "/assets/51d7d50f9b381f963c3ef047a3dd22f068b8e016.png";
import imgImage181 from "/assets/b9a2e40afe9a6295c872f0043640730bdf2a4916.png";
import imgImage179 from "/assets/08d2f54624f59fd5915df0f824ac8912a6b993e1.png";
import imgImage191 from "/assets/50b9de801dda0227d238cfab2648fdf555f1b62a.png";
import imgImage195 from "/assets/ffe36e87ab0a3e6ca1bd46752e7b4c2b208e0c73.png";
import imgEzgifFrame0351 from "/assets/83fb1abc62c74b98254b83e1c995957305d9c32a.png";
import imgImage172 from "/assets/551715d6dae135191779e906c9df5ddb3d719234.png";
import imgImage28 from "/assets/d4857403a2c706ebbb1c4753b2da9302c5308c44.png";
import imgScreen from "/assets/70e6cef7e4932d4c2243766935472439652bd8c4.png";
import imgChangeColorHere from "/assets/2effc128444e041451979989499c0686570d87f7.png";
import imgChangeColorHere1 from "/assets/3615eb4fbb5a58b0fc7abfd28a711c7fb1706054.png";
import imgVideo5 from "/assets/d7ab4d4bf07a9bf1bfcaa426805829cbbd1f328b.png";
import imgScreenshot20251029At111410Am2 from "/assets/cf4cc7823f786cdb33e8f7055653555a3a0b3e9a.png";
import imgScreenshot20251029At111410Am3 from "/assets/32a9ff6e981da2df4cd2e967afe95e0f9a67dc91.png";
import imgScreenshot20251029At111410Am4 from "/assets/beec97f1ce8672b28fedcb27ec869008225d63ad.png";
import imgScreenshot20251029At111410Am5 from "/assets/5b09a182c8ae50681aedd4971de18969898c817a.png";
import imgScreenshot20251029At111410Am6 from "/assets/b25f0c59f8288e24474be7af805b56e31c7edc68.png";
import imgScreenshot20251029At111410Am7 from "/assets/1596bbfeb60ef296048aa6a59fc891c99c1c0156.png";
import imgScreenshot20251029At111410Am8 from "/assets/1ac159eb98cb2cb45357653e433c61e999682f88.png";
import imgScreenshot20251029At111410Am9 from "/assets/2afc690a732b84e519b27b2a480affa124e71122.png";
import imgVideo7 from "/assets/c87d88f2e837fcee49720b01dc635b6b7ca00131.png";
import imgImage167 from "/assets/f734081f870e6b04cf83f45d1c14e6d5bee6f83e.png";
import imgImage174 from "/assets/3d7abe0690d911f88227459f66b04bf69d9f1ed0.png";
import imgMentraLiveX2 from "/assets/87807e2e657137af250f0f3412bc97ace74dc408.png";
import imgImage129 from "/assets/d81ef731150eba7b1f372c64c17081bb7f42b009.png";
import imgEzgifFrame1041 from "/assets/b9f2d5b23bcac5129eeedec01451f80a93d424f9.png";
import imgDscf73442 from "/assets/9a963214ace78fd0483d27dbd9f4de789b523526.png";
import imgDscf85912 from "/assets/adf3b5bd14bb574e0db3102c26b5a310ac49840e.png";
import imgScreenshot20251202At33817Pm1 from "/assets/9da11aee800379f79fd3147ec9d54ed8009c3fa4.png";
import imgScreenshot20251202At33629Pm2 from "/assets/3e716864cf4047bbadc5979533465dade88d3530.png";
import imgScreenshot20251229At75004Am1 from "/assets/fee02fdb7f4f31d5a6832fc866cf44818a0de5be.png";
import imgImage163 from "/assets/074ab71e7b858304b7b3d0cc93a375a063653b74.png";
import imgImage164 from "/assets/d66a36d3845c317ef1833158c9ee74b81c7e24fe.png";
import imgImage165 from "/assets/a941107cc55205e46c84f3250b368b3cec1c522c.png";
import imgDscf8443 from "/assets/8e57dce521036217fa2f2f693b14b65504a8833b.png";
import { imgSection, imgScreenshot20251202At33629Pm1 } from "./svg-saoyw";

function Hero({ videoRef }: { videoRef: React.RefObject<HTMLVideoElement> }) {
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video autoplays and is muted
    video.muted = true;
    video.playsInline = true;
    
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        // Autoplay was prevented, but that's okay for accessibility
        console.log("Video autoplay prevented:", error);
      });
    }
  }, [videoRef]);

  return (
    <div className="absolute inset-0" data-name="Hero">
      <div className="absolute inset-0" data-name="video container">
        {/* Fallback image */}
        <img 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
          src={imgImage171}
          aria-hidden="true"
        />
        {/* Video overlay */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
          aria-label="Hero background video"
        >
          <source src="/assets/SuperHero-Video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[29.264px] relative shrink-0 w-[56.699px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56.6988 29.2639">
        <g id="Logo">
          <rect fill="var(--fill-0, white)" height="13.0062" id="Rectangle 1" width="13.4328" y="16.2577" />
          <path d={svgPaths.p2e7e4080} fill="var(--fill-0, white)" id="Rectangle 2" />
          <path d={svgPaths.p18ba7e80} fill="var(--fill-0, white)" id="Rectangle 3" />
        </g>
      </svg>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[10.974px] items-center relative shrink-0">
      <Logo />
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[36.58px] text-center text-nowrap text-white">Mentra</p>
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[638px]">
      <Frame29 />
      <p className="font-['Red_Hat_Display:Bold',sans-serif] leading-[72px] not-italic relative shrink-0 text-[64px] text-center text-nowrap text-white">Choose Your Reality</p>
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[45.173px] min-w-full not-italic relative shrink-0 text-[32px] text-center text-white w-[min-content]">The only AI glasses with an app store.</p>
    </div>
  );
}

function NavigationIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Navigation Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Navigation Icon">
          <g id="Vector"></g>
          <path d={svgPaths.pa978b00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function NavigationButton() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(255,255,255,0.4)] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[40px]" data-name="Navigation Button">
      <NavigationIcon />
    </div>
  );
}

function Frame114() {
  return (
    <div className="absolute bottom-[80px] left-1/2 -translate-x-1/2 z-20">
      <NavigationButton />
    </div>
  );
}

function Frame26({ heroRef }: { heroRef?: React.RefObject<HTMLDivElement> }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  return (
    <div ref={heroRef} className="h-screen relative shrink-0 w-full">
      <Hero videoRef={videoRef} />
      <div className="absolute left-0 right-0 bottom-[110px] flex flex-col items-center z-10 pointer-events-none">
        <Frame113 />
      </div>
      <div className="absolute bottom-[110px] right-[30px] z-10">
        <Frame114 />
      </div>
      {/* Play/Pause Control at bottom right */}
      <div className="absolute bottom-[30px] right-[30px] z-20 pointer-events-auto">
        <PlayPauseControl videoRef={videoRef} />
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-40">
        <DivGrid7 />
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="h-[48.522px] relative shrink-0 w-[146.877px]">
      <p className="absolute font-['Red_Hat_Display:Regular',sans-serif] inset-[0_30.46%_71.15%_34.82%] leading-[normal] not-italic text-[10.491px] text-black text-nowrap">Founder of</p>
      <div className="absolute aspect-[2560/572] bottom-0 left-[calc(50%-0.04px)] top-[32.4%] translate-x-[-50%]" data-name="image 178">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage178} />
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="h-[48.959px] relative shrink-0 w-[109.216px]">
      <p className="absolute bottom-[70.89%] font-['Red_Hat_Display:Regular',sans-serif] leading-[normal] left-0 not-italic text-[10.491px] text-black top-0 w-[50.842px]">Founder of</p>
      <div className="absolute h-[32.16px] left-0 top-[16.01px] w-[107.776px]" data-name="image 180">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage180} />
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="h-[48.959px] relative shrink-0 w-[198.66px]">
      <p className="absolute bottom-[70.89%] font-['Red_Hat_Display:Regular',sans-serif] leading-[normal] left-0 not-italic text-[10.491px] text-black top-0 w-[50.842px]">Founder of</p>
      <div className="absolute h-[31.078px] left-0 top-[16.38px] w-[198.66px]" data-name="image 177">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[552.49%] left-[-14.82%] max-w-none top-[-224.86%] w-[129.65%]" src={imgImage177} />
        </div>
      </div>
    </div>
  );
}

function Frame151() {
  return (
    <div className="absolute content-center flex flex-nowrap gap-[47.763px] items-center left-0 top-[155.23px]" style={{ width: 'max-content' }}>
      {/* First set of logos */}
      <Frame61 />
      <Frame63 />
      <Frame62 />
      <div className="h-[48.97px] relative shrink-0 w-[223.087px]" data-name="image 176">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[138.89%] left-[-3.18%] max-w-none top-[-19.44%] w-[106.97%]" src={imgImage176} />
        </div>
      </div>
      <div className="h-[50px] relative shrink-0 w-[148px]" data-name="image 185">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[166.87%] left-0 max-w-none top-[-33.44%] w-full" src={imgImage185} />
        </div>
      </div>
      <div className="h-[47.083px] relative shrink-0 w-[169.449px]" data-name="image 181">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage181} />
      </div>
      <div className="h-[47.118px] relative shrink-0 w-[154.272px]" data-name="image 179">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage179} />
      </div>
      <div className="h-[38px] relative shrink-0 w-[120px]" data-name="image 191">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[162.04%] left-[-9.85%] max-w-none top-[-32.32%] w-[119.49%]" src={imgImage191} />
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-[154px]" data-name="image 195">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[193.79%] left-[-5.9%] max-w-none top-[-45.5%] w-[114.37%]" src={imgImage195} />
        </div>
      </div>

      {/* Second set of logos for seamless loop */}
      <Frame61 />
      <Frame63 />
      <Frame62 />
      <div className="h-[48.97px] relative shrink-0 w-[223.087px]" data-name="image 176">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[138.89%] left-[-3.18%] max-w-none top-[-19.44%] w-[106.97%]" src={imgImage176} />
        </div>
      </div>
      <div className="h-[50px] relative shrink-0 w-[148px]" data-name="image 185">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[166.87%] left-0 max-w-none top-[-33.44%] w-full" src={imgImage185} />
        </div>
      </div>
      <div className="h-[47.083px] relative shrink-0 w-[169.449px]" data-name="image 181">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage181} />
      </div>
      <div className="h-[47.118px] relative shrink-0 w-[154.272px]" data-name="image 179">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage179} />
      </div>
      <div className="h-[38px] relative shrink-0 w-[120px]" data-name="image 191">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[162.04%] left-[-9.85%] max-w-none top-[-32.32%] w-[119.49%]" src={imgImage191} />
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-[154px]" data-name="image 195">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[193.79%] left-[-5.9%] max-w-none top-[-45.5%] w-[114.37%]" src={imgImage195} />
        </div>
      </div>

      {/* Third set of logos for seamless loop */}
      <Frame61 />
      <Frame63 />
      <Frame62 />
      <div className="h-[48.97px] relative shrink-0 w-[223.087px]" data-name="image 176">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[138.89%] left-[-3.18%] max-w-none top-[-19.44%] w-[106.97%]" src={imgImage176} />
        </div>
      </div>
      <div className="h-[50px] relative shrink-0 w-[148px]" data-name="image 185">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[166.87%] left-0 max-w-none top-[-33.44%] w-full" src={imgImage185} />
        </div>
      </div>
      <div className="h-[47.083px] relative shrink-0 w-[169.449px]" data-name="image 181">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage181} />
      </div>
      <div className="h-[47.118px] relative shrink-0 w-[154.272px]" data-name="image 179">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage179} />
      </div>
      <div className="h-[38px] relative shrink-0 w-[120px]" data-name="image 191">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[162.04%] left-[-9.85%] max-w-none top-[-32.32%] w-[119.49%]" src={imgImage191} />
        </div>
      </div>
      <div className="h-[48px] relative shrink-0 w-[154px]" data-name="image 195">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[193.79%] left-[-5.9%] max-w-none top-[-45.5%] w-[114.37%]" src={imgImage195} />
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="absolute h-[358.224px] left-[11.94px] right-[11.94px] top-1/2 translate-y-[-50%]" data-name="List">
      <Frame151 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%] mask-size-[100%_100%]" data-name="Section" style={{ maskImage: `url('${imgSection}')` }}>
      <List />
    </div>
  );
}

function SectionMaskGroup() {
  return (
    <div className="h-[50.151px] overflow-clip relative shrink-0 w-[1452px]" data-name="Section:mask-group">
      <Section />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center justify-center px-[51px] py-0 relative shrink-0 w-[1452px]">
      <p className="font-['Manrope:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-center text-nowrap">Backed by</p>
      <SectionMaskGroup />
    </div>
  );
}

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

function NavigationIcon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Navigation Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Navigation Icon">
          <g id="Vector"></g>
          <g id="Vector_2">
            <path d="M12 5V19Z" fill="var(--fill-0, white)" />
            <path d="M12 5V19" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
          <path d="M5 12H19" id="Vector_3" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavigationButton1() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.7)] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[30px]" data-name="Navigation Button">
      <NavigationIcon1 />
    </div>
  );
}

function Group18() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.4)] content-stretch flex items-center justify-center overflow-clip relative rounded-[32px] shrink-0 size-[40px]">
      <NavigationButton1 />
    </div>
  );
}

function TouchPad() {
  return (
    <div className="group absolute content-stretch flex items-end justify-center left-[500px] top-[105.85px]" data-name="Touch pad">
      <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.7)] content-stretch flex gap-0 group-hover:gap-[8px] w-[40px] h-[40px] group-hover:w-auto items-center justify-center overflow-hidden p-[5px] group-hover:pl-[5px] group-hover:pr-[16px] relative rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] transition-all duration-300">
        <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.7)] group-hover:bg-[#00b869] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[30px] transition-colors duration-300">
          <div className="relative shrink-0 size-[24px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path className="group-hover:stroke-white transition-colors duration-300" d="M12 5V19" stroke="#00B869" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path className="group-hover:stroke-white transition-colors duration-300" d="M5 12H19" stroke="#00B869" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[normal] not-italic text-[20px] text-black text-center whitespace-nowrap opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-[200px] overflow-hidden transition-all duration-300">Touchpad</p>
      </div>
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
            <path d="M12 5V19Z" fill="var(--fill-0, white)" />
            <path d="M12 5V19" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
          <path d="M5 12H19" id="Vector_3" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavigationButton2() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.7)] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[30px]" data-name="Navigation Button">
      <NavigationIcon2 />
    </div>
  );
}

function Group21() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.4)] content-stretch flex items-center justify-center overflow-clip relative rounded-[32px] shrink-0 size-[40px]">
      <NavigationButton2 />
    </div>
  );
}

function FlashLed() {
  return (
    <div className="group absolute content-stretch flex items-end justify-center left-[1110px] top-[218.85px]" data-name="Flash LED">
      <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.7)] content-stretch flex gap-0 group-hover:gap-[8px] w-[40px] h-[40px] group-hover:w-auto items-center justify-center overflow-hidden p-[5px] group-hover:pl-[5px] group-hover:pr-[16px] relative rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] transition-all duration-300">
        <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.7)] group-hover:bg-[#00b869] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[30px] transition-colors duration-300">
          <div className="relative shrink-0 size-[24px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path className="group-hover:stroke-white transition-colors duration-300" d="M12 5V19" stroke="#00B869" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path className="group-hover:stroke-white transition-colors duration-300" d="M5 12H19" stroke="#00B869" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[normal] not-italic text-[20px] text-black text-center whitespace-nowrap opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-[200px] overflow-hidden transition-all duration-300">Flash LED</p>
      </div>
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
            <path d="M12 5V19Z" fill="var(--fill-0, white)" />
            <path d="M12 5V19" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
          <path d="M5 12H19" id="Vector_3" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavigationButton3() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.7)] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[30px]" data-name="Navigation Button">
      <NavigationIcon3 />
    </div>
  );
}

function Group22() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.4)] content-stretch flex items-center justify-center overflow-clip relative rounded-[32px] shrink-0 size-[40px]">
      <NavigationButton3 />
    </div>
  );
}

function Speakers() {
  return (
    <div className="group absolute content-stretch flex items-end justify-center left-[432px] top-[213.85px]" data-name="Speakers">
      <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.7)] content-stretch flex gap-0 group-hover:gap-[8px] w-[40px] h-[40px] group-hover:w-auto items-center justify-center overflow-hidden p-[5px] group-hover:pl-[5px] group-hover:pr-[16px] relative rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] transition-all duration-300">
        <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.7)] group-hover:bg-[#00b869] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[30px] transition-colors duration-300">
          <div className="relative shrink-0 size-[24px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path className="group-hover:stroke-white transition-colors duration-300" d="M12 5V19" stroke="#00B869" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path className="group-hover:stroke-white transition-colors duration-300" d="M5 12H19" stroke="#00B869" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[normal] not-italic text-[20px] text-black text-center whitespace-nowrap opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-[200px] overflow-hidden transition-all duration-300">Enhanced speakers</p>
      </div>
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
            <path d="M12 5V19Z" fill="var(--fill-0, white)" />
            <path d="M12 5V19" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
          <path d="M5 12H19" id="Vector_3" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavigationButton4() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.7)] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[30px]" data-name="Navigation Button">
      <NavigationIcon4 />
    </div>
  );
}

function Group23() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.4)] content-stretch flex items-center justify-center overflow-clip relative rounded-[32px] shrink-0 size-[40px]">
      <NavigationButton4 />
    </div>
  );
}

function Speakers1() {
  return (
    <div className="group absolute content-stretch flex items-end justify-center left-[854px] top-[358.85px]" data-name="Speakers">
      <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.7)] content-stretch flex gap-0 group-hover:gap-[8px] w-[40px] h-[40px] group-hover:w-auto items-center justify-center overflow-hidden p-[5px] group-hover:pl-[5px] group-hover:pr-[16px] relative rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] transition-all duration-300">
        <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.7)] group-hover:bg-[#00b869] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[30px] transition-colors duration-300">
          <div className="relative shrink-0 size-[24px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path className="group-hover:stroke-white transition-colors duration-300" d="M12 5V19" stroke="#00B869" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path className="group-hover:stroke-white transition-colors duration-300" d="M5 12H19" stroke="#00B869" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[normal] not-italic text-[20px] text-black text-center whitespace-nowrap opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-[200px] overflow-hidden transition-all duration-300">Enhanced speakers</p>
      </div>
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
            <path d="M12 5V19Z" fill="var(--fill-0, white)" />
            <path d="M12 5V19" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
          <path d="M5 12H19" id="Vector_3" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavigationButton5() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.7)] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[30px]" data-name="Navigation Button">
      <NavigationIcon5 />
    </div>
  );
}

function Group24() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.4)] content-stretch flex items-center justify-center overflow-clip relative rounded-[32px] shrink-0 size-[40px]">
      <NavigationButton5 />
    </div>
  );
}

function ChargingConnector() {
  return (
    <div className="group absolute content-stretch flex items-end justify-center left-[365px] top-[318.85px]" data-name="Charging connector">
      <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.7)] content-stretch flex gap-0 group-hover:gap-[8px] w-[40px] h-[40px] group-hover:w-auto items-center justify-center overflow-hidden p-[5px] group-hover:pl-[5px] group-hover:pr-[16px] relative rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] transition-all duration-300">
        <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.7)] group-hover:bg-[#00b869] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[30px] transition-colors duration-300">
          <div className="relative shrink-0 size-[24px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path className="group-hover:stroke-white transition-colors duration-300" d="M12 5V19" stroke="#00B869" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path className="group-hover:stroke-white transition-colors duration-300" d="M5 12H19" stroke="#00B869" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[normal] not-italic text-[20px] text-black text-center whitespace-nowrap opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-[200px] overflow-hidden transition-all duration-300">Charging connector</p>
      </div>
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
            <path d="M12 5V19Z" fill="var(--fill-0, white)" />
            <path d="M12 5V19" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
          <path d="M5 12H19" id="Vector_3" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavigationButton6() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.7)] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[30px]" data-name="Navigation Button">
      <NavigationIcon6 />
    </div>
  );
}

function Group25() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.4)] content-stretch flex items-center justify-center overflow-clip relative rounded-[32px] shrink-0 size-[40px]">
      <NavigationButton6 />
    </div>
  );
}

function ActionButton() {
  return (
    <div className="group absolute content-stretch flex items-end justify-center right-[816px] top-0" data-name="Action Button">
      <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.7)] content-stretch flex gap-0 group-hover:gap-[8px] w-[40px] h-[40px] group-hover:w-auto items-center justify-center overflow-hidden p-[5px] group-hover:pl-[5px] group-hover:pr-[16px] relative rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] transition-all duration-300">
        <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.7)] group-hover:bg-[#00b869] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[30px] transition-colors duration-300">
          <div className="relative shrink-0 size-[24px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path className="group-hover:stroke-white transition-colors duration-300" d="M12 5V19" stroke="#00B869" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path className="group-hover:stroke-white transition-colors duration-300" d="M5 12H19" stroke="#00B869" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[normal] not-italic text-[20px] text-black text-center whitespace-nowrap opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-[200px] overflow-hidden transition-all duration-300">Action button</p>
      </div>
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
            <path d="M12 5V19Z" fill="var(--fill-0, white)" />
            <path d="M12 5V19" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
          <path d="M5 12H19" id="Vector_3" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavigationButton7() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.7)] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[30px]" data-name="Navigation Button">
      <NavigationIcon7 />
    </div>
  );
}

function Group26() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.4)] content-stretch flex items-center justify-center overflow-clip relative rounded-[32px] shrink-0 size-[40px]">
      <NavigationButton7 />
    </div>
  );
}

function Camera() {
  return (
    <div className="group absolute content-stretch flex items-end justify-center left-[711px] top-[15px]" data-name="Camera">
      <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.7)] content-stretch flex gap-0 group-hover:gap-[8px] w-[40px] h-[40px] group-hover:w-auto items-center justify-center overflow-hidden p-[5px] group-hover:pl-[5px] group-hover:pr-[16px] relative rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] transition-all duration-300">
        <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.7)] group-hover:bg-[#00b869] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[30px] transition-colors duration-300">
          <div className="relative shrink-0 size-[24px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path className="group-hover:stroke-white transition-colors duration-300" d="M12 5V19" stroke="#00B869" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path className="group-hover:stroke-white transition-colors duration-300" d="M5 12H19" stroke="#00B869" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[normal] not-italic text-[20px] text-black text-center whitespace-nowrap opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-[200px] overflow-hidden transition-all duration-300">Ultra-wide 12MP camera</p>
      </div>
    </div>
  );
}

function Group19() {
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

function Group20() {
  return (
    <div className="absolute contents left-[310px] top-0">
      <Group19 />
    </div>
  );
}

function NavigationIcon8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Navigation Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Navigation Icon">
          <g id="Vector"></g>
          <g id="Vector_2">
            <path d="M12 5V19Z" fill="var(--fill-0, white)" />
            <path d="M12 5V19" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
          <path d="M5 12H19" id="Vector_3" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavigationButton8() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.7)] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[30px]" data-name="Navigation Button">
      <NavigationIcon8 />
    </div>
  );
}

function Group27() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.4)] content-stretch flex items-center justify-center overflow-clip relative rounded-[32px] shrink-0 size-[40px]">
      <NavigationButton8 />
    </div>
  );
}

function Microphone() {
  return (
    <div className="group absolute content-stretch flex items-end justify-center left-[931px] top-[140.85px]" data-name="Microphone">
      <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.7)] content-stretch flex gap-0 group-hover:gap-[8px] w-[40px] h-[40px] group-hover:w-auto items-center justify-center overflow-hidden p-[5px] group-hover:pl-[5px] group-hover:pr-[16px] relative rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)] transition-all duration-300">
        <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(241,241,241,0.7)] group-hover:bg-[#00b869] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[30px] transition-colors duration-300">
          <div className="relative shrink-0 size-[24px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path className="group-hover:stroke-white transition-colors duration-300" d="M12 5V19" stroke="#00B869" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path className="group-hover:stroke-white transition-colors duration-300" d="M5 12H19" stroke="#00B869" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[normal] not-italic text-[20px] text-black text-center whitespace-nowrap opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-[200px] overflow-hidden transition-all duration-300">Microphone</p>
      </div>
    </div>
  );
}

function Frame154() {
  return (
    <div className="h-[464px] relative shrink-0 w-[1452px]">
      <Group20 />
      <Microphone />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center relative shrink-0">
      <Header />
      <Frame154 />
    </div>
  );
}

function Frame128() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center relative shrink-0 w-[1452px]" data-name="Frame 128" data-hero-section-end="true">
      <Frame57 />
      <Frame74 />
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex flex-col gap-[19.111px] items-center justify-center not-italic relative shrink-0 text-center">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[57.333px] relative shrink-0 text-[#0a0a0a] text-[64px] text-nowrap">See with AI</p>
      <p className="font-['Manrope:Regular',sans-serif] leading-[normal] relative shrink-0 text-[28px] text-black w-[1250px]">ChatGPT was blind. Not anymore. With Mentra Live, AI can see what you see – translate signs, track your calories, or save a hand-written note for later.</p>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col gap-[19.111px] items-center justify-center relative shrink-0" data-name="Header">
      <Frame112 />
    </div>
  );
}

function Video() {
  return (
    <div className="[grid-area:1_/_1] h-[816.75px] ml-0 mt-0 relative w-[1452px]" data-name="Video 1">
      <div className="absolute inset-0 rounded-[24px]" data-name="video container">
        {/* Fallback image */}
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full z-0" src={imgImage172} aria-hidden="true" />
        {/* Video overlay */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full z-10"
          aria-label="See with AI demonstration video"
        >
          <source src="/assets/BuyingAdvice.mov" type="video/quicktime" />
        </video>
      </div>
    </div>
  );
}

function NavigationIcon9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Navigation Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Navigation Icon">
          <path d={svgPaths.p2ab6c700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function NavigationButton9() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(255,255,255,0.4)] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[40px]" data-name="Navigation Button">
      <NavigationIcon9 />
    </div>
  );
}

function NavigationIcon10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Navigation Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Navigation Icon">
          <g id="Vector"></g>
          <path d={svgPaths.pa978b00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function NavigationButton10() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(255,255,255,0.4)] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[40px]" data-name="Navigation Button">
      <NavigationIcon10 />
    </div>
  );
}

function Frame115() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[16px] items-center ml-[1320px] mt-[738.01px] relative">
      <NavigationButton9 />
      <NavigationButton10 />
    </div>
  );
}

function Group11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Video />
      <Frame115 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Group11 />
    </div>
  );
}

function TalkToAiAnytime() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0" data-name="Talk to AI. Anytime.">
      <Header1 />
      <p className="absolute bottom-[89.01px] font-['Manrope:Regular',sans-serif] leading-[normal] left-[688px] not-italic text-[40px] text-center text-nowrap text-white translate-x-[-50%] translate-y-[100%]">ChatGPT was blind. Not anymore.</p>
      <Frame64 />
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex flex-col gap-[19.111px] items-center justify-center not-italic relative shrink-0 text-center" data-name="Header">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[57.333px] relative shrink-0 text-[#0a0a0a] text-[64px] text-nowrap">Stream Your World</p>
      <p className="font-['Manrope:Regular',sans-serif] leading-[normal] relative shrink-0 text-[28px] text-black w-[1094px]">{`Share your best moments, hands-free. Instantly stream to any social media platform, including YouTube, X, Twitch, Instagram, Facebook, OnlyFans, and more. `}</p>
    </div>
  );
}

function NavigationIcon11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Navigation Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Navigation Icon">
          <path d={svgPaths.p2ab6c700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function NavigationButton11() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(255,255,255,0.4)] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[40px]" data-name="Navigation Button">
      <NavigationIcon11 />
    </div>
  );
}

function NavigationIcon12() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Navigation Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Navigation Icon">
          <g id="Vector"></g>
          <path d={svgPaths.pa978b00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function NavigationButton12() {
  return (
    <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(255,255,255,0.4)] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[40px]" data-name="Navigation Button">
      <NavigationIcon12 />
    </div>
  );
}

function Frame116() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[16px] items-center ml-[1320px] mt-[733.99px] relative">
      <NavigationButton11 />
      <NavigationButton12 />
    </div>
  );
}

function Group12() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[815px] ml-0 mt-0 relative rounded-[24px] w-[1452px]" data-name="Birthday party 1">
        <video 
          autoPlay 
          muted 
          className="absolute max-w-none object-cover rounded-[24px] size-full z-10" 
          controlsList="nodownload" 
          loop 
          playsInline 
          preload="auto"
          aria-label="Stream your world demonstration video"
        >
          <source src="/assets/Birthday%20party.mov" type="video/quicktime" />
        </video>
      </div>
      <Frame116 />
    </div>
  );
}

function Frame155() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0">
      <Group12 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0">
      <Header2 />
      <Frame155 />
    </div>
  );
}

function Frame152() {
  return (
    <div className="absolute h-[573px] left-px top-[130.13px] w-[1449px]">
      <div className="absolute inset-[0_-1.38%_-6.98%_-1.38%]" style={{ "--fill-0": "rgba(245, 245, 245, 1)" } as React.CSSProperties}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1489 613">
          <g filter="url(#filter0_dd_1_5331)" id="Frame 1984078264">
            <g clipPath="url(#clip0_1_5331)">
              <path d={svgPaths.p3d3cb680} fill="var(--fill-0, #F5F5F5)" />
              <g filter="url(#filter1_f_1_5331)" id="Ellipse 2342">
                <circle cx="1515.5" cy="559.5" fill="var(--fill-0, #40CF8F)" r="269.5" />
              </g>
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="613" id="filter0_dd_1_5331" width="1489" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="erode" radius="6" result="effect1_dropShadow_1_5331" />
              <feOffset dy="8" />
              <feGaussianBlur stdDeviation="5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_5331" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="erode" radius="5" result="effect2_dropShadow_1_5331" />
              <feOffset dy="20" />
              <feGaussianBlur stdDeviation="12.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="effect1_dropShadow_1_5331" mode="normal" result="effect2_dropShadow_1_5331" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_1_5331" mode="normal" result="shape" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1539" id="filter1_f_1_5331" width="1539" x="746" y="-210">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_5331" stdDeviation="250" />
            </filter>
            <clipPath id="clip0_1_5331">
              <path d={svgPaths.p3d3cb680} fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Manrope:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-black w-[553px]">{`It’s the industry-leading operating system built for  Even Realities, Vuzix and more.`}</p>
    </div>
  );
}

function Frame110() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[83px] top-[219.13px]">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0a0a0a] text-[56px] w-[711px]">The Only Smart Glasses with an App Store</p>
      <p className="font-['Manrope:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[28px] text-black w-[min-content]">{`MentraOS gives you access to captions, AI, and other Mini Apps on your smart glasses. `}</p>
      <Frame58 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute h-[243.228px] left-[9.96px] top-[423.66px] w-[371.82px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 371.82 243.228">
        <g id="Group 1597880391">
          <rect fill="var(--fill-0, white)" height="243.228" id="Rectangle 161123827" rx="29.9051" width="371.82" x="6.02154e-05" />
          <rect fill="var(--fill-0, #F2F3F4)" height="33.8925" id="Rectangle 161123830" rx="9.96837" width="162.484" x="29.904" y="179.431" />
          <ellipse cx="334.936" cy="36.8834" fill="var(--fill-0, #F2F3F4)" id="Ellipse 1" rx="24.9209" ry="24.9209" />
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute h-[243.228px] left-[9.96px] top-[676.85px] w-[371.82px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 371.82 243.228">
        <g id="Group 1597880392">
          <rect fill="var(--fill-0, white)" height="243.228" id="Rectangle 161123827" rx="29.9051" width="371.82" y="8.17831e-05" />
          <rect fill="var(--fill-0, #F2F3F4)" height="33.8925" id="Rectangle 161123830" rx="9.96837" width="162.484" x="39.8762" y="179.43" />
          <ellipse cx="334.936" cy="36.8827" fill="var(--fill-0, #F2F3F4)" id="Ellipse 1" rx="24.9209" ry="24.9209" />
        </g>
      </svg>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-[9.96px] top-[423.66px]">
      <Group8 />
      <Group9 />
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="absolute h-[21px] left-0 top-[831px] w-[393px]" data-name="Home Indicator">
      <div className="absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 translate-x-[-50%] w-[139px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="bg-[#171717] h-[5px] rounded-[100px] w-[139px]" data-name="Home Indicator" />
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute inset-[10.7%_10.7%_10.71%_10.72%]" data-name="icon3_2">
      <div className="absolute inset-[-4.89%_-4.89%_-4.9%_-4.9%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.3614 22.3614">
          <g id="icon3_2">
            <path d={svgPaths.p14690580} id="Oval" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99367" />
            <ellipse cx="11.1805" cy="11.1808" id="Oval Copy" rx="5.55381" ry="5.55381" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99367" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute left-[24.92px] overflow-clip rounded-[6.479px] size-[25.918px] top-[64.79px]">
      <div className="absolute inset-0 rounded-[6.479px]" />
      <Icon />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute left-[340.92px] size-[25.918px] top-[64.79px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.9178 25.9178">
        <g id="Frame 54">
          <g clipPath="url(#clip0_1_5279)">
            <g id="Rectangle 1552"></g>
            <path d={svgPaths.p3e0cb400} id="Vector 153" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99367" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_5279">
            <rect fill="white" height="25.9178" rx="6.47944" width="25.9178" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TitleContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[217.978px]" data-name="Title Container">
      <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[28.126px] not-italic relative shrink-0 text-[#0a0a0a] text-[20.09px] text-center text-nowrap">Mentra Store</p>
    </div>
  );
}

function Logo1() {
  return (
    <div className="h-[16.072px] relative shrink-0 w-[33.149px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.1487 16.0721">
        <g id="Logo">
          <rect fill="var(--fill-0, #00B869)" height="7.14315" id="Rectangle 1" width="7.85341" y="8.92894" />
          <path d={svgPaths.p196fc480} fill="var(--fill-0, #00B869)" id="Rectangle 2" />
          <path d={svgPaths.pb3e7400} fill="var(--fill-0, #00B869)" id="Rectangle 3" />
        </g>
      </svg>
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex items-center justify-between px-[24.108px] py-0 relative shrink-0 w-[391.757px]" data-name="Header">
      <TitleContainer />
      <Logo1 />
    </div>
  );
}

function SearchIcon() {
  return (
    <div className="relative shrink-0 size-[24.108px]" data-name="Search Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.1081 24.1081">
        <g id="Search Icon">
          <g id="Vector"></g>
          <path d={svgPaths.p34ec46c0} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" strokeWidth="2.00901" />
          <path d={svgPaths.p130f0bc0} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3" strokeWidth="2.00901" />
        </g>
      </svg>
    </div>
  );
}

function SearchContainer() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[10.045px] h-[45.203px] items-center px-[16.072px] py-[10.045px] relative rounded-[24.108px] shrink-0 w-[343.541px]" data-name="Search Container">
      <SearchIcon />
      <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14.063px] text-[rgba(0,0,0,0.3)] text-center text-nowrap">{`Search app `}</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute content-stretch flex gap-[4.225px] items-center left-1/2 top-[10.56px] translate-x-[-50%]">
      <div className="bg-[rgba(255,255,255,0.2)] h-[2.112px] rounded-[49.644px] shrink-0 w-[16.9px]" />
      <div className="bg-[rgba(255,255,255,0.6)] h-[2.112px] rounded-[49.644px] shrink-0 w-[15.844px]" />
      <div className="bg-[rgba(255,255,255,0.2)] h-[2.112px] rounded-[49.644px] shrink-0 w-[15.844px]" />
      <div className="bg-[rgba(255,255,255,0.2)] h-[2.112px] rounded-[49.644px] shrink-0 w-[16.9px]" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute h-[24.294px] left-[calc(50%-0.59px)] top-[calc(50%-0.45px)] translate-x-[-50%] translate-y-[-50%] w-[35.371px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.3712 24.2936">
        <g id="Frame 37">
          <path clipRule="evenodd" d={svgPaths.p4ccbd40} fill="var(--fill-0, white)" fillRule="evenodd" id="path0" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[calc(50%-0.59px)] top-[calc(50%-0.45px)] translate-x-[-50%] translate-y-[-50%]">
      <Frame9 />
    </div>
  );
}

function Icons() {
  return (
    <div className="bg-gradient-to-b from-[#64ecad] overflow-clip relative rounded-[10.412px] shrink-0 size-[48.587px] to-[#12a96a]" data-name="Icons">
      <Group4 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col h-[48.587px] items-start leading-[normal] not-italic pb-[2.112px] pt-0 px-0 relative shrink-0 text-nowrap">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] relative shrink-0 text-[15.844px] text-center text-white">Live Captions</p>
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] relative shrink-0 text-[11.619px] text-white">Language • Communication</p>
      <p className="font-['Red_Hat_Display:Regular',sans-serif] relative shrink-0 text-[#e5e5e5] text-[9.506px]">Overcome hearing challenges</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[6.337px] items-start relative shrink-0">
      <Icons />
      <Frame15 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Red_Hat_Display:Medium',sans-serif] leading-[21.125px] not-italic relative shrink-0 text-[#f5f5f5] text-[14.787px] text-nowrap">Get Now</p>
    </div>
  );
}

function Buttons() {
  return (
    <div className="bg-[#2e610b] content-stretch flex flex-col h-[38.025px] items-center justify-center px-[16.9px] py-[8.45px] relative rounded-[25.35px] shadow-[0px_1.056px_2.112px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Buttons">
      <Text />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[315.817px]">
      <Frame28 />
      <Buttons />
    </div>
  );
}

function Frame30() {
  return (
    <div className="absolute backdrop-blur-[21.125px] backdrop-filter bg-[rgba(30,133,89,0.6)] content-stretch flex flex-col h-[69.712px] items-start left-0 px-[11.619px] py-[9.506px] top-[214.42px] w-[344.336px]">
      <Frame35 />
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="relative size-[19.012px]" data-name="arrow-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.0124 19.0124">
        <g id="arrow-left">
          <path d={svgPaths.p24963ddb} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58437" />
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute backdrop-blur-[0.792px] backdrop-filter bg-[rgba(255,255,255,0.3)] content-stretch flex items-center left-[295.75px] p-[6.337px] rounded-[63.375px] size-[31.687px] top-[104.04px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <ArrowLeft />
        </div>
      </div>
    </div>
  );
}

function ArrowLeft1() {
  return (
    <div className="relative size-[19.012px]" data-name="arrow-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.0124 19.0124">
        <g id="arrow-left">
          <path d={svgPaths.p12984180} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58437" />
        </g>
      </svg>
    </div>
  );
}

function Frame32() {
  return (
    <div className="backdrop-blur-[0.792px] backdrop-filter bg-[rgba(255,255,255,0.3)] content-stretch flex items-center p-[6.337px] relative rounded-[63.375px] size-[31.687px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <ArrowLeft1 />
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-gradient-to-b from-[#ffd900] from-[65.865%] h-[284.13px] overflow-clip relative rounded-[20.069px] shrink-0 to-[#788b0d] w-[344.336px]">
      <div className="absolute h-[118.932px] left-[-106.82px] top-[101.82px] w-[305.886px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 305.886 118.932">
          <path d={svgPaths.p343100} fill="var(--fill-0, #A7C01B)" id="Rectangle 160" />
        </svg>
      </div>
      <div className="absolute h-[178.816px] left-[-84.5px] top-0 w-[365.352px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 365.352 178.816">
          <path d={svgPaths.p174000} fill="var(--fill-0, #DE4D4D)" id="Rectangle 159" />
        </svg>
      </div>
      <div className="absolute h-[245.049px] left-[107.21px] top-[-19.54px] w-[236.964px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 236.964 245.049">
          <path d={svgPaths.p154e880} fill="var(--fill-0, #FFD900)" id="Rectangle 158" />
        </svg>
      </div>
      <div className="absolute flex h-[152.314px] items-center justify-center left-[166.04px] top-[73.94px] w-[149.776px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[152.314px] relative w-[149.776px]" data-name="image 28">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage28} />
          </div>
        </div>
      </div>
      <Frame14 />
      <Frame30 />
      <div className="absolute flex flex-col font-['Red_Hat_Display:Regular',sans-serif] justify-center leading-[0] left-[11.62px] not-italic text-[34.077px] text-white top-[43.62px] translate-y-[-50%] w-[173.224px]">
        <p className="leading-[normal]">Captions</p>
      </div>
      <div className="absolute flex flex-col font-['Red_Hat_Display:Regular',sans-serif] justify-center leading-[0] left-[12.68px] not-italic text-[12.779px] text-nowrap text-white top-[77.54px] tracking-[1.2779px] translate-y-[-50%]">
        <p className="leading-[normal]">{`Subtitles in real life. `}</p>
      </div>
      <Frame31 />
      <div className="absolute flex items-center justify-center left-[11.62px] size-[31.687px] top-[104.04px]">
        <div className="flex-none rotate-[180deg]">
          <Frame32 />
        </div>
      </div>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24.108px] py-0 relative shrink-0 w-[391.757px]" data-name="Wrapper">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[22.434px] not-italic relative shrink-0 text-[#0a0a0a] text-[20.09px] text-center text-nowrap">Must-Have Apps</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex h-[6.211px] items-center justify-between relative shrink-0 w-full">
      <div className="h-[10.547px] relative shrink-0 w-[9.668px]">
        <div className="absolute inset-[7.57%_12.45%_6.75%_0]" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.46507 9.03679">
            <path d={svgPaths.p2a191900} fill="var(--fill-0, white)" id="Rectangle 4209" />
          </svg>
        </div>
      </div>
      <div className="bg-white h-[4.922px] rounded-[7.098px] shrink-0 w-[20.216px]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4.395px] items-start left-[calc(50%-0.48px)] top-[calc(50%-0.57px)] translate-x-[-50%] translate-y-[-50%] w-[31.428px]">
      <div className="bg-[rgba(0,0,0,0.3)] h-[4.395px] rounded-[7.098px] shrink-0 w-full" />
      <div className="bg-[rgba(0,0,0,0.3)] h-[4.395px] rounded-[7.098px] shrink-0 w-[22.852px]" />
      <Frame5 />
      <div className="bg-white h-[4.395px] rounded-[7.098px] shrink-0 w-full" />
    </div>
  );
}

function Icons1() {
  return (
    <div className="absolute bg-gradient-to-b from-[#5cf777] left-0 overflow-clip rounded-[13.42px] size-[56.252px] to-[#0ebc29] top-[-0.19px]" data-name="Icons">
      <Frame7 />
    </div>
  );
}

function Icons2() {
  return (
    <div className="bg-gradient-to-b from-[#5cf777] overflow-clip relative rounded-[13.42px] shrink-0 size-[56.252px] to-[#0ebc29]" data-name="Icons">
      <Icons1 />
    </div>
  );
}

function AppInfoContainer() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[127.572px]" data-name="App Info Container">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] relative shrink-0 text-[#0a0a0a] text-[16.072px] text-center text-nowrap">Teleprompter</p>
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] relative shrink-0 text-[#0a0a0a] text-[12.054px] text-nowrap">{`Language • Communication `}</p>
      <p className="font-['Red_Hat_Display:Regular',sans-serif] relative shrink-0 text-[#737373] text-[10.045px] w-[152.685px]">Overcome hearing challenges...</p>
    </div>
  );
}

function AppContainer() {
  return (
    <div className="content-stretch flex gap-[8.027px] items-center justify-center relative shrink-0" data-name="App Container">
      <Icons2 />
      <AppInfoContainer />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Red_Hat_Display:Medium',sans-serif] leading-[20.09px] not-italic relative shrink-0 text-[#f5f5f5] text-[14.063px] text-nowrap">Get</p>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col h-[36.162px] items-center justify-center px-[16.072px] py-[8.036px] relative rounded-[24.046px] shadow-[0px_1.005px_2.009px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Buttons">
      <Text1 />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24.108px] py-0 relative w-full">
          <AppContainer />
          <Buttons1 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute h-[29.131px] left-[7.03px] top-[calc(50%+0.19px)] translate-y-[-50%] w-[42.414px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.4138 29.1307">
        <g id="Frame 37">
          <path clipRule="evenodd" d={svgPaths.p18a504c0} fill="var(--fill-0, white)" fillRule="evenodd" id="path0" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[7.03px] top-[calc(50%+0.19px)] translate-y-[-50%]">
      <Frame10 />
    </div>
  );
}

function Icons3() {
  return (
    <div className="bg-gradient-to-b from-[#64ecad] overflow-clip relative rounded-[14.063px] shrink-0 size-[56.252px] to-[#12a96a]" data-name="Icons">
      <Group5 />
    </div>
  );
}

function AppInfoContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[127.572px]" data-name="App Info Container">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] relative shrink-0 text-[#0a0a0a] text-[16.072px] text-center text-nowrap">Live Captions</p>
      <div className="font-['Red_Hat_Display:SemiBold',sans-serif] h-[18.081px] relative shrink-0 text-[#0a0a0a] text-[12.054px] w-full">
        <p className="mb-0">Social • News • Media</p>
        <p>&nbsp;</p>
      </div>
      <p className="font-['Red_Hat_Display:Regular',sans-serif] min-w-full relative shrink-0 text-[#737373] text-[10.045px] w-[min-content]">Use X on your smart glasses</p>
    </div>
  );
}

function AppContainer1() {
  return (
    <div className="content-stretch flex gap-[8.027px] items-center justify-center relative shrink-0" data-name="App Container">
      <Icons3 />
      <AppInfoContainer1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Red_Hat_Display:Medium',sans-serif] leading-[20.09px] not-italic relative shrink-0 text-[#f5f5f5] text-[14.063px] text-nowrap">Installed</p>
    </div>
  );
}

function Buttons2() {
  return (
    <div className="bg-[#737373] content-stretch flex flex-col h-[36.162px] items-center justify-center px-[16.072px] py-[8.036px] relative rounded-[24.046px] shadow-[0px_1.005px_2.009px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Buttons">
      <Text2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24.108px] py-0 relative w-full">
          <AppContainer1 />
          <Buttons2 />
        </div>
      </div>
    </div>
  );
}

function DescriptionContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[12.054px] items-center relative shrink-0 w-full" data-name="Description Container">
      <Container />
      <div className="h-0 relative shrink-0 w-[343.541px]">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(229, 229, 229, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343.541 1.00451">
            <line id="Line 11" stroke="var(--stroke-0, #E5E5E5)" strokeWidth="1.00451" x2="343.541" y1="0.502253" y2="0.502253" />
          </svg>
        </div>
      </div>
      <Container1 />
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24.108px] py-0 relative shrink-0 w-[391.757px]" data-name="Wrapper">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[22.434px] not-italic relative shrink-0 text-[#0a0a0a] text-[20.09px] text-center text-nowrap">Editor’s Choice</p>
    </div>
  );
}

function Icons4() {
  return (
    <div className="relative shrink-0 size-[56.252px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56.2523 56.2523">
        <g id="Icons">
          <path d={svgPaths.p269a0c00} fill="url(#paint0_linear_1_5198)" />
          <path clipRule="evenodd" d={svgPaths.p1feef700} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_5198" x1="28.1261" x2="28.1261" y1="0" y2="56.2523">
            <stop stopColor="#15C7FA" />
            <stop offset="1" stopColor="#216FF0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function AppInfoContainer2() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 text-nowrap w-[127.572px]" data-name="App Info Container">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] relative shrink-0 text-[#0a0a0a] text-[16.072px] text-center">Translation</p>
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] relative shrink-0 text-[#0a0a0a] text-[12.054px]">Language • Communication</p>
      <p className="font-['Red_Hat_Display:Regular',sans-serif] relative shrink-0 text-[#737373] text-[10.045px]">Translate 100s of languages...</p>
    </div>
  );
}

function AppContainer2() {
  return (
    <div className="content-stretch flex gap-[8.027px] items-center justify-center relative shrink-0" data-name="App Container">
      <Icons4 />
      <AppInfoContainer2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Red_Hat_Display:Medium',sans-serif] leading-[20.09px] not-italic relative shrink-0 text-[#f5f5f5] text-[14.063px] text-nowrap">Get</p>
    </div>
  );
}

function Buttons3() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col h-[36.162px] items-center justify-center px-[16.072px] py-[8.036px] relative rounded-[24.046px] shadow-[0px_1.005px_2.009px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Buttons">
      <Text3 />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24.108px] py-0 relative w-full">
          <AppContainer2 />
          <Buttons3 />
        </div>
      </div>
    </div>
  );
}

function Icons5() {
  return (
    <div className="relative shrink-0 size-[56.252px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56.2523 56.2523">
        <g id="Icons">
          <g clipPath="url(#clip0_1_5247)">
            <path d={svgPaths.pcfd4c00} fill="url(#paint0_linear_1_5247)" />
            <path d={svgPaths.p1fc03700} fill="url(#paint1_radial_1_5247)" id="Vector" />
            <path d={svgPaths.p313b0580} id="Ellipse 139" stroke="var(--stroke-0, #DEE3E8)" strokeWidth="2.76239" />
            <path d={svgPaths.p7c03a40} id="Ellipse 140" stroke="url(#paint2_radial_1_5247)" strokeWidth="2.76239" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_5247" x1="28.1262" x2="28.1262" y1="0" y2="56.2523">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#DDE2E7" />
          </linearGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-37.1667 -27.1217 20.818 -29.8922 49.2208 39.995)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_5247" r="1">
            <stop stopColor="#7A66FB" />
            <stop offset="0.440198" stopColor="#52A2F4" />
            <stop offset="0.702" stopColor="#FC5D6D" />
            <stop offset="1" stopColor="#E85E7B" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(16.5743 43.5108) rotate(-50.553) scale(51.3822)" gradientUnits="userSpaceOnUse" id="paint2_radial_1_5247" r="1">
            <stop stopColor="#E95E7A" />
            <stop offset="0.274038" stopColor="#F95F70" />
            <stop offset="0.625" stopColor="#569DF5" />
            <stop offset="1" stopColor="#7076F9" />
          </radialGradient>
          <clipPath id="clip0_1_5247">
            <path d={svgPaths.pcfd4c00} fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AppInfoContainer3() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[127.572px]" data-name="App Info Container">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] relative shrink-0 text-[#0a0a0a] text-[16.072px] text-center text-nowrap">Dash</p>
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] relative shrink-0 text-[#0a0a0a] text-[12.054px] text-nowrap">{`Language • Communication `}</p>
      <p className="font-['Red_Hat_Display:Regular',sans-serif] relative shrink-0 text-[#737373] text-[10.045px] w-[152.685px]">Overcome hearing challenges...</p>
    </div>
  );
}

function AppContainer3() {
  return (
    <div className="content-stretch flex gap-[8.027px] items-center justify-center relative shrink-0" data-name="App Container">
      <Icons5 />
      <AppInfoContainer3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Red_Hat_Display:Medium',sans-serif] leading-[20.09px] not-italic relative shrink-0 text-[#f5f5f5] text-[14.063px] text-nowrap">Get</p>
    </div>
  );
}

function Buttons4() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col h-[36.162px] items-center justify-center px-[16.072px] py-[8.036px] relative rounded-[24.046px] shadow-[0px_1.005px_2.009px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Buttons">
      <Text4 />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24.108px] py-0 relative w-full">
          <AppContainer3 />
          <Buttons4 />
        </div>
      </div>
    </div>
  );
}

function Icons6() {
  return (
    <div className="relative shrink-0 size-[56.252px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56.2523 56.2523">
        <g id="Icons">
          <path d={svgPaths.p1e25600} fill="url(#paint0_linear_1_5186)" />
          <g id="Vector (Stroke)">
            <path clipRule="evenodd" d={svgPaths.p38efca80} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path d={svgPaths.p1d5c8900} stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.200901" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_5186" x1="28.1262" x2="28.1262" y1="0" y2="56.2523">
            <stop stopColor="#EF50FC" />
            <stop offset="1" stopColor="#862CC3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function AppInfoContainer4() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 w-[127.572px]" data-name="App Info Container">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] relative shrink-0 text-[#0a0a0a] text-[16.072px] text-center text-nowrap">Mira</p>
      <div className="font-['Red_Hat_Display:SemiBold',sans-serif] h-[18.081px] relative shrink-0 text-[#0a0a0a] text-[12.054px] w-full">
        <p className="mb-0">Social • News • Media</p>
        <p>&nbsp;</p>
      </div>
      <p className="font-['Red_Hat_Display:Regular',sans-serif] min-w-full relative shrink-0 text-[#737373] text-[10.045px] w-[min-content]">Use X on your smart glasses</p>
    </div>
  );
}

function AppContainer4() {
  return (
    <div className="content-stretch flex gap-[8.027px] items-center justify-center relative shrink-0" data-name="App Container">
      <Icons6 />
      <AppInfoContainer4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Red_Hat_Display:Medium',sans-serif] leading-[20.09px] not-italic relative shrink-0 text-[#f5f5f5] text-[14.063px] text-nowrap">Get</p>
    </div>
  );
}

function Buttons5() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col h-[36.162px] items-center justify-center px-[16.072px] py-[8.036px] relative rounded-[24.046px] shadow-[0px_1.005px_2.009px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Buttons">
      <Text5 />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24.108px] py-0 relative w-full">
          <AppContainer4 />
          <Buttons5 />
        </div>
      </div>
    </div>
  );
}

function AppListContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[12.054px] items-center relative shrink-0 w-full" data-name="App List Container">
      <Container2 />
      <div className="h-0 relative shrink-0 w-[343.541px]">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(229, 229, 229, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343.541 1.00451">
            <line id="Line 11" stroke="var(--stroke-0, #E5E5E5)" strokeWidth="1.00451" x2="343.541" y1="0.502253" y2="0.502253" />
          </svg>
        </div>
      </div>
      <Container3 />
      <div className="h-0 relative shrink-0 w-[343.541px]">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(229, 229, 229, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343.541 1.00451">
            <line id="Line 11" stroke="var(--stroke-0, #E5E5E5)" strokeWidth="1.00451" x2="343.541" y1="0.502253" y2="0.502253" />
          </svg>
        </div>
      </div>
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[24.108px] items-center relative shrink-0 w-[391.757px]" data-name="Container">
      <Header3 />
      <SearchContainer />
      <Frame24 />
      <Wrapper />
      <DescriptionContainer />
      <Wrapper1 />
      <AppListContainer />
    </div>
  );
}

function Home() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="home">
          <g id="Vector">
            <path d={svgPaths.p3039c600} fill="var(--fill-0, #F5F5F5)" />
            <path d="M9 22V12H15V22" fill="var(--fill-0, #F5F5F5)" />
            <path d={svgPaths.p2ff764c0} stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.00901" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex h-[30.135px] items-center p-[8.036px] relative rounded-[12.023px] shrink-0">
      <Home />
    </div>
  );
}

function NavButton() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4.018px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Nav Button 2.1">
      <Frame16 />
      <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#737373] text-[14.063px] text-center text-nowrap">Home</p>
    </div>
  );
}

function ShoppingBag() {
  return (
    <div className="absolute left-[calc(50%-0.33px)] size-[24px] top-[calc(50%-0.46px)] translate-x-[-50%] translate-y-[-50%]" data-name="shopping-bag">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="shopping-bag">
          <g id="Vector">
            <path d={svgPaths.pb758480} fill="var(--fill-0, #F5F5F5)" />
            <path clipRule="evenodd" d={svgPaths.p2fbef980} fill="var(--fill-0, #F5F5F5)" fillRule="evenodd" />
            <path d={svgPaths.p441a800} stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.00451" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ShoppingBagFilled() {
  return (
    <div className="relative shrink-0 size-[24.108px]" data-name="shopping-bag-Filled">
      <ShoppingBag />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#00b869] content-stretch flex h-[30.135px] items-center justify-center p-[8.036px] relative rounded-[24.046px] shrink-0 w-[50.225px]">
      <ShoppingBagFilled />
    </div>
  );
}

function NavButton1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4.018px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Nav Button 2.1">
      <Frame17 />
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0a0a0a] text-[14.063px] text-center text-nowrap">Store</p>
    </div>
  );
}

function UserRound() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="user-round">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="user-round">
          <path d={svgPaths.pea1e2e0} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.00901" />
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex h-[30.135px] items-center p-[8.036px] relative rounded-[12.023px] shrink-0">
      <UserRound />
    </div>
  );
}

function NavButton2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4.018px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Nav Button 2.1">
      <Frame18 />
      <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#737373] text-[14.063px] text-center text-nowrap">Account</p>
    </div>
  );
}

function NavButtons() {
  return (
    <div className="content-stretch flex items-end justify-center relative shrink-0 w-full" data-name="Nav buttons">
      <NavButton />
      <NavButton1 />
      <NavButton2 />
    </div>
  );
}

function Component() {
  return (
    <div className="absolute backdrop-blur-[12.556px] backdrop-filter bg-[#f5f5f5] bottom-[-1.41px] left-0 w-[391.757px]" data-name="Component 3">
      <div className="content-stretch flex flex-col gap-[6.027px] items-center justify-end overflow-clip px-0 py-[12.054px] relative rounded-[inherit] w-full">
        <NavButtons />
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-[1.005px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Store() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[48.216px] h-[855.839px] items-center left-0 overflow-clip pb-[32.144px] pt-[69.779px] px-[32.144px] top-[-3.27px] w-[391.757px]" data-name="Store">
      <Component />
      <Container5 />
    </div>
  );
}

function Time() {
  return (
    <div className="absolute h-[53.829px] left-0 right-[64.25%] top-1/2 translate-y-[-50%]" data-name="Time">
      <p className="absolute font-['SF_Pro:Semibold',sans-serif] font-[590] inset-[33.96%_36.63%_25.17%_36.96%] leading-[21.93px] text-[16.946px] text-black text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        9:41
      </p>
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute bottom-[33.33%] contents left-[calc(50%+24.34px)] top-[42.59%] translate-x-[-50%]" data-name="Battery">
      <div className="absolute border-[0.997px] border-black border-solid bottom-[33.33%] left-[calc(50%+23.18px)] opacity-[0.35] rounded-[4.286px] top-[42.59%] translate-x-[-50%] w-[24.921px]" data-name="Border" />
      <div className="absolute bottom-[41.01%] left-[calc(50%+37.3px)] top-[51.45%] translate-x-[-50%] w-[1.324px]" data-name="Cap">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.32384 4.06258">
          <path d={svgPaths.pc445800} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute bg-black bottom-[37.04%] left-[calc(50%+23.18px)] rounded-[2.492px] top-[46.3%] translate-x-[-50%] w-[20.934px]" data-name="Capacity" />
    </div>
  );
}

function Levels() {
  return (
    <div className="absolute h-[53.829px] left-[64.25%] right-0 top-1/2 translate-y-[-50%]" data-name="Levels">
      <Battery />
      <div className="absolute bottom-[33.4%] left-[calc(50%-4.97px)] top-[43.77%] translate-x-[-50%] w-[17.087px]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.0875 12.2893">
          <path clipRule="evenodd" d={svgPaths.p57b7500} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
        </svg>
      </div>
      <div className="absolute bottom-[33.77%] left-[calc(50%-30.55px)] top-[43.59%] translate-x-[-50%] w-[19.139px]" data-name="Cellular Connection">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.1393 12.1877">
          <path clipRule="evenodd" d={svgPaths.p1e796072} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
        </svg>
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute h-[53.829px] left-0 right-0 top-0" data-name="Status Bar">
      <Time />
      <Levels />
    </div>
  );
}

function Frame45() {
  return (
    <div className="[grid-area:1_/_1] bg-white h-[847.312px] ml-[19.95px] mt-[16.8px] overflow-x-clip overflow-y-auto relative rounded-[56.179px] w-[391.757px]">
      <StatusBar />
      <div className="absolute bg-[#0400ce] h-[849.305px] left-0 right-0 top-0" />
      <div className="absolute bg-black blur-[101.677px] filter h-[868.245px] left-[-415.68px] rounded-[996.837px] top-[496.42px] w-[846.315px]" />
      <div className="absolute bg-white blur-[99.684px] filter h-[868.245px] left-[-21.93px] rounded-[996.837px] top-[-484.46px] w-[846.315px]" />
      <Group10 />
      <HomeIndicator />
      <div className="absolute flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-end leading-[0] left-[24.92px] not-italic text-[59.81px] text-nowrap text-white top-[383.78px] tracking-[0.2392px] translate-y-[-100%]">
        <p className="leading-[0.95]">Mockup 👾</p>
      </div>
      <div className="absolute flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-end leading-[0] left-[24.92px] not-italic text-[16.946px] text-nowrap text-white top-[312.01px] tracking-[0.2392px] translate-y-[-100%]">
        <p className="leading-none">🧑‍💻 Greg Riaguzov</p>
      </div>
      <Frame12 />
      <Frame13 />
      <Store />
    </div>
  );
}

function IPhone() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="iPhone">
      <div className="[grid-area:1_/_1] h-[849.504px] ml-[19.95px] mt-[16.8px] relative rounded-[57.754px] w-[391.675px]" data-name="👈 screen">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[57.754px] size-full" src={imgScreen} />
      </div>
      <div className="[grid-area:1_/_1] h-[880.481px] ml-0 mt-0 relative w-[432.103px]" data-name="🎨 change color here">
        <img alt="" className="block max-w-none size-full" height="880.481" src={imgChangeColorHere} width="432.103" />
      </div>
      <Frame45 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="absolute content-stretch flex h-[703px] items-start justify-center left-[933px] overflow-clip top-[-0.28px]">
      <IPhone />
    </div>
  );
}

function Frame127() {
  return (
    <div className="h-[703px] relative shrink-0 w-[1452px]">
      <AppStoreSection />
    </div>
  );
}

function Frame136() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center not-italic relative shrink-0 text-nowrap">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[normal] relative shrink-0 text-[#0a0a0a] text-[56px]">Enhance Your Reality with New Apps</p>
      <div className="font-['Manrope:Regular',sans-serif] leading-[normal] relative shrink-0 text-[32px] text-black text-center">
        <p className="mb-0">{`Set reminders, take notes, stream to YouTube, `}</p>
        <p>answer calls, and discover new apps.</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute h-[48.776px] left-[calc(50%-0.38px)] top-[calc(50%-0.1px)] translate-x-[-50%] translate-y-[-50%] w-[71.017px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71.017 48.7759">
        <g id="Frame 37">
          <path clipRule="evenodd" d={svgPaths.p27500900} fill="var(--fill-0, white)" fillRule="evenodd" id="path0" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[calc(50%-0.38px)] top-[calc(50%-0.1px)] translate-x-[-50%] translate-y-[-50%]">
      <Frame11 />
    </div>
  );
}

function Icons7() {
  return (
    <div className="[grid-area:1_/_1] bg-gradient-to-b from-[#64ecad] ml-[234.73px] mt-[106.3px] overflow-clip relative rounded-[20.904px] size-[97.552px] to-[#12a96a]" data-name="Icons">
      <Group6 />
    </div>
  );
}

function Icons8() {
  return (
    <div className="relative size-[97.552px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97.5519 97.5519">
        <g id="Icons">
          <path d={svgPaths.p3985d870} fill="url(#paint0_linear_1_5175)" />
          <path clipRule="evenodd" d={svgPaths.p2a0670f0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_5175" x1="48.7759" x2="48.7759" y1="0" y2="97.5519">
            <stop stopColor="#15C7FA" />
            <stop offset="1" stopColor="#216FF0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute h-[19.162px] left-[17.42px] top-[41.66px] w-[11.497px]">
      <div className="absolute inset-[-25%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4972 23.9525">
          <g id="Frame 21">
            <line id="Line 12" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="4.79049" x1="2.39529" x2="9.10198" y1="2.39525" y2="2.39525" />
            <line id="Line 13" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="4.79049" x1="2.39525" x2="9.10194" y1="11.9763" y2="11.9763" />
            <line id="Line 11" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="4.79049" x1="2.39525" x2="9.10194" y1="21.5573" y2="21.5573" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[17.42px] top-[20.58px]">
      <div className="absolute border-[4.79px] border-black border-solid left-[21.25px] rounded-[7.665px] size-[57.486px] top-[20.58px]" />
      <Frame6 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[17.42px] top-[20.58px]">
      <div className="absolute left-[calc(50%+3.16px)] size-[30.659px] top-[calc(50%+0.77px)] translate-x-[-50%] translate-y-[-50%]" data-name="Vector (Stroke)">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(10, 10, 10, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.6592 30.6592">
            <path clipRule="evenodd" d={svgPaths.p2a415bf2} fill="var(--fill-0, #0A0A0A)" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
      </div>
      <Group2 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[calc(50%-0.7px)] top-[calc(50%+0.55px)] translate-x-[-50%] translate-y-[-50%]">
      <Group3 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute h-[186.394px] left-[-36.43px] top-[-45.88px] w-[179.425px]">
      <div className="absolute inset-[-14.02%_-17.21%_-20.43%_-19.04%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 244.477 250.599">
          <g id="Group 19">
            <g filter="url(#filter0_f_1_5263)" id="Ellipse 134">
              <circle cx="88.1719" cy="85.3579" fill="var(--fill-0, #DB93FF)" r="47.0339" transform="rotate(-180 88.1719 85.3579)" />
            </g>
            <g filter="url(#filter1_f_1_5263)" id="Ellipse 131">
              <circle cx="168.304" cy="158.522" fill="url(#paint0_linear_1_5263)" r="45.2919" transform="rotate(-180 168.304 158.522)" />
            </g>
            <g filter="url(#filter2_f_1_5263)" id="Ellipse 132">
              <circle cx="87.3009" cy="168.103" fill="var(--fill-0, #FF2D55)" r="44.4209" transform="rotate(-180 87.3009 168.103)" />
            </g>
            <g filter="url(#filter3_f_1_5263)" id="Ellipse 133">
              <circle cx="78.5909" cy="133.263" fill="var(--fill-0, #FF607F)" r="44.4209" transform="rotate(-180 78.5909 133.263)" />
            </g>
            <g filter="url(#filter4_f_1_5263)" id="Ellipse 130">
              <circle cx="131.722" cy="67.9379" fill="var(--fill-0, #32ADE6)" r="41.8079" transform="rotate(-180 131.722 67.9379)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="146.328" id="filter0_f_1_5263" width="146.328" x="15.008" y="12.194">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_5263" stdDeviation="13.065" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="152.346" id="filter1_f_1_5263" width="152.346" x="92.131" y="82.349">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_5263" stdDeviation="15.4404" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="164.992" id="filter2_f_1_5263" width="164.992" x="4.80486" y="85.6068">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_5263" stdDeviation="19.0375" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="157.182" id="filter3_f_1_5263" width="157.182" x="9.70851e-07" y="54.6719">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_5263" stdDeviation="17.085" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="135.876" id="filter4_f_1_5263" width="135.876" x="63.7839" y="-9.13742e-07">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_5263" stdDeviation="13.065" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_5263" x1="202.273" x2="151.834" y1="133.817" y2="213.078">
              <stop stopColor="#FF9500" />
              <stop offset="1" stopColor="#FFB800" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Icons9() {
  return (
    <div className="bg-gradient-to-b from-[#ffffff] overflow-clip relative rounded-[19.841px] size-[97.552px] to-[#dde2e7]" data-name="Icons">
      <Group />
      <Group1 />
    </div>
  );
}

function Svgg() {
  return (
    <div className="absolute inset-[24.67%_13.55%_26.44%_12.5%]" data-name="svgg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72.1401 47.6951">
        <g id="svgg">
          <path clipRule="evenodd" d={svgPaths.p11c4ab00} fill="var(--fill-0, white)" fillRule="evenodd" id="path0" />
        </g>
      </svg>
    </div>
  );
}

function Icons10() {
  return (
    <div className="[grid-area:1_/_1] bg-gradient-to-b from-[#fc681f] ml-0 mt-[113.92px] overflow-clip relative rounded-[20.904px] size-[97.552px] to-[#fa243b]" data-name="Icons">
      <Svgg />
    </div>
  );
}

function CameraIcon() {
  return (
    <div className="absolute h-[54.002px] left-[13.94px] top-[22.32px] w-[69.885px]" data-name="Camera Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69.8848 54.002">
        <g id="Camera Icon">
          <path d={svgPaths.p14c2300} fill="url(#paint0_linear_1_5147)" id="Subtract" />
          <path d={svgPaths.p8570380} fill="var(--fill-0, #2D2C2D)" id="Rectangle 4227" />
          <circle cx="58.7672" cy="17.4716" fill="var(--fill-0, #DC2626)" id="Flash" r="3.61208" stroke="var(--stroke-0, #F1F4F6)" strokeWidth="0.870999" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_5147" x1="34.9424" x2="34.9424" y1="0" y2="54.0019">
            <stop stopColor="#2D2D2D" />
            <stop offset="1" stopColor="#2D2C2E" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Icons11() {
  return (
    <div className="bg-gradient-to-b from-[#f5f5f5] overflow-clip relative rounded-[20.904px] size-[97.552px] to-[#dde2e7]" data-name="Icons">
      <CameraIcon />
    </div>
  );
}

function Group13() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Icons7 />
      <div className="[grid-area:1_/_1] flex items-center justify-center ml-[12.97px] mt-[1.78px] relative size-[105.683px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[5deg]">
          <Icons8 />
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex items-center justify-center ml-[130.22px] mt-0 relative size-[108.713px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[353deg]">
          <Icons9 />
        </div>
      </div>
      <Icons10 />
      <div className="[grid-area:1_/_1] flex items-center justify-center ml-[106.7px] mt-[106.3px] relative size-[119.476px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[15deg]">
          <Icons11 />
        </div>
      </div>
    </div>
  );
}

function Header4() {
  return (
    <div className="content-stretch flex gap-[40px] items-center justify-center relative shrink-0" data-name="Header">
      <Frame136 />
      <Group13 />
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[57.333px] not-italic relative shrink-0 text-[#0a0a0a] text-[40px] text-center text-nowrap">Hear your audio, hear the world.</p>
      <div className="h-[497px] relative rounded-[24px] shrink-0 w-[885px]" data-name="Music Video 1">
        <video 
          autoPlay 
          muted 
          className="absolute max-w-none object-cover rounded-[24px] size-full z-10" 
          controlsList="nodownload" 
          loop 
          playsInline 
          preload="auto"
          aria-label="Hear your audio, hear the world demonstration video"
        >
          <source src="/assets/Music%20Video.mov" type="video/quicktime" />
        </video>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="[grid-area:1_/_1] bg-[#1c1b1b] h-[606.296px] ml-[11.98px] mt-[11.14px] overflow-clip relative rounded-[30.889px] w-[280.16px]" data-name="Component 62">
      <div className="absolute h-[621.57px] left-[0.37px] top-[-19.68px] w-[278.534px]" data-name="MusicVideoMobile 1">
        <video autoPlay muted className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute bg-[#242424] h-[34.353px] left-[4.34px] top-[-9.11px] w-[274.826px]" />
    </div>
  );
}

function IPhone1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="iPhone">
      <Component1 />
      <div className="[grid-area:1_/_1] h-[621.116px] ml-0 mt-0 relative w-[304.817px]" data-name="🎨 change color here">
        <img alt="" className="block max-w-none size-full" height="621.116" src={imgChangeColorHere1} width="304.817" />
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex h-[621px] items-start justify-center overflow-clip relative shrink-0 w-[380.528px]">
      <IPhone1 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[300px]">
      <Frame49 />
    </div>
  );
}

function Frame129() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-between overflow-clip px-[80px] py-[48px] relative rounded-[24px] shrink-0 w-[1452px]">
      <div className="absolute h-[696px] left-[1148px] top-[263.13px] w-[697px]">
        <div className="absolute inset-[-71.84%_-71.74%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1697 1696">
            <g filter="url(#filter0_f_1_5145)" id="Ellipse 2342">
              <ellipse cx="848.5" cy="848" fill="var(--fill-0, #42C83C)" rx="348.5" ry="348" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1696" id="filter0_f_1_5145" width="1697" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_5145" stdDeviation="250" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Frame111 />
      <Frame60 />
    </div>
  );
}

function Frame132() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0">
      <Frame129 />
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center pb-0 pt-[40px] px-0 relative shrink-0">
      <Header4 />
      <Frame132 />
    </div>
  );
}

function Video1() {
  return (
    <div className="h-[469px] relative rounded-[24px] shrink-0 w-[885px]" data-name="Video 5">
      {/* Fallback image */}
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full z-0" src={imgVideo5} aria-hidden="true" />
      {/* Video overlay */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full z-10"
        aria-label="Take calls demonstration video"
      >
        <source src="/assets/Cooking.mov" type="video/quicktime" />
      </video>
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[57.333px] not-italic relative shrink-0 text-[#0a0a0a] text-[40px] text-center text-nowrap">Take calls on WhatsApp, FaceTime, or any calling app.</p>
      <Video1 />
    </div>
  );
}

function Component2() {
  return (
    <div className="[grid-area:1_/_1] bg-[#1c1b1b] h-[606.296px] ml-[11.98px] mt-[11.14px] overflow-clip relative rounded-[30.889px] w-[280.16px]" data-name="Component 62">
      <div className="absolute h-[621.57px] left-[0.37px] top-[-19.68px] w-[278.534px]" data-name="MusicVideoMobile 1">
        <video autoPlay muted className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute bg-[#242424] h-[34.353px] left-[4.34px] top-[-9.11px] w-[274.826px]" />
    </div>
  );
}

function IPhone2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="iPhone">
      <Component2 />
      <div className="[grid-area:1_/_1] h-[621.116px] ml-0 mt-0 relative w-[304.817px]" data-name="🎨 change color here">
        <img alt="" className="block max-w-none size-full" height="621.116" src={imgChangeColorHere1} width="304.817" />
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex h-[621px] items-start justify-center overflow-clip relative shrink-0 w-[380.528px]">
      <IPhone2 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[300px]">
      <Frame50 />
    </div>
  );
}

function Frame134() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-between overflow-clip px-[80px] py-[48px] relative rounded-[24px] shrink-0 w-[1452px]">
      <div className="absolute h-[696px] left-[1148px] top-[263.13px] w-[697px]">
        <div className="absolute inset-[-71.84%_-71.74%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1697 1696">
            <g filter="url(#filter0_f_1_5125)" id="Ellipse 2342">
              <ellipse cx="848.5" cy="848" fill="var(--fill-0, #008FC0)" rx="348.5" ry="348" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1696" id="filter0_f_1_5125" width="1697" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_5125" stdDeviation="250" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Frame117 />
      <Frame65 />
    </div>
  );
}

function Frame133() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0">
      <Frame134 />
    </div>
  );
}

function Frame106() {
  return (
    <div className="h-[286.223px] overflow-clip relative rounded-[14.628px] shrink-0 w-[357.779px]">
      <video muted className="absolute max-w-none object-cover rounded-[14.628px] size-full" controlsList="nodownload" loop>
        <source src="/_videos/v1/864f838568a42daec711df8eac35075eaf53b431" />
      </video>
      <p className="absolute font-['Red_Hat_Display:Medium',sans-serif] leading-[27.533px] left-[calc(50%-0.86px)] not-italic text-[19.758px] text-center text-nowrap text-white top-[248.72px] translate-x-[-50%]">Ultra HD Camera</p>
    </div>
  );
}

function Frame107() {
  return (
    <div className="h-[286.321px] overflow-clip relative rounded-[14.628px] shrink-0 w-[508.936px]">
      <video autoPlay muted className="absolute max-w-none object-cover rounded-[14.628px] size-full" controlsList="nodownload" loop playsInline>
        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" type="video/mp4" />
      </video>
      <p className="absolute font-['Red_Hat_Display:Medium',sans-serif] leading-[27.533px] left-[calc(50%-0.96px)] not-italic text-[19.758px] text-center text-nowrap text-white top-[248.72px] translate-x-[-50%]">Hands-free controls</p>
    </div>
  );
}

function Gallery1() {
  return (
    <div className="content-stretch flex gap-[14.628px] items-center relative shrink-0 w-[885px]" data-name="Gallery 1">
      <Frame106 />
      <Frame107 />
    </div>
  );
}

function Frame108() {
  return (
    <div className="h-[286.321px] overflow-clip relative rounded-[14.628px] shrink-0 w-[508.936px]">
      <video autoPlay muted className="absolute max-w-none object-cover rounded-[14.628px] size-full" controlsList="nodownload" loop playsInline>
        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" type="video/mp4" />
      </video>
      <p className="absolute font-['Red_Hat_Display:Medium',sans-serif] leading-[26.102px] left-[calc(50%-0.43px)] not-italic text-[18.731px] text-center text-nowrap text-white top-[238.32px] translate-x-[-50%]">Be Right There</p>
    </div>
  );
}

function Frame109() {
  return (
    <div className="h-[286.223px] overflow-clip relative rounded-[14.628px] shrink-0 w-[357.779px]">
      <video muted className="absolute max-w-none object-cover rounded-[14.628px] size-full" controlsList="nodownload" loop>
        <source src="/_videos/v1/6e953381fd22c8385c26fb00b9b76a695b2e13ac" />
      </video>
      <p className="absolute font-['Red_Hat_Display:Medium',sans-serif] leading-[26.102px] left-[calc(50%+0.26px)] not-italic text-[18.731px] text-center text-nowrap text-white top-[238.32px] translate-x-[-50%]">Capture modes</p>
    </div>
  );
}

function Gallery2() {
  return (
    <div className="content-stretch flex gap-[14.628px] items-center relative shrink-0 w-[885px]" data-name="Gallery 2">
      <Frame108 />
      <Frame109 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[14.628px] h-[502px] items-start relative shrink-0">
      <Gallery1 />
      <Gallery2 />
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[669px] items-start relative shrink-0">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[57.333px] not-italic relative shrink-0 text-[#0a0a0a] text-[40px] text-center text-nowrap">Capture HD video, saved directly to your phone.</p>
      <Frame56 />
    </div>
  );
}

function Component3() {
  return (
    <div className="[grid-area:1_/_1] bg-[#1c1b1b] h-[606.296px] ml-[11.98px] mt-[11.14px] overflow-clip relative rounded-[30.889px] w-[280.16px]" data-name="Component 62">
      <div className="absolute h-[621.57px] left-[0.37px] top-[-19.68px] w-[278.534px]" data-name="MusicVideoMobile 1">
        <video autoPlay muted className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute bg-[#242424] h-[34.353px] left-[4.34px] top-[-9.11px] w-[274.826px]" />
    </div>
  );
}

function ArrowLeft2() {
  return (
    <div className="relative size-[17.108px]" data-name="arrow-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1077 17.1077">
        <g id="arrow-left">
          <path d={svgPaths.p20b66d80} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.42564" />
        </g>
      </svg>
    </div>
  );
}

function BackButtonIcon() {
  return (
    <button className="bg-[#f5f5f5] content-stretch cursor-pointer flex gap-[5.703px] items-center p-[5.703px] relative rounded-[22.81px]" data-name="Back Button Icon">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <ArrowLeft2 />
        </div>
      </div>
    </button>
  );
}

function Header5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center not-italic relative shrink-0 text-[#0a0a0a] text-center text-nowrap" data-name="Header">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[17.108px] relative shrink-0 text-[11.405px]">Gallery</p>
      <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[14.256px] relative shrink-0 text-[9.979px]">Jan 02 2025 - Today</p>
    </div>
  );
}

function Spacer() {
  return <div className="shrink-0 size-[0.713px]" data-name="Spacer" />;
}

function BackButton() {
  return (
    <div className="content-stretch flex gap-[5.703px] items-center relative shrink-0 w-[154.682px]" data-name="Back Button">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <BackButtonIcon />
        </div>
      </div>
      <Header5 />
      <Spacer />
    </div>
  );
}

function SettingsIcon() {
  return (
    <div className="relative shrink-0 size-[17.108px]" data-name="Settings Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1077 17.1077">
        <g id="Settings Icon">
          <g id="Vector"></g>
          <path d={svgPaths.p2b981f70} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.42564" />
          <path d={svgPaths.p2d412a80} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.42564" />
        </g>
      </svg>
    </div>
  );
}

function SettingsButton() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center p-[5.703px] relative rounded-[22.81px] shrink-0" data-name="Settings Button">
      <SettingsIcon />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-center justify-between px-[17.108px] py-0 relative shrink-0 w-[278px]" data-name="Container">
      <BackButton />
      <SettingsButton />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[2.138px] items-start relative shrink-0 w-[278.713px]">
      <div className="h-[90.996px] relative rounded-[1.426px] shrink-0 w-[67.718px]" data-name="Screenshot 2025-10-29 at 11.14.10 AM 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[1.426px]">
          <img alt="" className="absolute h-[303.15%] left-0 max-w-none top-0 w-[406.25%]" src={imgScreenshot20251029At111410Am2} />
        </div>
      </div>
      <div className="h-[91.954px] relative rounded-[1.426px] shrink-0 w-[68.431px]" data-name="Screenshot 2025-10-29 at 11.14.10 AM 3">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[1.426px]">
          <div className="absolute inset-0 overflow-hidden rounded-[1.426px]">
            <img alt="" className="absolute h-[303.15%] left-[-102.15%] max-w-none top-0 w-[406.25%]" src={imgScreenshot20251029At111410Am2} />
          </div>
          <div className="absolute inset-0 overflow-hidden rounded-[1.426px]">
            <img alt="" className="absolute h-[303.15%] left-[-102.15%] max-w-none top-0 w-[406.25%]" src={imgScreenshot20251029At111410Am2} />
          </div>
        </div>
      </div>
      <div className="h-[91.954px] relative rounded-[1.426px] shrink-0 w-[68.431px]" data-name="Screenshot 2025-10-29 at 11.14.10 AM 4">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[1.426px]">
          <div className="absolute inset-0 overflow-hidden rounded-[1.426px]">
            <img alt="" className="absolute h-[303.15%] left-[-102.15%] max-w-none top-0 w-[406.25%]" src={imgScreenshot20251029At111410Am2} />
          </div>
          <div className="absolute inset-0 overflow-hidden rounded-[1.426px]">
            <img alt="" className="absolute h-[303.15%] left-[-204.27%] max-w-none top-0 w-[406.25%]" src={imgScreenshot20251029At111410Am2} />
          </div>
        </div>
      </div>
      <div className="h-[90.996px] relative rounded-[1.426px] shrink-0 w-[67.718px]" data-name="Screenshot 2025-10-29 at 11.14.10 AM 5">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[1.426px]">
          <div className="absolute inset-0 overflow-hidden rounded-[1.426px]">
            <img alt="" className="absolute h-[303.15%] left-[-102.15%] max-w-none top-0 w-[406.25%]" src={imgScreenshot20251029At111410Am2} />
          </div>
          <div className="absolute inset-0 overflow-hidden rounded-[1.426px]">
            <img alt="" className="absolute h-[303.15%] left-[-306.48%] max-w-none top-0 w-[406.25%]" src={imgScreenshot20251029At111410Am2} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[2.138px] items-start relative shrink-0 w-full">
      <div className="h-[91.954px] relative rounded-[1.426px] shrink-0 w-[68.431px]" data-name="Screenshot 2025-10-29 at 11.14.10 AM 3">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[1.426px]">
          <div className="absolute inset-0 overflow-hidden rounded-[1.426px]">
            <img alt="" className="absolute h-[303.15%] left-[-102.15%] max-w-none top-0 w-[406.25%]" src={imgScreenshot20251029At111410Am2} />
          </div>
          <div className="absolute inset-0 overflow-hidden rounded-[1.426px]">
            <img alt="" className="absolute h-[303.15%] left-[-102.15%] max-w-none top-0 w-[406.25%]" src={imgScreenshot20251029At111410Am2} />
          </div>
        </div>
      </div>
      <div className="h-[91.954px] relative rounded-[1.426px] shrink-0 w-[68.431px]" data-name="Screenshot 2025-10-29 at 11.14.10 AM 4">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[1.426px]">
          <div className="absolute inset-0 overflow-hidden rounded-[1.426px]">
            <img alt="" className="absolute h-[303.15%] left-[-102.15%] max-w-none top-0 w-[406.25%]" src={imgScreenshot20251029At111410Am2} />
          </div>
          <div className="absolute inset-0 overflow-hidden rounded-[1.426px]">
            <img alt="" className="absolute h-[303.15%] left-[-204.27%] max-w-none top-0 w-[406.25%]" src={imgScreenshot20251029At111410Am2} />
          </div>
        </div>
      </div>
      <div className="h-[90.762px] relative rounded-[1.426px] shrink-0 w-[67.544px]" data-name="Screenshot 2025-10-29 at 11.14.10 AM 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[1.426px]">
          <img alt="" className="absolute h-[303.15%] left-0 max-w-none top-0 w-[406.25%]" src={imgScreenshot20251029At111410Am2} />
        </div>
      </div>
      <div className="h-[90.762px] relative rounded-[1.426px] shrink-0 w-[67.544px]" data-name="Screenshot 2025-10-29 at 11.14.10 AM 5">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[1.426px]">
          <div className="absolute inset-0 overflow-hidden rounded-[1.426px]">
            <img alt="" className="absolute h-[303.15%] left-[-102.15%] max-w-none top-0 w-[406.25%]" src={imgScreenshot20251029At111410Am2} />
          </div>
          <div className="absolute inset-0 overflow-hidden rounded-[1.426px]">
            <img alt="" className="absolute h-[303.15%] left-[-306.48%] max-w-none top-0 w-[406.25%]" src={imgScreenshot20251029At111410Am2} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[2.138px] items-start relative shrink-0 w-full">
      <div className="h-[91.954px] relative shrink-0 w-[68.431px]" data-name="Screenshot 2025-10-29 at 11.14.10 AM 3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20251029At111410Am3} />
      </div>
      <div className="h-[91.954px] relative shrink-0 w-[68.431px]" data-name="Screenshot 2025-10-29 at 11.14.10 AM 4">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20251029At111410Am4} />
      </div>
      <div className="h-[91.954px] relative shrink-0 w-[68.431px]" data-name="Screenshot 2025-10-29 at 11.14.10 AM 5">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20251029At111410Am5} />
      </div>
      <div className="h-[91.954px] relative shrink-0 w-[68.431px]" data-name="Screenshot 2025-10-29 at 11.14.10 AM 6">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20251029At111410Am6} />
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[2.138px] items-start relative shrink-0 w-full">
      <div className="h-[91.954px] relative shrink-0 w-[68.431px]" data-name="Screenshot 2025-10-29 at 11.14.10 AM 3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20251029At111410Am7} />
      </div>
      <div className="h-[91.954px] relative shrink-0 w-[68.431px]" data-name="Screenshot 2025-10-29 at 11.14.10 AM 4">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20251029At111410Am8} />
      </div>
      <div className="h-[91.954px] relative shrink-0 w-[68.431px]" data-name="Screenshot 2025-10-29 at 11.14.10 AM 5">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20251029At111410Am9} />
      </div>
      <div className="h-[91.954px] relative shrink-0 w-[68.431px]" data-name="Screenshot 2025-10-29 at 11.14.10 AM 6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[266.54%] left-[-30.16%] max-w-none top-[-109.57%] w-[201.46%]" src={imgScreenshot20251029At111410Am8} />
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[2.851px] items-start relative shrink-0 w-[280.138px]">
      <Frame36 />
      <Frame37 />
      <Frame33 />
      <Frame34 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[25.662px] items-center relative shrink-0" data-name="Container">
      <Container6 />
      <Frame38 />
    </div>
  );
}

function Gallery() {
  return (
    <div className="[grid-area:1_/_1] bg-white content-stretch flex flex-col h-[605.185px] items-center ml-[12.41px] mt-[11.1px] overflow-clip p-[22.81px] relative rounded-[17.734px] w-[278px]" data-name="Gallery">
      <Container7 />
    </div>
  );
}

function IPhone3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="iPhone">
      <Component3 />
      <Gallery />
      <div className="[grid-area:1_/_1] h-[621.116px] ml-0 mt-0 relative w-[304.817px]" data-name="🎨 change color here">
        <img alt="" className="block max-w-none size-full" height="621.116" src={imgChangeColorHere1} width="304.817" />
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex h-[621px] items-start justify-center overflow-clip relative shrink-0 w-[380.528px]">
      <IPhone3 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[300px]">
      <Frame51 />
    </div>
  );
}

function Frame135() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-between overflow-clip px-[80px] py-[48px] relative rounded-[24px] shrink-0 w-[1452px]">
      <div className="absolute h-[696px] left-[1148px] top-[263.13px] w-[697px]">
        <div className="absolute inset-[-71.84%_-71.74%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1697 1696">
            <g filter="url(#filter0_f_1_5134)" id="Ellipse 2342">
              <ellipse cx="848.5" cy="848" fill="var(--fill-0, #E8D09D)" rx="348.5" ry="348" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1696" id="filter0_f_1_5134" width="1697" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_5134" stdDeviation="250" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Frame118 />
      <Frame66 />
    </div>
  );
}

function Frame156() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0">
      <Frame135 />
    </div>
  );
}

function Video2() {
  return (
    <div className="h-[469px] relative rounded-[24px] shrink-0 w-[885px]" data-name="Video 7">
      {/* Fallback image */}
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full z-0" src={imgVideo7} aria-hidden="true" />
      {/* Video overlay */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full z-10"
        aria-label="AI reminders demonstration video"
      >
        <source src="/assets/Driving.mov" type="video/quicktime" />
      </video>
    </div>
  );
}

function Frame120() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[57.333px] not-italic relative shrink-0 text-[#0a0a0a] text-[40px] text-center text-nowrap">Stay on top of your day with AI reminders.</p>
      <Video2 />
    </div>
  );
}

function Component4() {
  return (
    <div className="[grid-area:1_/_1] bg-[#1c1b1b] h-[606.296px] ml-[11.98px] mt-[11.14px] overflow-clip relative rounded-[30.889px] w-[280.16px]" data-name="Component 62">
      <div className="absolute h-[621.57px] left-[0.37px] top-[-19.68px] w-[278.534px]" data-name="MusicVideoMobile 1">
        <video autoPlay muted className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute bg-[#242424] h-[34.353px] left-[4.34px] top-[-9.11px] w-[274.826px]" />
    </div>
  );
}

function IPhone4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="iPhone">
      <Component4 />
      <div className="[grid-area:1_/_1] h-[621.116px] ml-0 mt-0 relative w-[304.817px]" data-name="🎨 change color here">
        <img alt="" className="block max-w-none size-full" height="621.116" src={imgChangeColorHere1} width="304.817" />
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex h-[621px] items-start justify-center overflow-clip relative shrink-0 w-[380.528px]">
      <IPhone4 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[300px]">
      <Frame52 />
    </div>
  );
}

function Frame157() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-between overflow-clip px-[80px] py-[48px] relative rounded-[24px] shrink-0 w-[1452px]">
      <div className="absolute h-[696px] left-[1148px] top-[263.13px] w-[697px]">
        <div className="absolute inset-[-71.84%_-71.74%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1697 1696">
            <g filter="url(#filter0_f_1_5115)" id="Ellipse 2342">
              <ellipse cx="848.5" cy="848" fill="var(--fill-0, #FFA8BB)" rx="348.5" ry="348" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1696" id="filter0_f_1_5115" width="1697" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_5115" stdDeviation="250" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Frame120 />
      <Frame67 />
    </div>
  );
}

function Frame137() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0">
      <Frame157 />
    </div>
  );
}

function ProfilePic() {
  return <div className="absolute right-0 rounded-[40px] size-[66px] top-[216px]" data-name="profile pic" />;
}

function Group16() {
  return (
    <div className="absolute contents left-[21.22px] top-[95.36px]">
      <div className="absolute h-[31.207px] left-[600.22px] top-[211.36px] w-[39.823px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.8232 31.2071">
          <path d={svgPaths.p3b34880} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div className="absolute font-['Red_Hat_Display:Italic',sans-serif] h-[168px] italic leading-[normal] left-[339.22px] text-[28px] text-black text-center top-[105.36px] translate-x-[-50%] w-[636px]">
        <p className="mb-0">{`    While companies like Meta and Google are building vertically integrated platforms with `}</p>
        <p className="mb-0">{`tightly controlled app stores… Mentra is `}</p>
        <p>targeting openness, modularity, and utility.</p>
      </div>
      <div className="absolute h-[31.207px] left-[46.22px] top-[95.36px] w-[39.823px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.8232 31.2071">
          <path d={svgPaths.p21b4b00} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Testimonial() {
  return (
    <div className="basis-0 grow h-[284px] min-h-px min-w-px relative shrink-0" data-name="Testimonial">
      <div className="absolute h-[347px] left-[0.11px] top-[-0.31px] w-[686px]" data-name="Subtract">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 686 347">
          <path d={svgPaths.p114d6400} fill="var(--fill-0, #FFF8EE)" id="Subtract" />
        </svg>
      </div>
      <ProfilePic />
      <div className="absolute h-[42px] right-[262px] top-[15.36px] w-[162px]" data-name="image 167">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage167} />
      </div>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] absolute decoration-solid font-['Manrope:SemiBold',sans-serif] leading-[normal] left-[339.72px] not-italic text-[#00b869] text-[20px] text-center text-nowrap top-[286.36px] translate-x-[-50%] underline">Read the article</p>
      <Group16 />
    </div>
  );
}

function ProfilePic1() {
  return <div className="absolute right-0 rounded-[40px] size-[66px] top-[216px]" data-name="profile pic" />;
}

function Group17() {
  return (
    <div className="absolute contents left-[22px] top-[126.36px]">
      <div className="absolute h-[31.207px] left-[519px] top-[205.36px] w-[39.823px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.8232 31.2071">
          <path d={svgPaths.p3b34880} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <div className="absolute font-['Red_Hat_Display:Italic',sans-serif] h-[168px] italic leading-[normal] left-[340px] text-[28px] text-black text-center top-[129.36px] translate-x-[-50%] w-[636px]">
        <p className="mb-0">{`Mentra… finally gives smartglasses `}</p>
        <p className="mb-0">{`the software layer smartphones `}</p>
        <p>have had for over a decade.</p>
      </div>
      <div className="absolute h-[31.207px] left-[84px] top-[126.36px] w-[39.823px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.8232 31.2071">
          <path d={svgPaths.p21b4b00} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Testimonial1() {
  return (
    <div className="basis-0 grow h-[284px] min-h-px min-w-px relative shrink-0" data-name="Testimonial">
      <div className="absolute h-[347px] left-[0.11px] top-[-0.31px] w-[686px]" data-name="Subtract">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 686 347">
          <path d={svgPaths.p2164de00} fill="var(--fill-0, #FFF8EE)" id="Subtract" />
        </svg>
      </div>
      <ProfilePic1 />
      <div className="absolute h-[39px] left-[202px] top-[15.36px] w-[281px]" data-name="image 174">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[258.97%] left-[-7.12%] max-w-none top-[-76.92%] w-[113.88%]" src={imgImage174} />
        </div>
      </div>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] absolute decoration-solid font-['Manrope:SemiBold',sans-serif] leading-[normal] left-[339.72px] not-italic text-[#00b869] text-[20px] text-center text-nowrap top-[285.36px] translate-x-[-50%] underline">Read the article</p>
      <Group17 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white content-stretch flex gap-[80px] h-[284px] items-center relative shrink-0 w-[1452.444px]">
      <Testimonial />
      <Testimonial1 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col h-[346px] items-center relative shrink-0">
      <Frame8 />
    </div>
  );
}

function Header6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Header">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[57.333px] not-italic relative shrink-0 text-[#0a0a0a] text-[72px] text-center text-nowrap">Mentra Live vs Meta Ray-Ban (Gen 2)</p>
    </div>
  );
}

function BatteryIcon() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Battery Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Battery Icon">
          <g id="Vector"></g>
          <path d={svgPaths.p1027f200} id="Vector_2" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.32255" />
          <path d="M11.6667 16.6667V23.3333" id="Vector_3" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.32255" />
          <path d="M16.6667 16.6667V23.3333" id="Vector_4" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.32255" />
          <path d="M21.6667 16.6667V23.3333" id="Vector_5" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.32255" />
        </g>
      </svg>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative rounded-[24px] shrink-0 w-[267px]">
      <BatteryIcon />
      <p className="font-['Manrope:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-center text-nowrap">Battery Life</p>
    </div>
  );
}

function BatteryIcon1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Battery Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Battery Icon">
          <g id="Vector"></g>
          <path d={svgPaths.p16242080} id="Vector_2" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.32255" />
          <path d={svgPaths.p135f8000} id="Vector_3" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.32255" />
        </g>
      </svg>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative rounded-[24px] shrink-0 w-[267px]">
      <BatteryIcon1 />
      <p className="font-['Manrope:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-center text-nowrap">Weight</p>
    </div>
  );
}

function BatteryIcon2() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Battery Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Battery Icon">
          <g id="Vector"></g>
          <path d={svgPaths.p2ec31300} id="Vector_2" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.32255" />
          <path d={svgPaths.p14020280} id="Vector_3" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.32255" />
          <path d={svgPaths.p1d81c00} id="Vector_4" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.32255" />
          <path d="M23.3333 11.6667H33.3333" id="Vector_5" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.32255" />
          <path d="M28.3333 6.66667V16.6667" id="Vector_6" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.32255" />
        </g>
      </svg>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative rounded-[24px] shrink-0 w-[267px]">
      <BatteryIcon2 />
      <p className="font-['Manrope:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-center text-nowrap">App Store</p>
    </div>
  );
}

function BatteryIcon3() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Battery Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Battery Icon">
          <g id="Vector"></g>
          <path d={svgPaths.p248fc480} id="Vector_2" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.32255" />
          <path d={svgPaths.p18909b00} id="Vector_3" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.32255" />
          <path d={svgPaths.p17d9ce80} id="Vector_4" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.32255" />
        </g>
      </svg>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative rounded-[24px] shrink-0 w-[267px]">
      <BatteryIcon3 />
      <p className="font-['Manrope:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-center text-nowrap">Open-Source SDK</p>
    </div>
  );
}

function BatteryIcon4() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Battery Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Battery Icon">
          <g id="Vector"></g>
          <path d={svgPaths.p39e66500} id="Vector_2" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.32255" />
          <path d={svgPaths.p285c1a70} id="Vector_3" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.32255" />
          <path d="M20 20V24.1667" id="Vector_4" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.32255" />
        </g>
      </svg>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative rounded-[24px] shrink-0 w-[267px]">
      <BatteryIcon4 />
      <p className="font-['Manrope:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-center text-nowrap">Private</p>
    </div>
  );
}

function BatteryIcon5() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Battery Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Battery Icon">
          <path d={svgPaths.p2ddc5fd8} id="Vector" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.32255" />
        </g>
      </svg>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative rounded-[24px] shrink-0 w-[267px]">
      <BatteryIcon5 />
      <p className="font-['Manrope:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-center text-nowrap">Infinite Battery Cable</p>
    </div>
  );
}

function BatteryIcon6() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Battery Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Battery Icon">
          <g id="Vector">
            <path d={svgPaths.p317bc680} fill="var(--fill-0, #00B869)" />
            <path d={svgPaths.p27f57280} stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.32255" />
            <path d={svgPaths.p317bc680} stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.32255" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative rounded-[24px] shrink-0 w-[267px]">
      <BatteryIcon6 />
      <p className="font-['Manrope:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-center text-nowrap">Price</p>
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0">
      <Frame88 />
      <Frame82 />
      <Frame89 />
      <Frame84 />
      <Frame85 />
      <Frame86 />
      <Frame87 />
    </div>
  );
}

function Frame158() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Frame119 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col h-[94px] items-center justify-center relative shrink-0">
      <div className="h-[82.295px] relative shrink-0 w-[267px]" data-name="mentra_liveX2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMentraLiveX2} />
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col items-center relative rounded-[24px] shrink-0 w-[267px]">
      <p className="font-['Manrope:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-center w-full">MENTRA LIVE</p>
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 w-[267px]">
      <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0a0a0a] text-[21.611px] text-center text-nowrap">12+ hours</p>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 w-[267px]">
      <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0a0a0a] text-[21.611px] text-center text-nowrap">43 g</p>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 w-[267px]">
      <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0a0a0a] text-[21.611px] text-center text-nowrap">Yes</p>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 w-[267px]">
      <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0a0a0a] text-[21.611px] text-center text-nowrap">Private</p>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 w-[267px]">
      <p className="font-['Red_Hat_Display:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0a0a0a] text-[21.611px] text-center text-nowrap">$299</p>
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
      <Frame90 />
      {[...Array(2).keys()].map((_, i) => (
        <Frame83 key={i} />
      ))}
      <Frame91 />
      <Frame92 />
      <Frame91 />
      <Frame93 />
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame122 />
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0">
      <Frame48 />
      <Frame81 />
      <Frame121 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 w-[267px]">
      <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0a0a0a] text-[21.611px] text-center text-nowrap">8 hours</p>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 w-[267px]">
      <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0a0a0a] text-[21.611px] text-center text-nowrap">54 g</p>
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 w-[267px]">
      <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0a0a0a] text-[21.611px] text-center text-nowrap">No</p>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 w-[267px]">
      <p className="font-['Red_Hat_Display:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0a0a0a] text-[21.611px] text-center text-nowrap">$459</p>
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
      <Frame95 />
      <Frame96 />
      <Frame97 />
      <Frame97 />
      <Frame97 />
      <Frame97 />
      <Frame98 />
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame123 />
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0">
      <div className="h-[93.906px] relative shrink-0 w-[267px]" data-name="image 129">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[154.24%] left-[-4.63%] max-w-none top-[-39.9%] w-[108.49%]" src={imgImage129} />
        </div>
      </div>
      <p className="font-['Manrope:SemiBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[24px] text-black text-center w-[min-content]">META RAY-BAN (GEN 2)</p>
      <Frame124 />
    </div>
  );
}

function Frame100() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[80px] items-end px-[116px] py-0 relative w-full">
          <Frame158 />
          <Frame94 />
          <Frame99 />
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Red_Hat_Display:Medium',sans-serif] leading-[29.456px] not-italic relative shrink-0 text-[#f5f5f5] text-[20.619px] text-nowrap">Buy Mentra Live Now</p>
    </div>
  );
}

function Buttons6() {
  return (
    <div className="bg-[#009258] content-stretch flex flex-col h-[64px] items-center justify-center px-[23.565px] py-[11.782px] relative rounded-[35.701px] shadow-[0px_1.473px_2.946px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Buttons">
      <Text6 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[80px] items-center relative shrink-0 w-[1452px]">
      <ComparisonTable />
    </div>
  );
}

function Frame153() {
  return (
    <div className="content-stretch flex flex-col gap-[160px] items-start relative shrink-0">
      <Frame68 />
      <Frame79 />
    </div>
  );
}

function Title() {
  const [textStep, setTextStep] = useState(0);

  useEffect(() => {
    const sequence = () => {
      setTextStep(0);
      setTimeout(() => setTextStep(1), 700);
      setTimeout(() => setTextStep(2), 1400);
      setTimeout(() => setTextStep(3), 2100);
      setTimeout(() => setTextStep(4), 2800);
      setTimeout(() => setTextStep(5), 3500);
    };

    sequence();
    const interval = setInterval(sequence, 4900);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[144px] relative shrink-0 w-[967px]" data-name="Title">
      <div className="absolute font-['Red_Hat_Display:Regular',sans-serif] inset-0 leading-[72px] not-italic text-[64px] text-center">
        <div className="leading-[72px] mb-0 relative">
          <span className="text-[#0a0a0a]">Your</span>
          <span className="text-[#00b869]"> eyes</span>
          <span className={`text-[#0a0a0a] transition-opacity duration-500 ${textStep >= 1 ? 'opacity-100' : 'opacity-0'}`}>, your</span>
          <span className={`text-[#00b869] transition-opacity duration-500 ${textStep >= 1 ? 'opacity-100' : 'opacity-0'}`}> ears</span>
          <span className={`text-[#0a0a0a] transition-opacity duration-500 ${textStep >= 2 ? 'opacity-100' : 'opacity-0'}`}>, your</span>
          <span className={`text-[#00b869] transition-opacity duration-500 ${textStep >= 2 ? 'opacity-100' : 'opacity-0'}`}> choice.</span>
        </div>
        <div className={`leading-[72px] transition-opacity duration-500 ${textStep >= 3 ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-[#0a0a0a]">Your </span>
          <span className="text-[#00b869]">data</span>
          <span className={`text-[#0a0a0a] transition-opacity duration-500 ${textStep >= 4 ? 'opacity-100' : 'opacity-0'}`}>, your</span>
          <span className={`text-[#00b869] transition-opacity duration-500 ${textStep >= 4 ? 'opacity-100' : 'opacity-0'}`}> apps</span>
          <span className={`text-[#0a0a0a] transition-opacity duration-500 ${textStep >= 5 ? 'opacity-100' : 'opacity-0'}`}>, your</span>
          <span className={`text-[#00b869] transition-opacity duration-500 ${textStep >= 5 ? 'opacity-100' : 'opacity-0'}`}> glasses.</span>
        </div>
      </div>
    </div>
  );
}

function Header7() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0" data-name="Header">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[57.333px] not-italic relative shrink-0 text-[#0a0a0a] text-[72px] text-center text-nowrap">
        <span>{`MentraOS is `}</span>
        <span className="text-[#00b869]">open-source</span>
        <span>{`. `}</span>
      </p>
      <div className="font-['Red_Hat_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0a0a0a] text-[36px] text-center text-nowrap">
        <p className="mb-0">It’s built for the community, by the community,</p>
        <p>so you’re in control - unlike with Meta.</p>
      </div>
      <div className="h-[147px] relative shrink-0 w-[436px]" data-name="ezgif-frame-104 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[375.73%] left-[-13.45%] max-w-none top-[-140.54%] w-[127.2%]" src={imgEzgifFrame1041} />
        </div>
      </div>
      <Title />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Header7 />
    </div>
  );
}

function Frame101() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative shrink-0">
      <Frame70 />
    </div>
  );
}

function Frame125() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[83px] not-italic top-[181.04px]">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[57.333px] relative shrink-0 text-[#0a0a0a] text-[57.333px] text-center text-nowrap">{`The Easiest Smart Glasses `}</p>
      <ol className="block font-['Manrope:Regular',sans-serif] leading-[0] list-decimal min-w-full relative shrink-0 text-[24px] text-black w-[min-content]" start="1">
        <li className="ms-[36px]">
          <span className="leading-[100.33%]">Slide on your Mentra Live.</span>
        </li>
      </ol>
    </div>
  );
}

function Frame150() {
  return (
    <div className="absolute bg-white h-[758.992px] left-0 top-0 w-[1452px]">
      <div className="absolute bg-[#f5f5f5] h-[588px] left-px rounded-[24px] top-[calc(50%-0.5px)] translate-y-[-50%] w-[1449px]" />
      <div className="absolute h-[1002px] left-[282px] top-[-320px] w-[1503px]" data-name="DSCF7344-2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDscf73442} />
      </div>
      <Frame125 />
    </div>
  );
}

function EasiestSmartGlasses() {
  return (
    <div className="h-[758.99px] overflow-clip relative rounded-tl-[24px] rounded-tr-[24px] shrink-0 w-[1452px]" data-name="Easiest Smart Glasses">
      <Frame150 />
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Red_Hat_Display:Medium',sans-serif] leading-[29.456px] not-italic relative shrink-0 text-[#f5f5f5] text-[20.619px] text-nowrap">Learn more</p>
    </div>
  );
}

function Buttons7() {
  return (
    <div className="bg-[#009258] content-stretch flex flex-col h-[53.021px] items-center justify-center px-[23.565px] py-[11.782px] relative rounded-[35.701px] shadow-[0px_1.473px_2.946px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Buttons">
      <Text7 />
    </div>
  );
}

function Header8() {
  return (
    <div className="content-stretch flex flex-col gap-[19.111px] items-start justify-center relative shrink-0 w-[687px]" data-name="Header">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[57.333px] not-italic relative shrink-0 text-[57.333px] text-center text-nowrap text-white">Prescription Ready</p>
      <div className="font-['Red_Hat_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-white w-[731px]">
        <p className="mb-0">Wear them all day. Add your own lenses at any optical shop.</p>
        <p>Don’t worry, we need them to see, too.</p>
      </div>
      <Buttons7 />
    </div>
  );
}

function Frame130() {
  return (
    <div className="shrink-0 w-[1452px]">
      <PrescriptionReadySection />
    </div>
  );
}

function Header9() {
  return (
    <div className="content-stretch flex flex-col gap-[19.111px] items-center justify-center relative shrink-0" data-name="Header">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[57.333px] not-italic relative shrink-0 text-[#0a0a0a] text-[57.333px] text-center text-nowrap">Detailed Specifications</p>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Header9 />
    </div>
  );
}

function Frame140() {
  return (
    <div className="content-stretch flex font-['Manrope:Regular',sans-serif] items-center justify-between leading-[100.33%] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] text-nowrap w-full">
      <p className="relative shrink-0">Dimensions</p>
      <p className="relative shrink-0">162 L X 148 W x 47 H</p>
    </div>
  );
}

function Frame141() {
  return (
    <div className="content-stretch flex font-['Manrope:Regular',sans-serif] items-start justify-between leading-[100.33%] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] text-nowrap w-full">
      <p className="relative shrink-0">Colors</p>
      <p className="relative shrink-0">Matte Black</p>
    </div>
  );
}

function Frame144() {
  return (
    <div className="content-stretch flex font-['Manrope:Regular',sans-serif] items-start justify-between not-italic relative shrink-0 text-[#0a0a0a] text-[24px] text-nowrap w-full">
      <p className="leading-[100.33%] relative shrink-0">Buttons</p>
      <div className="leading-[100.33%] relative shrink-0 text-right">
        <p className="mb-0">2 buttons</p>
        <p className="mb-0">One on left temple</p>
        <p className="mb-0">One on right temple</p>
        <p className="text-[24px]">&nbsp;</p>
      </div>
    </div>
  );
}

function Frame145() {
  return (
    <div className="content-stretch flex font-['Manrope:Regular',sans-serif] items-start justify-between leading-[100.33%] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] w-full">
      <p className="relative shrink-0 text-nowrap">Swipe bar</p>
      <p className="relative shrink-0 text-right w-[307px]">Swipe forward, backward, up, down, tap, double tap</p>
    </div>
  );
}

function Frame142() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Manrope:SemiBold',sans-serif] leading-[100.33%] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] w-full">Frame</p>
      <Frame140 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(115, 115, 115, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 457.333 1">
            <line id="Line 33" stroke="var(--stroke-0, #737373)" x2="457.333" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame141 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(115, 115, 115, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 457.333 1">
            <line id="Line 33" stroke="var(--stroke-0, #737373)" x2="457.333" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame144 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(115, 115, 115, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 457.333 1">
            <line id="Line 33" stroke="var(--stroke-0, #737373)" x2="457.333" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame145 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(115, 115, 115, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 457.333 1">
            <line id="Line 33" stroke="var(--stroke-0, #737373)" x2="457.333" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame139() {
  return (
    <div className="content-stretch flex font-['Manrope:Regular',sans-serif] items-start justify-between leading-[100.33%] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] text-nowrap w-full">
      <p className="relative shrink-0">Chipset</p>
      <p className="relative shrink-0">{`MTK8766  `}</p>
    </div>
  );
}

function Frame148() {
  return (
    <div className="content-stretch flex font-['Manrope:Regular',sans-serif] items-start justify-between leading-[100.33%] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] text-nowrap w-full">
      <p className="relative shrink-0">OS</p>
      <p className="relative shrink-0">MentraOS</p>
    </div>
  );
}

function Frame138() {
  return (
    <div className="content-stretch flex font-['Manrope:Regular',sans-serif] items-start justify-between leading-[100.33%] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] text-nowrap w-full">
      <p className="relative shrink-0">Battery</p>
      <p className="relative shrink-0">260mAh</p>
    </div>
  );
}

function Frame159() {
  return (
    <div className="content-stretch flex font-['Manrope:Regular',sans-serif] items-start justify-between not-italic relative shrink-0 text-[#0a0a0a] text-[24px] text-nowrap w-full">
      <p className="leading-[100.33%] relative shrink-0">Camera</p>
      <div className="leading-[100.33%] relative shrink-0 text-right">
        <p className="mb-0">Field of View: 119°</p>
        <p>Landscape</p>
      </div>
    </div>
  );
}

function Frame143() {
  return (
    <div className="content-stretch flex font-['Manrope:Regular',sans-serif] items-start justify-between leading-[100.33%] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] text-nowrap w-full">
      <p className="relative shrink-0">Microphone</p>
      <p className="relative shrink-0 text-right">3 microphones</p>
    </div>
  );
}

function Frame146() {
  return (
    <div className="content-stretch flex font-['Manrope:Regular',sans-serif] items-start justify-between leading-[100.33%] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] text-nowrap w-full">
      <p className="relative shrink-0">Speakers</p>
      <p className="relative shrink-0 text-right">Stereo audio</p>
    </div>
  );
}

function Frame149() {
  return (
    <div className="content-stretch flex font-['Manrope:Regular',sans-serif] items-start justify-between not-italic relative shrink-0 text-[#0a0a0a] text-[24px] text-nowrap w-full">
      <p className="leading-[100.33%] relative shrink-0">Charging</p>
      <div className="leading-[100.33%] relative shrink-0 text-right">
        <p className="mb-0">Micro charge cable</p>
        <p>{`& Charging case `}</p>
      </div>
    </div>
  );
}

function Frame147() {
  return (
    <div className="content-stretch flex font-['Manrope:Regular',sans-serif] items-start justify-between not-italic relative shrink-0 text-[#0a0a0a] text-[24px] text-nowrap w-full">
      <p className="leading-[100.33%] relative shrink-0">Phone</p>
      <div className="leading-[100.33%] relative shrink-0 text-right">
        <p className="mb-0">{`Compatible with `}</p>
        <p>iOS 15.1+ and Android 12+</p>
      </div>
    </div>
  );
}

function Frame160() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Manrope:SemiBold',sans-serif] leading-[100.33%] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] w-full">Features</p>
      <Frame139 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(115, 115, 115, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 457.333 1">
            <line id="Line 32" stroke="var(--stroke-0, #737373)" x2="457.333" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame148 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(115, 115, 115, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 457.333 1">
            <line id="Line 32" stroke="var(--stroke-0, #737373)" x2="457.333" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame138 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(115, 115, 115, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 457.333 1">
            <line id="Line 32" stroke="var(--stroke-0, #737373)" x2="457.333" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame159 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(115, 115, 115, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 457.333 1">
            <line id="Line 32" stroke="var(--stroke-0, #737373)" x2="457.333" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame143 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(115, 115, 115, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 457.333 1">
            <line id="Line 32" stroke="var(--stroke-0, #737373)" x2="457.333" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame146 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(115, 115, 115, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 457.333 1">
            <line id="Line 32" stroke="var(--stroke-0, #737373)" x2="457.333" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame149 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(115, 115, 115, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 457.333 1">
            <line id="Line 32" stroke="var(--stroke-0, #737373)" x2="457.333" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame147 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(115, 115, 115, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 457.333 1">
            <line id="Line 32" stroke="var(--stroke-0, #737373)" x2="457.333" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame161() {
  return (
    <div className="content-stretch flex font-['Manrope:Regular',sans-serif] items-start justify-between leading-[100.33%] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] text-nowrap w-full">
      <p className="relative shrink-0">Battery capacity</p>
      <p className="relative shrink-0">2,200 mAh</p>
    </div>
  );
}

function Frame162() {
  return (
    <div className="content-stretch flex font-['Manrope:Regular',sans-serif] items-start justify-between leading-[100.33%] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] text-nowrap w-full">
      <p className="relative shrink-0">Dimension (mm)</p>
      <p className="relative shrink-0">176 L x 68 W x 53.6 H</p>
    </div>
  );
}

function Frame163() {
  return (
    <div className="content-stretch flex font-['Manrope:Regular',sans-serif] items-start justify-between leading-[100.33%] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] text-nowrap w-full">
      <p className="relative shrink-0">Charging LED indicator</p>
      <p className="relative shrink-0">1</p>
    </div>
  );
}

function Frame164() {
  return (
    <div className="content-stretch flex font-['Manrope:Regular',sans-serif] items-start justify-between leading-[100.33%] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] text-nowrap w-full">
      <p className="relative shrink-0">Charging port</p>
      <p className="relative shrink-0">USB Type C</p>
    </div>
  );
}

function Frame165() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Manrope:SemiBold',sans-serif] leading-[100.33%] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] w-full">Charging Case</p>
      <Frame161 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(115, 115, 115, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 457.333 1">
            <line id="Line 32" stroke="var(--stroke-0, #737373)" x2="457.333" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame162 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(115, 115, 115, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 457.333 1">
            <line id="Line 32" stroke="var(--stroke-0, #737373)" x2="457.333" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame163 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(115, 115, 115, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 457.333 1">
            <line id="Line 32" stroke="var(--stroke-0, #737373)" x2="457.333" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame164 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(115, 115, 115, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 457.333 1">
            <line id="Line 32" stroke="var(--stroke-0, #737373)" x2="457.333" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame166() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full">
      <Frame142 />
      <Frame160 />
      <Frame165 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[80px] items-center relative shrink-0 w-[1452px]">
      <Frame76 />
      <Frame166 />
    </div>
  );
}

function Tab() {
  return (
    <div className="bg-[#00b869] content-stretch flex items-center px-[16px] py-[12px] relative rounded-[8px] shadow-[0px_2px_6px_0px_rgba(74,58,255,0.1)] shrink-0" data-name="Tab">
      <p className="font-['Red_Hat_Display:Medium',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[24px] text-nowrap text-white">General</p>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-1px_1px_0px_rgba(0,0,0,0.12),inset_0px_1px_1.5px_0px_rgba(255,255,255,0.25)]" />
    </div>
  );
}

function Tab1() {
  return (
    <div className="content-stretch flex items-center px-[16px] py-[12px] relative rounded-[4px] shrink-0" data-name="Tab">
      <p className="font-['Red_Hat_Display:Medium',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#514f6e] text-[24px] text-nowrap">Features</p>
    </div>
  );
}

function Tab2() {
  return (
    <div className="content-stretch flex items-center px-[16px] py-[12px] relative rounded-[4px] shrink-0" data-name="Tab">
      <p className="font-['Red_Hat_Display:Medium',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#514f6e] text-[24px] text-nowrap">Resources</p>
    </div>
  );
}

function TabSwitcher() {
  return (
    <div className="bg-[#fbfbfe] content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[12px] shrink-0" data-name="Tab Switcher">
      <div aria-hidden="true" className="absolute border border-[#f1f2f9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_0.5px_1px_0px_rgba(25,33,61,0.07)]" />
      <Tab />
      <Tab1 />
      <Tab2 />
    </div>
  );
}

function Info() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Info">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.716 18.716">
          <g id="Info">
            <path d={svgPaths.p257f4600} id="Vector" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70146" />
            <path d="M9.35804 13.6117V9.35803" id="Vector_2" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70146" />
            <path d={svgPaths.p39ac0400} fill="var(--fill-0, #00B869)" id="Vector_3" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70146" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LineRoundedInfo() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20.418px]" data-name="Line Rounded/Info">
      <Info />
    </div>
  );
}

function IconWrapper() {
  return (
    <div className="content-stretch flex items-center p-[6px] relative rounded-[50px] shrink-0" data-name="Icon Wrapper">
      <LineRoundedInfo />
    </div>
  );
}

function TilteWrapper() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Tilte wrapper">
      <p className="font-['Red_Hat_Display:Bold',sans-serif] leading-[44px] max-w-[600px] not-italic relative shrink-0 text-[#00b869] text-[24px] text-nowrap">What makes the Mentra camera glass unique?</p>
    </div>
  );
}

function Less() {
  return (
    <div className="absolute inset-[48.5%_22.3%_51.5%_22.3%]" data-name="Less">
      <div className="absolute inset-[-1px_-8.84%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.31 2">
          <g id="Less">
            <path d="M1 1H12.31" id="Vector" stroke="var(--stroke-0, #00B869)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LineRoundedLess() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20.418px]" data-name="Line Rounded/Less">
      <Less />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Heading">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <TilteWrapper />
      </div>
      <LineRoundedLess />
    </div>
  );
}

function Texts() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start min-h-px min-w-px px-0 py-[6px] relative shrink-0" data-name="Texts">
      <Heading />
      <p className="font-['Manrope:Regular',sans-serif] leading-[100.33%] not-italic relative shrink-0 text-[24px] text-black w-full">Mentra camera glass excels as a top choice by offering users unparalleled creative freedom for capturing stunning images without needing technical expertise.</p>
    </div>
  );
}

function Accordions() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative rounded-[16px] shrink-0 w-full z-[18]" data-name="Accordions">
      <IconWrapper />
      <Texts />
    </div>
  );
}

function Heart() {
  return (
    <div className="absolute inset-[13.55%_8.33%]" data-name="Heart">
      <div className="absolute inset-[-5.71%_-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.716 16.5878">
          <g id="Heart">
            <path d={svgPaths.pf518228} id="Vector" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70146" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LineRoundedHeart() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20.418px]" data-name="Line Rounded/Heart">
      <Heart />
    </div>
  );
}

function IconWrapper1() {
  return (
    <div className="content-stretch flex items-center p-[6px] relative rounded-[50px] shrink-0" data-name="Icon Wrapper">
      <LineRoundedHeart />
    </div>
  );
}

function ComplexTitle() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Complex Title">
      <IconWrapper1 />
      <p className="font-['Red_Hat_Display:Bold',sans-serif] leading-[44px] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] w-[570px]">What is your favorite template from BRIX Templates?</p>
    </div>
  );
}

function Add() {
  return (
    <div className="absolute inset-[19.11%_20.61%_22.12%_20.61%]" data-name="Add">
      <div className="absolute inset-[-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
          <g id="Add">
            <path d="M6.66667 0.666667V12.6667" id="Vector" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M0.666667 6.66667H12.6667" id="Vector_2" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LineRoundedAdd() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20.418px]" data-name="Line Rounded/Add">
      <Add />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Heading">
      <ComplexTitle />
      <LineRoundedAdd />
    </div>
  );
}

function Accordions1() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start relative shrink-0 w-full z-[16]" data-name="Accordions">
      <Heading1 />
    </div>
  );
}

function Test() {
  return (
    <div className="absolute inset-[6.83%_15.28%_9.84%_12.5%]" data-name="Test">
      <div className="absolute inset-[-5%_-5.77%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.4474 18.716">
          <g id="Test">
            <path d={svgPaths.p3ec1a580} id="Line" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70146" />
            <path d={svgPaths.p352a79a8} id="Line_2" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70146" />
            <path d={svgPaths.p332c8d00} id="Line_3" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70146" />
            <path d="M9.35791 8.5411H12.7608" id="Line_4" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70146" />
            <path d="M9.35791 13.0783H12.7608" id="Line_5" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70146" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LineRoundedTest() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20.418px]" data-name="Line Rounded/Test">
      <Test />
    </div>
  );
}

function IconWrapper2() {
  return (
    <div className="content-stretch flex items-center p-[6px] relative rounded-[50px] shrink-0" data-name="Icon Wrapper">
      <LineRoundedTest />
    </div>
  );
}

function ComplexTitle1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Complex Title">
      <IconWrapper2 />
      <p className="font-['Red_Hat_Display:Bold',sans-serif] leading-[44px] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] w-[570px]">How do you clone a template from the Showcase?</p>
    </div>
  );
}

function Add1() {
  return (
    <div className="absolute inset-[19.11%_20.61%_22.12%_20.61%]" data-name="Add">
      <div className="absolute inset-[-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
          <g id="Add">
            <path d="M6.66667 0.666667V12.6667" id="Vector" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M0.666667 6.66667H12.6667" id="Vector_2" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LineRoundedAdd1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20.418px]" data-name="Line Rounded/Add">
      <Add1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Heading">
      <ComplexTitle1 />
      <LineRoundedAdd1 />
    </div>
  );
}

function Accordions2() {
  return (
    <div className="content-stretch flex flex-col h-[33px] items-start relative shrink-0 w-full z-[14]" data-name="Accordions">
      <Heading2 />
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute inset-[8.33%_8.34%_8.33%_8.33%]" data-name="Badge">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.716 18.7161">
          <g id="Badge">
            <path d={svgPaths.p1da35300} id="Vector" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70146" />
            <path d={svgPaths.p22739700} id="Vector_2" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70146" />
            <path d={svgPaths.p113d6400} id="Vector_3" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70146" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LineRoundedBadge() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20.418px]" data-name="Line Rounded/Badge">
      <Badge />
    </div>
  );
}

function IconWrapper3() {
  return (
    <div className="content-stretch flex items-center p-[6px] relative rounded-[50px] shrink-0" data-name="Icon Wrapper">
      <LineRoundedBadge />
    </div>
  );
}

function ComplexTitle2() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Complex Title">
      <IconWrapper3 />
      <p className="font-['Red_Hat_Display:Bold',sans-serif] leading-[44px] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] w-[570px]">Why is BRIX Templates the best Webflow agency?</p>
    </div>
  );
}

function Add2() {
  return (
    <div className="absolute inset-[19.11%_20.61%_22.12%_20.61%]" data-name="Add">
      <div className="absolute inset-[-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
          <g id="Add">
            <path d="M6.66667 0.666667V12.6667" id="Vector" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M0.666667 6.66667H12.6667" id="Vector_2" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LineRoundedAdd2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20.418px]" data-name="Line Rounded/Add">
      <Add2 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Heading">
      <ComplexTitle2 />
      <LineRoundedAdd2 />
    </div>
  );
}

function Accordions3() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start relative shrink-0 w-full z-[12]" data-name="Accordions">
      <Heading3 />
    </div>
  );
}

function Calendar() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Calendar">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.716 18.716">
          <g id="Calendar">
            <path d={svgPaths.p1fa9cf00} id="Vector" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70146" />
            <path d="M0.850729 7.65656H17.8653" id="Vector_2" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70146" />
            <path d="M5.38795 4.8208V0.850729" id="Vector_3" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70146" />
            <path d="M13.3281 4.8208V0.850729" id="Vector_4" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70146" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LineRoundedCalendar() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20.418px]" data-name="Line Rounded/Calendar">
      <Calendar />
    </div>
  );
}

function IconWrapper4() {
  return (
    <div className="content-stretch flex items-center p-[6px] relative rounded-[50px] shrink-0" data-name="Icon Wrapper">
      <LineRoundedCalendar />
    </div>
  );
}

function ComplexTitle3() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Complex Title">
      <IconWrapper4 />
      <p className="font-['Red_Hat_Display:Bold',sans-serif] leading-[44px] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] w-[570px]">When was Webflow officially launched?</p>
    </div>
  );
}

function Add3() {
  return (
    <div className="absolute inset-[19.11%_20.61%_22.12%_20.61%]" data-name="Add">
      <div className="absolute inset-[-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
          <g id="Add">
            <path d="M6.66667 0.666667V12.6667" id="Vector" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M0.666667 6.66667H12.6667" id="Vector_2" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LineRoundedAdd3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20.418px]" data-name="Line Rounded/Add">
      <Add3 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Heading">
      <ComplexTitle3 />
      <LineRoundedAdd3 />
    </div>
  );
}

function Accordions4() {
  return (
    <div className="content-stretch flex flex-col h-[33px] items-start relative shrink-0 w-full z-10" data-name="Accordions">
      <Heading4 />
    </div>
  );
}

function Calendar1() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Calendar">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.716 18.716">
          <g id="Calendar">
            <path d={svgPaths.p1fa9cf00} id="Vector" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70146" />
            <path d="M0.850729 7.65656H17.8653" id="Vector_2" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70146" />
            <path d="M5.38795 4.8208V0.850729" id="Vector_3" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70146" />
            <path d="M13.3281 4.8208V0.850729" id="Vector_4" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70146" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LineRoundedCalendar1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20.418px]" data-name="Line Rounded/Calendar">
      <Calendar1 />
    </div>
  );
}

function IconWrapper5() {
  return (
    <div className="content-stretch flex items-center p-[6px] relative rounded-[50px] shrink-0" data-name="Icon Wrapper">
      <LineRoundedCalendar1 />
    </div>
  );
}

function ComplexTitle4() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Complex Title">
      <IconWrapper5 />
      <p className="font-['Red_Hat_Display:Bold',sans-serif] leading-[44px] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] w-[570px]">When was Webflow officially launched?</p>
    </div>
  );
}

function Add4() {
  return (
    <div className="absolute inset-[19.11%_20.61%_22.12%_20.61%]" data-name="Add">
      <div className="absolute inset-[-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
          <g id="Add">
            <path d="M6.66667 0.666667V12.6667" id="Vector" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M0.666667 6.66667H12.6667" id="Vector_2" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LineRoundedAdd4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20.418px]" data-name="Line Rounded/Add">
      <Add4 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Heading">
      <ComplexTitle4 />
      <LineRoundedAdd4 />
    </div>
  );
}

function Accordions5() {
  return (
    <div className="content-stretch flex flex-col h-[33px] items-start relative shrink-0 w-full z-[8]" data-name="Accordions">
      <Heading5 />
    </div>
  );
}

function Calendar2() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Calendar">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.716 18.716">
          <g id="Calendar">
            <path d={svgPaths.p1fa9cf00} id="Vector" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70146" />
            <path d="M0.850729 7.65656H17.8653" id="Vector_2" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70146" />
            <path d="M5.38795 4.8208V0.850729" id="Vector_3" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70146" />
            <path d="M13.3281 4.8208V0.850729" id="Vector_4" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70146" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LineRoundedCalendar2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20.418px]" data-name="Line Rounded/Calendar">
      <Calendar2 />
    </div>
  );
}

function IconWrapper6() {
  return (
    <div className="content-stretch flex items-center p-[6px] relative rounded-[50px] shrink-0" data-name="Icon Wrapper">
      <LineRoundedCalendar2 />
    </div>
  );
}

function ComplexTitle5() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Complex Title">
      <IconWrapper6 />
      <p className="font-['Red_Hat_Display:Bold',sans-serif] leading-[44px] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] w-[570px]">When was Webflow officially launched?</p>
    </div>
  );
}

function Add5() {
  return (
    <div className="absolute inset-[19.11%_20.61%_22.12%_20.61%]" data-name="Add">
      <div className="absolute inset-[-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
          <g id="Add">
            <path d="M6.66667 0.666667V12.6667" id="Vector" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M0.666667 6.66667H12.6667" id="Vector_2" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LineRoundedAdd5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20.418px]" data-name="Line Rounded/Add">
      <Add5 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Heading">
      <ComplexTitle5 />
      <LineRoundedAdd5 />
    </div>
  );
}

function Accordions6() {
  return (
    <div className="content-stretch flex flex-col h-[33px] items-start relative shrink-0 w-full z-[6]" data-name="Accordions">
      <Heading6 />
    </div>
  );
}

function Calendar3() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Calendar">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.716 18.716">
          <g id="Calendar">
            <path d={svgPaths.p1fa9cf00} id="Vector" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70146" />
            <path d="M0.850729 7.65656H17.8653" id="Vector_2" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70146" />
            <path d="M5.38795 4.8208V0.850729" id="Vector_3" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70146" />
            <path d="M13.3281 4.8208V0.850729" id="Vector_4" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70146" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LineRoundedCalendar3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20.418px]" data-name="Line Rounded/Calendar">
      <Calendar3 />
    </div>
  );
}

function IconWrapper7() {
  return (
    <div className="content-stretch flex items-center p-[6px] relative rounded-[50px] shrink-0" data-name="Icon Wrapper">
      <LineRoundedCalendar3 />
    </div>
  );
}

function ComplexTitle6() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Complex Title">
      <IconWrapper7 />
      <p className="font-['Red_Hat_Display:Bold',sans-serif] leading-[44px] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] w-[570px]">When was Webflow officially launched?</p>
    </div>
  );
}

function Add6() {
  return (
    <div className="absolute inset-[19.11%_20.61%_22.12%_20.61%]" data-name="Add">
      <div className="absolute inset-[-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
          <g id="Add">
            <path d="M6.66667 0.666667V12.6667" id="Vector" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M0.666667 6.66667H12.6667" id="Vector_2" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LineRoundedAdd6() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20.418px]" data-name="Line Rounded/Add">
      <Add6 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Heading">
      <ComplexTitle6 />
      <LineRoundedAdd6 />
    </div>
  );
}

function Accordions7() {
  return (
    <div className="content-stretch flex flex-col h-[33px] items-start relative shrink-0 w-full z-[4]" data-name="Accordions">
      <Heading7 />
    </div>
  );
}

function Calendar4() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Calendar">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.716 18.716">
          <g id="Calendar">
            <path d={svgPaths.p1fa9cf00} id="Vector" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70146" />
            <path d="M0.850729 7.65656H17.8653" id="Vector_2" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70146" />
            <path d="M5.38795 4.8208V0.850729" id="Vector_3" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70146" />
            <path d="M13.3281 4.8208V0.850729" id="Vector_4" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.70146" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LineRoundedCalendar4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20.418px]" data-name="Line Rounded/Calendar">
      <Calendar4 />
    </div>
  );
}

function IconWrapper8() {
  return (
    <div className="content-stretch flex items-center p-[6px] relative rounded-[50px] shrink-0" data-name="Icon Wrapper">
      <LineRoundedCalendar4 />
    </div>
  );
}

function ComplexTitle7() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Complex Title">
      <IconWrapper8 />
      <p className="font-['Red_Hat_Display:Bold',sans-serif] leading-[44px] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] w-[570px]">When was Webflow officially launched?</p>
    </div>
  );
}

function Add7() {
  return (
    <div className="absolute inset-[19.11%_20.61%_22.12%_20.61%]" data-name="Add">
      <div className="absolute inset-[-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
          <g id="Add">
            <path d="M6.66667 0.666667V12.6667" id="Vector" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M0.666667 6.66667H12.6667" id="Vector_2" stroke="var(--stroke-0, #A0A3BD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LineRoundedAdd7() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20.418px]" data-name="Line Rounded/Add">
      <Add7 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Heading">
      <ComplexTitle7 />
      <LineRoundedAdd7 />
    </div>
  );
}

function Accordions8() {
  return (
    <div className="content-stretch flex flex-col h-[33px] items-start relative shrink-0 w-full z-[2]" data-name="Accordions">
      <Heading8 />
    </div>
  );
}

function Accordions9() {
  return (
    <div className="relative rounded-[24px] shadow-[0px_2px_6px_0px_rgba(25,33,61,0.1)] shrink-0 w-full" data-name="Accordions">
      <div className="content-stretch flex flex-col gap-[32px] isolate items-start p-[80px] relative w-full">
        <Accordions />
        <div className="h-0 relative shrink-0 w-full z-[17]" data-name="Divider">
          <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(241, 242, 249, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1020 1">
              <line id="Divider" stroke="var(--stroke-0, #F1F2F9)" x2="1020" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Accordions1 />
        <div className="h-0 relative shrink-0 w-full z-[15]" data-name="Divider">
          <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(241, 242, 249, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1020 1">
              <line id="Divider" stroke="var(--stroke-0, #F1F2F9)" x2="1020" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Accordions2 />
        <div className="h-0 relative shrink-0 w-full z-[13]" data-name="Divider">
          <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(241, 242, 249, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1020 1">
              <line id="Divider" stroke="var(--stroke-0, #F1F2F9)" x2="1020" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Accordions3 />
        <div className="h-0 relative shrink-0 w-full z-[11]" data-name="Divider">
          <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(241, 242, 249, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1020 1">
              <line id="Divider" stroke="var(--stroke-0, #F1F2F9)" x2="1020" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Accordions4 />
        <div className="h-0 relative shrink-0 w-full z-[9]" data-name="Divider">
          <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(241, 242, 249, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1020 1">
              <line id="Divider" stroke="var(--stroke-0, #F1F2F9)" x2="1020" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Accordions5 />
        <div className="h-0 relative shrink-0 w-full z-[7]" data-name="Divider">
          <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(241, 242, 249, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1020 1">
              <line id="Divider" stroke="var(--stroke-0, #F1F2F9)" x2="1020" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Accordions6 />
        <div className="h-0 relative shrink-0 w-full z-[5]" data-name="Divider">
          <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(241, 242, 249, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1020 1">
              <line id="Divider" stroke="var(--stroke-0, #F1F2F9)" x2="1020" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Accordions7 />
        <div className="h-0 relative shrink-0 w-full z-[3]" data-name="Divider">
          <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(241, 242, 249, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1020 1">
              <line id="Divider" stroke="var(--stroke-0, #F1F2F9)" x2="1020" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Accordions8 />
        <div className="h-0 relative shrink-0 w-full z-[1]" data-name="Divider">
          <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(241, 242, 249, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1020 1">
              <line id="Divider" stroke="var(--stroke-0, #F1F2F9)" x2="1020" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function AccordionDisplay() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[1180px]" data-name="Accordion Display">
      <TabSwitcher />
      <Accordions9 />
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Red_Hat_Display:Medium',sans-serif] leading-[29.456px] not-italic relative shrink-0 text-[#f5f5f5] text-[20.619px] text-nowrap">Buy Now</p>
    </div>
  );
}

function Buttons8() {
  const navigate = useNavigate();
  
  return (
    <div 
      className="bg-[#009258] content-stretch flex flex-col h-[53.021px] items-center justify-center px-[23.565px] py-[11.782px] relative rounded-[35.701px] shadow-[0px_1.473px_2.946px_0px_rgba(0,0,0,0.1)] shrink-0 cursor-pointer hover:bg-[#007a45] hover:shadow-[0px_4px_12px_0px_rgba(0,184,105,0.3)] transition-all duration-300 hover:scale-105 active:scale-95" 
      data-name="Buttons"
      onClick={() => navigate('/buy')}
    >
      <Text8 />
    </div>
  );
}

function Header10() {
  return (
    <div className="content-stretch flex flex-col gap-[19.111px] items-start justify-center relative shrink-0 w-[512px]" data-name="Header">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[57.333px] not-italic relative shrink-0 text-[#0a0a0a] text-[57.333px] text-nowrap">Limited Stock. Buy now.</p>
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[43px] min-w-full not-italic relative shrink-0 text-[#0a0a0a] text-[35.833px] w-[min-content]">3 steps:</p>
      <p className="font-['Manrope:Regular',sans-serif] leading-[100.33%] min-w-full not-italic relative shrink-0 text-[24px] text-black w-[min-content]">{`Mentra Live will retail for $X, but the next 100 pre-orders will secure it at  just $250 and get December delivery—later orders ship later. `}</p>
      <Buttons8 />
    </div>
  );
}

function Logo2() {
  return (
    <div className="h-[40.87px] relative w-[76.67px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76.6704 40.8697">
        <g id="Logo">
          <rect fill="var(--fill-0, #737373)" fillOpacity="0.04" height="18.1643" id="Rectangle 1" width="18.1643" y="22.7054" />
          <path d={svgPaths.pc169780} fill="var(--fill-0, #737373)" fillOpacity="0.04" id="Rectangle 2" />
          <path d={svgPaths.p3a3e2780} fill="var(--fill-0, #737373)" fillOpacity="0.04" id="Rectangle 3" />
        </g>
      </svg>
    </div>
  );
}

function Logo3() {
  return (
    <div className="h-[40.87px] relative shrink-0 w-[76.67px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76.6704 40.8697">
        <g id="Logo">
          <rect fill="var(--fill-0, #737373)" fillOpacity="0.08" height="18.1643" id="Rectangle 1" width="18.1643" y="22.7054" />
          <path d={svgPaths.pc169780} fill="var(--fill-0, #737373)" fillOpacity="0.08" id="Rectangle 2" />
          <path d={svgPaths.p3a3e2780} fill="var(--fill-0, #737373)" fillOpacity="0.08" id="Rectangle 3" />
        </g>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center relative">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Logo2 />
        </div>
      </div>
      <Logo3 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Logo2 />
        </div>
      </div>
      <Logo3 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Logo2 />
        </div>
      </div>
      <Logo3 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Logo2 />
        </div>
      </div>
      <Logo3 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Logo2 />
        </div>
      </div>
    </div>
  );
}

function Logo4() {
  return (
    <div className="h-[40.87px] relative shrink-0 w-[76.67px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76.6704 40.8697">
        <g id="Logo">
          <rect fill="var(--fill-0, #737373)" fillOpacity="0.08" height="18.1643" id="Rectangle 1" width="18.1643" y="22.7054" />
          <path d={svgPaths.pc169780} fill="var(--fill-0, #737373)" fillOpacity="0.08" id="Rectangle 2" />
          <path d={svgPaths.p3a3e2780} fill="var(--fill-0, #737373)" fillOpacity="0.08" id="Rectangle 3" />
        </g>
      </svg>
    </div>
  );
}

function Logo5() {
  return (
    <div className="h-[40.87px] relative w-[76.67px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76.6704 40.8697">
        <g id="Logo">
          <rect fill="var(--fill-0, #737373)" fillOpacity="0.04" height="18.1643" id="Rectangle 1" width="18.1643" y="22.7054" />
          <path d={svgPaths.pc169780} fill="var(--fill-0, #737373)" fillOpacity="0.04" id="Rectangle 2" />
          <path d={svgPaths.p3a3e2780} fill="var(--fill-0, #737373)" fillOpacity="0.04" id="Rectangle 3" />
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center relative">
      <Logo4 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Logo5 />
        </div>
      </div>
      <Logo4 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Logo5 />
        </div>
      </div>
      <Logo4 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Logo5 />
        </div>
      </div>
      <Logo4 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Logo5 />
        </div>
      </div>
      <Logo4 />
    </div>
  );
}

function Logo6() {
  return (
    <div className="h-[40.87px] relative w-[76.67px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76.6704 40.8697">
        <g id="Logo">
          <rect fill="var(--fill-0, #737373)" fillOpacity="0.04" height="18.1643" id="Rectangle 1" width="18.1643" y="22.7054" />
          <path d={svgPaths.pc169780} fill="var(--fill-0, #737373)" fillOpacity="0.04" id="Rectangle 2" />
          <path d={svgPaths.p3a3e2780} fill="var(--fill-0, #737373)" fillOpacity="0.04" id="Rectangle 3" />
        </g>
      </svg>
    </div>
  );
}

function Logo7() {
  return (
    <div className="h-[40.87px] relative shrink-0 w-[76.67px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76.6704 40.8697">
        <g id="Logo">
          <rect fill="var(--fill-0, #737373)" fillOpacity="0.08" height="18.1643" id="Rectangle 1" width="18.1643" y="22.7054" />
          <path d={svgPaths.pc169780} fill="var(--fill-0, #737373)" fillOpacity="0.08" id="Rectangle 2" />
          <path d={svgPaths.p3a3e2780} fill="var(--fill-0, #737373)" fillOpacity="0.08" id="Rectangle 3" />
        </g>
      </svg>
    </div>
  );
}

function Logo8() {
  return (
    <div className="h-[40.87px] relative w-[76.67px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76.6704 40.8697">
        <g id="Logo">
          <g id="Rectangle 1"></g>
          <g id="Rectangle 2"></g>
          <g id="Rectangle 3"></g>
        </g>
      </svg>
    </div>
  );
}

function Logo9() {
  return (
    <div className="h-[40.87px] relative shrink-0 w-[76.67px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76.6704 40.8697">
        <g id="Logo">
          <g id="Rectangle 1"></g>
          <g id="Rectangle 2"></g>
          <g id="Rectangle 3"></g>
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center relative">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Logo6 />
        </div>
      </div>
      <Logo7 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Logo8 />
        </div>
      </div>
      <Logo9 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Logo6 />
        </div>
      </div>
      <Logo7 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Logo6 />
        </div>
      </div>
      <Logo7 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Logo6 />
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-start relative">
      <div className="flex h-[690.033px] items-center justify-center relative shrink-0 w-[40.87px]" style={{ "--transform-inner-width": "2700", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Frame23 />
        </div>
      </div>
      <div className="flex h-[690.033px] items-center justify-center relative shrink-0 w-[40.87px]" style={{ "--transform-inner-width": "2700", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Frame22 />
        </div>
      </div>
      <div className="flex h-[690.033px] items-center justify-center relative shrink-0 w-[40.87px]" style={{ "--transform-inner-width": "2700", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Frame23 />
        </div>
      </div>
      <div className="flex h-[690.033px] items-center justify-center relative shrink-0 w-[40.87px]" style={{ "--transform-inner-width": "2700", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Frame22 />
        </div>
      </div>
      <div className="flex h-[690.033px] items-center justify-center relative shrink-0 w-[40.87px]" style={{ "--transform-inner-width": "2700", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Frame21 />
        </div>
      </div>
      <div className="flex h-[690.033px] items-center justify-center relative shrink-0 w-[40.87px]" style={{ "--transform-inner-width": "2700", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Frame22 />
        </div>
      </div>
      <div className="flex h-[690.033px] items-center justify-center relative shrink-0 w-[40.87px]" style={{ "--transform-inner-width": "2700", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Frame23 />
        </div>
      </div>
      <div className="flex h-[690.033px] items-center justify-center relative shrink-0 w-[40.87px]" style={{ "--transform-inner-width": "2700", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Frame22 />
        </div>
      </div>
      <div className="flex h-[690.033px] items-center justify-center relative shrink-0 w-[40.87px]" style={{ "--transform-inner-width": "2700", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Frame23 />
        </div>
      </div>
      <div className="flex h-[690.033px] items-center justify-center relative shrink-0 w-[40.87px]" style={{ "--transform-inner-width": "2700", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Frame22 />
        </div>
      </div>
      <div className="flex h-[690.033px] items-center justify-center relative shrink-0 w-[40.87px]" style={{ "--transform-inner-width": "2700", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Frame23 />
        </div>
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="[grid-area:1_/_1] bg-[#f5f5f5] h-[397.799px] ml-[0.97px] mt-[52.78px] overflow-clip relative rounded-[51.495px] w-[690.033px]">
      <div className="absolute flex h-[606.328px] items-center justify-center left-[238.16px] top-[-50.21px] w-[871.884px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[340.597deg]">
          <div className="h-[362.189px] relative w-[796.816px]" data-name="Screenshot 2025-12-02 at 3.38.17 PM 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20251202At33817Pm1} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[449.568px] items-center justify-center left-[0.32px] top-[-0.28px] w-[690.033px]" style={{ "--transform-inner-width": "29700", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Mask group">
      <div className="[grid-area:1_/_1] h-[408.121px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[22.964px_13.937px] mask-size-[486.327px_388.825px] ml-[-23.63px] mt-[-14.61px] relative w-[540.438px]" data-name="Screenshot 2025-12-02 at 3.36.29 PM 1" style={{ maskImage: `url('${imgScreenshot20251202At33629Pm1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20251202At33629Pm2} />
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame71 />
      <MaskGroup />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1452px]">
      <Header10 />
      <Group7 />
    </div>
  );
}

function NavigationIcon13() {
  return (
    <div className="relative shrink-0 size-[75px]" data-name="Navigation Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 75">
        <g id="Navigation Icon">
          <g id="Vector"></g>
          <path d={svgPaths.p21da6280} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function NavigationButton13() {
  return (
    <div className="[grid-area:1_/_1] backdrop-blur-[15.625px] backdrop-filter bg-[rgba(255,255,255,0.4)] content-stretch flex items-center justify-center ml-[663.22px] mt-[324.25px] relative rounded-[100px] size-[125px]" data-name="Navigation Button">
      <NavigationIcon13 />
    </div>
  );
}

function Group15() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <div className="[grid-area:1_/_1] h-[812.797px] ml-0 mt-0 relative rounded-[24px] w-[1452.444px]" data-name="Screenshot 2025-12-29 at 7.50.04 AM 1">
        <iframe 
          className="absolute inset-0 rounded-[24px] size-full" 
          src="https://www.youtube.com/embed/-96QvIVzcMc?controls=0&modestbranding=1&rel=0&showinfo=0" 
          title="Unboxing Video" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
        />
      </div>
    </div>
  );
}

function Frame167() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[57.333px] not-italic relative shrink-0 text-[#0a0a0a] text-[57.333px] text-center text-nowrap">Unboxing Video</p>
      <Group15 />
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Red_Hat_Display:Medium',sans-serif] leading-[22.766px] not-italic relative shrink-0 text-[#0a0a0a] text-[15.936px] text-nowrap">See more at Newsroom</p>
    </div>
  );
}

function Buttons9() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[40.979px] items-center justify-center px-[18.213px] py-[9.107px] relative rounded-[27.594px] shrink-0" data-name="Buttons">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-[1.138px] border-solid inset-0 pointer-events-none rounded-[27.594px] shadow-[0px_1.138px_2.277px_0px_rgba(0,0,0,0.1)]" />
      <Text9 />
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[57.333px] min-w-full not-italic relative shrink-0 text-[#0a0a0a] text-[57.333px] text-center w-[min-content]">Catch up on the latest news</p>
      <Buttons9 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[40px] relative shrink-0 text-[#0d0c0d] text-[28px] tracking-[0.3px] w-full">Mentra AI</p>
      <div className="flex flex-col font-['Red_Hat_Display:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#686069] text-[16px] tracking-[-0.2px] w-full">
        <p className="leading-[1.5]">With high-definition video capabilities and a sleek design, the Mentra Live Camera Glasses are not just a gadget, but a lifestyle accessory that enhances your experiences.</p>
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="aspect-[1200/851] relative rounded-[20px] shrink-0 w-full" data-name="image 163">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgImage163} />
      </div>
      <Frame103 />
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[40px] relative shrink-0 text-[#0d0c0d] text-[28px] tracking-[0.3px] w-full">Mentra AI</p>
      <div className="flex flex-col font-['Red_Hat_Display:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#686069] text-[16px] tracking-[-0.2px] w-full">
        <p className="leading-[1.5]">With high-definition video capabilities and a sleek design, the Mentra Live Camera Glasses are not just a gadget, but a lifestyle accessory that enhances your experiences.</p>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="aspect-[1200/851] relative rounded-[20px] shrink-0 w-full" data-name="image 163">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgImage164} />
      </div>
      <Frame104 />
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[40px] relative shrink-0 text-[#0d0c0d] text-[28px] tracking-[0.3px] w-full">Mentra AI</p>
      <div className="flex flex-col font-['Red_Hat_Display:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#686069] text-[16px] tracking-[-0.2px] w-full">
        <p className="leading-[1.5]">With high-definition video capabilities and a sleek design, the Mentra Live Camera Glasses are not just a gadget, but a lifestyle accessory that enhances your experiences.</p>
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="aspect-[1200/851] relative rounded-[20px] shrink-0 w-full" data-name="image 163">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgImage165} />
      </div>
      <Frame105 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[80px] items-center relative shrink-0 w-full">
      <Frame77 />
      <Frame78 />
      <Frame80 />
    </div>
  );
}

function Frame126() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[1452.444px]">
      <Frame102 />
      <Frame55 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute h-[644px] left-[385px] top-[-450.92px] w-[720.826px]">
      <div className="absolute inset-[-77.64%_-69.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1720.83 1644">
          <g id="Group 1597880443">
            <g filter="url(#filter0_f_1_5275)" id="Ellipse 2344">
              <ellipse cx="801.958" cy="842.375" fill="var(--fill-0, #D7EAFF)" rx="301.958" ry="301.624" />
            </g>
            <g filter="url(#filter1_f_1_5275)" id="Ellipse 2343">
              <ellipse cx="918.868" cy="801.625" fill="var(--fill-0, #1577E3)" rx="301.958" ry="301.624" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1603.25" id="filter0_f_1_5275" width="1603.92" x="0" y="40.751">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_5275" stdDeviation="250" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1603.25" id="filter1_f_1_5275" width="1603.92" x="116.909" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_5275" stdDeviation="250" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Red_Hat_Display:Medium',sans-serif] leading-[29.456px] not-italic relative shrink-0 text-[#0a0a0a] text-[20.619px] text-nowrap">Buy Now</p>
    </div>
  );
}

function Buttons10() {
  const navigate = useNavigate();
  
  return (
    <div 
      className="bg-[#fcfcfc] content-stretch flex flex-col h-[53.021px] items-center justify-center px-[23.565px] py-[11.782px] relative rounded-[35.701px] shadow-[0px_1.473px_2.946px_0px_rgba(0,0,0,0.1)] shrink-0 cursor-pointer hover:bg-[#e5e5e5] transition-colors" 
      data-name="Buttons"
      onClick={() => navigate('/buy')}
    >
      <Text10 />
    </div>
  );
}

function Header11() {
  return (
    <div className="content-stretch flex flex-col gap-[19.111px] items-start justify-center relative shrink-0 w-[687px]" data-name="Header">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[57.333px] not-italic relative shrink-0 text-[57.333px] text-center text-nowrap text-white">Get Your Mentra Glasses</p>
      <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[24px] text-white w-[min-content]">Capture video, livestream, ask AI, and take calls on your favorite glasses.</p>
      <Buttons10 />
    </div>
  );
}

function Frame168() {
  return (
    <div className="shrink-0 w-[1452px]">
      <GetYourMentraGlassesSection />
    </div>
  );
}

function Logo10() {
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

function Frame39() {
  return (
    <div className="content-stretch flex gap-[7.167px] items-center relative shrink-0">
      <Logo10 />
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
      <Frame39 />
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
    <div className="basis-0 content-stretch flex grow items-start justify-between min-h-px min-w-px relative shrink-0" data-name="div.relative">
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
    <div className="bg-white content-stretch flex h-[348px] items-start px-0 py-[48px] relative shrink-0 w-[1452.444px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <DivRelative />
    </div>
  );
}

function Frame69() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[240px] items-center pb-0 pt-[160px] px-0 relative shrink-0" style={{ paddingBottom: 0, marginBottom: 0 }}>
      <ScrollReveal direction="fade" delay={0} duration={0.8} threshold={0.05}>
        <Frame153 />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={50} distance={40} duration={0.8} threshold={0.05}>
        <Frame101 />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={100} distance={40} duration={1} threshold={0.05} className="w-full">
        <EasiestSmartGlassesSection />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={50} distance={40} duration={0.8} threshold={0.05}>
        <Frame130 />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={50} distance={40} duration={0.8} threshold={0.05}>
        <Frame75 />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={50} distance={40} duration={1} threshold={0.05} className="w-full">
        <FAQSection />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={50} distance={40} duration={0.8} threshold={0.05}>
        <Frame72 />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={50} distance={40} duration={0.8} threshold={0.05}>
        <Frame167 />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={50} distance={40} duration={0.8} threshold={0.05}>
        <Frame126 />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={50} distance={40} duration={0.8} threshold={0.05}>
        <Frame168 />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={50} distance={40} duration={0.8} threshold={0.05}>
        <Footer />
      </ScrollReveal>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[128px] items-center justify-center overflow-clip pb-0 pt-[160px] px-[133.778px] relative shrink-0">
      <Frame128 />
      <TalkToAiAnytime />
      <Frame73 />
      <Frame127 />
      <Frame131 />
      <Frame133 />
      <Frame156 />
      <Frame137 />
      <Frame69 />
    </div>
  );
}

function DivGrid6() {
  return <div className="content-stretch flex h-[88px] items-center overflow-clip px-[133.778px] py-[20px] shrink-0 sticky top-0 w-[1720px]" data-name="div.grid" />;
}

function Frame44() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Red_Hat_Display:Bold',sans-serif] font-['Red_Hat_Display:SemiBold',sans-serif] leading-[28.667px] not-italic relative shrink-0 text-[#0a0a0a] text-[32px] text-nowrap">
        <span>{`AI glasses `}</span>|<span>{` Mentra Live`}</span>
      </p>
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Red_Hat_Display:Bold',sans-serif] leading-[29.456px] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] text-nowrap">Buy Now</p>
    </div>
  );
}

function Buttons11() {
  const navigate = useNavigate();
  
  return (
    <div 
      className="bg-[#00b869] content-stretch flex flex-col h-[53.021px] items-center justify-center px-[23.565px] py-[11.782px] relative rounded-[35.701px] shadow-[0px_1.473px_2.946px_0px_rgba(0,0,0,0.1)] shrink-0 cursor-pointer hover:bg-[#009854] hover:shadow-[0px_4px_12px_0px_rgba(0,184,105,0.3)] transition-all duration-300 hover:scale-105 active:scale-95" 
      data-name="Buttons"
      onClick={() => navigate('/buy')}
    >
      <Text11 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <p className="font-['Manrope:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-center text-nowrap">$299 · USA Only · Prescription-ready</p>
      <Buttons11 />
    </div>
  );
}

function DivGrid7() {
  return (
    <div className="backdrop-blur-[50px] backdrop-filter bg-[rgba(255,255,255,0.85)] content-stretch flex items-center justify-between overflow-clip px-[133.778px] py-[12px] shrink-0 w-full shadow-[0px_4px_30px_5px_rgba(0,0,0,0.05)]" data-name="div.grid">
      <Frame44 />
      <Frame47 />
    </div>
  );
}

function DivGrid8() {
  return (
    <div className="pointer-events-auto sticky top-0 translate-x-[-50%] w-[1720px]" data-name="div.grid">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <DivGrid6 />
        <DivGrid7 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Logo11() {
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

function Frame40() {
  return (
    <div className="content-stretch flex gap-[7.167px] items-center relative shrink-0">
      <Logo11 />
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0a0a0a] text-[23.889px] text-center text-nowrap">Mentra</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-center px-[16px] py-[4px] relative rounded-[32px] shrink-0">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[31.873px] not-italic relative shrink-0 text-[#00b869] text-[20px] text-center text-nowrap">AI glasses</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col items-center px-[16px] py-[4px] relative rounded-[32px] shrink-0">
      <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[31.873px] not-italic relative shrink-0 text-[#0a0a0a] text-[20px] text-center text-nowrap">Apps and OS</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col items-center px-[16px] py-[4px] relative rounded-[32px] shrink-0">
      <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[31.873px] not-italic relative shrink-0 text-[#0a0a0a] text-[20px] text-center text-nowrap">Company</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col items-center px-[16px] py-[4px] relative rounded-[32px] shrink-0">
      <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[31.873px] not-italic relative shrink-0 text-[#0a0a0a] text-[20px] text-center text-nowrap">Community</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[38.222px] items-center justify-center relative shrink-0">
      <Frame40 />
      <Frame20 />
      <Frame41 />
      <Frame42 />
      <Frame43 />
    </div>
  );
}

function ShoppingBag1() {
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

function NavigationIcon14() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Navigation Icon">
      <ShoppingBag1 />
    </div>
  );
}

function NavigationButton14() {
  return (
    <div className="bg-[#009258] content-stretch flex items-center p-[8px] relative rounded-[32px] shrink-0" data-name="Navigation Button">
      <NavigationIcon14 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <NavigationButton14 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[1452.444px]">
      <Frame27 />
      <Frame53 />
    </div>
  );
}

function NavBar() {
  return (
    <div className="backdrop-blur-[50px] backdrop-filter bg-[rgba(255,255,255,0.85)] content-stretch flex h-[90px] items-start justify-between overflow-clip px-[133.778px] py-[24px] shrink-0 w-full" data-name="NavBar">
      <Frame54 />
    </div>
  );
}

function DivGrid9({ onDropdownChange }: { onDropdownChange?: (isActive: boolean) => void }) {
  return (
    <div className="content-stretch flex flex-col items-start overflow-visible w-full" data-name="div.grid">
      <NavigationBar onDropdownChange={onDropdownChange} />
    </div>
  );
}

function Frame59() {
  return (
    <div className="absolute h-[469px] left-[calc(50%-1467.5px)] top-[10674px] translate-x-[-50%] w-[987px]">
      <div className="absolute inset-[-0.21%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 987 470">
          <g id="Frame 1597880443">
            <line id="Line 41" stroke="var(--stroke-0, #E5E5E5)" x2="987" y1="0.5" y2="0.5" />
            <line id="Line 42" stroke="var(--stroke-0, #E5E5E5)" x2="987" y1="67.5" y2="67.5" />
            <line id="Line 43" stroke="var(--stroke-0, #E5E5E5)" x2="987" y1="134.5" y2="134.5" />
            <line id="Line 44" stroke="var(--stroke-0, #E5E5E5)" x2="987" y1="201.5" y2="201.5" />
            <line id="Line 45" stroke="var(--stroke-0, #E5E5E5)" x2="987" y1="268.5" y2="268.5" />
            <line id="Line 46" stroke="var(--stroke-0, #E5E5E5)" x2="987" y1="335.5" y2="335.5" />
            <line id="Line 47" stroke="var(--stroke-0, #E5E5E5)" x2="987" y1="402.5" y2="402.5" />
            <line id="Line 48" stroke="var(--stroke-0, #E5E5E5)" x2="987" y1="469.5" y2="469.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function AiGlasses() {
  const [isSecondNavSticky, setIsSecondNavSticky] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;

    // Use IntersectionObserver to detect when hero section exits viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When hero is not intersecting (scrolled out of view), show second nav
          setIsSecondNavSticky(!entry.isIntersecting);
        });
      },
      {
        // Trigger when hero section is completely out of view
        threshold: 0,
        // Trigger slightly before it fully exits for smoother transition
        rootMargin: '0px 0px -50% 0px'
      }
    );

    observer.observe(heroElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-white content-stretch flex flex-col items-center relative w-full" data-name="AI glasses" style={{ minHeight: 'auto' }}>
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-auto flex flex-col">
        <DivGrid9 onDropdownChange={setIsDropdownActive} />
        {isSecondNavSticky && !isDropdownActive && (
          <div 
            className="transition-all duration-300 ease-out opacity-100 translate-y-0 pointer-events-auto"
          >
            <DivGrid7 />
          </div>
        )}
      </div>
      <Frame26 heroRef={heroRef} />
      <ScrollReveal direction="up" delay={100} distance={60}>
        <Frame25 />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={200} distance={60}>
        <Frame59 />
      </ScrollReveal>
    </div>
  );
}