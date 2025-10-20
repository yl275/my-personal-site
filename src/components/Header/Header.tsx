"use client";
import LeftNav from "./LeftNav";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import RightNav from "./RightNav";

export default function Header() {
  const { scrollY } = useScroll();
  const [border, setBorder] = useState(false);
  const [active, setActive] = useState("Home");

  useMotionValueEvent(scrollY, "change", (y) => {
    setBorder(y > 0);
  });

  useEffect(() => {
    const sections = ["Home", "About", "Projects","Blogs", "Contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        className={`p-[1vh] md:flex inset-x-0 fixed top-0 bg-background z-[10000]
       border-t-0 border-black rounded-2xl hidden
       rounded-tl-none rounded-tr-none justify-between
       ${border ? "border-4" : ""}`}
      >
        <LeftNav active={active}></LeftNav>
        <RightNav></RightNav>
      </div>

      <div className="md:hidden">
        <Menu />
      </div>
    </>
  );
}
