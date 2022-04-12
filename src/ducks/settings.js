import { getProfile, saveProfile } from "mocked-backend";

export const actionTypes = {
  CHANGE_VALUE: "settings.CHANGE_VALUE",

  LOAD_PROFILE: "settings.LOAD_PROFILE",
  LOAD_PROFILE_SUCCESS: "settings.LOAD_PROFILE_SUCCESS",
  LOAD_PROFILE_ERROR: "settings.LOAD_PROFILE_ERROR",

  SAVE_PROFILE: "settings.SAVE_PROFILE",
  SAVE_PROFILE_SUCCESS: "settings.SAVE_PROFILE_SUCCESS",
  SAVE_PROFILE_ERROR: "settings.SAVE_PROFILE_ERROR",
};

export const initialState = {
  profile: {},
  isSavingProfile: false,
  isLoadedProfile: false,
  profileError: null,
  saveProfileError: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_VALUE: {
      const { name, value, values } = action.payload;

      if (values) {
        let newValues = {};
        values.forEach(pair => {
          newValues = {
            ...newValues,
            [pair.name]: pair.value,
          };
        });
        return {
          ...state,
          ...newValues,
        };
      }

      return {
        ...state,
        [name]: value,
      };
    }

    case actionTypes.LOAD_PROFILE: {
      return {
        ...state,
        isLoadedProfile: false,
        profileError: null,
      };
    }

    case actionTypes.LOAD_PROFILE_SUCCESS: {
      return {
        ...state,
        isLoadedProfile: true,
        profileError: null,
        profile: action.payload.profile,
      };
    }

    case actionTypes.LOAD_PROFILE_ERROR: {
      return {
        ...state,
        isLoadedProfile: true,
        profileError: action.payload.error,
      };
    }

    case actionTypes.SAVE_PROFILE: {
      return {
        ...state,
        isSavingProfile: true,
        saveProfileError: null,
      };
    }

    case actionTypes.SAVE_PROFILE_SUCCESS: {
      return {
        ...state,
        isSavingProfile: false,
        saveProfileError: null,
        profile: action.payload.profile,
      };
    }

    case actionTypes.SAVE_PROFILE_ERROR: {
      return {
        ...state,
        isSavingProfile: false,
        saveProfileError: action.payload.error,
      };
    }

    default: {
      return state;
    }
  }
};

export const actions = {
  changeValue(name, value) {
    let payload = { name, value };
    if (Array.isArray(name)) {
      payload = { values: name };
    }
    return { type: actionTypes.CHANGE_VALUE, payload };
  },

  loadProfile() {
    return async dispatch => {
      dispatch({
        type: actionTypes.LOAD_PROFILE,
      });

      let successPayload;
      let failurePayload;

      try {
        const profile = await getProfile();

        successPayload = {
          profile,
        };
      } catch (error) {
        failurePayload = { error };
      }

      if (failurePayload) {
        dispatch({
          type: actionTypes.LOAD_PROFILE_ERROR,
          payload: failurePayload,
        });

        return;
      }

      dispatch({
        type: actionTypes.LOAD_PROFILE_SUCCESS,
        payload: successPayload,
      });
    };
  },

  saveProfile(profileValues) {
    return async dispatch => {
      dispatch({
        type: actionTypes.SAVE_PROFILE,
      });

      let successPayload;
      let failurePayload;

      try {
        const profile = await saveProfile(profileValues);

        successPayload = {
          profile,
        };
      } catch (error) {
        failurePayload = { error };
      }

      if (failurePayload) {
        dispatch({
          type: actionTypes.SAVE_PROFILE_ERROR,
          payload: failurePayload,
        });

        return;
      }

      dispatch({
        type: actionTypes.SAVE_PROFILE_SUCCESS,
        payload: successPayload,
      });
    };
  },
};
