import { useState, useEffect } from "react";
import MentraLiveDesktop from "../../imports/MentraLive";
import EnhancedMobileMentraLive from "./EnhancedMobileMentraLive";

export default function ResponsiveMentraLive() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile ? <EnhancedMobileMentraLive /> : <MentraLiveDesktop />;
}