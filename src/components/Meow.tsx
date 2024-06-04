import Wrapper from "./Wrapper";
import Meowsome from "./Meowsome";
const Meow = () => {
  const randomFactId = Math.floor(Math.random() * (90 - 1 + 1) + 1);
  return (
    <Wrapper>
      <div className="bg-zinc-950 w-full h-full text-slate-100 grid place-content-center">
        <Meowsome randomFactId={randomFactId} />
      </div>
    </Wrapper>
  );
};

export default Meow;
