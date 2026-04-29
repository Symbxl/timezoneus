import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import WorkGrid from "./components/WorkGrid";
import Capabilities from "./components/Capabilities";
import Partners from "./components/Partners";
import News from "./components/News";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Marquee />
      <WorkGrid />
      <Capabilities />
      <Partners />
      <News />
      <FAQ />
      <Contact />
    </main>
  );
}
