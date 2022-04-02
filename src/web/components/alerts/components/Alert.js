import React from "react";
import styled from "styled-components";

import { PALETTE, toREM } from "constants/styles";

import CrossIcon from "assets/icons/cross.svg";

import { BlankButton } from "basics";

import { ALERT_COLORS } from "constants/alerts";

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  position: relative;
  background-color: ${PALETTE.getAlertBackground};
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  color: ${PALETTE.getText};
  width: 100%;
`;

const LinearLoader = styled.div`
  position: absolute;
  top: -4px;
  left: 0;
  width: 0;
  height: 4px;
  background-color: ${({ type }) => ALERT_COLORS[type]};
  ${({ timeout }) =>
    timeout
      ? `
  animation: load linear ${timeout / 1000}s;
  
  @keyframes load {
    0% {
      width: 0;
    }

    100% {
      width: 100%;
    }
  }
  `
      : "width: 100%;"}
`;

const MessageWrapper = styled.div`
  display: flex;
  padding-left: 20px;
  align-items: center;
  flex-grow: 1;
  line-height: ${toREM(20)};
  color: ${PALETTE.getText};

  & > *:first-child {
    flex-shrink: 0;
    margin: 12px;
  }

  word-break: break-word;
`;

const Close = styled(BlankButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 40px;
  height: 40px;
  margin: 8px 8px 8px 24px;
  color: ${PALETTE.getText};
  border-radius: 2px;

  &:hover,
  &:focus {
    background-color: ${PALETTE.getNotSelectedTextColor};
  }
`;

const Alert = React.forwardRef(
  ({ type, onClose, timeout, className, message, id }, ref) => (
    <Wrapper ref={ref} className={className}>
      <LinearLoader timeout={timeout} type={type} />
      <MessageWrapper>{message}</MessageWrapper>
      {onClose && (
        <Close onClick={() => onClose(id)}>
          <CrossIcon />
        </Close>
      )}
    </Wrapper>
  ),
);
export default Alert;
