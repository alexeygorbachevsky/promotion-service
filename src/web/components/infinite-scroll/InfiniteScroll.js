import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";

import Spinner from "assets/icons/loader.svg";

const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100px;
`;

const Loader = styled.div``;

const InfiniteScroll = ({ onLoadMore, options, isLoading, isNeedExecute }) => {
  const loaderRef = useRef(null);

  const onIntersect = useCallback(
    ([entry]) => {
      if (!isNeedExecute || isLoading) {
        return;
      }

      if (entry.isIntersecting) {
        onLoadMore();
      }
    },
    [isNeedExecute, isLoading],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, options);

    observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [onIntersect]);

  return (
    <Loader ref={loaderRef}>
      {isNeedExecute && (
        <SpinnerWrapper>{isLoading && <Spinner />}</SpinnerWrapper>
      )}
    </Loader>
  );
};

InfiniteScroll.defaultProps = {
  options: {
    threshold: 0.5,
  },
  isLoading: false,
  isNeedExecute: false,
};

export default InfiniteScroll;
