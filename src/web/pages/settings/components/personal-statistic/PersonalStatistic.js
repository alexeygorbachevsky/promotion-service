import React from "react";
import styled from "styled-components";

import { PALETTE, toREM } from "constants/styles";

const Wrapper = styled.div`
  height: 100%;
  width: 340px;
`;

const Title = styled.p`
  margin: 0;
  color: ${PALETTE.getNotSelectedTextColor};
  font-size: ${toREM(14)};
  line-height: ${toREM(20)};
`;

const StatisticBlock = styled.div`
  margin-top: 20px;
  padding: 20px;

  &:first-of-type {
    margin-top: 10px;
  }

  width: 100%;
  height: 90px;

  display: flex;
  align-items: center;

  border-radius: 15px;
  background-color: ${PALETTE.getHeaderBackground};
`;

const IconWrapper = styled.div`
  margin-right: 20px;
  width: 50px;
  height: 50px;

  border-radius: 12px;
  background-color: ${({ $iconBackground }) => $iconBackground};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StatisticWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Statistic = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: ${toREM(24)};
  line-height: ${toREM(20)};
`;

const Description = styled(Title)`
  margin-top: 5px;
  font-size: ${toREM(16)};
`;

const PersonalStatistic = ({ personalStatistic }) => (
  <Wrapper>
    <Title>Personal statistic</Title>

    {personalStatistic.map(
      ({ id, iconBackground, icon: Icon, description, statistic }) => (
        <StatisticBlock key={id}>
          <IconWrapper $iconBackground={iconBackground}>
            <Icon width={24} height={24} />
          </IconWrapper>
          <StatisticWrapper>
            <Statistic>{statistic}</Statistic>
            <Description>{description}</Description>
          </StatisticWrapper>
        </StatisticBlock>
      ),
    )}
  </Wrapper>
);

export default PersonalStatistic;
