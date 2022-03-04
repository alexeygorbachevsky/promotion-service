import styled from "styled-components";
import { PALETTE } from "constants/styles";

export const BlockWrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;

  &:not(:first-of-type) {
    margin-top: 40px;
  }
`;

export const IconWrapper = styled.div`
  margin-right: 10px;
  width: 40px;
  height: 40px;

  border-radius: 12px;
  background-color: ${({ $iconBackground }) => $iconBackground};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BlockTitle = styled.p`
  align-self: flex-start;
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  color: ${PALETTE.getNotSelectedTextColor};
`;

export const RadioButtonsWrapper = styled.div`
  margin-top: 10px;
  height: 100%;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
`;
