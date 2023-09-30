"use client";
import React, { useState, useEffect } from "react";
import MeowFacts from "./MeowFacts";
import getRandomId from "./GetRandomId";

const randomId = () => Math.floor(Math.random() * 90);

const MyCatFactsApp = () => {
  const [factId, setFactId] = useState<number>(randomId());
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
