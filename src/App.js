import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import Scene from "./components/Scene";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import Lenis from "@studio-freight/lenis";
import Header from "./components/Header/Header";
import Preloader from "./components/Preloader/Preloader";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

// const lenis = new Lenis({
//   duration: 1.2,
//   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
//   direction: "vertical", // vertical, horizontal
//   gestureDirection: "vertical", // vertical, horizontal, both
//   smooth: true,
//   mouseMultiplier: 1,
//   smoothTouch: false,
//   touchMultiplier: 2,
//   infinite: false,
// });

// //get scroll value
// lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {
//   console.log({ scroll, limit, velocity, direction, progress });
// });

// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);

const App = () => {
  //remove preloader with state after 2.5 seconds
  const [preloader, setPreloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 2000);
  }, []);

  return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 2.8 }}
        style={{ position: "absolute", top: 0, width: "100%", height: "100%" }}
      >
        <Scene />
      </motion.div>
      <Header />
      <Hero />
      <Intro />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
