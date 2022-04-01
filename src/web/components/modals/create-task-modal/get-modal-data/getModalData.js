import React from "react";
import styled from "styled-components";

import { UploadImage } from "components";

import { MODAL_IDS } from "constants/modal";
import { PALETTE, toREM } from "constants/styles";

import { Button, Input, RadioButton, radioButtonConstants } from "basics";

import NativeCoinsIcon from "assets/icons/coins.svg";
import NativeFlashIcon from "assets/icons/flash.svg";
import Loader from "assets/icons/loader.svg";
import NativeCheckMark from "assets/icons/check-mark.svg";
import NativeErrorIcon from "assets/icons/error.svg";

import {
  createTaskModalComponentsStyled,
  SocialNetworks,
  TaskTypes,
} from "../components";

const { BlockWrapper, BlockTitle } = createTaskModalComponentsStyled;
const { RADIO_BUTTON_THEME_NAMES } = radioButtonConstants;

const Wrapper = styled.div`
  width: 100%;

  padding: 10px 30px;
  display: flex;
  flex-direction: column;
`;

const ExecutionCostInput = styled(Input)`
  margin-top: 10px;
  width: 140px;
`;
const ExecutionCountInput = styled(ExecutionCostInput)``;

const CoinsIcon = styled(NativeCoinsIcon)`
  color: ${PALETTE.getText};
`;

const FlashIcon = styled(NativeFlashIcon)`
  color: ${PALETTE.getText};
`;

const CreateTaskButton = styled(Button)`
  margin-top: 40px;
  width: 140px;
`;

const IsPinnedTop = styled(RadioButton)`
  margin-top: 10px;
  width: 60px;
  padding: 0;
  justify-content: center;
`;

const CheckMark = styled(NativeCheckMark)`
  width: 120px;
  height: 120px;
`;

const ErrorIcon = styled(NativeErrorIcon)`
  width: 120px;
  height: 120px;
  color: ${PALETTE.red};
`;

const StatesWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StateWrapper = styled.div`
  margin-bottom: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  margin: 20px 0 0;

  font-size: ${toREM(24)};
  font-weight: 500;
  line-height: ${toREM(32)};
  text-align: center;
`;

const BlockDescription = styled(BlockTitle)`
  margin-top: 20px;
`;

const getModalData = ({
  isLoadingTasks,
  executionCost,
  executionsCount,
  isPinnedTop,
  socialNetwork,
  taskIcon,
  taskType,
  error,
  isTaskCreationDone,
  onCreateTask,
  dispatch,
} = {}) => {
  const onChangeExecutionCost = e => {
    const { validity, value } = e.target;

    if (validity.patternMismatch) {
      return;
    }

    dispatch({
      type: "executionCost",
      payload: { value },
    });
  };

  const onChangeExecutionsCount = e => {
    const { validity, value } = e.target;

    if (validity.patternMismatch) {
      return;
    }

    dispatch({
      type: "executionsCount",
      payload: { value },
    });
  };

  const onChangePinnedTop = e => {
    const { checked } = e.target;

    dispatch({
      type: "isPinnedTop",
      payload: { value: checked },
    });
  };

  const onChangeSocialNetwork = value => {
    dispatch({
      type: "socialNetwork",
      payload: { value },
    });
  };

  const onChangeTaskIcon = value => {
    dispatch({
      type: "taskIcon",
      payload: { value },
    });
  };

  const onChangeTaskType = value => {
    dispatch({
      type: "taskType",
      payload: { value },
    });
  };

  switch (true) {
    case isLoadingTasks: {
      return (
        <StatesWrapper>
          <StateWrapper>
            <Loader />
            <Text>Task is being added</Text>
          </StateWrapper>
        </StatesWrapper>
      );
    }

    case !!error: {
      return (
        <StatesWrapper>
          <StateWrapper>
            <ErrorIcon />
            <Text>Something went wrong. Try again later.</Text>
          </StateWrapper>
        </StatesWrapper>
      );
    }

    case isTaskCreationDone: {
      return (
        <StatesWrapper>
          <StateWrapper>
            <CheckMark />
            <Text>Task successfully added</Text>
          </StateWrapper>
        </StatesWrapper>
      );
    }

    default: {
      return (
        <Wrapper>
          <SocialNetworks
            value={socialNetwork}
            onChange={onChangeSocialNetwork}
          />
          <TaskTypes value={taskType} onChange={onChangeTaskType} />

          <BlockWrapper>
            <BlockTitle>Task image</BlockTitle>
            <BlockDescription>
              Upload svg task image. You can find images in
              &quot;src/assets/tasks-preview&quot; folder.
            </BlockDescription>
            <UploadImage
              isRemoveButton
              value={taskIcon}
              onChange={onChangeTaskIcon}
            />
          </BlockWrapper>

          <BlockWrapper>
            <BlockTitle>Execution cost</BlockTitle>
            <BlockDescription>
              At least 20 coins for execution (50% goes to the site commission)
            </BlockDescription>
            <ExecutionCostInput
              value={executionCost}
              placeholder="Type cost"
              onChange={onChangeExecutionCost}
              pattern="\d{0,9}"
              label={<CoinsIcon />}
            />
          </BlockWrapper>

          <BlockWrapper>
            <BlockTitle>How much do you need?</BlockTitle>
            <BlockDescription>
              At least 10 executions, a maximum of 1000
            </BlockDescription>
            <ExecutionCountInput
              value={executionsCount}
              placeholder="Type count"
              onChange={onChangeExecutionsCount}
              pattern="\d{0,9}"
              label={<FlashIcon />}
            />
          </BlockWrapper>

          <BlockWrapper>
            <BlockTitle>Pin my task to the top</BlockTitle>
            <BlockDescription>
              Additional cost is charged - 500 coins
            </BlockDescription>
            <IsPinnedTop
              type="checkbox"
              name={`${MODAL_IDS.createTask}_is-pinned-top`}
              isChecked={isPinnedTop}
              onChange={onChangePinnedTop}
              themeName={RADIO_BUTTON_THEME_NAMES.lightGray}
            />
          </BlockWrapper>

          <CreateTaskButton
            disabled={!executionCost || !executionsCount || isLoadingTasks}
            onClick={onCreateTask}
          >
            Create task
          </CreateTaskButton>
        </Wrapper>
      );
    }
  }
};

export default getModalData;
