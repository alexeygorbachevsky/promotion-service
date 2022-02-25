import React from "react";
import styled from "styled-components";

import { PALETTE, toREM } from "constants/styles";
import { Button as NativeButton } from "basics";

import { EmptyImage } from "./components";

const Wrapper = styled.div`
  padding: 20px;
  width: 290px;
  height: 360px;
  border-radius: 15px;
  background-color: ${PALETTE.getHeaderBackground};
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const AvatarWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${PALETTE.getEmptyItemBackground};
`;

const UserInfo = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;

const UserName = styled.div``;

const EmptyUserName = styled.div`
  width: 95px;
  height: 18px;
  background-color: ${PALETTE.getEmptyItemBackground};
  border-radius: 15px;
`;

const Type = styled.div`
  margin-top: 2px;
  font-size: ${toREM(14)};
  color: ${PALETTE.getNotSelectedTextColor};
`;

const EmptyType = styled.div`
  margin-top: 6px;
  width: 95px;
  height: 14px;
  background-color: ${PALETTE.getEmptyItemBackground};
  border-radius: 15px;
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
  const { avatar: Avatar, name, type, task: Task } = card;
  return (
    <Wrapper>
      <UserWrapper>
        <AvatarWrapper>{Avatar && <Avatar />}</AvatarWrapper>
        <UserInfo>
          {name ? <UserName>{name}</UserName> : <EmptyUserName />}
          {type ? <Type>{type}</Type> : <EmptyType />}
        </UserInfo>
      </UserWrapper>
      <TaskWrapper>{Task ? <Task /> : <EmptyImage />}</TaskWrapper>
      {name && type && Avatar ? (
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
