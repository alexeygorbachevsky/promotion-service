import React from "react";
import styled from "styled-components";

import { PALETTE, toREM } from "constants/styles";

import NativeEmptyIcon from "assets/icons/empty.svg";

const EmptyIcon = styled(NativeEmptyIcon)`
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

const BlankState = ({ children, className }) => (
  <Blank className={className}>
    <EmptyIcon />
    <Text>{children}</Text>
  </Blank>
);

export default BlankState;
