import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "@remix-run/react";
import NavigationBar from "../components/NavigationBar";
import ScrollReveal from "../components/ScrollReveal";
import svgPaths from "./svg-he4ft5xlu0";
import Footer from "./Frame1984078270-14-8211";

// Download Buttons
function AppStoreButton() {
  return (
    <a 
      href="https://apps.apple.com/app/mentraos" 
      target="_blank" 
      rel="noopener noreferrer"
      className="h-[52px] relative shrink-0 w-[180px] cursor-pointer hover:opacity-80 transition-opacity"
      data-name="App Store"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 52">
        <g id="Group">
          <path d={svgPaths.p21f6fd00} fill="var(--fill-0, black)" id="BG" />
          <path d={svgPaths.p2ddb7a70} fill="var(--fill-0, #A6A6A6)" id="Border" />
          <g id="Icon">
            <g id="Vector">
              <path d={svgPaths.p7ae7600} fill="white" />
              <path d={svgPaths.p3f237480} fill="white" />
            </g>
          </g>
          <g id="Download on the">
            <path d={svgPaths.p17eed300} fill="var(--fill-0, white)" id="D" />
            <path d={svgPaths.p2ae42e00} fill="var(--fill-0, white)" id="o" />
            <path d={svgPaths.p38a6e600} fill="var(--fill-0, white)" id="w" />
            <path d={svgPaths.p2e4f4000} fill="var(--fill-0, white)" id="n" />
            <path d={svgPaths.p35dae400} fill="var(--fill-0, white)" id="l" />
            <path d={svgPaths.p3547e000} fill="var(--fill-0, white)" id="o_2" />
            <path d={svgPaths.p1f9e6000} fill="var(--fill-0, white)" id="a" />
            <path d={svgPaths.p1f3eae80} fill="var(--fill-0, white)" id="d" />
            <path d={svgPaths.p169d2680} fill="var(--fill-0, white)" id="o_3" />
            <path d={svgPaths.p3a45bd00} fill="var(--fill-0, white)" id="n_2" />
            <path d={svgPaths.p1dddee40} fill="var(--fill-0, white)" id="t" />
            <path d={svgPaths.p5046300} fill="var(--fill-0, white)" id="h" />
            <path d={svgPaths.pe15b9c0} fill="var(--fill-0, white)" id="e" />
          </g>
          <g id="App Store">
            <path d={svgPaths.p1e287500} fill="var(--fill-0, white)" id="A" />
            <path d={svgPaths.p2db7c680} fill="var(--fill-0, white)" id="p" />
            <path d={svgPaths.p1e8f9df0} fill="var(--fill-0, white)" id="p_2" />
            <path d={svgPaths.p3e0add80} fill="var(--fill-0, white)" id="S" />
            <path d={svgPaths.pdfa0b00} fill="var(--fill-0, white)" id="t_2" />
            <path d={svgPaths.pccc400} fill="var(--fill-0, white)" id="o_4" />
            <path d={svgPaths.p10989e70} fill="var(--fill-0, white)" id="r" />
            <path d={svgPaths.p2fad3680} fill="var(--fill-0, white)" id="e_2" />
          </g>
        </g>
      </svg>
    </a>
  );
}

