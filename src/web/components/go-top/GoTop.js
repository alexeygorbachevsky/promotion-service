import React from "react";
import styled from "styled-components";

import { BlankButton } from "basics";

import { PALETTE } from "constants/styles";

import NativeArrowHeadUpIcon from "assets/icons/arrowhead-up.svg";

import { taskListConstants } from "../../pages/task-list/ducks";

const { TASK_LIST_HEADER_PADDING_TOP } = taskListConstants;

// TODO: helpers media
const Wrapper = styled(BlankButton)`
  position: absolute;
  bottom: ${TASK_LIST_HEADER_PADDING_TOP}px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) =>
    theme.isDarkMode ? "#2d2d3a" : PALETTE.white};

  @media (max-width: 1480px) {
    display: none;
  }
`;

const ArrowHeadUpIcon = styled(NativeArrowHeadUpIcon)`
  color: ${({ theme }) => (theme.isDarkMode ? "#4b4b62" : "#a6adb1")};
  transition: color 0.15s ease-out;

  ${Wrapper}:hover & {
    color: ${PALETTE.blue};
  }
`;

const GoTop = ({ containerRef }) => {
  const onGoTop = () => {
    containerRef.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // TODO: make accessibility
  return (
    <Wrapper onClick={onGoTop}>
      <ArrowHeadUpIcon />
    </Wrapper>
  );
};

export default GoTop;
