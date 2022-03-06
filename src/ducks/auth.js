export const actionTypes = {
  CHANGE_VALUE: "auth.CHANGE_VALUE",
  SET_IS_DARK_MODE: "auth.SET_IS_DARK_MODE",
};

export const initialState = {
  isDarkMode: localStorage.getItem("isDarkMode") !== "false",
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

    case actionTypes.SET_IS_DARK_MODE: {
      return {
        ...state,
        isDarkMode: action.payload.isDarkMode,
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

  setDarkMode(isDarkMode) {
    localStorage.setItem("isDarkMode", isDarkMode ? "true" : "false");

    return { type: actionTypes.SET_IS_DARK_MODE, payload: { isDarkMode } };
  },
};
