import React from "react";
import styled from "styled-components";

import { PALETTE } from "constants/styles";

import { Button as NativeButton } from "basics";

import { EmptyImage } from "components";

import { UserInfo } from "./components";

import { taskCardSelectors } from "./duck";

const { getTaskIcon } = taskCardSelectors;

const Wrapper = styled.div`
  padding: 20px;
  width: 290px;
  height: 360px;
  border-radius: 15px;
  background-color: ${PALETTE.getHeaderBackground};
`;

const TaskWrapper = styled.div`
  margin-top: 20px;
`;

const Button = styled(NativeButton)`
  margin-top: 20px;
`;

const EmptyButton = styled.div`
  margin-top: 20px;
  width: 250px;
  height: 50px;
  background-color: ${PALETTE.getEmptyItemBackground};
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmptyButtonText = styled.div`
  width: 95px;
  height: 18px;
  background-color: ${PALETTE.getEmptyImageBackground};
  border-radius: 15px;
`;

const TaskCard = ({ card }) => {
  const { avatar: Avatar, name, type, taskIcon } = card;

  const isCardValid = Boolean(name && type && Avatar);

  const Icon = getTaskIcon(taskIcon);

  return (
    <Wrapper>
      <UserInfo card={card} />
      <TaskWrapper>{Icon ? <Icon /> : <EmptyImage />}</TaskWrapper>
      {isCardValid ? (
        <Button>Perform a task</Button>
      ) : (
        <EmptyButton>
          <EmptyButtonText />
        </EmptyButton>
      )}
    </Wrapper>
  );
};

export default TaskCard;