function GooglePlayButton() {
  return (
    <a 
      href="https://play.google.com/store/apps/details?id=com.mentraglass.mentraos" 
      target="_blank" 
      rel="noopener noreferrer"
      className="h-[41.6px] relative w-[144px] cursor-pointer hover:opacity-80 transition-opacity"
      data-name="Google Play"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 144 41.6">
        <g id="Group">
          <path d={svgPaths.pe39b300} fill="var(--fill-0, black)" id="BG" />
          <path d={svgPaths.p28bca700} fill="var(--fill-0, #A6A6A6)" id="Border" />
          <g id="Icon">
            <path d={svgPaths.p282e1200} fill="url(#paint0_linear_36_2145)" id="Vector" />
            <path d={svgPaths.pef7300} fill="url(#paint1_linear_36_2145)" id="Vector_2" />
            <path d={svgPaths.p3fa9a930} fill="url(#paint2_linear_36_2145)" id="Vector_3" />
            <path d={svgPaths.p228b0900} fill="url(#paint3_linear_36_2145)" id="Vector_4" />
          </g>
          <g id="GET IT ON">
            <path d={svgPaths.p2a653bf0} fill="var(--fill-0, white)" id="G" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="0.16" />
            <path d={svgPaths.p3746af0} fill="var(--fill-0, white)" id="E" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="0.16" />
            <path d={svgPaths.p3773e600} fill="var(--fill-0, white)" id="T" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="0.16" />
            <path d={svgPaths.p2baf0a00} fill="var(--fill-0, white)" id="I" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="0.16" />
            <path d={svgPaths.p3b9e0880} fill="var(--fill-0, white)" id="T_2" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="0.16" />
            <path d={svgPaths.p318a4f80} fill="var(--fill-0, white)" id="O" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="0.16" />
            <path d={svgPaths.p36d5300} fill="var(--fill-0, white)" id="N" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="0.16" />
          </g>
          <g id="Google Play">
            <path d={svgPaths.p36489b00} fill="var(--fill-0, white)" id="Google Play_2" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_36_2145" x1="23.253" x2="5.80491" y1="9.05809" y2="26.9536">
            <stop stopColor="#00A0FF" />
            <stop offset="0.0066" stopColor="#00A1FF" />
            <stop offset="0.2601" stopColor="#00BEFF" />
            <stop offset="0.5122" stopColor="#00D2FF" />
            <stop offset="0.7604" stopColor="#00DFFF" />
            <stop offset="1" stopColor="#00E3FF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_36_2145" x1="36.09" x2="10.28" y1="20.8015" y2="20.8015">
            <stop stopColor="#FFE000" />
            <stop offset="0.4087" stopColor="#FFBD00" />
            <stop offset="0.7754" stopColor="#FFA500" />
            <stop offset="1" stopColor="#FF9C00" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_36_2145" x1="26.4821" x2="2.82108" y1="23.1879" y2="47.4557">
            <stop stopColor="#FF3A44" />
            <stop offset="1" stopColor="#C31162" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_36_2145" x1="7.78378" x2="18.3495" y1="0.183242" y2="11.0198">
            <stop stopColor="#32A071" />
            <stop offset="0.0685" stopColor="#2DA771" />
            <stop offset="0.4762" stopColor="#15CF74" />
            <stop offset="0.8009" stopColor="#06E775" />
            <stop offset="1" stopColor="#00F076" />
          </linearGradient>
        </defs>
      </svg>
    </a>
  );
}

function GitHubButton() {
  return (
    <a 
      href="https://github.com/Mentra-Community/MentraOS" 
      target="_blank" 
      rel="noopener noreferrer"
      className="h-[52px] relative shrink-0 w-[170px] cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center bg-black rounded-[8px] px-[16px]"
      data-name="GitHub"
    >
      <p className="font-['Red_Hat_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-white text-[16px] text-center text-nowrap">Get it on GitHub</p>
    </a>
  );
}

// Hero Section
function HeroSection() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0 w-full py-[120px]">
      <h1 className="font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold leading-[1.2] not-italic relative shrink-0 text-[#0a0a0a] text-[64px] md:text-[80px] text-center max-w-[900px]">
        MentraOS is the open-source OS for smart glasses.
      </h1>
      <p className="font-['Red_Hat_Display:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#0a0a0a] text-[24px] md:text-[28px] text-center max-w-[700px]">
        Get smart glasses apps. Build smart glasses apps.
      </p>
      <div className="content-stretch flex flex-wrap gap-[20px] items-center justify-center relative shrink-0">
        <AppStoreButton />
        <div className="flex h-[52px] items-center justify-center relative shrink-0 w-[180px]">
          <div className="flex-none scale-x-[125%] scale-y-[-125%]">
            <GooglePlayButton />
          </div>
        </div>
        <GitHubButton />
      </div>
    </div>
  );
}

