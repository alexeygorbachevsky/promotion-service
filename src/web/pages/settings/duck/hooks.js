import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { actions as settingsActions } from "ducks/settings";

import { PROFILE_FORM_OPTIONS } from "./constants";
import { validatePasswords } from "./helpers";

export const useProfile = () => {
  const dispatch = useDispatch();
  const {
    profileError,
    isLoadedProfile,
    profile,
    isSavingProfile,
    saveProfileError,
  } = useSelector(state => state.settings);

  const [checkedSocialMedia, setCheckedSocialMedia] = useState({});
  const [isSocialMediaDirty, setsSocialMediaDirty] = useState(false);

  const onChangeSocialMedia = value => {
    if (!isSocialMediaDirty) {
      setsSocialMediaDirty(true);
    }
    setCheckedSocialMedia(value);
  };

  const loadProfile = () => dispatch(settingsActions.loadProfile());

  useEffect(() => {
    loadProfile();
  }, []);

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors, isValid, isDirty },
    setError,
    watch,
  } = useForm(PROFILE_FORM_OPTIONS);

  // set only first time after data will be gotten from mocked server
  useEffect(() => {
    if (isLoadedProfile && !isDirty && !isSocialMediaDirty) {
      const {
        socialMedia,
        socialLinks: { dribble, behance },
        email,
        primaryPassword,
        newPassword,
        confirmPassword,
      } = profile;

      setValue("dribble", dribble);
      setValue("behance", behance);
      setValue("email", email);
      setValue("primaryPassword", primaryPassword);
      setValue("newPassword", newPassword);
      setValue("confirmPassword", confirmPassword);

      setCheckedSocialMedia(socialMedia);
    }
  }, [isLoadedProfile, isDirty, isSocialMediaDirty]);

  useEffect(() => {
    const subscription = watch(() => {
      if (!saveProfileError) {
        return;
      }
      dispatch(settingsActions.changeValue("saveProfileError", null));
    });
    return () => subscription.unsubscribe();
  }, [watch, saveProfileError]);

  const saveProfile = values => {
    const error = validatePasswords(values);

    if (error) {
      const { names, ...rest } = error;
      names.forEach(name => {
        setError(name, { ...rest, type: "custom" });
      });

      return;
    }

    dispatch(
      settingsActions.saveProfile({
        ...values,
        socialMedia: checkedSocialMedia,
      }),
    );
  };

  return {
    isSaving: isSavingProfile,
    isLoaded: isLoadedProfile,
    error: profileError,
    saveProfile: handleSubmit(saveProfile),
    emailError: errors.email,
    control,
    isSubmitDisabled: (!isValid && !isSocialMediaDirty) || isSavingProfile,
    saveProfileError,
    personalStatistic: profile.personalStatistic,
    checkedSocialMedia,
    onChangeSocialMedia,
  };
};
