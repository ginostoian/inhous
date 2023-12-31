import Link from "next/link";

import ButtonSignin from "@/components/ButtonSignin";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import FeaturesListicle from "@/components/FeaturesListicle";
import Testimonials3 from "@/components/Testimonials3";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Testimonials11 from "@/components/Testimonials11";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonials1";
import Problem from "@/components/Problem";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <FeaturesListicle />
        <FeaturesAccordion />
        <Testimonials3 />
        <Pricing />
        <Testimonial />
        <FAQ />
        <Testimonials11 />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
