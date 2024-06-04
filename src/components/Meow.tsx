import Wrapper from "./Wrapper";
const Meow = () => {
  const randomFactId = Math.floor(Math.random() * (90 - 1 + 1) + 1);
  return (
    <Wrapper>
      <div className="bg-stone-950 w-full h-full text-slate-100 grid place-content-center">
        <h2 className="text-stone-100 font-bold text-2xl">{randomFactId}</h2>
      </div>
    </Wrapper>
  );
};

export default Meow;
