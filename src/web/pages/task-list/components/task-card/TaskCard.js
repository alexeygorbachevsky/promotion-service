import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { PALETTE } from "constants/styles";

import { Button as NativeButton } from "basics/buttons";

import { EmptyImage } from "components/empty-image";

import { UserInfo } from "./components";

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
  const [icon, setIcon] = useState(null);
  const { name, taskType, taskIcon, userId: cardUserId } = card;
  const userId = useSelector(state => state.auth.userId);

  const getTaskIcon = async fileName => {
    const module = await import(`assets/icons/tasks/${fileName}`);
    const Icon = module.default;
    setIcon(<Icon />);
  };

  useEffect(() => {
    if (!taskIcon) {
      setIcon(null);

      return;
    }
    getTaskIcon(taskIcon);
  }, [taskIcon]);

  return (
    <Wrapper>
      <UserInfo card={card} />
      <TaskWrapper>{icon || <EmptyImage />}</TaskWrapper>
      {name && taskType ? (
        <Button>
          {userId === cardUserId ? "Go to task history" : "Perform a task"}
        </Button>
      ) : (
        <EmptyButton>
          <EmptyButtonText />
        </EmptyButton>
      )}
    </Wrapper>
  );
};

export default TaskCard;
