const actionTypes = {
  ADD_ALERT: "alerts.ADD_ALERT",
  REMOVE_ALERT: "alerts.REMOVE_ALERT",
};

const initialState = {
  alerts: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ALERT: {
      const { message, type, timeout, id: addedId } = action.payload;

      return {
        ...state,
        alerts: [...state.alerts, { id: addedId, message, type, timeout }],
      };
    }

    case actionTypes.REMOVE_ALERT: {
      const { id: removeId } = action.payload;

      return {
        ...state,
        alerts: state.alerts.filter(({ id }) => id !== removeId),
      };
    }

    default: {
      return state;
    }
  }
};

export const actions = {
  addAlert({ id, message, type, timeout = 5000 }) {
    return (dispatch, getState) => {
      const {
        alerts: { alerts },
      } = getState();

      const isAlertProcessing = alerts.some(
        ({ id: alertId }) => alertId === id,
      );

      if (isAlertProcessing) {
        return;
      }

      dispatch({
        type: actionTypes.ADD_ALERT,
        payload: { message, type, timeout, id },
      });

      setTimeout(() => {
        dispatch(actions.removeAlert(id));
      }, timeout);
    };
  },
  removeAlert(id) {
    return { type: actionTypes.REMOVE_ALERT, payload: { id } };
  },
};
