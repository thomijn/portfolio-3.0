import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export const transition = {
  duration: 0.8,
  ease: [0.6, 0.01, -0.05, 0.9],
};

const Preloader = () => {
  return (
    <Wrapper>
      <MaskSpan>
        <motion.h1
          initial={{ opacity: 0, y: 200, skewY: 5 }}
          animate={{ opacity: 1, y: 0, skewY: 0 }}
          transition={{ ...transition, delay: 0.2 }}
          exit={{ opacity: 0, y: -200, skewY: -5 }}
        >
          THOMAS
        </motion.h1>
      </MaskSpan>
      <MaskSpan>
        <motion.h1
          initial={{ opacity: 0, y: 200, skewY: 5 }}
          animate={{ opacity: 1, y: 0, skewY: 0 }}
          transition={{ ...transition, delay: 0.3 }}
          exit={{ opacity: 0, y: -200, skewY: -5 }}
        >
          GERTENBACH
        </motion.h1>
      </MaskSpan>
      {/* <ThomasSvg /> */}
    </Wrapper>
  );
};

const MaskSpan = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  height: 250px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 80px !important;
    position: relative !important;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: calc(8rem + 6vw);
    height: fit-content;
    margin: 0;
    color: #fff;
  }
`;

export default Preloader;
