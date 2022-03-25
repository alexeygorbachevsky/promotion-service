import React from "react";
import styled, { useTheme } from "styled-components";
import { useDispatch } from "react-redux";

import { PALETTE, toREM } from "constants/styles";

import Profile24Icon from "assets/icons/profile24.svg";
import Sun24Icon from "assets/icons/sun24.svg";
import Menu24Icon from "assets/icons/menu24.svg";
import Logout24Icon from "assets/icons/log-out24.svg";

import { actions as authActions } from "ducks/auth";

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

const ModePopupRow = styled(PopupRow)`
  justify-content: space-between;
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

const ModeDescription = styled.div`
  display: flex;
  align-items: center;
`;

const ToggleLabel = styled.label`
  position: relative;
  width: 44px;
  height: 24px;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${PALETTE.getEmptyItemBackground({
    theme: { isDarkMode: false },
  })};
  transition: transform 0.5s ease;

  border: 2px solid transparent;

  display: flex;
  align-items: center;

  border-radius: 15px;

  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    background-color: #272b31;
    transition: transform 0.5s ease;

    border-radius: 50%;
  }

  ${ToggleInput}:checked + & {
    background-color: ${PALETTE.getEmptyItemBackground({
      theme: { isDarkMode: true },
    })};
  }

  ${ToggleInput}:focus + & {
    border: 2px solid ${PALETTE.blue};
  }

  ${ToggleInput}:checked + &:before {
    background-color: ${PALETTE.blue};
    transform: translateX(15px);
  }
`;

const UserSettingsPopup = React.forwardRef(({ isOpened, className }, ref) => {
  const { isDarkMode } = useTheme();
  const dispatch = useDispatch();

  const onToggleChange = e => {
    dispatch(authActions.setDarkMode(e.target.checked));
  };

  return (
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
      <ModePopupRow>
        <ModeDescription>
          <Sun24Icon />
          <LinkWrapper>Dark mode</LinkWrapper>
        </ModeDescription>
        {/* TODO: on Enter, space click */}
        <ToggleLabel>
          <ToggleInput
            type="checkbox"
            checked={isDarkMode}
            onChange={onToggleChange}
          />
          <ToggleSlider />
        </ToggleLabel>
      </ModePopupRow>
      <Divider />
      <PopupRow>
        <Logout24Icon />
        <LogoutLinkWrapper>Log out</LogoutLinkWrapper>
      </PopupRow>
    </Wrapper>
  );
});

export default UserSettingsPopup;
