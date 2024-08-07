"use client";
import React, { useState, useEffect, Suspense, use } from "react";
import Button from "./Button";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import Loading from "./Loading";

import {
  ChevronDoubleRightIcon,
  ChevronDoubleLeftIcon,
} from "@heroicons/react/24/solid";

const fetchMeowFacts = async (id: number) => {
  //console.log(`The Id received in the fetch function is :${id}`);
  const url = `https://meowfacts.herokuapp.com/?id=${id}`;
  const fact = await fetch(url, { cache: "no-store" });
  const Fact = await fact.json();
  return Fact;
};

interface IdProp {
  factId: number;
}

const MeowFacts = ({ factId }: IdProp) => {
  //console.log(`Received Fact Id from the main component : ${factId}`);
  useEffect(() => {
    fetchFact();
  }, []);

  const [meowFact, setMeowFact] = useState<any>();
  const [localfactId, setlocalFactId] = useState(factId);
  // useEffect(() => {
  //   setlocalFactId(factId);
  // }, [factId]);

  //console.log(`The local fact Id is :${localfactId}`);
  //This is the function to fetch the nextfact ;goes upto 90
  const nextFact = async () => {
    const tempId = localfactId === 90 ? 1 : localfactId + 1;
    //console.log(`current Fact ID`, localfactId);
    const receivedFact = await fetchMeowFacts(tempId);
    setMeowFact(receivedFact.data[0]);
    setlocalFactId(tempId);
  };
  //This is the function to fetch the previous fact,goes upto 1
  const prevFact = async () => {
    const tempId = localfactId === 1 ? 90 : localfactId - 1;
    //console.log(`current Fact ID`, localfactId);
    const receivedFact = await fetchMeowFacts(tempId);
    setMeowFact(receivedFact.data[0]);
    setlocalFactId(tempId);
  };

  //This function runs first and fetches fact according to the Id provided by the parent component
  const fetchFact = async () => {
    // console.log(
    //   `The value received in the fetch function inside the fetchFact function:${factId}`
    // );
    setlocalFactId(factId);
    const receivedFact = await fetchMeowFacts(localfactId);
    setMeowFact(receivedFact.data[0]);
  };
  // useEffect(() => {

  // }, []);
  return (
    <div className="p-2  min-h-screen grid place-content-center">
      <div className="bg-neutral-50/40 text-green-900 p-2  md:p-4 rounded-md flex flex-col items-center justify-center shadow-xl md:w-[650px] md:flex-row-reverse md:items-center md:justify-around">
        <div>
          <button onClick={nextFact}>
            <ChevronUpIcon className="w-7 h-7 text-2xl font-extrabold text-green-900 border-2 border-green-900 rounded-full md:hidden" />
            <ChevronDoubleRightIcon className="hidden w-10 h-10 text-green-900 font-extrabold text-2xl md:block" />
          </button>
        </div>
        <Suspense
          fallback={
            <div className="p-4 bg-slate-50 grid place-content-center">
              <p className="text-green-950 font-bold text-2xl">Hello there</p>
            </div>
          }>
          <p className="font-light text-xl italic m-6 md:text-2xl">
            {meowFact}
          </p>
        </Suspense>
        <div>
          <button onClick={prevFact}>
            <ChevronDownIcon className="w-7 h-7 text-2xl font-extrabold text-green-900 border-2 border-green-900 rounded-full md:hidden" />

            <ChevronDoubleLeftIcon className="hidden w-10 h-10 text-green-900 font-extrabold text-2xl md:block" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeowFacts;
