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
  blue: "#4447E2",
};

PALETTE.getText = ({ theme }) => (theme.isDarkMode ? PALETTE.white : "#282B31");

PALETTE.getHeaderBackground = ({ theme }) =>
  theme.isDarkMode ? "#1c1c24" : PALETTE.white;

PALETTE.getPageBackground = ({ theme }) =>
  theme.isDarkMode ? "#131419" : "#DDE1E8";

PALETTE.getBorderColor = ({ theme }) =>
  theme.isDarkMode ? "#262631" : "#cbcfd7";

PALETTE.getNotSelectedTextColor = ({ theme }) =>
  theme.isDarkMode ? "#5f5f6e" : "#a6adb1";

PALETTE.getEmptyItemBackground = ({ theme }) =>
  theme.isDarkMode ? "#2d2d3a" : "#dde1e8";

PALETTE.getEmptyImageBackground = ({ theme }) =>
  theme.isDarkMode ? "#343444" : "#CBCFD7";

export const SIZE = {
  header: 80,
  radius: 4,
  customScrollbarWidth: 8,
};

export const Z_INDEX = {
  navHeader: 1,
};

export const customScrollbar = () => `
      &::-webkit-scrollbar {
        width: ${SIZE.customScrollbarWidth}px;
        height: ${SIZE.customScrollbarWidth}px;
      }
      
      &::-webkit-scrollbar-corner { opacity: 0;}

      &::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: #aaa;
      }
      
      &::-webkit-scrollbar-thumb:hover {
         background-color: #777;
      }

      // &::-webkit-scrollbar-track:hover {
      //   background-color: ${PALETTE.white};
      // }
`;
