import React from "react";
import styled from "styled-components";

import { customScrollbar } from "constants/styles";

import { GoTop } from "components";

import { useScroll } from "hooks";

import { LastNews } from "./last-news";
import { MostPopular } from "./most-popular";

const Wrapper = styled.div`
  height: 100%;
  overflow-y: hidden;
`;

const Table = styled.div`
  width: 100%;
  height: 100%;
`;

const ScrollWrapper = styled.div`
  padding-top: 40px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  ${customScrollbar};
`;

const NewsWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
`;

const News = () => {
  const { isScroll, containerRefCallback, containerRef } = useScroll();

  return (
    <Wrapper>
      <Table>
        <ScrollWrapper ref={containerRefCallback}>
          <NewsWrapper>
            <MostPopular />
            <LastNews />
          </NewsWrapper>
        </ScrollWrapper>
      </Table>
      {isScroll && <GoTop containerRef={containerRef} />}
    </Wrapper>
  );
};

export default News;
