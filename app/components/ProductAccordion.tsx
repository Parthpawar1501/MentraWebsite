import { useState, ReactNode, useRef, useEffect } from "react";

interface AccordionSectionProps {
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

export function AccordionSection({ title, children, defaultOpen = false }: AccordionSectionProps) {
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
      <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
        <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#0d0c0d] text-[28px] text-nowrap tracking-[0.3px]">
          {title}
        </p>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#f5f5f5] content-stretch flex items-center p-[8px] relative rounded-[32px] shrink-0 cursor-pointer transition-all duration-300 hover:bg-[#e5e5e5] group"
          aria-label={isOpen ? "Collapse" : "Expand"}
          aria-expanded={isOpen}
          data-name="Navigation Button"
        >
          <div className={`relative shrink-0 size-[24px] text-[#0a0a0a] transition-all duration-300 ${isOpen ? 'rotate-45' : ''} group-hover:text-[#00b869]`} data-name="Navigation Icon">
            {isOpen ? <MinusIcon /> : <PlusIcon />}
          </div>
        </button>
      </div>
      <div
        ref={contentRef}
        style={{ height: height }}
        className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
      >
        <div className="pb-6">
          {children}
        </div>
      </div>
    </div>
  );
}
