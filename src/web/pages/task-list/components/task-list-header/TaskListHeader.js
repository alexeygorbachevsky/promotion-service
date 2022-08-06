import React  from "react";
import styled from "styled-components";

import { PALETTE, toREM } from "constants/styles";
import { MODAL_IDS } from "constants/modal";

import { openModal } from "helpers/modal";
import Media from "helpers/media";

import { Search as NativeSearch } from "components/search";

import { Button } from "basics/buttons";

import { taskListConstants } from "../../duck";

const { TASK_LIST_HEADER_HEIGHT } = taskListConstants;

const Wrapper = styled.div`
  width: 100%;
  padding: 0 40px;
  height: ${TASK_LIST_HEADER_HEIGHT.primary}px;
  border-bottom: 2px solid ${PALETTE.getBorderColor};
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${Media.smallerThan.tabletLarge`
     flex-direction: column;
     align-items: flex-start;
     justify-content: center;
     height: ${TASK_LIST_HEADER_HEIGHT.tablet}px;
  `}

  ${Media.smallerThan.mobileLarge`
     padding: 0 20px;
     height: ${TASK_LIST_HEADER_HEIGHT.mobile}px;
  `}
`;

const ButtonInputWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  ${Media.smallerThan.tabletLarge`
     margin-bottom: 10px;
     flex-direction: row-reverse;
  `}

  ${Media.smallerThan.mobileLarge`
     justify-content: center;
     align-items: flex-start;
     flex-direction: column-reverse;
  `}
`;

const Search = styled(NativeSearch)`
  ${Media.smallerThan.mobileLarge`
     margin-top: 10px;
  `}
`;

const Divider = styled.div`
  margin: 0 10px;
  height: 40px;
  width: 1px;
  border-radius: 15px;
  background-color: ${PALETTE.getBorderColor};

  ${Media.smallerThan.mobileLarge`
     display: none;
  `}
`;

const Title = styled.h2`
  font-size: ${toREM(24)};
  font-weight: 500;
  white-space: nowrap;

  ${Media.smallerThan.mobileLarge`
     font-size: ${toREM(20)};
  `}
`;

const CreateTaskButton = styled(Button)`
  border: none;
  width: 130px;
  min-width: 130px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${PALETTE.getEmptyItemBackground};

  &:focus {
    border: 2px solid ${PALETTE.blue};
  }
`;

const TaskListHeader = ({ isDisabled, setSearchText }) => (
  <Wrapper>
    <Title>Top Tasks</Title>
    <ButtonInputWrapper>
      <Search onSearchChange={setSearchText} isDisabled={isDisabled} />
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
