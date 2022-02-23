import React from "react";
import styled from "styled-components";

import NativeLogoIcon from "assets/icons/logo20.svg";

import { SIZE, toREM, Z_INDEX } from "constants/styles";

import { NavMenu } from "components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${Z_INDEX.navHeader};
  width: 100%;
  height: ${SIZE.header}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1c1c24;
  padding: 0 110px;
  border-bottom: 2px solid #262631;

  ${({ $isWithFooter }) =>
    $isWithFooter &&
    `
      top: unset;
      border-bottom: unset;
      bottom: 0;
      border-top: 2px solid #262631;
    `}
`;

const LogoWrapper = styled.div`
  height: 100%;
  max-width: 300px;
  display: flex;
  align-items: center;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  background-color: #4447e2;
  border-radius: 50%;
`;

const LogoIcon = styled(NativeLogoIcon)``;
const UserSettingsMenuMock = styled.div`
  width: 230px;
  height: 40px;
`;

const Title = styled.div`
  margin-left: 10px;
  line-height: ${toREM(20)};
`;

const NavHeader = ({ isWithFooter }) => (
  <>
    <Wrapper>
      <LogoWrapper>
        <Circle>
          <LogoIcon />
        </Circle>
        <Title>NFT Marketplace</Title>
      </LogoWrapper>

      <NavMenu />

      <UserSettingsMenuMock />
      {/* <UserSettingsMenu /> */}
    </Wrapper>
    {isWithFooter && <Wrapper $isWithFooter={isWithFooter}>Some info</Wrapper>}
  </>
);

export default NavHeader;
