import React from "react";
import styled from "styled-components";

import { GoTop } from "components/go-top";
import { UploadImage as NativeUploadImage } from "components/upload-image";

import { useScroll } from "hooks";

import { Button } from "basics/buttons";

import { customScrollbar, PALETTE, toREM } from "constants/styles";

import AvatarMain250Icon from "assets/icons/avatars/avatar-main250.svg";

import { SocialMedia, Inputs, PersonalStatistic } from "./components";

const Wrapper = styled.div`
  height: 100%;
  overflow-y: hidden;
`;

const ScrollWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${customScrollbar};
  overflow-y: auto;
`;

const SettingsWrapper = styled.div`
  padding: 40px 0 80px 0;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
`;

const TitleWrapper = styled.div`
  width: 100%;
  padding: 0 40px;
  height: 50px;
  border-bottom: 2px solid ${PALETTE.getBorderColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: ${toREM(24)};
  font-weight: 500;
  white-space: nowrap;
`;

const SubTitle = styled.p`
  margin: 0 0 10px 0;
  color: ${PALETTE.getNotSelectedTextColor};
  font-size: ${toREM(14)};
  line-height: ${toREM(20)};
`;

const ContentWrapper = styled.div`
  margin-top: 40px;
  // margin-bottom: 40px;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
`;

const UploadImage = styled(NativeUploadImage)`
  margin: 0;
`;

const Column = styled.div`
  height: 100%;

  &:nth-child(2) {
    margin: 0 80px;
  }
`;

const SaveButton = styled(Button)`
  margin-top: 40px;
  width: 137px;
`;

const Settings = () => {
  const { isScroll, containerRefCallback, containerRef } = useScroll();

  return (
    <Wrapper>
      <ScrollWrapper ref={containerRefCallback}>
        <SettingsWrapper>
          <TitleWrapper>
            <Title>Profile</Title>
          </TitleWrapper>
          <ContentWrapper>
            <Column>
              <SubTitle>Your avatar</SubTitle>
              <UploadImage
                uploadText="Upload photo"
                removeText="Remove photo"
                defaultImage={AvatarMain250Icon}
              />
              <SocialMedia />
            </Column>
            <Column>
              <Inputs />
              <SaveButton>Save changes</SaveButton>
            </Column>
            <Column>
              <PersonalStatistic />
            </Column>
          </ContentWrapper>
        </SettingsWrapper>
      </ScrollWrapper>
      {isScroll && <GoTop containerRef={containerRef} />}
    </Wrapper>
  );
};

export default Settings;
