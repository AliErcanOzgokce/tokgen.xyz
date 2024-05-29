import Image from "next/image";
import Hero from "@/components/Hero/page"
import Problem from "@/components/Problem/Problem";

export default function Home() {
  return (
    <main className="bg-base-100">
      <Hero />
      <Problem />
    </main>
  );
}
