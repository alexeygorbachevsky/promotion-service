import { wait } from "../ducks";
import {PERSONAL_STATISTIC} from "./duck";

let PROFILE = {
  socialMedia: {
    facebook: true,
    twitter: false,
    vkontakte: false,
  },
  socialLinks: {
    dribble: "https://dribbble.com/alexeygorbachevskiy",
    behance: "https://www.behance.net/alexeygorbachevskiy",
  },
  email: "alexeygorbachevskiyy@gmail.com",
  personalStatistic: PERSONAL_STATISTIC,
  primaryPassword: "password",
  newPassword: "password",
  confirmPassword: "password",
};

export const getProfile = async () => {
  await wait(2000);

  return PROFILE;
};

const checkIsValidCurrentPassword = primaryPassword =>
  PROFILE.primaryPassword === primaryPassword;

export const saveProfile = async profile => {
  await wait(2000);

  const {
    behance,
    dribble,
    email,
    newPassword,
    primaryPassword,
    confirmPassword,
    socialMedia,
  } = profile;

  const isValidPassword = checkIsValidCurrentPassword(primaryPassword);

  if (!isValidPassword) {
    throw new Error("Primary password and new password don't match");
  }

  if (profile) {
    PROFILE = {
      ...PROFILE,
      email,
      newPassword,
      primaryPassword: newPassword,
      confirmPassword,
      socialLinks: {
        dribble,
        behance,
      },
      socialMedia,
    };
  }

  return PROFILE;
};
