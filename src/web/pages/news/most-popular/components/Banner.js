import React from "react";
import styled from "styled-components";

import { PALETTE, toREM } from "constants/styles";

const Wrapper = styled.div`
  height: 360px;
  padding: 20px;
  width: 100%;
  display: flex;
  border-radius: 15px;
  background-color: ${PALETTE.getHeaderBackground};
`;

const Image = styled.img`
  height: 320px;
  width: 700px;
  user-select: none;
  border-radius: 15px;
`;

const InfoWrapper = styled.div`
  width: 460px;
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  margin: 0 0 0 40px;
  line-height: ${toREM(20)};
`;

const Title = styled(Text)`
  font-weight: 500;
  font-size: ${toREM(34)};
  line-height: ${toREM(40)};
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
