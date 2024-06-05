import Wrapper from "./Wrapper";
import Meowsome from "./Meowsome";

const Meow = () => {
  const randomFactId = Math.floor(Math.random() * (90 - 1 + 1) + 1);
  return (
    <Wrapper>
      <div className="bg-zinc-950 w-full h-full text-slate-100 grid place-content-center bg-[url('/jigsaw.svg')]">
        <div className="w-full h-auto flex flex-col items-center gap-y-4 md:flex-row md:items-center md:justify-center ">
          <Meowsome randomFactId={randomFactId} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Meow;
