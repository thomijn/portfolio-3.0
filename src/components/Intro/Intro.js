import styled from "styled-components";

import { MaxWidthWrapper } from "../Hero/Hero";

const Intro = () => {
  return (
    <MaxWidthWrapper>
      <Wrapper></Wrapper>
    </MaxWidthWrapper>
  );
};

const Wrapper = styled.div`
  width: "100%";
  height: 80vh;
  background-color: #333333;
  position: relative;
`;

export default Intro;
