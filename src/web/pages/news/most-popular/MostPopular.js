import React from "react";
import styled from "styled-components";

import { Carousel as NativeCarousel } from "components";

import { BANNERS } from "constants/temp";
import { PALETTE, toREM } from "constants/styles";

import { Banner } from "./components";

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const TitleWrapper = styled.div`
  width: 100%;
  padding: 0 40px;
  height: 50px;
  border-bottom: 2px solid ${PALETTE.getBorderColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: ${toREM(24)};
  font-weight: 500;
  white-space: nowrap;
`;

const Carousel = styled(NativeCarousel)`
  margin-top: 40px;
`;

const MostPopular = () => (
  <Wrapper>
    <TitleWrapper>
      <Title>Most popular</Title>
    </TitleWrapper>

    <Carousel>
      {BANNERS.map(banner => (
        <Banner key={banner.id} {...banner} />
      ))}
    </Carousel>
  </Wrapper>
);

export default MostPopular;
