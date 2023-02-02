import React from "react";
import styled from "styled-components";
import { motion, MotionConfig } from "framer-motion";

import { useStore } from "../../store";

const Hamburger = () => {
  const { toggleMenu, menu } = useStore();

  const variants = {
    open: {
      y: 5,
      rotate: 45,
      backgroundColor: "#fff",
    },
    openBottom: {
      y: -5,
      rotate: -45,
      backgroundColor: "#fff",
    },
    closed: {
      y: 0,
      rotate: 0,
      backgroundColor: "#333333",
    },
  };

  return (
    <MotionConfig
      transition={{
        duration: 0.4,
        rotate: { delay: menu ? 0.15 : 0 },
        y: { delay: !menu ? 0.15 : 0 },
      }}
    >
      <Wrapper
        transition={{ delay: 1 }}
        animate={{ opacity: 1 }}
        // initial={{ opacity: 0 }}
        onClick={() => toggleMenu(!menu)}
      >
        <Stripe animate={menu ? "open" : "closed"} variants={variants} />
        <Stripe animate={menu ? "openBottom" : "closed"} variants={variants} />
      </Wrapper>
    </MotionConfig>
  );
};

const Wrapper = styled(motion.div)`
  /* position: absolute; */
  /* top: 24px;
  left: 19px; */
  display: flex;
  z-index: 101;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    top: 16px;
    left: 12px;
  }
`;

const Stripe = styled(motion.span)`
  display: inline-block;
  width: 30px;
  height: 2px;
  margin: 3px;
`;

export default Hamburger;
