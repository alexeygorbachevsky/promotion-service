import React from "react";
import styled from "styled-components";

import { BlankButton } from "basics/buttons";

import { PALETTE } from "constants/styles";

import NativeArrowHeadUpIcon from "assets/icons/arrowhead-up.svg";

import { taskListConstants } from "pages/task-list/duck";

const { TASK_LIST_HEADER_PADDING_TOP } = taskListConstants;

const Wrapper = styled(BlankButton)`
  position: absolute;
  bottom: ${TASK_LIST_HEADER_PADDING_TOP.primary}px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) =>
    theme.isDarkMode ? "#2d2d3a" : PALETTE.white};

  &:focus {
    border: 3px solid ${PALETTE.blue};
  }

  @media (max-width: 1480px) {
    display: none;
  }
`;

const ArrowHeadUpIcon = styled(NativeArrowHeadUpIcon)`
  color: ${({ theme }) => (theme.isDarkMode ? "#4b4b62" : "#a6adb1")};
  transition: color 0.15s ease-out;

  ${Wrapper}:hover, ${Wrapper}:focus & {
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

  return (
    <Wrapper onClick={onGoTop}>
      <ArrowHeadUpIcon />
    </Wrapper>
  );
};

export default GoTop;
