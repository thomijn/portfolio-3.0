import React from "react";
import styled from "styled-components";
import { MaxWidthWrapper } from "../Hero/Hero";
import Hamburger from "./Hamburger";

const Header = () => {
  return (
    <Wrapper>
      <MaxWidthWrapper className="flex">
        <h2>THOMAS GERTENBACH</h2>
        <Hamburger />
      </MaxWidthWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;

  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;

  h2 {
    font-size: 20px;
    font-weight: 400;
    color: #333333;
    font-family: "Satoshi", sans-serif;
  }

  .flex {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

export default Header;
