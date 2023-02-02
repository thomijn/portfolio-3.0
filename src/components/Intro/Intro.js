import { motion } from "framer-motion";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

import { MaxWidthWrapper } from "../Hero/Hero";

const Intro = () => {
  // gsap scroll trigger
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".intro", {
      width: "100vw",
      ease: "none",
      scrollTrigger: {
        trigger: ".intro",
        scrub: 1,
        start: 0,
        end: "100%",
        // markers: true,
      },
    });
  }, []);

  return (
    <Wrapper className="intro">
      <h2>Intro</h2>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  width: 80vw;
  height: 100vh;
  margin-top: 20vh;
  background-color: #fff;
  position: relative;
  //center
  left: 50%;
  transform: translateX(-50%);
`;

export default Intro;
