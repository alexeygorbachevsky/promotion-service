import React, { Children, cloneElement, useEffect, useState } from "react";
import styled from "styled-components";

import NativeArrow from "assets/icons/carousel-arrow.svg";

import { PALETTE } from "constants/styles";

import { BlankButton } from "basics/buttons";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
`;

const Window = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const ItemsWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;

  transform: translateX(${({ offset }) => offset}%);
  transition: transform 0.5s ease-in-out;
`;

const ArrowLeft = styled(NativeArrow)`
  transform: rotate(90deg);
`;

const ArrowRight = styled(ArrowLeft)`
  transform: rotate(270deg);
`;

const Button = styled(BlankButton)`
  margin-right: 10px;
  border: 2px solid transparent;

  &:last-of-type {
    margin-right: 0;
    margin-left: 10px;
  }

  &:focus {
    border: 2px solid ${PALETTE.blue};
  }
`;

const Carousel = ({ className, children }) => {
  const [items, setItems] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setItems(
      Children.map(children, child =>
        cloneElement(child, {
          style: { height: "100%", minWidth: "100%", maxWidth: "100%" },
        }),
      ),
    );
  }, []);

  const onLeftCLick = () => {
    setOffset(prevOffset => {
      if (prevOffset === 0) {
        return -(100 * (items.length - 1));
      }
      return prevOffset + 100;
    });
  };

  const onRightCLick = () => {
    const maxOffset = -(100 * (items.length - 1));
    setOffset(prevOffset => {
      if (prevOffset === -(100 * (items.length - 1))) {
        return 0;
      }
      return Math.max(prevOffset - 100, maxOffset);
    });
  };

  return (
    <Wrapper className={className}>
      <Button onClick={onLeftCLick}>
        <ArrowLeft />
      </Button>
      <Window>
        <ItemsWrapper offset={offset}>{items}</ItemsWrapper>
      </Window>
      <Button onClick={onRightCLick}>
        <ArrowRight />
      </Button>
    </Wrapper>
  );
};

export default Carousel;