// App Store Section
function AppStoreSection() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center justify-center relative shrink-0 w-full py-[80px]">
      <h2 className="font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold leading-[1.2] not-italic relative shrink-0 text-[#0a0a0a] text-[48px] md:text-[56px] text-center">
        MentraOS Smart Glasses App Store
      </h2>
      
      {/* Display Glasses Apps */}
      <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full max-w-[1200px]">
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
          <h3 className="font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[#0a0a0a] text-[36px] md:text-[40px]">
            Display Glasses
          </h3>
          <p className="font-['Red_Hat_Display:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#686069] text-[18px] md:text-[20px]">
            See what matters.
          </p>
        </div>
        <div className="content-stretch flex flex-wrap gap-[24px] items-start relative shrink-0 w-full">
          {/* Merge App */}
          <div className="bg-white border border-[#e5e5e5] content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[280px] hover:shadow-lg transition-shadow">
            <div className="h-[48px] relative shrink-0 w-[48px] bg-[#f5f5f5] rounded-[12px] flex items-center justify-center">
              <p className="text-[24px]">🤖</p>
            </div>
            <h4 className="font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[#0a0a0a] text-[20px]">
              Merge
            </h4>
            <p className="font-['Red_Hat_Display:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#686069] text-[16px]">
              Proactive AI makes you smarter.
            </p>
          </div>
          
          {/* Captions App */}
          <div className="bg-white border border-[#e5e5e5] content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[280px] hover:shadow-lg transition-shadow">
            <div className="h-[48px] relative shrink-0 w-[48px] bg-[#f5f5f5] rounded-[12px] flex items-center justify-center">
              <p className="text-[24px]">📝</p>
            </div>
            <h4 className="font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[#0a0a0a] text-[20px]">
              Captions
            </h4>
            <p className="font-['Red_Hat_Display:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#686069] text-[16px]">
              Subtitles in real life.
            </p>
          </div>
          
          {/* Dash App */}
          <div className="bg-white border border-[#e5e5e5] content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[280px] hover:shadow-lg transition-shadow">
            <div className="h-[48px] relative shrink-0 w-[48px] bg-[#f5f5f5] rounded-[12px] flex items-center justify-center">
              <p className="text-[24px]">🏃</p>
            </div>
            <h4 className="font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[#0a0a0a] text-[20px]">
              Dash
            </h4>
            <p className="font-['Red_Hat_Display:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#686069] text-[16px]">
              Live running stats.
            </p>
          </div>
        </div>
      </div>

      {/* Camera Glasses Apps */}
      <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full max-w-[1200px]">
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
          <h3 className="font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[#0a0a0a] text-[36px] md:text-[40px]">
            Camera Glasses
          </h3>
          <p className="font-['Red_Hat_Display:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#686069] text-[18px] md:text-[20px]">
            Stream your view to apps and AI.
          </p>
        </div>
        <div className="content-stretch flex flex-wrap gap-[24px] items-start relative shrink-0 w-full">
          {/* Streamer App */}
          <div className="bg-white border border-[#e5e5e5] content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[280px] hover:shadow-lg transition-shadow">
            <div className="h-[48px] relative shrink-0 w-[48px] bg-[#f5f5f5] rounded-[12px] flex items-center justify-center">
              <p className="text-[24px]">📹</p>
            </div>
            <h4 className="font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[#0a0a0a] text-[20px]">
              Streamer
            </h4>
            <p className="font-['Red_Hat_Display:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#686069] text-[16px]">
              Live stream anywhere.
            </p>
          </div>
          
          {/* AI Notes App */}
          <div className="bg-white border border-[#e5e5e5] content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[280px] hover:shadow-lg transition-shadow">
            <div className="h-[48px] relative shrink-0 w-[48px] bg-[#f5f5f5] rounded-[12px] flex items-center justify-center">
              <p className="text-[24px]">📄</p>
            </div>
            <h4 className="font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[#0a0a0a] text-[20px]">
              AI Notes
            </h4>
            <p className="font-['Red_Hat_Display:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#686069] text-[16px]">
              Automatically takes notes.
            </p>
          </div>
          
          {/* Camera App */}
          <div className="bg-white border border-[#e5e5e5] content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[280px] hover:shadow-lg transition-shadow">
            <div className="h-[48px] relative shrink-0 w-[48px] bg-[#f5f5f5] rounded-[12px] flex items-center justify-center">
              <p className="text-[24px]">📷</p>
            </div>
            <h4 className="font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[#0a0a0a] text-[20px]">
              Camera
            </h4>
            <p className="font-['Red_Hat_Display:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#686069] text-[16px]">
              Hands-free photos and videos.
            </p>
          </div>
        </div>
      </div>

      <p className="font-['Red_Hat_Display:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#686069] text-[18px] md:text-[20px] text-center">
        Get new apps like X, Merge, AI Notes, and more on the Mentra Store.
      </p>
    </div>
  );
}

