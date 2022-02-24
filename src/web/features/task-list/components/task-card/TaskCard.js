import React from "react";
import styled from "styled-components";

import { PALETTE, toREM } from "constants/styles";

const Wrapper = styled.div`
  padding: 20px;
  width: 290px;
  height: 360px;
  border-radius: 15px;
  background: ${PALETTE.getHeaderBackground};
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const AvatarWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${PALETTE.getEmptyIconBackground};
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
  background: #2d2d3a;
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
  background: #2d2d3a;
  border-radius: 15px;
`;

const IconWrapper = styled.div``;

const TaskCard = ({ card }) => {
  const { avatar: Avatar, name, type } = card;
  return (
    <Wrapper>
      <UserWrapper>
        <AvatarWrapper>{Avatar && <Avatar />}</AvatarWrapper>
        <UserInfo>
          {name ? <UserName>{name}</UserName> : <EmptyUserName />}
          {type ? <Type>{type}</Type> : <EmptyType />}
        </UserInfo>
      </UserWrapper>
      <IconWrapper />
    </Wrapper>
  );
};

export default TaskCard;
