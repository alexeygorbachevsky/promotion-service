import React from "react";
import styled from "styled-components";

import { PALETTE, toREM } from "constants/styles";

import NativeErrorIcon from "assets/icons/error.svg";

const ErrorIcon = styled(NativeErrorIcon)`
  color: ${PALETTE.red};
`;

const Blank = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  margin: 0;
  font-size: ${toREM(24)};
  font-weight: 500;
  line-height: ${toREM(32)};
  text-align: center;
`;

const Error = ({ children, className }) => (
  <Blank className={className}>
    <ErrorIcon />
    <Text>{children}</Text>
  </Blank>
);

export default Error;
