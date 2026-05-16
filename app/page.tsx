import Nav from "./components/Nav";
import HeroSpotlight from "./components/HeroSpotlight";
import ScrollRevealer from "./components/ScrollRevealer";
import MerchSpotlight from "./components/MerchSpotlight";
import ProductCategories from "./components/ProductCategories";
import Marquee from "./components/Marquee";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <ScrollRevealer />
      <Nav />
      <HeroSpotlight />
      <MerchSpotlight />
      <ProductCategories />
      <Marquee />
      <FAQ />
      <Contact />
    </main>
  );
}
