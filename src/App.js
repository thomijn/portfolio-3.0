import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import { Three } from "./components/Three";
import Lenis from "@studio-freight/lenis";

// const lenis = new Lenis({
//   duration: 1.2,
//   easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net/en#easeOutExpo
//   direction: "vertical", // vertical, horizontal
//   gestureDirection: "vertical", // vertical, horizontal, both
//   smooth: true,
//   smoothTouch: false,
//   touchMultiplier: 2,
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
  return (
    <>
      {/* <div style={{ position: "absolute", top: 0, width: "100%" }}> */}
      <Three />
      {/* </div> */}
      <Hero />
      <Intro />
    </>
  );
};

export default App;
