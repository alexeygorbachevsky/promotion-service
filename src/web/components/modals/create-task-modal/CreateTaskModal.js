import React, { useState } from "react";
import styled from "styled-components";

import { Modal, RadioButton } from "basics";

import { MODAL_IDS } from "constants/modal";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

const CreateTaskModal = () => {
  // TODO: move to constants
  const socialNetworks = [
    { id: "One", data: <>One</> },
    { id: "Two", data: <>Two</> },
  ];

  const [checkedSocialId, setCheckedSocialId] = useState(socialNetworks[0].id);

  const onChangeCheckbox = e => {
    const { value } = e.target;
    setCheckedSocialId(value);
  };

  return (
    <Modal id={MODAL_IDS.createTask} title="Task creation">
      <Wrapper>
        {socialNetworks.map(({ id, data }) => (
          <RadioButton
            key={id}
            value={id}
            name={`${MODAL_IDS.createTask}_social-network`}
            isChecked={id === checkedSocialId}
            onChange={onChangeCheckbox}
          >
            {data}
          </RadioButton>
        ))}
      </Wrapper>
    </Modal>
  );
};

export default CreateTaskModal;
