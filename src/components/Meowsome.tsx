import React from "react";
import Button from "./Button";

type meProps = {
  randomFactId: number;
};
const fetchMeowFacts = async (id: number) => {
  //console.log(`The Id received in the fetch function is :${id}`);
  try {
    const url = `https://meowfacts.herokuapp.com/?id=${id}`;
    const fact = await fetch(url, { cache: "no-store" });
    const Fact = await fact.json();
    return Fact;
  } catch (err) {
    console.log(err);
  }
};
const Meowsome = async ({ randomFactId }: meProps) => {
  const fact = await fetchMeowFacts(randomFactId);
  console.log(fact);
  return (
    <div className="w-full m-2  md:m-0 md:w-[60%] md:mx-auto h-auto rounded-lg border-[1px] border-zinc-800/50 bg-zinc-900/50 text-zinc-100/80 p-4 font-thin  transition ease-out delay-150">
      <p className="border-b-[1px] border-zinc-700/50 pb-2 text-2xl">
        Fact # {randomFactId}
      </p>
      <div className="w-full flex items-center gap-x-4">
        <p className="mt-2 text-lg md:text-xl">{fact.data}</p>
      </div>
    </div>
  );
};

export default Meowsome;
