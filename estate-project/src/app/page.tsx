import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Benefits from "./components/Benefits/Benefits";
import Offers from "./components/Offers/Offers";
import How from "./components/How/How";
import Reviews from "./components/Reviews/Reviews";
import InTouch from "./components/InTouch/InTouch";
import Feedback from "./components/Feedback/Feedback";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";

import css from './page.module.css';


export default function Home() {
  return (
    <Layout>
      <main className={css.main}>
          <Hero />
          <About />
          <Benefits />
          <Offers />
          <How />
          <Reviews />
          <InTouch />
          <Feedback />
      </main>
    </Layout>
  );
}
