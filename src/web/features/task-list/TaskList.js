import React from "react";
import styled from "styled-components";

import {SIZE} from "constants/styles";

import {TaskCard, TaskListHeader} from "./components";
import {taskListConstants} from "./duck";

const {
    TASK_LIST_HEADER_HEIGHT,
    TASK_LIST_HEADER_PADDING_TOP,
    TASK_LIST_MAX_WIDTH,
    CARDS,
} = taskListConstants;

const Wrapper = styled.div`
  padding-top: ${TASK_LIST_HEADER_PADDING_TOP}px;
  max-width: ${TASK_LIST_MAX_WIDTH}px;
  margin: 0px auto;
  height: 100%;
  overflow-y: hidden;
`;

const Table = styled.div`
  width: 100%;
  height: calc(
    100vh - ${SIZE.header + TASK_LIST_HEADER_HEIGHT + TASK_LIST_HEADER_PADDING_TOP}px
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
  gap: 20px;
`;

// TODO: custom scroll bar
const TaskList = () => (
    <Wrapper>
        <Table>
            <TaskListHeader/>
            <Body>
                {CARDS.map(card => (
                    <TaskCard key={card.id} card={card}/>
                ))}
            </Body>
        </Table>
    </Wrapper>
);

export default TaskList;
