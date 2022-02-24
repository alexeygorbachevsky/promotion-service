import { PALETTE } from "constants/styles";

export const getIconStyles = ({ theme, isSelected }) => {
  let color = PALETTE.getNotSelectedTextColor({theme});

  if (isSelected) {
    color = PALETTE.getText({ theme });
  }

  return {
    color,
  };
};
