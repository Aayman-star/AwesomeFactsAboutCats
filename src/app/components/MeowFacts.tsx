"use client";
import React, { useState, useEffect } from "react";
import Button from "./Button";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

import {
  ChevronDoubleRightIcon,
  ChevronDoubleLeftIcon,
} from "@heroicons/react/24/solid";

const fetchMeowFacts = async (id: number) => {
  const url = `https://meowfacts.herokuapp.com/?id=${id}`;
  const fact = await fetch(url, { cache: "no-store" });
  const Fact = await fact.json();
  return Fact;
};

interface IdProp {
  factId: number;
}

const MeowFacts = ({ factId }: IdProp) => {
  //   console.log(`Received Fact Id from the main component : ${factId}`);
  const [meowFact, setMeowFact] = useState<any>();
  const [localfactId, setFactId] = useState(factId);
  console.log(`The local fact Id is :${localfactId}`);

  const nextFact = async () => {
    console.log(`current Fact ID`, localfactId);
    const receivedFact = await fetchMeowFacts(localfactId + 1);
    setMeowFact(receivedFact.data[0]);
    setFactId(localfactId + 1);
  };
  const prevFact = async () => {
    console.log(`current Fact ID`, localfactId);
    const receivedFact = await fetchMeowFacts(localfactId - 1);
    setMeowFact(receivedFact.data[0]);
    setFactId(localfactId - 1);
  };

  const fetchFact = async () => {
    const receivedFact = await fetchMeowFacts(factId);
    setMeowFact(receivedFact.data[0]);
  };
  useEffect(() => {
    fetchFact();
  }, []);
  return (
    <div className="bg-zinc-50 w-full h-screen p-2 grid place-content-center">
      <p>Your Place to find interesting Meow Facts...</p>
      <div className="px-6 rounded-md flex flex-col items-center gap-y-4 shadow-lg md:w-[650px] md:flex-row-reverse md:items-center md:justify-around">
        {/* <Button ClickFunction= /> */}
        <div>
          <button onClick={nextFact}>
            <ChevronUpIcon className="w-7 h-7 text-2xl font-extrabold text-zinc-900 md:hidden" />
            <ChevronDoubleRightIcon className="hidden w-10 h-10 text-zinc-900 font-extrabold text-2xl md:block" />
          </button>
        </div>

        <p className="text-zinc-700 font-light text-xl italic m-6 md:text-2xl">
          {meowFact}
        </p>
        <div>
          <button onClick={prevFact}>
            <ChevronDownIcon className="w-7 h-7 text-2xl font-extrabold text-zinc-900 md:hidden" />

            <ChevronDoubleLeftIcon className="hidden w-10 h-10 text-zinc-900 font-extrabold text-2xl md:block" />
          </button>
        </div>

        {/* <div>
          <Button ClickFunction={nextFact} />
        </div> */}
      </div>
    </div>
  );
};

export default MeowFacts;
