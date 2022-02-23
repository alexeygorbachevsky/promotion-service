import Big from "big.js";

export const toREM = px =>
  `${Big(`${px}`.replace("px", "")).div(16).round(4).toString()}rem`;

const FALLBACK_FONTS =
  ", -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

export const FONT_FAMILY = {
  graphik: `Graphik${FALLBACK_FONTS}`,
  monospace: "'Roboto Mono', Monaco, Consolas, monospace, sans-serif",
};

export const PALETTE = {
  white: "#ffffff",
  black: {
    0: "#000000",
    1: "#282B31",
  },

  purple: {
    0: "#313147",
    3: "#0f0f14",
    "-5": "#5f5f6e",
  },
  sand: {
    "-3": "#faf9f7",
    "-5": "#a6adb1",
  },
};

PALETTE.getText = props =>
  props.theme.isDarkMode ? PALETTE.white : PALETTE.black[1];
PALETTE.getPageBackground = props =>
  props.theme.isDarkMode ? PALETTE.purple[3] : PALETTE.sand[-3];

export const INPUT_SIZE = {
  normal: "normal",
  medium: "medium",
  small: "small",
};

export const SIZE = {
  header: 80,
  radius: 4,
  customScrollbarWidth: 8,

  buttons: {
    [INPUT_SIZE.normal]: {
      height: 56,
      paddingSides: 24,
      paddingTop: 12,
    },
    [INPUT_SIZE.medium]: {
      height: 40,
      paddingSides: 36,
      paddingTop: 0,
    },
    [INPUT_SIZE.small]: {
      height: 24,
      paddingSides: 12,
      paddingTop: 0,
    },
  },
};

// list these highest first!
export const Z_INDEX = {
  navHeader: 1,
};
