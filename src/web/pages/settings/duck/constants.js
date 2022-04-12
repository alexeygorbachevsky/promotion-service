import { string, object } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const PROFILE_FORM_ERRORS = {
  invalidEmail: "Email is not valid",
};

const MIN_PASSWORD_LENGTH = 6;

const PROFILE_FORM_SCHEMA = object({
  dribble: string()
    .url("Dribble field should be the url")
    .required("Dribble is a required field"),
  behance: string()
    .url("Behance field should be the url")
    .required("Behance is a required field"),
  email: string()
    .email(PROFILE_FORM_ERRORS.invalidEmail)
    .required("Email is a required field"),
  primaryPassword: string()
    .min(MIN_PASSWORD_LENGTH, "Password length shouldn't be less than 6")
    .required("Primary password is a required field"),
  newPassword: string()
    .min(MIN_PASSWORD_LENGTH, "Password length shouldn't be less than 6")
    .required("New password is a required field"),
  confirmPassword: string()
    .min(MIN_PASSWORD_LENGTH, "Password length shouldn't be less than 6")
    .required("Confirm password is a required field"),
}).required();

export const PROFILE_FORM_OPTIONS = {
  resolver: yupResolver(PROFILE_FORM_SCHEMA),
  defaultValues: {
    dribble: "",
    behance: "",
    email: "",
    primaryPassword: "",
    newPassword: "",
    confirmPassword: "",
  },
  mode: "onChange",
};
