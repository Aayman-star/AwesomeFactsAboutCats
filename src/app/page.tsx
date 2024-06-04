import Image from "next/image";
import MeowFacts from "../components/MeowFacts";
import bg1 from "/public/Cat-bg1.jpeg";
import MyCatFactsApp from "@/components/MyCatFactsApp";
import Meow from "@/components/Meow";
export const dynamic = "force-dynamic";
export default function Home() {
  return (
    <main className="w-full min-h-screen  bg-stone-950 ">
      <header className="w-full md:max-w-5xl md:mx-auto h-[12vh] bg-stone-950"></header>
      {/* <MyCatFactsApp /> */}
      <Meow />
      <footer className="w-full md:max-w-5xl md:mx-auto h-[6vh] bg-stone-950 border-t-[1px] border-stone-100/50"></footer>
    </main>
  );
}
