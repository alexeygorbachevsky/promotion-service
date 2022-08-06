import React from "react";
import styled, { useTheme, css } from "styled-components";

import { PALETTE, toREM } from "constants/styles";

import { Link as NativeLink } from "basics/links";

import { getIconStyles } from "helpers/icons";
import Media from "helpers/media";

import { NAV_MENU_ITEMS } from "./duck";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const DesktopWrapper = styled(Wrapper)`
  ${Media.smallerThan.desktopSmall`
    display: none;
  `}
`;

const Link = styled(NativeLink)`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  margin-left: 10px;
  line-height: ${toREM(20)};
  ${({ $isActive }) =>
    !$isActive &&
    css`
      color: ${PALETTE.getNotSelectedTextColor};
    `};
`;

const NavMenu = () => {
  const theme = useTheme();

  return (
    <Wrapper>
      <DesktopWrapper>
        {NAV_MENU_ITEMS.map(({ title, Icon, to }, index) => (
          <Link
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            to={to}
            render={({ isActive }) => (
              <>
                <Icon style={getIconStyles({ theme, isSelected: isActive })} />
                <Title $isActive={isActive}> {title}</Title>
              </>
            )}
          />
        ))}
      </DesktopWrapper>
    </Wrapper>
  );
};

export default NavMenu;
