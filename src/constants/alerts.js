import { PALETTE } from "constants/styles";

export const ALERT_TYPES = {
  success: "success",
  error: "error",
};

export const ALERT_COLORS = {
  [ALERT_TYPES.success]: PALETTE.green,
  [ALERT_TYPES.error]: PALETTE.red,
};

export const ALERT_IDS = {
  addTaskSuccess: "addTaskSuccess",
  addTaskError: "addTaskError",
};
