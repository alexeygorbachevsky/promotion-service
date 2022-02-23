import React from "react";
import styled, { withTheme } from "styled-components";

import { PALETTE, toREM } from "constants/styles";

import { getIconStyles } from "helpers/icons";

import { NAV_MENU_ITEMS } from "./duck";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;

  &:not(:first-of-type) {
    margin-left: 40px;
  }
`;

const Title = styled.div`
  margin-left: 10px;
  line-height: ${toREM(20)};
  ${({ $isSelected, theme }) =>
    !$isSelected &&
    `color: ${theme.isDarkMode ? PALETTE.purple[-5] : PALETTE.sand[-5]}`};
`;

const NavMenu = ({ theme }) => (
  <Wrapper>
    {NAV_MENU_ITEMS.map(({ title, Icon }, index) => {
      // TODO: change after route will be implemented
      const isSelected = index === 0;
      return (
        // eslint-disable-next-line react/no-array-index-key
        <NavItem key={index}>
          <Icon style={getIconStyles({ theme, isSelected })} />
          {/* TODO: make as Route */}
          <Title $isSelected={isSelected}> {title}</Title>
        </NavItem>
      );
    })}
  </Wrapper>
);

export default withTheme(NavMenu);
