import styledNormalize from "styled-normalize";
import { createGlobalStyle } from "styled-components";

import { FONT_FAMILY, PALETTE, toREM } from "constants/styles";

const AppStyles = createGlobalStyle`
  ${styledNormalize};

  body,
  html,
  input,
  textarea,
  button {
    font: 400 ${toREM(16)} ${FONT_FAMILY.graphik};
    color: ${PALETTE.getText};
  }
  
  *, *::after, *::before {
    box-sizing: border-box;
  }
  
  body {
    min-height: 100vh;
    padding: 0;
    margin: 0;
    width: 100vw !important;
    overflow-x: hidden;
    background-color: ${PALETTE.getPageBackground};
  }

  input, textarea, select, button, [role="button"] {
    outline: none;
    appearance: none;
  }

  a {
    outline: none;
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  ::placeholder {
    opacity: 1;
  }
`;

export default AppStyles;
