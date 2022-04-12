import React from "react";
import styled from "styled-components";

import { PALETTE, toREM } from "constants/styles";

import { Input as NativeInput } from "basics/inputs";

const Wrapper = styled.div`
  height: 100%;
`;

const SubTitle = styled.p`
  margin: 20px 0 0;

  color: ${PALETTE.getNotSelectedTextColor};
  font-size: ${toREM(14)};
  line-height: ${toREM(20)};

  &:first-of-type {
    margin-top: 0;
  }
`;

const Title = styled(SubTitle)`
  margin-top: 40px;
`;

const PasswordManagement = styled(Title)`
  margin-top: 55px;
  font-weight: 500;
`;

const PrimaryPasswordTitle = styled(Title)`
  &:not(:first-of-type) {
    margin-top: 10px;
  }
`;

const Input = styled(NativeInput)`
  margin-top: 10px;
`;

const Inputs = ({ control, isDisabled, error }) => (
  <Wrapper>
    <Title>Dribble link</Title>
    <Input
      error={error}
      disabled={isDisabled}
      name="dribble"
      control={control}
    />
    <SubTitle>Behance link</SubTitle>
    <Input
      error={error}
      disabled={isDisabled}
      name="behance"
      control={control}
    />
    <Title>E-mail</Title>
    <Input error={error} disabled={isDisabled} name="email" control={control} />
    <PasswordManagement>Password management</PasswordManagement>
    <PrimaryPasswordTitle>Primary password</PrimaryPasswordTitle>
    <Input
      error={error}
      disabled={isDisabled}
      name="primaryPassword"
      control={control}
      type="password"
    />
    <SubTitle>New password</SubTitle>
    <Input
      error={error}
      disabled={isDisabled}
      name="newPassword"
      control={control}
      type="password"
    />
    <SubTitle>Confirm password</SubTitle>
    <Input
      error={error}
      disabled={isDisabled}
      name="confirmPassword"
      control={control}
      type="password"
    />
  </Wrapper>
);

export default Inputs;
