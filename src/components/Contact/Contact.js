import { motion } from "framer-motion";
import styled from "styled-components";

import { MaxWidthWrapper } from "../Hero/Hero";

const Contact = () => {
  return (
    <Wrapper className="Contact">
      <MaxWidthWrapper>
        <Header>Would love to hear from you ↓.</Header>
        <Email>Thomas.gertenbach99@gmail.com</Email>
      </MaxWidthWrapper>
      <MaxWidthWrapper
        style={{ maxWidth: 1500, paddingBlock: 32 }}
        className="flex"
      >
        <LinksWrapper>
          <motion.a>Thomas Gertenbach</motion.a>
          <div>
            <motion.a>Github, </motion.a>
            <motion.a>LinkedIn, </motion.a>
            <motion.a>Twitter</motion.a>
          </div>
        </LinksWrapper>
      </MaxWidthWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  width: 100%;
  margin-top: 120px;
  background-color: #fff;
  position: relative;
  padding-top: 128px;
`;

const Header = styled(motion.h2)`
  font-family: "Satoshi Variable";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 54px;
  /* identical to box height */

  color: #000000;

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 43px;
  }
`;

const Email = styled(motion.a)`
  font-family: "Satoshi Variable";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 43px;
  text-decoration-line: underline;
  color: #000000;
  margin-top: 16px;
  margin-bottom: 128px;
  display: block;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 43px;
    word-break: break-all;
  }
`;

const LinksWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 0 25px; */
`;

export default Contact;
