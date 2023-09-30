"use client";
import React, { useState, useEffect } from "react";
import Button from "./Button";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

import {
  ChevronDoubleRightIcon,
  ChevronDoubleLeftIcon,
} from "@heroicons/react/24/solid";

const fetchMeowFacts = async (id: number) => {
  console.log(`The Id received in the fetch function is :${id}`);
  const url = `https://meowfacts.herokuapp.com/?id=${id}`;
  const fact = await fetch(url, { cache: "no-store" });
  const Fact = await fact.json();
  return Fact;
};

interface IdProp {
  factId: number;
}

const MeowFacts = ({ factId }: IdProp) => {
  console.log(`Received Fact Id from the main component : ${factId}`);
  useEffect(() => {
    fetchFact();
  }, []);
  const [meowFact, setMeowFact] = useState<any>();
  const [localfactId, setlocalFactId] = useState(factId);
  // useEffect(() => {
  //   setlocalFactId(factId);
  // }, [factId]);

  //console.log(`The local fact Id is :${localfactId}`);

  // const nextFact = async () => {
  //   console.log(`current Fact ID`, localfactId);
  //   const receivedFact = await fetchMeowFacts(localfactId + 1);
  //   setMeowFact(receivedFact.data[0]);
  //   setlocalFactId(localfactId === 90 ? 1 : localfactId + 1);
  // };
  // const prevFact = async () => {
  //   console.log(`current Fact ID`, localfactId);
  //   const receivedFact = await fetchMeowFacts(
  //     localfactId === 0 ? 90 : localfactId - 1
  //   );
  //   setMeowFact(receivedFact.data[0]);
  //   setlocalFactId(localfactId === 0 ? 90 : localfactId - 1);
  // };

  const fetchFact = async () => {
    console.log(
      `The value received in the fetch function inside the fetchFact function:${factId}`
    );
    setlocalFactId(factId);
    const receivedFact = await fetchMeowFacts(localfactId);
    setMeowFact(receivedFact.data[0]);
  };
  // useEffect(() => {

  // }, []);
  return (
    <div className="bg-zinc-50 w-full h-screen p-2 flex flex-col items-center">
      <div className="bg-white border-2 border-zinc-800 mt-32 md:mt-40 px-6 rounded-md flex flex-col items-center justify-center shadow-xl md:w-[650px] md:flex-row-reverse md:items-center md:justify-around">
        <div>
          {/* <button onClick={nextFact}>
            <ChevronUpIcon className="w-7 h-7 text-2xl font-extrabold text-zinc-900 md:hidden" />
            <ChevronDoubleRightIcon className="hidden w-10 h-10 text-zinc-900 font-extrabold text-2xl md:block" />
          </button> */}
        </div>

        <p className="text-zinc-700 font-light text-xl italic m-6 md:text-2xl">
          {meowFact}
        </p>
        <div>
          {/* <button onClick={prevFact}>
            <ChevronDownIcon className="w-7 h-7 text-2xl font-extrabold text-zinc-900 md:hidden" />

            <ChevronDoubleLeftIcon className="hidden w-10 h-10 text-zinc-900 font-extrabold text-2xl md:block" />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default MeowFacts;
