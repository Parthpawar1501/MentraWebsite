import imgFloraImagePoseAdjustment29E8471F1 from "../assets/8a115c324755836e9486c6f7e82fdd6305a3d005.png";

function Frame() {
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

function Frame1() {
  return (
    <div className="absolute bg-white h-[758.992px] left-0 top-0 w-[1452px]">
      <div className="absolute bg-[#f5f5f5] h-[588px] left-px rounded-[24px] top-[calc(50%-0.5px)] translate-y-[-50%] w-[1449px]" />
      <Frame />
      <div className="absolute left-[581px] size-[889px] top-[-216px]" data-name="FLORA-Image Pose Adjustment-29e8471f 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFloraImagePoseAdjustment29E8471F1} />
      </div>
    </div>
  );
}

function EasiestSmartGlassesVariant() {
  return (
    <div className="absolute h-[758.99px] left-[52px] overflow-clip rounded-tl-[24px] rounded-tr-[24px] top-[136px] w-[1452px]" data-name="Easiest Smart Glasses/Variant6">
      <Frame1 />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="bg-white relative size-full">
      <EasiestSmartGlassesVariant />
    </div>
  );
}