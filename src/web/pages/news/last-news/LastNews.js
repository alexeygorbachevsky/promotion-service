import React, { useEffect } from "react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

import { PALETTE, toREM } from "constants/styles";

import { Pagination } from "components";

import { LastNew } from "./components";
import { lastNewsConstants, lastNewsHooks } from "./ducks";

const { ITEMS_PER_PAGE } = lastNewsConstants;
const { useConnect } = lastNewsHooks;

const Wrapper = styled.div`
  margin-top: 40px;
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

const Body = styled.div`
  padding: 40px 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 22px;
`;

const Error = styled.div``;

const LastNews = () => {
  const {
    page,
    lastNews,
    error,
    isLoadingLastNews,
    lastNewsTotalCount,
    loadLastNews,
    setPageNumber,
  } = useConnect();

  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || page;
  const currentPageLastNews = lastNews[currentPage] || [];

  useEffect(() => {
    if (lastNews[currentPage]) {
      return;
    }

    loadLastNews({ itemsPerPage: ITEMS_PER_PAGE, page: currentPage });
  }, [currentPage]);

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Last news</Title>
      </TitleWrapper>

      <Body>
        {error && <Error>Something went wrong. Try again later.</Error>}
        {!error &&
          (!currentPageLastNews.length ? (
            <>{isLoadingLastNews ? "Loading" : "We have no last news"}</>
          ) : (
            <>
              {currentPageLastNews.map(lastNew => (
                <LastNew key={lastNew.id} lastNew={lastNew} />
              ))}
            </>
          ))}
        <Pagination
          disabled={isLoadingLastNews}
          page={currentPage}
          itemsPerPage={ITEMS_PER_PAGE}
          itemsCount={lastNewsTotalCount}
          onChange={setPageNumber}
        />
      </Body>
    </Wrapper>
  );
};

export default LastNews;