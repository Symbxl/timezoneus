import Nav from "./components/Nav";
import Hero from "./components/Hero";
import HeroSpotlight from "./components/HeroSpotlight";
import ScrollRevealer from "./components/ScrollRevealer";
import Services from "./components/Services";
import MerchSpotlight from "./components/MerchSpotlight";
import ProductCategories from "./components/ProductCategories";
import Marquee from "./components/Marquee";
import WorkGrid from "./components/WorkGrid";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <ScrollRevealer />
      <Nav />
      <Hero />
      <HeroSpotlight />
      <Services />
      <MerchSpotlight />
      <ProductCategories />
      <Marquee />
      <WorkGrid />
      <FAQ />
      <Contact />
    </main>
  );
}
