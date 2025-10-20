import React from "react";

const navItems = [
  { name: "Home", href: "#Home" },
  { name: "About", href: "#About" },
  { name: "Projects", href: "#Projects" },
  { name: "Blogs", href: "#Blogs" },
  { name: "Contact", href: "#Contact" },
];

export default function LeftNav({ active }: { active: string }) {
  return (
    <nav className="flex gap-12 p-4">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={`hover:text-gray-700 hover:underline
          transition-colors duration-200 text-2xl font-archivo font-bold
          ${active === item.name ? "text-gray-700 underline" : ""}
          `}
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
}