// Ready to Experience Section
function ReadySection() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0 w-full py-[80px] bg-[#f5f5f5] rounded-[24px]">
      <h2 className="font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold leading-[1.2] not-italic relative shrink-0 text-[#0a0a0a] text-[40px] md:text-[48px] text-center max-w-[800px]">
        Ready to experience MentraOS?
      </h2>
      <p className="font-['Red_Hat_Display:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#686069] text-[18px] md:text-[20px] text-center max-w-[600px]">
        Download the app and connect your smart glasses right now.
      </p>
      <div className="content-stretch flex flex-wrap gap-[20px] items-center justify-center relative shrink-0">
        <AppStoreButton />
        <div className="flex h-[52px] items-center justify-center relative shrink-0 w-[180px]">
          <div className="flex-none scale-x-[125%] scale-y-[-125%]">
            <GooglePlayButton />
          </div>
        </div>
        <GitHubButton />
      </div>
    </div>
  );
}

// Compatible Glasses Section
function CompatibleGlassesSection() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-center justify-center relative shrink-0 w-full py-[80px]">
      <h2 className="font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold leading-[1.2] not-italic relative shrink-0 text-[#0a0a0a] text-[40px] md:text-[48px] text-center">
        Compatible Glasses
      </h2>
      <p className="font-['Red_Hat_Display:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#686069] text-[18px] md:text-[20px] text-center max-w-[600px]">
        There's two types.
      </p>
      
      <div className="content-stretch flex flex-wrap gap-[40px] items-start justify-center relative shrink-0 w-full max-w-[1000px]">
        {/* Display Glasses */}
        <div className="bg-white border border-[#e5e5e5] content-stretch flex flex-col gap-[24px] items-start p-[32px] relative rounded-[16px] shrink-0 w-[450px] hover:shadow-lg transition-shadow">
          <h3 className="font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[#0a0a0a] text-[28px]">
            Display Glasses
          </h3>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <h4 className="font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[#0a0a0a] text-[22px]">
              Even Realities G1
            </h4>
            <p className="font-['Red_Hat_Display:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#686069] text-[16px]">
              Full-featured glasses with display and mic.
            </p>
            <p className="font-['Red_Hat_Display:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#686069] text-[14px]">
              Display, mics. No camera
            </p>
          </div>
        </div>
        
        {/* Camera Glasses */}
        <div className="bg-white border border-[#e5e5e5] content-stretch flex flex-col gap-[24px] items-start p-[32px] relative rounded-[16px] shrink-0 w-[450px] hover:shadow-lg transition-shadow">
          <h3 className="font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[#0a0a0a] text-[28px]">
            Camera Glasses
          </h3>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <h4 className="font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold leading-[1.3] not-italic relative shrink-0 text-[#0a0a0a] text-[22px]">
              Mentra Live Smart Glasses
            </h4>
            <p className="font-['Red_Hat_Display:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#686069] text-[16px]">
              Camera, speakers, mics. No display.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Developer Section
