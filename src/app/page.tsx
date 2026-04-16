import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PropTrading from "@/components/PropTrading";
import Stats from "@/components/Stats";
import Products from "@/components/Products";
import WhoWeAre from "@/components/WhoWeAre";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Markets from "@/components/Markets";
import Testimonials from "@/components/Testimonials";
import Guarantee from "@/components/Guarantee";
import Pricing from "@/components/Pricing";
import Disclosure from "@/components/Disclosure";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PropTrading />
        <Stats />
        <Products />
        <WhoWeAre />
        <HowItWorks />
        <Benefits />
        <Markets />
        <Testimonials />
        <Guarantee />
        <Pricing />
        <Disclosure />
      </main>
      <Footer />
    </>
  );
}
