"use client";
import AboutMe from "./AboutMe";
import Image from "next/image";
import LogoLoop from "./MyLogoLoop";

export default function AboutPage() {
  return (
    <>
      <div
        className=" p-0 pt-25 pb-25 bg-amber-300 items-center min-h-[70vh]
        flex flex-col gap-10 md:flex-row xl:gap-70 xl:p-33.5 border-t-6
        
      "
      >
        <Image
          src="/Avatar.jpg"
          alt="Avatar"
          width={500}
          height={500}
          className="w-100 h-100 rounded-full 
                object-contain bg-neutral-100 border-8 border-purple-600"
          priority
        />

        <AboutMe></AboutMe>
      </div>
      <LogoLoop></LogoLoop>
    </>
  );
}
