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
  black: "#000000",
};

PALETTE.getText = props => (props.theme.isDarkMode ? PALETTE.white : "#282B31");

PALETTE.getHeaderBackground = props =>
    props.theme.isDarkMode ? "#1c1c24" : PALETTE.white;

PALETTE.getPageBackground = props =>
  props.theme.isDarkMode ? "#131419" : "#DDE1E8";

PALETTE.getBorderColor = props =>
    props.theme.isDarkMode ? "#262631" : "#cbcfd7";

PALETTE.getNotSelectedTextColor = props =>
  props.theme.isDarkMode ? "#5f5f6e" : "#a6adb1";

PALETTE.getEmptyIconBackground = props =>
    props.theme.isDarkMode ? "#2d2d3a" : "#dde1e8";

export const SIZE = {
  header: 80,
  radius: 4,
  customScrollbarWidth: 8,
};

export const Z_INDEX = {
  navHeader: 1,
};
