const getFormattedPassword = password => password.trim().toLowerCase();

export const validatePasswords = ({ newPassword, confirmPassword }) => {
  const formattedNewPassword = getFormattedPassword(newPassword);
  const formattedConfirmPassword = getFormattedPassword(confirmPassword);

  if (formattedNewPassword !== formattedConfirmPassword) {
    return {
      names: ["newPassword", "confirmPassword"],
      message: "New password and confirm password should be equal",
    };
  }

  return null;
};
