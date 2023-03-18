import { motion } from "framer-motion";
import styled from "styled-components";

import { MaxWidthWrapper } from "../Hero/Hero";

const Intro = () => {
  return (
    <Wrapper className="intro">
      <MaxWidthWrapper>
        {/* <Header>ABOUT</Header> */}
        <TextBig>
          Hi i’m Thomas! A creative developer who brings designs to life through
          code. I'm passionate about building beautiful and functional websites
          that deliver a seamless user experience.
        </TextBig>
        <TextSmall>
          Web development has been my passion since 2016, and I'm still just as
          enthusiastic about it today. With new technologies emerging all the
          time, there's always something new to learn and explore, and I'm
          constantly pushing myself to stay up-to-date and hone my skills.
        </TextSmall>
        <TextBig style={{ marginTop: 120 }}>
          I am crazy about anything that relates to 3D!
        </TextBig>
        <TextSmall>
          Over the past few years, I've become increasingly fascinated with the
          intersection of 3D graphics and the web. From immersive web
          experiences to interactive product demos and more, the possibilities
          are endless. And now, I'm excited to take my passion for 3D to the
          next level by pursuing a career in this exciting field.
        </TextSmall>
      </MaxWidthWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  padding-block: 128px;
  margin-top: 100px;
  pointer-events: none;
`;

const Header = styled(motion.h2)`
  font-family: "Satoshi";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 86px;
  letter-spacing: 0.4em;
  /* top: 128px; */
  position: relative;
  color: #fff;
`;

const TextBig = styled(motion.p)`
  font-family: "Satoshi";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 43px;
  color: #fff;
  max-width: 700px;
  pointer-events: none;
`;

const TextSmall = styled(motion.p)`
  font-family: "Satoshi";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  max-width: 700px;
  pointer-events: none;

  color: #fff;
`;

export default Intro;
