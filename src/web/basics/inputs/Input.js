import React from "react";
import styled from "styled-components";

import { PALETTE } from "constants/styles";

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
  
  &:focus {
    border: 2px solid ${PALETTE.blue};
  }

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

const Input = React.forwardRef(({ label, className, ...props }, ref) => {
  const isLabel = Boolean(label);
  return (
    <InputWrapper className={className}>
      {isLabel && <Label>{label}</Label>}
      <BlankInput $isLabel={isLabel} ref={ref} {...props} />
    </InputWrapper>
  );
});
export default Input;
