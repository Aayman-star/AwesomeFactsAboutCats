"use client";
import React, { useState, useEffect } from "react";
import MeowFacts from "./MeowFacts";
import getRandomId from "./GetRandomId";
import Image from "next/image";
// import CatBg from "/public/image/CatBg.jpg";
// import CatBg1 from "/public/image/CatBg1.jpg";
import CatBg2 from "/public/image/CatBg2.jpg";
import Header from "./Header";
import Footer from "./Footer";

//For now I have hard-coded the minimum and maximum values of the ids,using the all inclusive formula
//Math.floor(Math.random() * (max - min + 1) + min);
// const randomFactId = () => Math.floor(Math.random() * (90 - 1 + 1) + 1);

const MyCatFactsApp = () => {
  // const [factId, setFactId] = useState<number>(randomFactId());
  //   const [factId, setFactId] = useState<number>(2);
  //   useEffect(() => {
  //     setFactId(randomId());
  //   }, []);
  const randomFactId = Math.floor(Math.random() * (90 - 1 + 1) + 1);
  console.log(`Here is the fact Id`, randomFactId);

  return (
    <main className="relative min-h-screen">
      <div className="absolute inset-0">
        <Image
          src={CatBg2}
          alt="bg-image"
          quality={100}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-between  h-full">
        {/* <div className="p-6 w-full bg-zinc-800/70 ">
           <p className="text-center text-zinc-100">
            Your Place to find interesting Meow Facts...
          </p> 
        </div>  */}
        <div className="w-full border-b-2 border-neutral-50">
          <Header />
        </div>

        <div className="w-full md:w-1/2 text-center">
          {" "}
          <MeowFacts factId={randomFactId} />
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default MyCatFactsApp;
