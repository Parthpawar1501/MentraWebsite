import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  duration?: number;
  distance?: number;
  className?: string;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  duration = 0.8,
  distance = 50,
  className = "",
  threshold = 0.1
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  // Check if mobile/tablet on mount
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileOrTablet(window.innerWidth < 1024);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (!elementRef.current) return;

    // On mobile/tablet, show immediately
    if (isMobileOrTablet) {
      setIsVisible(true);
      return;
    }

    let observer: IntersectionObserver | null = null;
    let timeoutId: NodeJS.Timeout | null = null;

    // Check initial visibility first - if element is already in viewport, show it immediately
    const checkInitialVisibility = () => {
      const rect = elementRef.current!.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight * 1.5 && rect.bottom > -window.innerHeight * 0.5;
      if (isInViewport) {
        timeoutId = setTimeout(() => {
          setIsVisible(true);
        }, delay);
        return true;
      }
      return false;
    };

    // Small delay to ensure DOM is ready
    const initTimeoutId = setTimeout(() => {
      const initiallyVisible = checkInitialVisibility();

      if (!initiallyVisible) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                timeoutId = setTimeout(() => {
                  setIsVisible(true);
                }, delay);
                // Unobserve after animation triggers to improve performance
                if (observer && elementRef.current) {
                  observer.unobserve(elementRef.current);
                }
              }
            });
          },
          {
            threshold: threshold,
            rootMargin: "0px 0px -150px 0px" // More generous margin to trigger earlier
          }
        );

        if (elementRef.current) {
          observer.observe(elementRef.current);
        }
      }
    }, 100);

    return () => {
      clearTimeout(initTimeoutId);
      if (timeoutId) clearTimeout(timeoutId);
      if (observer && elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay, threshold, isMobileOrTablet]);

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return `translateY(${distance}px)`;
        case "down":
          return `translateY(-${distance}px)`;
        case "left":
          return `translateX(${distance}px)`;
        case "right":
          return `translateX(-${distance}px)`;
        case "fade":
          return "translateY(0)";
        default:
          return `translateY(${distance}px)`;
      }
    }
    return "translateY(0) translateX(0)";
  };

  // On mobile/tablet, show immediately without animation to ensure visibility
  const shouldShowImmediately = isMobileOrTablet || isVisible;
  const shouldAnimate = !isMobileOrTablet && isVisible;

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: shouldShowImmediately ? 1 : 0,
        transform: shouldShowImmediately ? "translateY(0) translateX(0)" : getTransform(),
        transition: shouldAnimate 
          ? `opacity ${duration}s cubic-bezier(0.4, 0, 0.2, 1), transform ${duration}s cubic-bezier(0.4, 0, 0.2, 1)`
          : 'none',
        willChange: isVisible ? "auto" : "transform, opacity"
      }}
    >
      {children}
    </div>
  );
}
