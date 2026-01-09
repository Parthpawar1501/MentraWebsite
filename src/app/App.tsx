import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveHomePage from "./components/ResponsiveHomePage";
import ResponsiveMentraLive from "./components/ResponsiveMentraLive";
import MobileHeroWithMenu from "./components/mobile/MobileHeroWithMenu";
import Prescriptions from "../imports/Prescriptions";
import MentraOS from "../imports/MentraOS";
import { Toaster } from "./components/ui/sonner";
import "./responsive-fixed.css";
import "../styles/mobile-responsive.css";
import "../styles/mentra-live.css";
import "../styles/mobile-mentra-live.css";
import "../styles/animations.css";
import "../styles/global-improvements.css";

// Responsive layout wrapper
function ResponsiveLayout({ children }: { children: React.ReactNode }) {
  return <div className="responsive-wrapper">{children}</div>;
}

// Home page component (now responsive)
function HomePage() {
  return <ResponsiveHomePage />;
}

// Buy page component
function BuyPage() {
  return (
    <ResponsiveLayout>
      <ResponsiveMentraLive />
    </ResponsiveLayout>
  );
}

// Mobile Hero Demo Page
function MobileHeroPage() {
  return <MobileHeroWithMenu />;
}

// Prescriptions Page
function PrescriptionsPage() {
  return (
    <ResponsiveLayout>
      <Prescriptions />
    </ResponsiveLayout>
  );
}

// MentraOS Page
function MentraOSPage() {
  return (
    <ResponsiveLayout>
      <MentraOS />
    </ResponsiveLayout>
  );
}

// Main App component with routing
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/buy" element={<BuyPage />} />
        <Route path="/prescriptions" element={<PrescriptionsPage />} />
        <Route path="/os" element={<MentraOSPage />} />
        <Route path="/mobile-hero" element={<MobileHeroPage />} />
      </Routes>
      <Toaster position="top-center" richColors />
    </BrowserRouter>
  );
}