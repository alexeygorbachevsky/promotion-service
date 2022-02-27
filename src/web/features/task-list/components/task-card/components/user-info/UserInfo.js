import React from "react";
import styled from "styled-components";

import { PALETTE, toREM } from "constants/styles";

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const AvatarWrapper = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${PALETTE.getEmptyItemBackground};
  flex-shrink: 0;
`;

const TypeImageWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${PALETTE.getHeaderBackground};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserData = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const UserName = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-between;
`;

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

const OptionsWrapper = styled.div`
  height: 100%;
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const OptionDot = styled.div`
  height: 16%;
  width: 3px;
  border-radius: 50%;
  background-color: ${({ theme }) =>
    theme.isDarkMode ? "#8e8e96" : "#a6adb1"};
  text-align: center;
`;

const UserInfo = ({
  card: { avatar: Avatar, typeImage: TypeImage, name, type },
}) => (
  <UserWrapper>
    <AvatarWrapper>
      {Avatar && (
        <>
          <Avatar />
          {TypeImage && (
            <TypeImageWrapper>
              <TypeImage />
            </TypeImageWrapper>
          )}
        </>
      )}
    </AvatarWrapper>
    <UserData>
      {name ? (
        <UserName>
          <>
            {name}
            <OptionsWrapper>
              <OptionDot />
              <OptionDot />
              <OptionDot />
            </OptionsWrapper>
          </>
        </UserName>
      ) : (
        <EmptyUserName />
      )}
      {type ? <Type>{type}</Type> : <EmptyType />}
    </UserData>
  </UserWrapper>
);

export default UserInfo;
