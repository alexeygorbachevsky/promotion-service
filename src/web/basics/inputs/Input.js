import React from "react";
import styled, { css } from "styled-components";

import { PALETTE, toREM } from "constants/styles";

import NativeBlankInput from "./BlankInput";

const InputWrapper = styled.label`
  width: 430px;
  height: 50px;
  position: relative;
  margin: 0;
  display: flex;
  align-items: center;
`;

const BlankInput = styled(NativeBlankInput)`
  width: 100%;
  height: 100%;
  padding: ${({ $isLabel }) => ($isLabel ? "0 15px 0 35px" : "0 20px")};
  border-radius: 15px;
  background-color: ${PALETTE.getEmptyItemBackground};
  border: 2px solid transparent;

  ${({ $isError }) =>
    $isError
      ? css`
          border: 2px solid ${PALETTE.red};
        `
      : css`
          &:focus {
            border: 2px solid ${PALETTE.blue};
          }
        `};

  &::placeholder {
    color: ${PALETTE.getNotSelectedTextColor};
  }
`;

const Label = styled.span`
  position: absolute;
  left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Error = styled.div`
  min-width: 500px;
  position: absolute;
  left: 5px;
  bottom: -20px;

  color: ${PALETTE.red};
  font-size: ${toREM(14)};
  line-height: ${toREM(20)};
`;

const Input = React.forwardRef(
  ({ label, className, error, value, isRequired = true, ...props }, ref) => {
    const requiredError =
      isRequired && !value ? "Input field is required" : null;

    const inputError = error || requiredError;

    const isLabel = Boolean(label);
    const isError = Boolean(inputError);

    return (
      <InputWrapper className={className}>
        {isLabel && <Label>{label}</Label>}
        <BlankInput
          $isError={isError}
          $isLabel={isLabel}
          ref={ref}
          value={value}
          {...props}
        />
        {isError && <Error>{inputError}</Error>}
      </InputWrapper>
    );
  },
);
export default Input;
