import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Benefits from "./components/Benefits/Benefits";
import Offers from "./components/Offers/Offers";
import How from "./components/How/How";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Benefits />
      <Offers />
      <How/>
    </main>
  );
}
