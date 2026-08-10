import Nav from "./components/Nav";
import HeroSpotlight from "./components/HeroSpotlight";
import ScrollRevealer from "./components/ScrollRevealer";
import MerchSpotlight from "./components/MerchSpotlight";
import ProductCategories from "./components/ProductCategories";
import GearGallery from "./components/GearGallery";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <ScrollRevealer />
      <Nav />
      <HeroSpotlight />
      <MerchSpotlight />
      <GearGallery />
      <ProductCategories />
      <FAQ />
      <Contact />
    </main>
  );
}
