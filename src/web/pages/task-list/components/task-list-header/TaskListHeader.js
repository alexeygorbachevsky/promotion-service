import React from "react";
import styled from "styled-components";

import { PALETTE, toREM } from "constants/styles";
import { MODAL_IDS } from "constants/modal";

import { openModal } from "helpers/modal";

import { Search } from "components";

import { Button } from "basics";

import { taskListConstants } from "../../ducks";

const { TASK_LIST_HEADER_HEIGHT } = taskListConstants;

const Wrapper = styled.div`
  width: 100%;
  padding: 0 40px;
  height: ${TASK_LIST_HEADER_HEIGHT}px;
  // border-top: 2px solid ${PALETTE.getBorderColor};
  border-bottom: 2px solid ${PALETTE.getBorderColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonInputWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

const Divider = styled.div`
  margin: 0 10px;
  height: 40px;
  width: 1px;
  border-radius: 15px;
  background-color: ${PALETTE.getBorderColor};
`;

const Title = styled.h2`
  font-size: ${toREM(24)};
  font-weight: 500;
  white-space: nowrap;
`;

const CreateTaskButton = styled(Button)`
  border: none;
  width: 130px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${PALETTE.getEmptyItemBackground};
  &:focus {
    border: 2px solid ${PALETTE.blue};
  }
`;

const TaskListHeader = ({ isDisabled }) => (
  <Wrapper>
    <Title>Top Tasks</Title>
    <ButtonInputWrapper>
      <Search isDisabled={isDisabled} />
      <Divider />
      <CreateTaskButton
        disabled={isDisabled}
        onClick={() => openModal({ id: MODAL_IDS.createTask })}
      >
        Create task
      </CreateTaskButton>
    </ButtonInputWrapper>
  </Wrapper>
);

export default TaskListHeader;
