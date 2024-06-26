import Hero from "@/components/Hero/page"
import Problem from "@/components/Problem/Problem";
import Chains from "@/components/Chains/Chains";
import Features from "@/components/Features/Features";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import FAQ from "@/components/FAQ/FAQ";
import CTA from "@/components/CTA/CTA";

export default function Home() {
  return (
    <main className="bg-base-100">
      <Hero />
      <Chains />
      <Problem />
      <Features />
      <HowItWorks />
      <FAQ />
      <CTA />
    </main>
  );
}
