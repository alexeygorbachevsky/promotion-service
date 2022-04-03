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

  -webkit-text-security: asterisk;
`;

const Inputs = () => (
  <Wrapper>
    <Title>Dribble link</Title>
    <Input value="https://dribbble.com/alexeygorbachevskiy" />
    <SubTitle>Behance link</SubTitle>
    <Input value="https://www.behance.net/alexeygorbachevskiy" />
    <Title>E-mail</Title>
    <Input value="alexeygorbachevskiyy@gmail.com" />
    <PasswordManagement>Password management</PasswordManagement>
    <PrimaryPasswordTitle>Primary password</PrimaryPasswordTitle>
    <Input type="password" value="alexeygorbachevskiyy@gmail.com" />
    <SubTitle>New password</SubTitle>
    <Input type="password" value="alexeygorbachevskiyy@gmail.com" />
    <SubTitle>Confirm password</SubTitle>
    <Input type="password" value="alexeygorbachevskiyy@gmail.com" />
  </Wrapper>
);

export default Inputs;
