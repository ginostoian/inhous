import Link from "next/link";

import ButtonSignin from "@/components/ButtonSignin";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import FeaturesListicle from "@/components/FeaturesListicle";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturesListicle />
        <FeaturesAccordion />
      </main>
    </>
  );
}
