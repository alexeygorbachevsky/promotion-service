import React, { useState } from "react";
import styled from "styled-components";

import {
  Modal,
  Input,
  Button,
  RadioButton,
  radioButtonConstants,
} from "basics";

import { UploadImage } from "components";

import { PALETTE } from "constants/styles";
import { MODAL_IDS } from "constants/modal";

import NativeCoinsIcon from "assets/icons/coins.svg";
import NativeFlashIcon from "assets/icons/flash.svg";

import {
  SocialNetworks,
  TaskTypes,
  createTaskModalComponentsStyled,
} from "./components";

const { BlockWrapper, BlockTitle } = createTaskModalComponentsStyled;
const { RADIO_BUTTON_THEME_NAMES } = radioButtonConstants;

const Wrapper = styled.div`
  height: 100%
  width: 100%;

  padding: 10px 30px;
  display: flex;
  flex-direction: column;
`;

const BlockDescription = styled(BlockTitle)`
  margin-top: 20px;
`;

const ExecutionCostInput = styled(Input)`
  margin-top: 10px;
  width: 140px;
`;

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

const CreateTaskModal = () => {
  const [executionCost, setExecutionCost] = useState(30);
  const [executionsCount, setExecutionsCount] = useState(500);
  const [isPinnedTop, setIsPinnedTop] = useState(true);

  // TODO: move to constants
  // eslint-disable-next-line no-unused-vars
  const MIN_EXECUTION_COST = 20;

  const onChangeExecutionCost = e => {
    const { validity, value } = e.target;

    if (validity.patternMismatch) {
      return;
    }

    setExecutionCost(value);
  };

  const onChangeExecutionsCount = e => {
    const { validity, value } = e.target;

    if (validity.patternMismatch) {
      return;
    }

    setExecutionsCount(value);
  };

  const onChangePinnedTop = e => {
    const { checked } = e.target;
    setIsPinnedTop(checked);
  };

  return (
    <Modal id={MODAL_IDS.createTask} title="Task creation">
      <Wrapper>
        <SocialNetworks />
        <TaskTypes />

        <BlockWrapper>
          <BlockTitle>Task image</BlockTitle>
          <BlockDescription>
            Upload svg task image. You can find images in
            &quot;src/assets/tasks-preview&quot; folder.
          </BlockDescription>
          <UploadImage />
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
          <ExecutionCostInput
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

        <CreateTaskButton disabled={!executionCost || !executionsCount}>
          Create task
        </CreateTaskButton>
      </Wrapper>
    </Modal>
  );
};

export default CreateTaskModal;
