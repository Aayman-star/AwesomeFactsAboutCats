import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";

type meProps = {
  randomFactId: number;
};
const fetchMeowFacts = async (id: number) => {
  //console.log(`The Id received in the fetch function is :${id}`);
  try {
    const url = `https://meowfacts.herokuapp.com/?id=${id}`;
    const fact = await fetch(url);
    const Fact = await fact.json();
    return Fact;
  } catch (err) {
    console.log(err);
  }
};
const Meowsome = async ({ randomFactId }: meProps) => {
  const fact = await fetchMeowFacts(randomFactId);

  // console.log(fact);

  return (
    <div className="flex flex-col items-center gap-y-6">
      <div className="bg-zinc-900/70 p-3 w-[20rem] border-2 border-zinc-900 rounded-full">
        <p className="text-sm text-center">
          Refresh the page to get a meowfact😊
        </p>
      </div>
      <div className="w-full m-2  md:m-0 md:w-[60%] md:mx-auto h-auto rounded-lg border-[1px] border-zinc-800/50 bg-zinc-900/70 text-zinc-100/80 p-4 font-thin  transition ease-out delay-150">
        <p className="border-b-[1px] border-zinc-700/50 pb-2 text-2xl">
          Fact # {randomFactId}
        </p>
        <div className="w-full flex items-center gap-x-4">
          <p className="mt-2 text-lg md:text-2xl">{fact.data}</p>
        </div>
      </div>
    </div>
  );
};

export default Meowsome;
// , { cache: "no-store" }
