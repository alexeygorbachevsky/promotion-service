import React, { useState } from "react";
import styled from "styled-components";

import { Modal, RadioButton as NativeRadioButton } from "basics";

import { MODAL_IDS } from "constants/modal";
import { PALETTE } from "constants/styles";

import BehanceIcon from "assets/icons/social-networks/behance.svg";
import DribbleIcon from "assets/icons/social-networks/dribbble.svg";

import LikeIcon from "assets/icons/task-types/like.svg";
import FollowersIcon from "assets/icons/task-types/followers.svg";
import CommentsIcon from "assets/icons/task-types/comment.svg";
import ViewIcon from "assets/icons/task-types/view.svg";

const Wrapper = styled.div`
  height: 100%
  width: 100%;

  padding: 0 30px;
  display: flex;
  flex-direction: column;
`;

const BlockWrapper = styled.div`
  margin-top: 10px;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;

  &:not(:first-of-type) {
    margin-top: 40px;
  }
`;

const BlockTitle = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  color: ${PALETTE.getNotSelectedTextColor};
`;

const RadioButtonsWrapper = styled.div`
  margin-top: 10px;
  height: 100%;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
`;

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

const IconWrapper = styled.div`
  margin-right: 10px;
  width: 40px;
  height: 40px;

  border-radius: 12px;
  background-color: ${({ $iconBackground }) => $iconBackground};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CreateTaskModal = () => {
  // TODO: move to constants
  const socialNetworks = [
    { text: "Dribble", Icon: DribbleIcon, iconBackground: PALETTE.pink },
    { text: "Behance", Icon: BehanceIcon, iconBackground: PALETTE.blue },
  ];

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

  const [checkedSocialText, setCheckedSocialText] = useState(
    socialNetworks[0].text,
  );

  const [checkedTaskType, setCheckedTaskType] = useState(taskTypes[0].type);

  const onChangeSocialNetwork = e => {
    const { value } = e.target;
    setCheckedSocialText(value);
  };

  const onChangeTaskType = e => {
    const { value } = e.target;
    setCheckedTaskType(value);
  };

  return (
    <Modal id={MODAL_IDS.createTask} title="Task creation">
        <Wrapper>
          <BlockWrapper>
            <BlockTitle>Select a social network</BlockTitle>
            <RadioButtonsWrapper>
              {socialNetworks.map(({ text, Icon, iconBackground }) => (
                <NativeRadioButton
                  key={text}
                  value={text}
                  name={`${MODAL_IDS.createTask}_social-network`}
                  isChecked={text === checkedSocialText}
                  onChange={onChangeSocialNetwork}
                >
                  <IconWrapper $iconBackground={iconBackground}>
                    <Icon />
                  </IconWrapper>
                  {text}
                </NativeRadioButton>
              ))}
            </RadioButtonsWrapper>
          </BlockWrapper>

          <BlockWrapper>
            <BlockTitle>Task Type</BlockTitle>
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
        </Wrapper>
    </Modal>
  );
};

export default CreateTaskModal;
