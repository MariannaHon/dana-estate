import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Benefits from "./components/Benefits/Benefits";
import Offers from "./components/Offers/Offers";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Benefits />
      <Offers/>
    </main>
  );
}
