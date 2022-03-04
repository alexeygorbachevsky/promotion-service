import { PALETTE } from "constants/styles";

export const RADIO_BUTTON_THEME_NAMES = {
  primary: "primary",
  lightGray: "lightGray",
};

export const RADIO_BUTTON_THEMES = {
  primary(props) {
    return {
      label: {
        backgroundColor: PALETTE.getHeaderBackground(props),
        borderColor: PALETTE.getEmptyItemBackground(props),
        checkedBorderColor: PALETTE.getEmptyItemBackground(props),
      },
    };
  },
  lightGray(props) {
    return {
      label: {
        backgroundColor: PALETTE.getEmptyItemBackground(props),
        borderColor: PALETTE.getNotSelectedTextColor(props),
        checkedBorderColor: "none",
      },
    };
  },
};
