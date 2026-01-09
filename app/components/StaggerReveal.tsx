import { useEffect, useRef, useState, ReactNode, Children } from "react";

interface StaggerRevealProps {
  children: ReactNode;
  staggerDelay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  className?: string;
  threshold?: number;
}

export default function StaggerReveal({
  children,
  staggerDelay = 0.1,
  direction = "up",
  duration = 0.6,
  className = "",
  threshold = 0.1
}: StaggerRevealProps) {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const childrenArray = Children.toArray(children);
    itemRefs.current = new Array(childrenArray.length).fill(null);

    const observers = childrenArray.map((_, index) => {
      return new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleItems((prev) => new Set(prev).add(index));
              }, index * staggerDelay * 1000);
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold,
          rootMargin: "0px 0px -50px 0px"
        }
      );
    });

    // Observe all items
    itemRefs.current.forEach((ref, index) => {
      if (ref && observers[index]) {
        observers[index].observe(ref);
      }
    });

    return () => {
      observers.forEach((observer, index) => {
        if (itemRefs.current[index]) {
          observer.unobserve(itemRefs.current[index]!);
        }
      });
    };
  }, [children, staggerDelay, threshold]);

  const getTransform = (index: number) => {
    if (!visibleItems.has(index)) {
      switch (direction) {
        case "up":
          return "translateY(30px)";
        case "down":
          return "translateY(-30px)";
        case "left":
          return "translateX(30px)";
        case "right":
          return "translateX(-30px)";
        default:
          return "translateY(30px)";
      }
    }
    return "translateY(0) translateX(0)";
  };

  return (
    <div ref={containerRef} className={className}>
      {Children.map(children, (child, index) => (
        <div
          key={index}
          ref={(el) => (itemRefs.current[index] = el)}
          style={{
            opacity: visibleItems.has(index) ? 1 : 0,
            transform: getTransform(index),
            transition: `opacity ${duration}s cubic-bezier(0.4, 0, 0.2, 1), transform ${duration}s cubic-bezier(0.4, 0, 0.2, 1)`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
