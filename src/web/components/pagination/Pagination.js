import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";

import { BlankButton as NativeBlankButton } from "basics";

import { PALETTE, toREM } from "constants/styles";

import { paginationConstants } from "./ducks";

const { FIRST_MIDDLE_PAGE, MIN_PAGES_COUNT_WITH_DOTS } = paginationConstants;

const Wrapper = styled.div`
  margin-top: 20px;
  height: 40px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const BlankButton = styled(NativeBlankButton)`
  margin: 0 10px;
  width: 40px;
  height: 40px;
  font-size: ${toREM(22)};
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid transparent;

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      color: ${PALETTE.blue};
    `};

  &:hover {
    color: ${PALETTE.blue};
  }

  &:focus {
    border: 2px solid ${PALETTE.blue};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${PALETTE.getNotSelectedTextColor};

      &:hover {
        color: ${PALETTE.getNotSelectedTextColor};
      }
    `}
`;

const Page = styled(BlankButton)`
  font-size: ${toREM(18)};
  font-weight: 500;
`;

const Dots = styled.div`
  margin: 0 10px;
  width: 40px;
  height: 40px;
  font-size: ${toREM(18)};
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid transparent;

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${PALETTE.getNotSelectedTextColor};
    `}
`;

const ToFirst = styled(BlankButton)``;
const ToLast = styled(BlankButton)``;
const Prev = styled(BlankButton)``;
const Next = styled(BlankButton)``;

const Pagination = ({
  className,
  page,
  itemsCount,
  onChange,
  itemsPerPage,
  disabled,
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(`?page=${page}`);
  }, []);

  const pagesCount = Math.ceil(itemsCount / itemsPerPage);

  const [middlePages, setMiddlePages] = useState([
    FIRST_MIDDLE_PAGE - 2,
    FIRST_MIDDLE_PAGE - 1,
    FIRST_MIDDLE_PAGE,
  ]);

  const onSetMiddlePages = pageNumber => {
    if (pageNumber < FIRST_MIDDLE_PAGE) {
      setMiddlePages([
        FIRST_MIDDLE_PAGE - 2,
        FIRST_MIDDLE_PAGE - 1,
        FIRST_MIDDLE_PAGE,
      ]);
      return;
    }

    if (pageNumber >= pagesCount - 3) {
      setMiddlePages([pagesCount - 4, pagesCount - 3, pagesCount - 2]);
      return;
    }

    if (pageNumber >= FIRST_MIDDLE_PAGE) {
      setMiddlePages([pageNumber - 1, pageNumber, pageNumber + 1]);
    }
  };

  const onPageClick = pageNumber => {
    onChange(pageNumber);
    navigate(`?page=${pageNumber}`);
    onSetMiddlePages(pageNumber);
  };

  const onPageWithoutDotsClick = pageNumber => {
    onChange(pageNumber);
    navigate(`?page=${pageNumber}`);
  };

  const onToFirstClick = () => {
    onPageClick(1);
  };

  const onToLastClick = () => {
    onPageClick(pagesCount);
  };

  const onPrevClick = () => {
    onPageClick(page - 1);
  };

  const onNextClick = () => {
    onPageClick(page + 1);
  };

  return (
    <Wrapper className={className}>
      <ToFirst disabled={page === 1 || disabled} onClick={onToFirstClick}>
        {"|<"}
      </ToFirst>
      <Prev disabled={page === 1 || disabled} onClick={onPrevClick}>
        {"<"}
      </Prev>
      {pagesCount < MIN_PAGES_COUNT_WITH_DOTS ? (
        <>
          {Array(pagesCount)
            .fill(1)
            .map((_, index) => (
              <Page
                // eslint-disable-next-line react/no-array-index-key
                key={index + 1}
                onClick={() => onPageWithoutDotsClick(index + 1)}
                $isSelected={index + 1 === page}
                disabled={disabled}
              >
                {index + 1}
              </Page>
            ))}
        </>
      ) : (
        <>
          <Page
            $isSelected={page === 1}
            onClick={() => onPageClick(1)}
            disabled={disabled}
          >
            1
          </Page>
          {page < FIRST_MIDDLE_PAGE ? (
            <Page
              $isSelected={page === 2}
              onClick={() => onPageClick(2)}
              disabled={disabled}
            >
              2
            </Page>
          ) : (
            <Dots disabled={disabled}>...</Dots>
          )}
          {middlePages.map(middlePage => (
            <Page
              key={middlePage}
              onClick={() => onPageClick(middlePage)}
              $isSelected={middlePage === page}
              disabled={disabled}
            >
              {middlePage}
            </Page>
          ))}
          {page >= pagesCount - 3 ? (
            <Page
              $isSelected={page === pagesCount - 1}
              onClick={() => onPageClick(pagesCount - 1)}
              disabled={disabled}
            >
              {pagesCount - 1}
            </Page>
          ) : (
            <Dots disabled={disabled}>...</Dots>
          )}
          <Page
            $isSelected={pagesCount === page}
            onClick={() => onPageClick(pagesCount)}
            disabled={disabled}
          >
            {pagesCount}
          </Page>
        </>
      )}
      <Next disabled={page === pagesCount || disabled} onClick={onNextClick}>
        {">"}
      </Next>
      <ToLast
        disabled={page === pagesCount || disabled}
        onClick={onToLastClick}
      >
        {">|"}
      </ToLast>
    </Wrapper>
  );
};

export default Pagination;
