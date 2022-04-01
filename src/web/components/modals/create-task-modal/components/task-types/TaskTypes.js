import React from "react";
import styled from "styled-components";

import { RadioButton as NativeRadioButton } from "basics";

import { MODAL_IDS } from "constants/modal";

import { taskTypesConstants } from "./duck";
import { createTaskModalComponentsStyled } from "../duck";

const { TASK_TYPES } = taskTypesConstants;
const { BlockWrapper, IconWrapper, BlockTitle, RadioButtonsWrapper } =
  createTaskModalComponentsStyled;

const RadioButton = styled(NativeRadioButton)`
  margin: 0;
  &:nth-of-type(3),
  &:nth-of-type(4) {
    margin-top: 10px;
  }
  &:nth-of-type(2),
  &:nth-of-type(4) {
    margin-left: 20px;
  }
`;

const TaskTypes = ({ value, onChange }) => {
  const onChangeTaskType = e => {
    onChange(e.target.value);
  };

  return (
    <BlockWrapper>
      <BlockTitle>Task type</BlockTitle>
      <RadioButtonsWrapper>
        {TASK_TYPES.map(({ type, Icon, iconBackground }) => (
          <RadioButton
            key={type}
            value={type}
            name={`${MODAL_IDS.createTask}_task-type`}
            isChecked={type === value}
            onChange={onChangeTaskType}
          >
            <IconWrapper $iconBackground={iconBackground}>
              <Icon width={24} height={24} />
            </IconWrapper>
            {type}
          </RadioButton>
        ))}
      </RadioButtonsWrapper>
    </BlockWrapper>
  );
};

export default TaskTypes;
