import React from "react";
import styled from "styled-components";

import { PALETTE } from "constants/styles";

const Wrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 4px;
  background-color: ${PALETTE.getNotSelectedTextColor};
  position: absolute;
  z-index: 1;
`;

const Line = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &:before {
    content: "";
    position: absolute;
    height: 100%;
    background-color: ${PALETTE.blue};
    animation: line_first 1.5s infinite ease-out;
  }

  &:after {
    content: "";
    position: absolute;
    height: 100%;
    background-color: ${PALETTE.blue};
    animation: line_second 1.5s infinite ease-in;
  }

  @keyframes line_first {
    0% {
      left: -100%;
      width: 100%;
    }
    100% {
      left: 100%;
      width: 10%;
    }
  }

  @keyframes line_second {
    0% {
      left: -150%;
      width: 100%;
    }
    100% {
      left: 100%;
      width: 10%;
    }
  }
`;

const LinearLoader = () => (
  <Wrapper>
    <Line />
  </Wrapper>
);

export default LinearLoader;
