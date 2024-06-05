import Image from "next/image";
import MeowFacts from "../components/MeowFacts";
import bg1 from "/public/Cat-bg1.jpeg";
import MyCatFactsApp from "@/components/MyCatFactsApp";
import Meow from "@/components/Meow";
export const dynamic = "force-dynamic";
import cutie1 from "/public/image/cutie1.png";
export default function Home() {
  return (
    <main className="w-full min-h-screen  bg-zinc-950 flex flex-col bg-[url('/jigsaw.svg')]">
      <header className="w-full  h-14  fixed top-4  sm:top-[2.125rem]">
        <div className="w-[90%] mx-auto sm:w-[70%] md:w-[40%]  bg-zinc-900/70  rounded-full border-[1px] border-zinc-800/50 p-4 flex items-center   justify-center">
          <Image
            className=" scale-x-[-1]"
            height={40}
            width={40}
            src={cutie1}
            alt="cat"
          />{" "}
          <h1 className="text-3xl md:text-4xl font-semibold text-zinc-100/80 text-center ">
            Meow Facts
          </h1>
          <Image className="" height={40} width={40} src={cutie1} alt="cat" />
        </div>
      </header>
      {/* <MyCatFactsApp /> */}
      <Meow />
      <footer className="w-full md:max-w-5xl md:mx-auto h-[6vh] bg-zinc-950  border-t-[1px] border-zinc-500/50 bg-[url('/jigsaw.svg')]">
        <p className="text-zinc-100/80 text-center p-1">
          Made with 🤍 by Aayman
        </p>
      </footer>
    </main>
  );
}
