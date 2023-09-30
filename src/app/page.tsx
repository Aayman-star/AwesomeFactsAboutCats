import Image from "next/image";
import MeowFacts from "../components/MeowFacts";
import bg1 from "/public/Cat-bg1.jpeg";
import MyCatFactsApp from "@/components/MyCatFactsApp";
export default function Home() {
  return (
    <main className="w-full min-h-screen  bg-zinc-50 ">
      <MyCatFactsApp />
    </main>
  );
}
