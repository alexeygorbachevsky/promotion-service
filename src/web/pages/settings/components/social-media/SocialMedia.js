import React from "react";
import styled, { css } from "styled-components";

import { PALETTE, toREM } from "constants/styles";

import { RadioButton as NativeCheckbox } from "basics/radio-buttons";

import { socialMediaConstants } from "./duck";

const { SOCIAL_MEDIA } = socialMediaConstants;

const Wrapper = styled.div`
  margin-top: 35px;
  width: 290px;
`;

const Title = styled.p`
  margin: 0;
  color: ${PALETTE.getNotSelectedTextColor};
  font-size: ${toREM(14)};
  line-height: ${toREM(20)};
`;

const RadioButtonsWrapper = styled.div`
  margin-top: 10px;
  height: 100%;
  width: 100%;
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

const Checkbox = styled(NativeCheckbox)`
  width: 100%;
  margin: 20px 0 0;

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      border: 2px solid ${PALETTE.getEmptyItemBackground};
      opacity: 0.5;
    `};

  &:first-of-type {
    margin: 0;
  }
`;

const SocialMedia = ({ checkedSocialMedia, onChange, isDisabled }) => {
  const onChangeSocialMedia = e => {
    const { checked, value } = e.target;
    onChange({ ...checkedSocialMedia, [value]: checked });
  };

  return (
    <Wrapper>
      <Title>Social media</Title>
      <RadioButtonsWrapper>
        {SOCIAL_MEDIA.map(({ name, label, Icon, iconBackground }) => (
          <Checkbox
            type="checkbox"
            key={name}
            name="socialMedia"
            value={name}
            isChecked={checkedSocialMedia[name]}
            onChange={onChangeSocialMedia}
            disabled={isDisabled}
          >
            <IconWrapper $iconBackground={iconBackground}>
              <Icon width={24} height={24} />
            </IconWrapper>
            {label}
          </Checkbox>
        ))}
      </RadioButtonsWrapper>
    </Wrapper>
  );
};

export default SocialMedia;
