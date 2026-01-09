import { useNavigate } from "@remix-run/react";
import imgBb5A1Faf9B1341379FfeB9Da3B25Cd6F1 from "/assets/588337c215139582e6c05119cb943a3d72e06856.png";

function Text() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Red_Hat_Display:Medium',sans-serif] leading-[29.456px] not-italic relative shrink-0 text-[#0a0a0a] text-[20.619px] text-nowrap">Learn more</p>
    </div>
  );
}

function Buttons() {
  const navigate = useNavigate();
  
  return (
    <div 
      className="bg-[#fcfcfc] content-stretch flex flex-col h-[53.021px] items-center justify-center px-[23.565px] py-[11.782px] relative rounded-[35.701px] shadow-[0px_1.473px_2.946px_0px_rgba(0,0,0,0.1)] shrink-0 cursor-pointer hover:bg-[#f5f5f5] transition-colors" 
      data-name="Buttons"
      onClick={() => navigate('/prescriptions')}
    >
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
    <div className="content-stretch flex items-center justify-between overflow-clip pl-[80px] pr-0 py-0 relative rounded-[24px] size-full" style={{ backgroundImage: "linear-gradient(112.167deg, rgb(184, 74, 0) 10.566%, rgb(13, 13, 13) 89.56%)" }}>
      <Header />
      <div className="relative shrink-0 size-[780px]" data-name="bb5a1faf-9b13-4137-9ffe-b9da3b25cd6f 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBb5A1Faf9B1341379FfeB9Da3B25Cd6F1} />
      </div>
    </div>
  );
}