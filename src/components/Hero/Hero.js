import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Wrapper>
      <MaxWidthWrapper>
        <Creative>Creative</Creative>
        <Developer>Developer</Developer>
      </MaxWidthWrapper>
    </Wrapper>
  );
};

export const MaxWidthWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  padding-inline: 25px;
  position: relative;
  height: 100%;

  @media (min-width: 1600px) {
    max-width: 1500px;
  }
`;

const Creative = styled.h1`
  font-size: calc(1rem + 6vw);
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
  text-transform: uppercase;
  margin: 0;
  padding: 0;
  line-height: 1;
  z-index: 1;
`;

const Developer = styled(Creative)`
  position: absolute;
  bottom: 0px;
  right: 25px;
  width: auto;
`;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 300px);
  z-index: 1;
  position: relative;
  margin-top: 150px;
  margin-bottom: 50px;
`;

export default Hero;
