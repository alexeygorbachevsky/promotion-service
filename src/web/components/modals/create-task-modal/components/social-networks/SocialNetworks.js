import React, { useState } from "react";

import { RadioButton } from "basics";

import { MODAL_IDS } from "constants/modal";
import { PALETTE } from "constants/styles";

import BehanceIcon from "assets/icons/social-networks/behance.svg";
import DribbleIcon from "assets/icons/social-networks/dribbble.svg";

import { createTaskModalComponentsStyled } from "../duck";

const { BlockWrapper, IconWrapper, BlockTitle, RadioButtonsWrapper } =
  createTaskModalComponentsStyled;

const SocialNetworks = () => {
  // TODO: move to constants
  const socialNetworks = [
    { text: "Dribble", Icon: DribbleIcon, iconBackground: PALETTE.pink },
    { text: "Behance", Icon: BehanceIcon, iconBackground: PALETTE.blue },
  ];

  const [checkedSocialText, setCheckedSocialText] = useState(
    socialNetworks[0].text,
  );

  const onChangeSocialNetwork = e => {
    const { value } = e.target;
    setCheckedSocialText(value);
  };

  return (
    <BlockWrapper>
      <BlockTitle>Select a social network</BlockTitle>
      <RadioButtonsWrapper>
        {socialNetworks.map(({ text, Icon, iconBackground }) => (
          <RadioButton
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
          </RadioButton>
        ))}
      </RadioButtonsWrapper>
    </BlockWrapper>
  );
};

export default SocialNetworks;
