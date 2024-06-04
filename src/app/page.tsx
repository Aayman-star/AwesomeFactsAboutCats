import Image from "next/image";
import MeowFacts from "../components/MeowFacts";
import bg1 from "/public/Cat-bg1.jpeg";
import MyCatFactsApp from "@/components/MyCatFactsApp";
import Meow from "@/components/Meow";
export const dynamic = "force-dynamic";
import cutie1 from "/public/image/cutie1.png";
export default function Home() {
  return (
    <main className="w-full min-h-screen  bg-zinc-950 flex flex-col">
      <header className="w-full md:max-w-xl md:mx-auto rounded-full h-[12vh] bg-zinc-900/50 ">
        <div className="p-3 ro flex items-center mx-auto  justify-center">
          <Image
            className=" scale-x-[-1]"
            height={50}
            width={50}
            src={cutie1}
            alt="cat"
          />{" "}
          <h1 className="text-4xl font-semibold text-zinc-100/80 text-center ">
            Meow Facts
          </h1>
          <Image className="" height={50} width={50} src={cutie1} alt="cat" />
        </div>
      </header>
      {/* <MyCatFactsApp /> */}
      <Meow />
      <footer className="w-full md:max-w-5xl md:mx-auto h-[6vh] bg-zinc-950  border-t-[1px] border-zinc-500/50">
        <p className="text-zinc-100/80 text-center p-1">
          Made with 🤍 by Aayman
        </p>
      </footer>
    </main>
  );
}
