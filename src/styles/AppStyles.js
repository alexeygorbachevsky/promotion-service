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

  // TODO: add focus styles for all interactive elements
  input, textarea, select, button, [role="button"] {
    outline: none !important;
    appearance: none;
  }

  /* a {
    outline: none !important;
    text-decoration: none;
  } */

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .grecaptcha-badge {
    visibility: hidden;
  }

  ::placeholder {
    opacity: 1;
  }
`;

export default AppStyles;
