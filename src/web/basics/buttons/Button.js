import React from "react";
import styled from "styled-components";

import { PALETTE } from "constants/styles";

import BlankButton from "./BlankButton";

const Wrapper = styled(BlankButton)`
  width: 250px;
  height: 50px;

  border-radius: 15px;
  border: 2px solid ${PALETTE.blue};

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  text-decoration: none;
  white-space: nowrap;

  transition: background-color 0.3s ease-out;

  background-color: transparent;

  &:hover:not(:disabled) {
    color: ${PALETTE.white};
    background-color: ${PALETTE.blue};
  }

  &:focus {
    box-shadow: 0 0 10px ${PALETTE.blue};
  }

  &:disabled {
    opacity: 0.5;
  }
`;

const Button = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <Wrapper ref={ref} {...props}>
      {children}
    </Wrapper>
  );
});

export default Button;
