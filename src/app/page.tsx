import Image from "next/image";
import MeowFacts from "./components/MeowFacts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MeowFacts />
    </main>
  );
}
