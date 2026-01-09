export default function MobileProductHeader() {
  return (
    <div className="w-full py-8 px-6 bg-white">
      <div className="max-w-[390px] mx-auto text-center">
        {/* Product Name */}
        <h2 className="font-['Red_Hat_Display:SemiBold',sans-serif] text-[34.047px] leading-[38.302px] text-[#0a0a0a] mb-3">
          Mentra <span className="text-[#00b869]">Live</span>
        </h2>

        {/* Product Description */}
        <p className="font-['Red_Hat_Display:Regular',sans-serif] text-[17.023px] leading-normal text-[#0a0a0a] max-w-[300px] mx-auto">
          Capture video, livestream, ask AI, and take calls on your favorite glasses.
        </p>
      </div>
    </div>
  );
}
