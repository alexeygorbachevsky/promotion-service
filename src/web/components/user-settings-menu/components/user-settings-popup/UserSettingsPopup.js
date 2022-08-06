import React from "react";
import { Link as NativeLink } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { useDispatch } from "react-redux";

import { PALETTE, toREM, Z_INDEX } from "constants/styles";

import Settings24Icon from "assets/icons/settings24.svg";
import Menu24Icon from "assets/icons/menu24.svg";
import News24Icon from "assets/icons/news24.svg";
import Sun24Icon from "assets/icons/sun24.svg";
import Logout24Icon from "assets/icons/log-out24.svg";

import { BlankButton } from "basics/buttons";

import { actions as authActions } from "ducks/auth";

import { ROUTES } from "constants/routes";
import { KEY_CODES } from "constants/keyCodes";

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  top: 55px;
  z-index: ${Z_INDEX.popup};
  padding: 0 20px;
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

const ToggleInputButton = styled(BlankButton)`
  width: 100%;
  display: flex;
  align-items: center;

  border: 2px solid transparent;

  &:focus {
    border: 2px solid ${PALETTE.blue};
  }
`;

const Link = styled(NativeLink)`
  width: 100%;
  display: flex;
  align-items: center;

  color: ${PALETTE.getText};
  border: 2px solid transparent;

  &:focus {
    border: 2px solid ${PALETTE.blue};
  }
`;

const LinkText = styled.span`
  margin-left: 10px;
`;

const LogoutLinkWrapper = styled(BlankButton)`
  width: 100%;
  display: flex;
  align-items: center;

  color: ${PALETTE.red};

  border: 2px solid transparent;

  &:focus {
    border: 2px solid ${PALETTE.blue};
  }
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

  const setDarkMode = value => {
    dispatch(authActions.setDarkMode(value));
  };

  const onToggleChange = e => {
    setDarkMode(e.target.checked);
  };

  const onToggleInputClick = () => {
    setDarkMode(!isDarkMode);
  };

  const onKeyDown = e => {
    if (e.keyCode === KEY_CODES.space) {
      setDarkMode(e.target.checked);
    }

    if (e.keyCode === KEY_CODES.enter) {
      setDarkMode(!e.target.checked);
    }
  };

  const onLogoutClick = () => {
    window.location.reload();
  };

  return (
    <Wrapper ref={ref} $isOpened={isOpened} className={className}>
      <PopupRow>
        <Link to={ROUTES.taskList}>
          <Menu24Icon />
          <LinkText>Task list</LinkText>
        </Link>
      </PopupRow>
      <PopupRow>
        <Link to={ROUTES.news}>
          <News24Icon />
          <LinkText>News</LinkText>
        </Link>
      </PopupRow>
      <PopupRow>
        <Link to={ROUTES.settings}>
          <Settings24Icon />
          <LinkText>My profile</LinkText>
        </Link>
      </PopupRow>
      <Divider />
      <ModePopupRow>
        <ModeDescription>
          <ToggleInputButton onClick={onToggleInputClick}>
            <Sun24Icon />
            <LinkText>Dark mode</LinkText>
          </ToggleInputButton>
        </ModeDescription>
        <ToggleLabel>
          <ToggleInput
            type="checkbox"
            checked={isDarkMode}
            onChange={onToggleChange}
            onKeyDown={onKeyDown}
          />
          <ToggleSlider />
        </ToggleLabel>
      </ModePopupRow>
      <Divider />
      <PopupRow>
        <LogoutLinkWrapper onClick={onLogoutClick}>
          <Logout24Icon />
          <LinkText>Log out</LinkText>
        </LogoutLinkWrapper>
      </PopupRow>
    </Wrapper>
  );
});

export default UserSettingsPopup;
