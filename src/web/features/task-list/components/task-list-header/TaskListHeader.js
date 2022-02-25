import React from "react";
import styled from "styled-components";

import { PALETTE, toREM } from "constants/styles";

import { taskListConstants } from "../../duck";

const { TASK_LIST_HEADER_HEIGHT } = taskListConstants;

const Wrapper = styled.div`
  width: 100%;
  padding: 0 40px;
  font-weight: 500;
  font-size: ${toREM(24)};
  height: ${TASK_LIST_HEADER_HEIGHT}px;
  // border-top: 2px solid ${PALETTE.getBorderColor};
  border-bottom: 2px solid ${PALETTE.getBorderColor};
  display: flex;
  align-items: center;
`;

const TaskListHeader = () => <Wrapper>Top Tasks</Wrapper>;

export default TaskListHeader;
