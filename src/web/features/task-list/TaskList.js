import React from "react";
import styled from "styled-components";

import { customScrollbar, SIZE } from "constants/styles";

import { useScroll } from "hooks";

import { TaskCard, TaskListHeader, GoTop } from "./components";
import { taskListConstants } from "./duck";

const {
  TASK_LIST_HEADER_HEIGHT,
  TASK_LIST_HEADER_PADDING_TOP,
  TASK_LIST_MAX_WIDTH,
  CARDS,
} = taskListConstants;

const Wrapper = styled.div`
  padding-top: ${TASK_LIST_HEADER_PADDING_TOP}px;
  max-width: ${TASK_LIST_MAX_WIDTH}px;
  margin: 0 auto;
  height: 100%;
  overflow-y: hidden;
`;

const Table = styled.div`
  width: 100%;
  height: calc(
    100vh -
      ${SIZE.header + TASK_LIST_HEADER_HEIGHT + TASK_LIST_HEADER_PADDING_TOP}px
  );
`;

const Body = styled.div`
  padding: 40px 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 22px;
  ${customScrollbar};
`;

const TaskList = () => {
  const { isScroll, containerRefCallback, containerRef } = useScroll();

  return (
    <Wrapper>
      <Table>
        <TaskListHeader />
        <Body ref={containerRefCallback}>
          {CARDS.map(card => (
            <TaskCard key={card.id} card={card} />
          ))}
        </Body>
      </Table>
      {isScroll && <GoTop containerRef={containerRef} />}
    </Wrapper>
  );
};

export default TaskList;
