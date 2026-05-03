import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import MerchSpotlight from "./components/MerchSpotlight";
import ProductCategories from "./components/ProductCategories";
import Marquee from "./components/Marquee";
import WorkGrid from "./components/WorkGrid";
import News from "./components/News";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Services />
      <MerchSpotlight />
      <ProductCategories />
      <Marquee />
      <WorkGrid />
      <News />
      <FAQ />
      <Contact />
    </main>
  );
}
