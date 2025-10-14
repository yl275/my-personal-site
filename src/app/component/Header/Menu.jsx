'use client';
import { useState } from "react";
import StaggeredMenu from "@/components/StaggeredMenu";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "#Home" },
  { label: "About", ariaLabel: "Learn about us", link: "#About" },
  { label: "Projects", ariaLabel: "View our services", link: "#Projects" },
  { label: "Contact", ariaLabel: "Get in touch", link: "#Contact" },
];

const socialItems = [
  { label: "Twitter", link: "https://twitter.com" },
  { label: "GitHub", link: "https://github.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
];

export default function Menu() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "auto",
        height: isMenuOpen ? "100vh" : "64px",
        width: "100vw",
        background: "transparent",
        zIndex: 9999,
      }}
      className=""
    >
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#111111"
        openMenuButtonColor="#0F172A"
        changeMenuColorOnOpen={false}
        colors={["#E0E7FF", "#6366F1"]}
        // logoUrl="/path-to-your-logo.svg"
        accentColor="#ff6b6b"
        onMenuOpen={() => setIsMenuOpen(true)}
        onMenuClose={() => setIsMenuOpen(false)}
      />
    </div>
  );
}
