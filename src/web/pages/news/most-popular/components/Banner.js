import React from "react";
import styled from "styled-components";

import { customScrollbar, PALETTE, toREM } from "constants/styles";

import Media from "helpers/media";

const Wrapper = styled.div`
  height: 360px;
  padding: 20px;
  width: 100%;
  display: flex;
  border-radius: 15px;
  background-color: ${PALETTE.getHeaderBackground};
  overflow-x: auto;
  ${customScrollbar};

  ${Media.smallerThan.tabletLarge`
     flex-direction: column;
  `}
`;

const Image = styled.img`
  height: 320px;
  width: 700px;
  min-width: 380px;
  user-select: none;
  border-radius: 15px;

  ${Media.smallerThan.tabletLarge`
     width: 100%;
  `}
`;

const InfoWrapper = styled.div`
  width: 460px;
  min-width: 372px;
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  margin: 0 0 0 40px;
  line-height: ${toREM(20)};

  ${Media.smallerThan.tabletLarge`
     margin: 0 0 0 20px;
  `}
`;

const Title = styled(Text)`
  font-weight: 500;
  font-size: ${toREM(34)};
  line-height: ${toREM(40)};

  ${Media.smallerThan.tabletLarge`
     margin-top: 10px;
  `}
`;

const Description = styled(Text)`
  margin-top: 20px;
`;

const Date = styled(Text)`
  margin-top: 40px;
  font-size: ${toREM(14)};
  color: ${({ theme }) => (theme.isDarkMode ? "#a6adb1" : "#5f5f6e")};
`;

const Banner = ({ icon, title, description, date, ...props }) => (
  <Wrapper {...props}>
    <Image src={icon} alt="banner" />
    <InfoWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Date>{date}</Date>
    </InfoWrapper>
  </Wrapper>
);

export default Banner;
