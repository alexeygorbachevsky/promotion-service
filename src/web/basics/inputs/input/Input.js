import React from "react";
import styled, { css } from "styled-components";

import { PALETTE, toREM } from "constants/styles";

import NativeBlankInput from "../BlankInput";

import { inputHooks } from "./duck";

const { useFormConnector } = inputHooks;

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

  &:disabled {
    cursor: not-allowed;
    border: 2px solid ${PALETTE.getEmptyItemBackground};
    opacity: 0.5;
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
  ({ label, className, error, isRequired, ...props }, ref) => {
    const { value, fieldState, ...processedProps } = useFormConnector(props);

    const errorFromHookForm = fieldState?.error?.message;

    const requiredError =
      isRequired && !value ? "Input field is required" : null;
    const inputError = error || errorFromHookForm || requiredError;

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
          {...processedProps}
        />
        {isError && <Error>{inputError}</Error>}
      </InputWrapper>
    );
  },
);
export default Input;
