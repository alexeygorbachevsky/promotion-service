import React from "react";
import styled from "styled-components";

import { PALETTE, toREM } from "constants/styles";

import Profile24Icon from "assets/icons/profile24.svg";
import Sun24Icon from "assets/icons/sun24.svg";
import Menu24Icon from "assets/icons/menu24.svg";
import Logout24Icon from "assets/icons/log-out24.svg";

const Wrapper = styled.div`
  position: absolute;
  padding: 0 20px;
  top: 55px;
  width: 254px;
  height: 238px;
  background-color: ${PALETTE.getHeaderBackground};
  border: 2px solid ${PALETTE.getEmptyItemBackground};
  border-radius: 15px;

  ${({ $isOpened }) => !$isOpened && `visibility: hidden`};

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const PopupRow = styled.div`
  height: 24px;
  width: 100%;
  display: flex;
  align-items: center;

  font-weight: 500;
  line-height: ${toREM(20)};
`;

const LinkWrapper = styled.p`
  margin: 0 0 0 10px;
`;

const LogoutLinkWrapper = styled(LinkWrapper)`
  color: ${PALETTE.red};
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  margin: 0 0 0 10px;

  background-color: ${PALETTE.getEmptyItemBackground};
`;

const UserSettingsPopup = React.forwardRef(({ isOpened, className }, ref) => (
  <Wrapper ref={ref} $isOpened={isOpened} className={className}>
    <PopupRow>
      <Profile24Icon />
      <LinkWrapper>My profile</LinkWrapper>
    </PopupRow>
    <PopupRow>
      <Menu24Icon />
      <LinkWrapper>Task history</LinkWrapper>
    </PopupRow>
    <Divider />
    <PopupRow>
      <Sun24Icon />
      <LinkWrapper>Dark mode</LinkWrapper>
    </PopupRow>
    <Divider />
    <PopupRow>
      <Logout24Icon />
      <LogoutLinkWrapper>Log out</LogoutLinkWrapper>
    </PopupRow>
  </Wrapper>
));

export default UserSettingsPopup;
