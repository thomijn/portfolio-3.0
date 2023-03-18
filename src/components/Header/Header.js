import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { MaxWidthWrapper } from "../Hero/Hero";
import Hamburger from "./Hamburger";

const Header = () => {
  return (
    <Wrapper
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 2, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <MaxWidthWrapper style={{ maxWidth: 1500 }} className="flex">
        <h2>THOMAS GERTENBACH</h2>
        <Hamburger />
      </MaxWidthWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;

  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-family: "Satoshi";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.4em;

    color: #d8d8d8;
  }

  .flex {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

export default Header;
