import React, { useState } from "react";
import styled from "styled-components";

import { PALETTE, toREM } from "constants/styles";
import { SOCIAL_MEDIA } from "constants/temp";

import { RadioButton as NativeCheckbox } from "basics";

const Wrapper = styled.div`
  margin-top: 50px;

  width: 290px;
  // height: 250px;
`;

const Title = styled.p`
  margin: 0;

  color: ${PALETTE.getNotSelectedTextColor};
  font-size: ${toREM(14)};
  line-height: ${toREM(20)};
`;

const RadioButtonsWrapper = styled.div`
  padding: 10px 0 40px 0;
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

  &:first-of-type {
    margin: 0;
  }
`;

const SocialMedia = () => {
  const [checkedSocialMedia, setCheckedSocialMedia] = useState([
    SOCIAL_MEDIA[0].name,
  ]);

  const onChangeSocialMedia = e => {
    const { checked, name } = e.target;

    if (checked) {
      setCheckedSocialMedia([...checkedSocialMedia, name]);
    } else {
      const newCheckedSocialMedia = checkedSocialMedia.filter(
        socialName => socialName !== name,
      );
      setCheckedSocialMedia(newCheckedSocialMedia);
    }
  };

  return (
    <Wrapper>
      <Title>Social media</Title>
      <RadioButtonsWrapper>
        {SOCIAL_MEDIA.map(({ name, Icon, iconBackground }) => (
          <Checkbox
            type="checkbox"
            key={name}
            name={name}
            value={name}
            isChecked={checkedSocialMedia.includes(name)}
            onChange={onChangeSocialMedia}
          >
            <IconWrapper $iconBackground={iconBackground}>
              <Icon width={24} height={24} />
            </IconWrapper>
            {name}
          </Checkbox>
        ))}
      </RadioButtonsWrapper>
    </Wrapper>
  );
};

export default SocialMedia;
