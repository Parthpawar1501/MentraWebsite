import imgEzgifFrame1041 from "/assets/b9f2d5b23bcac5129eeedec01451f80a93d424f9.png";

function Title() {
  return (
    <div className="h-[144px] relative shrink-0 w-[967px]" data-name="Title">
      <div className="absolute font-['Red_Hat_Display:Regular',sans-serif] inset-0 leading-[0] not-italic text-[#00b869] text-[64px] text-center">
        <p className="leading-[72px] mb-0">
          <span className="text-[#0a0a0a]">Your</span>
          <span>{` eyes, `}</span>
          <span className="text-[#0a0a0a]">your</span>
          <span>{` ears, `}</span>
          <span className="text-[#0a0a0a]">your</span>
          <span>{` choice. `}</span>
        </p>
        <p className="leading-[72px]">
          <span className="text-[#0a0a0a]">{`Your `}</span>
          <span>{`data, `}</span>
          <span className="text-[#0a0a0a]">your</span>
          <span>{` apps, `}</span>
          <span className="text-[#0a0a0a]">your</span>
          <span>{` glasses. `}</span>
        </p>
      </div>
    </div>
  );
}

function Header() {
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

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Header />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full">
      <Frame />
    </div>
  );
}