"use client";
import React, { useState, useEffect } from "react";
import MeowFacts from "./MeowFacts";
import getRandomId from "./GetRandomId";

//For now I have hard-coded the minimum and maximum values of the ids,using the all inclusive formula
//Math.floor(Math.random() * (max - min + 1) + min);
const randomFactId = () => Math.floor(Math.random() * (90 - 1 + 1) + 1);

const MyCatFactsApp = () => {
  const [factId, setFactId] = useState<number>(randomFactId());
  //   const [factId, setFactId] = useState<number>(2);
  //   useEffect(() => {
  //     setFactId(randomId());
  //   }, []);

  console.log(`Here is the fact Id`, factId);

  return (
    <div className=" bg-amber-600 flex flex-col justify-center items-center gap-x-4">
      <p>Your Place to find interesting Meow Facts...</p>
      <MeowFacts factId={factId} />
    </div>
  );
};

export default MyCatFactsApp;
