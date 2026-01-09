import { useState, ReactNode, useRef, useEffect } from "react";

interface MobileAccordionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

function PlusIcon() {
  return (
    <svg className="block size-full" fill="none" viewBox="0 0 24 24">
      <path d="M12 5V19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      <path d="M5 12H19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg className="block size-full" fill="none" viewBox="0 0 24 24">
      <path d="M5 12H19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

export function MobileAccordion({ title, children, defaultOpen = false }: MobileAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [height, setHeight] = useState<number | undefined>(defaultOpen ? undefined : 0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;
    
    if (isOpen) {
      const contentHeight = contentRef.current.scrollHeight;
      setHeight(contentHeight);
      
      // Reset to auto after animation
      const timer = setTimeout(() => {
        setHeight(undefined);
      }, 300);
      
      return () => clearTimeout(timer);
    } else {
      // Set to current height first, then to 0 to trigger animation
      setHeight(contentRef.current.scrollHeight);
      requestAnimationFrame(() => {
        setHeight(0);
      });
    }
  }, [isOpen]);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full cursor-pointer group"
        aria-label={isOpen ? "Collapse" : "Expand"}
        aria-expanded={isOpen}
      >
        <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[17.023px] not-italic text-[#0d0c0d] text-[14.872px] tracking-[0.16px] text-left">
          {title}
        </p>
        <div className="size-[12.767px] text-[#0a0a0a] transition-all duration-200 flex-shrink-0 group-hover:scale-110">
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </div>
      </button>
      <div
        ref={contentRef}
        style={{ height: height }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div className="pt-[10.64px]">
          {children}
        </div>
      </div>
    </div>
  );
}
