import { getTasks } from "mocked-backend";

export const actionTypes = {
  CHANGE_VALUE: "auth.CHANGE_VALUE",
  CLEAR_TASKS: "auth.CLEAR_TASKS",
};

export const initialState = {
  tasks: [],
  lastTaskPagingToken: null,

  isLoadingTasks: false,
  isLoadedAllTasks: false,
  tasksError: null,
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

    case actionTypes.CLEAR_TASKS: {
      return {
        ...state,
        tasks: [],
        tasksError: null,
        isLoadedAllTasks: false,
        lastTaskPagingToken: null,
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

  // Don't send limit param for loading all tasks
  loadTasks({ limit = 12, search, isLoadAll = false } = {}) {
    return async (dispatch, getState) => {
      dispatch(actions.changeValue("isLoadingTasks", true));

      const { lastTaskPagingToken: pagingToken, tasks: prevTasks } =
        getState().tasks;

      let processedTasks;
      let isLoadedAllTasks;
      let error;

      try {
        processedTasks = await getTasks({
          isLoadAll,
          limit,
          pagingToken,
          search,
        });
        isLoadedAllTasks = processedTasks.length < limit || isLoadAll;
      } catch (err) {
        error = err;
      }

      if (error) {
        dispatch(
          actions.changeValue([
            { name: "isLoadingTasks", value: false },
            {
              name: "tasksError",
              value: error,
            },
          ]),
        );
        return;
      }

      dispatch(
        actions.changeValue([
          { name: "isLoadingTasks", value: false },
          { name: "isLoadedAllTasks", value: isLoadedAllTasks },
          {
            name: "lastTaskPagingToken",
            value:
              processedTasks.length && !isLoadAll
                ? processedTasks[processedTasks.length - 1].id
                : null,
          },
          {
            name: "tasks",
            value: prevTasks.concat(processedTasks),
          },
        ]),
      );
    };
  },

  clearTasks: () => ({
    type: actionTypes.CLEAR_TASKS,
  }),
};
