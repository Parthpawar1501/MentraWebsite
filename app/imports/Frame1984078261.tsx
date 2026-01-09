import { useNavigate } from "@remix-run/react";
import imgGeminiGeneratedImageKx5Js0Kx5Js0Kx5J1 from "/assets/ce9d30db427efae4ba3239e016519c678813f304.png";

function Group() {
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

function Text() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Red_Hat_Display:Medium',sans-serif] leading-[29.456px] not-italic relative shrink-0 text-[#0a0a0a] text-[20.619px] text-nowrap">Buy Now</p>
    </div>
  );
}

function Buttons() {
  const navigate = useNavigate();
  
  return (
    <div 
      className="bg-[#fcfcfc] content-stretch flex flex-col h-[53.021px] items-center justify-center px-[23.565px] py-[11.782px] relative rounded-[35.701px] shadow-[0px_1.473px_2.946px_0px_rgba(0,0,0,0.1)] shrink-0 cursor-pointer hover:bg-[#e5e5e5] transition-colors" 
      data-name="Buttons"
      onClick={() => navigate('/buy')}
    >
      <Text />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[19.111px] items-start justify-center relative shrink-0 w-[687px]" data-name="Header">
      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[57.333px] not-italic relative shrink-0 text-[57.333px] text-center text-nowrap text-white">Get Your Mentra Glasses</p>
      <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[24px] text-white w-[min-content]">Capture video, livestream, ask AI, and take calls on your favorite glasses.</p>
      <Buttons />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip pl-[80px] pr-0 py-0 relative rounded-[24px] size-full" style={{ backgroundImage: "linear-gradient(248.79deg, rgb(15, 51, 32) 30.484%, rgb(51, 202, 128) 84.384%), linear-gradient(-38.635deg, rgb(26, 68, 139) 5.7717%, rgb(183, 88, 153) 49.617%, rgb(219, 127, 128) 77.02%)" }}>
      <div className="absolute h-[932px] left-[-746px] top-[-524.92px] w-[933px]">
        <div className="absolute inset-[-53.65%_-53.59%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1933 1932">
            <g filter="url(#filter0_f_1_5033)" id="Ellipse 2342">
              <ellipse cx="966.5" cy="966" fill="var(--fill-0, #F4CE9F)" rx="466.5" ry="466" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1932" id="filter0_f_1_5033" width="1933" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_5033" stdDeviation="250" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Group />
      <Header />
      <div className="h-[672px] relative shrink-0 w-[567px]" data-name="Gemini_Generated_Image_kx5js0kx5js0kx5j 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[105.36%] left-[-17.47%] max-w-none top-[-2.75%] w-[141.52%]" src={imgGeminiGeneratedImageKx5Js0Kx5Js0Kx5J1} />
        </div>
      </div>
    </div>
  );
}