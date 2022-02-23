import { PALETTE } from "constants/styles";

export const getIconStyles = ({ theme, isSelected }) => {
  let color = theme.isDarkMode ? PALETTE.purple[-5] : PALETTE.sand[-5];

  if (isSelected) {
    color = theme.isDarkMode ? PALETTE.white : PALETTE.black[1];
  }

  return {
    color,
  };
};
