import styled from "styled-components";

const BlankButton = styled.button.attrs(({ type, as }) => ({
    type: type || (as ? "" : "button"),
}))`
  background: none;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
  text-align: inherit;
  padding: 0;
  margin: 0;
`;

export default BlankButton;
