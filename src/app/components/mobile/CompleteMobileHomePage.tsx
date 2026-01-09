import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IPhone4 from "../../../imports/IPhone13141-33-6513";

/**
 * Complete Mobile Home Page
 * Based on the full Figma mobile design
 * 
 * Features:
 * - Hero section with hamburger menu
 * - Investor logos
 * - Product sections
 * - Features and comparisons
 * - Testimonials
 * - FAQ accordion
 * - Footer
 * - Complete scrollable experience
 */
export default function CompleteMobileHomePage() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <IPhone4 />
    </div>
  );
}
