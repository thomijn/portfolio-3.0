import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

import { transition } from "../Preloader/Preloader";

const Hero = () => {
  return (
    <Wrapper className="hero">
      <MaxWidthWrapper style={{ paddingBottom: 16 }}>
        <MaskSpan>
          <Creative
            initial={{ opacity: 0, y: 200, skewY: 5 }}
            animate={{ opacity: 1, y: 0, skewY: 0 }}
            transition={{ ...transition, delay: 2 }}
          >
            Creative
          </Creative>
        </MaskSpan>
        <MaskSpan>
          <Developer
            initial={{ opacity: 0, y: 200, skewY: 5 }}
            animate={{ opacity: 1, y: 0, skewY: 0 }}
            transition={{ ...transition, delay: 2.2 }}
          >
            Developer
          </Developer>
        </MaskSpan>
        <MaskSpan>
          <Developer
            initial={{ opacity: 0, y: 200, skewY: 5 }}
            animate={{ opacity: 1, y: 0, skewY: 0 }}
            transition={{ ...transition, delay: 2.3 }}
          >
            ↓
          </Developer>
        </MaskSpan>
      </MaxWidthWrapper>
    </Wrapper>
  );
};

const MaskSpan = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  /* height: 250px; */
  overflow: hidden;

  @media (max-width: 768px) {
    height: 50px !important;
    position: relative !important;
  }
`;

export const MaxWidthWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding-inline: 25px;
  position: relative;

  @media (min-width: 1600px) {
    max-width: 1500px;
  }
`;

const Creative = styled(motion.h1)`
  font-family: "Satoshi";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 86px;
  letter-spacing: 0.4em;

  color: #d8d8d8;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: calc(1rem + 5vw);
  }
`;

const Developer = styled(Creative)`
  /* margin-left: 75px; */

  @media (max-width: 768px) {
    right: 0px;
  }
`;

const Wrapper = styled.div`
  pointer-events: none;
  width: 100%;
  height: calc(100vh - 100px);
  z-index: 1;
  position: relative;
  margin-top: 100px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    align-items: flex-end;
  }
`;

const GradientDiv = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
  background: rgb(26, 26, 26);
  background: linear-gradient(
    180deg,
    rgba(26, 26, 26, 0) 0%,
    rgba(26, 26, 26, 1) 85%
  );
  z-index: 2;
`;

export default Hero;
