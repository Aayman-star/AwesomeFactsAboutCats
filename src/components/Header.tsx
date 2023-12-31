import React from "react";
import { Satisfy } from "next/font/google";

const satisfy = Satisfy({
  weight: "400",
  subsets: ["latin"],
});

const Header = () => {
  return (
    <header className={satisfy.className}>
      {/* <div className="w-full bg-zinc-50 font-satisfy p-6 shadow-lg grid place-content-center border-2 border-b-stone-700">
        <h1 className="text-2xl font-bold  text-zinc-700 ">
          My Awesome Cat Facts
        </h1>
      </div> */}
      <h1 className="text-4xl font-bold text-neutral-50 p-4 bg-transparent w-full text-center">
        Awesome Cat Facts
      </h1>
    </header>
  );
};

export default Header;
