import React from "react";
import styled from "styled-components";

import { GoTop } from "components/go-top";
import { UploadImage as NativeUploadImage } from "components/upload-image";

import { useScroll } from "hooks";

import { Button } from "basics/buttons";

import AvatarMain250Icon from "assets/icons/avatars/avatar-main250.svg";

import { customScrollbar, PALETTE, toREM } from "constants/styles";

import Loader from "assets/icons/loader.svg";

import { LinearLoader } from "components/linear-loader";
import { Error } from "components/error";

import { SocialMedia, Inputs, PersonalStatistic } from "./components";
import { settingsHooks } from "./duck";

const { useProfile } = settingsHooks;

const Wrapper = styled.div`
  z-index: 0;
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

  ${({ isRelative }) => isRelative && `position: relative`};

  &:nth-child(2) {
    margin: 0 80px;
  }
`;

const SaveButton = styled(Button)`
  margin-top: 40px;
  width: 137px;
`;

const LoaderWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Settings = () => {
  const { isScroll, containerRefCallback, containerRef } = useScroll();
  const {
    isSaving,
    isLoaded,
    error,
    saveProfile,
    control,
    isSubmitDisabled,
    saveProfileError,
    checkedSocialMedia,
    onChangeSocialMedia,
    personalStatistic,
  } = useProfile();

  return (
    <Wrapper>
      {error && <Error>Something went wrong. Try again later.</Error>}
      {!error && (
        <>
          {!isLoaded ? (
            <LoaderWrapper>
              <Loader />
            </LoaderWrapper>
          ) : (
            <>
              {isSaving && <LinearLoader />}
              <ScrollWrapper ref={containerRefCallback}>
                <SettingsWrapper>
                  <TitleWrapper>
                    <Title>Profile</Title>
                  </TitleWrapper>
                  <ContentWrapper>
                    <Column>
                      <SubTitle>Your avatar</SubTitle>
                      <UploadImage
                        name="profileImage"
                        uploadText="Upload photo"
                        removeText="Remove photo"
                        defaultImage={AvatarMain250Icon}
                      />
                      <SocialMedia
                        isDisabled={isSaving}
                        checkedSocialMedia={checkedSocialMedia}
                        onChange={onChangeSocialMedia}
                      />
                    </Column>
                    <Column isRelative>
                      <Inputs
                        control={control}
                        isDisabled={isSaving}
                        error={
                          saveProfileError
                            ? saveProfileError?.message ||
                              "Something went wrong.Try again later."
                            : null
                        }
                      />
                      <SaveButton
                        disabled={isSubmitDisabled}
                        onClick={saveProfile}
                      >
                        Save changes
                      </SaveButton>
                    </Column>
                    <Column>
                      <PersonalStatistic
                        personalStatistic={personalStatistic}
                      />
                    </Column>
                  </ContentWrapper>
                </SettingsWrapper>
              </ScrollWrapper>
              {isScroll && <GoTop containerRef={containerRef} />}
            </>
          )}
        </>
      )}
    </Wrapper>
  );
};

export default Settings;
