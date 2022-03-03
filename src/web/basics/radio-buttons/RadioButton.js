import React from "react";
import styled, { css } from "styled-components";
import { PALETTE } from "constants/styles";
import { KEY_CODES } from "constants/keyCodes";

const Checkmark = styled.span`
  position: absolute;
  right: 10px;
  height: 20px;
  width: 20px;

  box-sizing: unset;
  border-radius: 50%;
  border: 2px solid ${PALETTE.getEmptyItemBackground};

  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`;

const Input = styled.input`
  position: absolute;
  right: 10px;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const Label = styled.label`
  position: relative;

  width: 240px;
  height: 55px;

  display: flex;
  align-items: center;

  margin-left: 20px;
  padding-left: 10px;

  &:first-of-type {
    margin-left: 0;
  }

  outline: none;

  cursor: pointer;
  user-select: none;
  border-radius: 15px;
  background-color: ${PALETTE.getHeaderBackground};

  ${({ $isChecked }) =>
    $isChecked
      ? css`
          border: 2px solid ${PALETTE.getBorderColor};
        `
      : "border: 2px solid transparent"};

  &:hover {
    border: 2px solid ${PALETTE.getBorderColor};
  }

  &:focus {
    border: 2px solid ${PALETTE.blue};
  }

  ${Input}:checked ~ ${Checkmark} {
    background-color: ${PALETTE.green};
  }

  ${Input}:checked ~ ${Checkmark}:after {
    display: block;
    left: 8px;
    top: 4px;
    width: 5px;
    height: 10px;
    border-radius: 4px;
    border: solid ${PALETTE.white};
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;

const RadioButton = ({
  isChecked,
  children,
  type,
  name,
  className,
  onChange,
  value,
  ...props
}) => {
  const onKeyDown = e => {
    if (e.keyCode === KEY_CODES.enter) {
      onChange({ ...e, target: { ...e.target, value } });
    }
  };

  return (
    <Label
      className={className}
      $isChecked={isChecked}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      {children}
      <Input
        value={value}
        type={type || "radio"}
        name={name || "radio"}
        checked={isChecked}
        onChange={onChange}
        {...props}
      />
      <Checkmark />
    </Label>
  );
};

export default RadioButton;
