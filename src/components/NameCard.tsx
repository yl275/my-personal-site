"use client";

import MySplitText from "./MySplitText";
export default function NameCard() {
  return (
    <>
      <div
        className="bg-amber-300 text-center m-1 
            p-2 rounded-4xl
            border-black border-8 
            border-r-20 border-b-20
            "
        id="Home"
      >
        <div className="mt-12">
          <MySplitText />

          <p className="font-black text-2xl">My name is</p>
        </div>

        <div
          className="bg-background rounded-4xl 
        font-archivo 
        sm:p-8 md:p-10 lg:p-12
        text-[clamp(4rem,12vw,14rem)] font-black 
        m-4 mb-6 border-black border-5 mt-8 text-wrap
        "
          style={{ WebkitTextStroke: "1px black" }}
        >
          Yuan Li
        </div>
      </div>
    </>
  );
}
