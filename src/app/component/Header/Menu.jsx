import StaggeredMenu from "@/components/StaggeredMenu";
import { useEffect } from "react";

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
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "",
        height: "100vh",
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
        onMenuOpen={() => console.log("Menu opened")}
        onMenuClose={() => console.log("Menu closed")}
      />
    </div>
  );
}
