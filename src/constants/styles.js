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
  purple: {
    0: "#313147",
    3: "#0f0f14",
  },
  sand: {
    "-3": "#faf9f7",
  },
};

PALETTE.getText = props =>
  props.theme.isDarkMode ? PALETTE.white : PALETTE.purple[0];
PALETTE.getPageBackground = props =>
  props.theme.isDarkMode ? PALETTE.purple[3] : PALETTE.sand[-3];
