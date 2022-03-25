import React, { useState } from "react";
import styled from "styled-components";

import {RadioButton as NativeRadioButton} from "basics";

import { MODAL_IDS } from "constants/modal";
import { PALETTE } from "constants/styles";

import LikeIcon from "assets/icons/task-types/like.svg";
import FollowersIcon from "assets/icons/task-types/followers.svg";
import CommentsIcon from "assets/icons/task-types/comment.svg";
import ViewIcon from "assets/icons/task-types/view.svg";

import { createTaskModalComponentsStyled } from "../duck";

const {
  BlockWrapper,
  IconWrapper,
  BlockTitle,
  RadioButtonsWrapper,
} = createTaskModalComponentsStyled;

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

const TaskTypes = () => {
  // TODO: move out
  const taskTypes = [
    { type: "Likes", Icon: LikeIcon, iconBackground: PALETTE.lightPink },
    {
      type: "Followers",
      Icon: FollowersIcon,
      iconBackground: PALETTE.lightPurple,
    },
    {
      type: "Comments",
      Icon: CommentsIcon,
      iconBackground: PALETTE.lightGreen,
    },
    { type: "Views", Icon: ViewIcon, iconBackground: PALETTE.lightOrange },
  ];

  const [checkedTaskType, setCheckedTaskType] = useState(taskTypes[0].type);

  const onChangeTaskType = e => {
    const { value } = e.target;
    setCheckedTaskType(value);
  };

  return (
    <BlockWrapper>
      <BlockTitle>Task type</BlockTitle>
      <RadioButtonsWrapper>
        {taskTypes.map(({ type, Icon, iconBackground }) => (
          <RadioButton
            key={type}
            value={type}
            name={`${MODAL_IDS.createTask}_task-type`}
            isChecked={type === checkedTaskType}
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
