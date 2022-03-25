import React from "react";
import styled from "styled-components";

import { PALETTE } from "constants/styles";

import NativeEmptyTaskIcon from "assets/icons/tasks/empty-task.svg";

const EmptyTaskWrapper = styled.div`
  width: 250px;
  height: 180px;
  background: ${PALETTE.getEmptyItemBackground};
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Substrate = styled.div`
  width: 75px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;

const EmptyTaskIcon = styled(NativeEmptyTaskIcon)`
  color: ${PALETTE.getEmptyImageBackground};
`;

const EmptyImage = ({className}) => (
  <EmptyTaskWrapper className={className}>
    <Substrate>
      <EmptyTaskIcon />
    </Substrate>
  </EmptyTaskWrapper>
);

export default EmptyImage;