function DeveloperSection() {
  const navigate = useNavigate();
  
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0 w-full py-[80px] bg-gradient-to-br from-[#0f3320] to-[#33ca80] rounded-[24px]">
      <h2 className="font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold leading-[1.2] not-italic relative shrink-0 text-white text-[40px] md:text-[48px] text-center max-w-[800px]">
        MentraOS lets you build smart glass apps like web apps.
      </h2>
      <p className="font-['Red_Hat_Display:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-white text-[18px] md:text-[20px] text-center max-w-[700px] opacity-90">
        Write one TypeScript app that works on multiple smart glasses.
      </p>
      <button
        onClick={() => window.open('https://github.com/Mentra-Community/MentraOS', '_blank')}
        className="bg-white content-stretch flex flex-col h-[53px] items-center justify-center px-[32px] py-[16px] relative rounded-[35px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)] shrink-0 cursor-pointer hover:bg-[#f5f5f5] transition-colors"
      >
        <p className="font-['Red_Hat_Display:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[18px]">
          Build Your Own App
        </p>
      </button>
    </div>
  );
}

// FAQ Content Component with proper animation
function FAQContent({ isOpen, answer }: { isOpen: boolean; answer: string | React.ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(isOpen ? undefined : 0);

  useEffect(() => {
    if (!contentRef.current) return;
    
    if (isOpen) {
      const contentHeight = contentRef.current.scrollHeight;
      setHeight(contentHeight);
      
      const timer = setTimeout(() => {
        setHeight(undefined);
      }, 300);
      
      return () => clearTimeout(timer);
    } else {
      requestAnimationFrame(() => {
        setHeight(0);
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={contentRef}
      style={{ height: height }}
      className="overflow-hidden transition-all duration-300 ease-in-out"
    >
      <div className="pb-6 px-2 md:px-4">
        {typeof answer === 'string' ? (
          <p className="font-['Manrope:Regular',sans-serif] leading-[150%] not-italic relative text-[#686069] text-[16px] md:text-[18px] whitespace-pre-line">
            {answer}
          </p>
        ) : (
          <div className="font-['Manrope:Regular',sans-serif] leading-[150%] not-italic relative text-[#686069] text-[16px] md:text-[18px]">
            {answer}
          </div>
        )}
      </div>
    </div>
  );
}

// FAQ Section Component
function MentraOSFAQSection() {
  const [openFAQ, setOpenFAQ] = useState<{ [key: string]: boolean }>({});

  const faqs = [
    {
      id: "what-is",
      question: "What is MentraOS?",
      answer: "MentraOS is how you use apps on your smart glasses. Users install the Mentra app, connect to any pair of smart glasses, and instantly access your app. Devs build apps using the MentraOS SDK that gives full control of the smart glasses hardware."
    },
    {
      id: "what-apps",
      question: "What apps does MentraOS have?",
      answer: (
        <>
          You can see all the apps at <a href="https://apps.mentra.glass" target="_blank" rel="noopener noreferrer" className="text-[#00b869] hover:underline">apps.mentra.glass</a>.
          <br /><br />
          For example, some apps on the store are Merge (Proactive AI), Live Captions, Live Translation, Notes, Teleprompter, Live Streaming, Camera, running app, language learning app, flashcards and more!
        </>
      )
    },
    {
      id: "get-more-apps",
      question: "How do I get more smart glasses apps?",
      answer: "Open the Mentra app on your phone and go to the Mentra Store. You can browse, install, and manage apps directly from there. New apps are added regularly by both Mentra and independent developers."
    },
    {
      id: "need-hardware",
      question: "Do I need to buy Mentra hardware to use MentraOS?",
      answer: "No. If your glasses are on our compatibility list, you can use MentraOS. Compatibility: Even Realities G1, Mentra Live, Vuzix Z100 (more coming soon)"
    },
    {
      id: "get-started",
      question: "What do I need to get started?",
      answer: "Just the Mentra app, which you can connect to your smart glasses. If you don't have smart glasses yet, you can still try the Mentra app with \"Simulated Glasses\" mode."
    },
    {
      id: "open-source",
      question: "Which parts are open source?",
      answer: (
        <>
          All of it. Everything (the clients, cloud, SDKs, example apps, etc.) is published in the MentraOS Github repo: <a href="https://github.com/Mentra-Community/MentraOS" target="_blank" rel="noopener noreferrer" className="text-[#00b869] hover:underline">github.com/Mentra-Community/MentraOS</a>
          <br /><br />
          More info about MentraOS: <a href="https://mentraglass.com/os" target="_blank" rel="noopener noreferrer" className="text-[#00b869] hover:underline">Mentra Glass/OS</a>
        </>
      )
    },
    {
      id: "really-os",
      question: "Is MentraOS really an \"OS\" and not just an app?",
      answer: (
        <>
          Yes: the cloud + phone + glasses coordinate app lifecycle, device capabilities, permissions, layouts, audio/camera routing, and real-time event buses for multiple concurrent apps - OS responsibilities, not a single app.
          <br /><br />
          To learn more, checkout the <a href="https://docs.mentra.glass" target="_blank" rel="noopener noreferrer" className="text-[#00b869] hover:underline">MentraOS Developer Documentation</a>.
        </>
      )
    },
    {
      id: "glasses-work",
      question: "What glasses work today?",
      answer: (
        <>
          Mentra Live, Even Realities G1, Vuzix Z100. More coming soon.
          <br /><br />
          For an updated compatibility list, see: <a href="https://github.com/Mentra-Community/MentraOS/blob/main/glasses-compatibility.md" target="_blank" rel="noopener noreferrer" className="text-[#00b869] hover:underline">glasses-compatibility.md</a>
        </>
      )
    },
    {
      id: "add-support",
      question: "Can Mentra add support for my glasses?",
      answer: "We're always happy to add support for more smart glasses. Ask the manufacturer of your glasses if they have an \"SDK\". If so, send us a message at help@mentraglass.com."
    },
    {
      id: "store-data",
      question: "What does MentraOS store about me?",
      answer: "Just your email and installed apps. You can always export and/or request data deletion through the app's Settings page."
    },
    {
      id: "try-without",
      question: "Can I try MentraOS without having smart glasses?",
      answer: "Yes — you can try MentraOS in \"simulated glasses\" mode inside the mobile app."
    },
    {
      id: "languages",
      question: "What languages are supported?",
      answer: "Live captions and translation work in many languages. Some fonts (Arabic/Hebrew) depend on the glasses' display support."
    }
  ];

  const toggleFAQ = (id: string) => {
    setOpenFAQ(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0 w-full py-[80px]">
      <h2 className="font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold leading-[1.2] not-italic relative shrink-0 text-[#0a0a0a] text-[40px] md:text-[48px] text-center">
        FAQ
      </h2>
      <div className="relative rounded-[24px] shadow-[0px_2px_6px_0px_rgba(25,33,61,0.1)] shrink-0 w-full max-w-[900px] bg-white">
        <div className="content-stretch flex flex-col gap-0 isolate items-start p-[32px] md:p-[48px] lg:p-[80px] relative w-full">
          {faqs.map((faq) => {
            const isOpen = openFAQ[faq.id] || false;
            return (
              <div key={faq.id} className="w-full border-b border-[#f1f2f9] last:border-0">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="flex items-center justify-between w-full py-5 md:py-6 cursor-pointer group transition-colors rounded-[16px] px-2 md:px-4 hover:bg-[#f5f5f5]"
                  aria-label={isOpen ? "Collapse" : "Expand"}
                  aria-expanded={isOpen}
                >
                  <p className={`font-['Red_Hat_Display:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#0a0a0a] text-[18px] md:text-[22px] text-left flex-1 transition-colors ${
                    isOpen ? 'text-[#00b869]' : 'group-hover:text-[#00b869]'
                  }`}>
                    {faq.question}
                  </p>
                  <div className={`size-[20px] md:size-[24px] text-[#0a0a0a] transition-all duration-300 flex-shrink-0 ml-4 ${isOpen ? 'rotate-180 text-[#00b869]' : ''} group-hover:text-[#00b869]`}>
                    {isOpen ? (
                      <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                        <path d="M5 12H19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                      </svg>
                    ) : (
                      <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                        <path d="M12 5V19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                        <path d="M5 12H19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                      </svg>
                    )}
                  </div>
                </button>
                <FAQContent isOpen={isOpen} answer={faq.answer} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Download Section
function DownloadSection() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0 w-full py-[80px]">
      <h2 className="font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold leading-[1.2] not-italic relative shrink-0 text-[#0a0a0a] text-[40px] md:text-[48px] text-center">
        Download MentraOS Today
      </h2>
      <p className="font-['Red_Hat_Display:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#686069] text-[18px] md:text-[20px] text-center max-w-[600px]">
        Connect to your smart glasses and explore the app store. Available on iOS and Android.
      </p>
      <div className="content-stretch flex flex-wrap gap-[20px] items-center justify-center relative shrink-0">
        <AppStoreButton />
        <div className="flex h-[52px] items-center justify-center relative shrink-0 w-[180px]">
          <div className="flex-none scale-x-[125%] scale-y-[-125%]">
            <GooglePlayButton />
          </div>
        </div>
        <GitHubButton />
      </div>
    </div>
  );
}

// Mailing List Section
function MailingListSection() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full py-[80px] bg-[#f5f5f5] rounded-[24px]">
      <h2 className="font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold leading-[1.2] not-italic relative shrink-0 text-[#0a0a0a] text-[32px] md:text-[40px] text-center max-w-[600px]">
        Stay up-to-date on all things smart glasses.
      </h2>
      <form 
        className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full max-w-[500px]"
        onSubmit={(e) => {
          e.preventDefault();
          // Handle form submission
        }}
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 h-[52px] px-[20px] py-[12px] rounded-[12px] border border-[#e5e5e5] font-['Red_Hat_Display:Regular',sans-serif] text-[16px] focus:outline-none focus:border-[#00b869] transition-colors"
        />
        <button
          type="submit"
          className="bg-[#00b869] content-stretch flex flex-col h-[52px] items-center justify-center px-[32px] py-[12px] relative rounded-[12px] shrink-0 cursor-pointer hover:bg-[#009258] transition-colors"
        >
          <p className="font-['Red_Hat_Display:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-white text-[16px]">
            Join Mailing List
          </p>
        </button>
      </form>
    </div>
  );
}

export default function MentraOS() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="MentraOS">
      <NavigationBar />
      <div className="content-stretch flex flex-col gap-[80px] items-center justify-center overflow-clip px-[133.778px] py-[90px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[80px] items-center pb-[80px] pt-0 px-0 relative shrink-0 w-full max-w-[1452px]">
          <ScrollReveal direction="fade" delay={0} duration={0.8}>
            <HeroSection />
          </ScrollReveal>
          <ScrollReveal direction="up" delay={50} distance={40} duration={0.8}>
            <AppStoreSection />
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100} distance={40} duration={0.8}>
            <ReadySection />
          </ScrollReveal>
          <ScrollReveal direction="up" delay={150} distance={40} duration={0.8}>
            <CompatibleGlassesSection />
          </ScrollReveal>
          <ScrollReveal direction="up" delay={200} distance={40} duration={0.8}>
            <DeveloperSection />
          </ScrollReveal>
          <ScrollReveal direction="up" delay={250} distance={40} duration={0.8}>
            <MentraOSFAQSection />
          </ScrollReveal>
          <ScrollReveal direction="up" delay={300} distance={40} duration={0.8}>
            <DownloadSection />
          </ScrollReveal>
          <ScrollReveal direction="up" delay={350} distance={40} duration={0.8}>
            <MailingListSection />
          </ScrollReveal>
        </div>
        <ScrollReveal direction="up" delay={400} distance={40} duration={0.8}>
          <div className="border-[#e5e5e5] border-b-0 border-l-0 border-r-0 border-solid border-t content-stretch flex items-start px-0 py-[48px] relative shrink-0 w-full" data-name="Footer">
            <Footer />
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
