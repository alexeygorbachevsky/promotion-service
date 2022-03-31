import React from "react";

import { RadioButton } from "basics";

import { MODAL_IDS } from "constants/modal";

import { createTaskModalComponentsStyled } from "../duck";
import { socialNetworksConstants } from "./duck";

const { BlockWrapper, IconWrapper, BlockTitle, RadioButtonsWrapper } =
  createTaskModalComponentsStyled;
const { SOCIAL_NETWORKS } = socialNetworksConstants;

const SocialNetworks = ({ value, onChange }) => {
  const onChangeSocialNetwork = e => {
    onChange(e.target.value);
  };

  return (
    <BlockWrapper>
      <BlockTitle>Select a social network</BlockTitle>
      <RadioButtonsWrapper>
        {SOCIAL_NETWORKS.map(({ text, Icon, iconBackground }) => (
          <RadioButton
            key={text}
            value={text}
            name={`${MODAL_IDS.createTask}_social-network`}
            isChecked={text === value}
            onChange={onChangeSocialNetwork}
          >
            <IconWrapper $iconBackground={iconBackground}>
              <Icon />
            </IconWrapper>
            {text}
          </RadioButton>
        ))}
      </RadioButtonsWrapper>
    </BlockWrapper>
  );
};

export default SocialNetworks;
