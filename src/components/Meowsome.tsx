import React from "react";
type meProps = {
  randomFactId: number;
};
const fetchMeowFacts = async (id: number) => {
  //console.log(`The Id received in the fetch function is :${id}`);
  const url = `https://meowfacts.herokuapp.com/?id=${id}`;
  const fact = await fetch(url, { cache: "no-store" });
  const Fact = await fact.json();
  return Fact;
};
const Meowsome = async ({ randomFactId }: meProps) => {
  const fact = await fetchMeowFacts(randomFactId);
  console.log(fact);
  return (
    <div className="w-full md:w-[60%] md:mx-auto h-auto rounded-lg border-[1px] border-zinc-800 bg-zinc-900/50 text-zinc-100/80 p-4 font-thin text-xl transition ease-out delay-150">
      <p className="border-b-[1px] border-zinc-500/50 pb-2">
        Fact # {randomFactId}
      </p>
      <p className="mt-2">{fact.data}</p>
    </div>
  );
};

export default Meowsome;
