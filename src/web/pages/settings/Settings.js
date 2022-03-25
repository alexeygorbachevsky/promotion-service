import React from "react";
import styled from "styled-components";

import { GoTop, UploadImage as NativeUploadImage } from "components";

import { useScroll } from "hooks";

import { customScrollbar, PALETTE, toREM } from "constants/styles";

import { SocialMedia } from "./components";

const Wrapper = styled.div`
  height: 100%;
  overflow-y: hidden;
`;

const ScrollWrapper = styled.div`
  padding-top: 40px;
  width: 100%;
  height: 100%;
  ${customScrollbar};
  overflow-y: auto;
`;

const SettingsWrapper = styled.div`
  width: 100%;
  height: 100%;
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

const ContentWrapper = styled.div`
  margin-top: 40px;

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
              <UploadImage
                uploadText="Upload photo"
                removeText="Remove photo"
              />
              <SocialMedia />
            </Column>
            <Column>Column 2</Column>
            <Column>Column 3</Column>
          </ContentWrapper>
        </SettingsWrapper>
      </ScrollWrapper>
      {isScroll && <GoTop containerRef={containerRef} />}
    </Wrapper>
  );
};

export default Settings;
