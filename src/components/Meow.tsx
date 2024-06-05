import Wrapper from "./Wrapper";
import Meowsome from "./Meowsome";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
const Meow = () => {
  const randomFactId = Math.floor(Math.random() * (90 - 1 + 1) + 1);
  return (
    <Wrapper>
      <div className="bg-zinc-950 w-full h-full text-slate-100 grid place-content-center ">
        <div className="w-full h-auto flex flex-col items-center gap-y-4 md:flex-row md:items-center md:justify-center ">
          <ChevronLeftIcon className="w-8 h-8 text-zinc-200/50 bg-zinc-900/50 rounded-full border-[1px] border-zinc-800 " />
          <Meowsome randomFactId={randomFactId} />
          <ChevronRightIcon className="w-8 h-8 text-zinc-200/50 bg-zinc-900/50 rounded-full border-[1px] border-zinc-800" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Meow;
