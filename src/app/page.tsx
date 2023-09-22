import Image from "next/image";
import MeowFacts from "./components/MeowFacts";
import bg1 from "/public/Cat-bg1.jpeg";
export default function Home() {
  const factId = Math.floor(Math.random() * 90);
  console.log(`Here is the fact Id`, factId);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-zinc-50 ">
      <MeowFacts factId={factId} />
    </main>
  );
}
