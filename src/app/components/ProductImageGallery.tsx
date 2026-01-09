import { useState } from "react";

interface ProductImageGalleryProps {
  mainImage: string;
  thumbnails: string[];
}

export function ProductImageGallery({ mainImage, thumbnails }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(mainImage);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative rounded-[40px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[40px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[80px] items-center px-[80px] py-[40px] relative w-full">
          {/* Main Image */}
          <div 
            className="content-stretch flex flex-col items-start px-0 py-[80px] relative shrink-0 transition-transform duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={`h-[250px] relative shrink-0 w-[940px] transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}>
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img 
                  alt="Product main view" 
                  className="absolute h-[375.73%] left-0 max-w-none top-[-140.51%] w-full transition-all duration-500" 
                  src={selectedImage} 
                />
              </div>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
            {thumbnails.map((thumbnail, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(thumbnail)}
                className={`content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[100px] transition-all duration-300 ease-out hover:scale-110 hover:shadow-md active:scale-95 cursor-pointer ${
                  selectedImage === thumbnail ? 'ring-2 ring-[#00b869] ring-offset-2 scale-105 shadow-lg' : 'ring-1 ring-gray-200 hover:ring-[#00b869]'
                }`}
              >
                <div 
                  aria-hidden="true" 
                  className={`absolute border ${selectedImage === thumbnail ? 'border-[#00b869]' : 'border-[#e5e5e5]'} border-solid inset-0 pointer-events-none rounded-[16px] transition-colors duration-200`} 
                />
                <div className={`${index === 0 ? 'h-[27px] w-[81px]' : 'h-[37px] w-[81px]'} relative shrink-0`}>
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img 
                      alt={`Product view ${index + 1}`} 
                      className={`absolute ${index === 0 ? 'h-[375.73%] left-[-13.22%] top-[-140.51%] w-[126.65%]' : 'h-[345.32%] left-[-29.94%] top-[-119.42%] w-[156.48%]'} max-w-none`} 
                      src={thumbnail} 
                    />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
