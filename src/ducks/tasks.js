import { getTasks, addTask } from "mocked-backend";

export const actionTypes = {
  CHANGE_VALUE: "auth.CHANGE_VALUE",

  LOAD_TASKS_SUCCESS: "auth.LOAD_TASKS_SUCCESS",
  LOAD_TASKS_FAILURE: "auth.LOAD_TASKS_FAILURE",

  ADD_TASK_SUCCESS: "auth.ADD_TASK_SUCCESS",
  ADD_TASK_FAILURE: "auth.ADD_TASK_FAILURE",

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

    case actionTypes.LOAD_TASKS_SUCCESS: {
      const { tasks, isLoadedAll, isLoadAll } = action.payload;

      return {
        ...state,
        lastTaskPagingToken:
          tasks.length && !isLoadAll ? tasks[tasks.length - 1].id : null,
        tasks: state.tasks.concat(tasks),
        tasksError: null,
        isLoadingTasks: false,
        isLoadedAllTasks: isLoadedAll,
      };
    }

    case actionTypes.LOAD_TASKS_FAILURE: {
      const { error } = action.payload;
      return {
        ...state,
        tasksError: error,
        isLoadingTasks: false,
      };
    }

    case actionTypes.ADD_TASK_SUCCESS: {
      const { tasks } = action.payload;
      return {
        ...state,
        tasksError: null,
        tasks,
        isLoadingTasks: false,
      };
    }

    case actionTypes.ADD_TASK_FAILURE: {
      const { error } = action.payload;
      return {
        ...state,
        tasksError: error,
        isLoadingTasks: false,
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

      const {
        tasks: { lastTaskPagingToken: pagingToken },
      } = getState();

      let successPayload;
      let failurePayload;

      try {
        const { tasks, isLoadedAll } = await getTasks({
          isLoadAll,
          limit,
          pagingToken,
          search,
        });
        // isLoadedAllTasks = processedTasks.length < limit || isLoadAll;

        successPayload = {
          tasks,
          isLoadedAll,
          isLoadAll,
        };
      } catch (error) {
        failurePayload = { error };
      }

      if (failurePayload) {
        dispatch({
          type: actionTypes.LOAD_TASKS_FAILURE,
          payload: failurePayload,
        });

        return;
      }

      dispatch({
        type: actionTypes.LOAD_TASKS_SUCCESS,
        payload: successPayload,
      });
    };
  },

  addTask({ task } = {}) {
    return async (dispatch, getState) => {
      dispatch(actions.changeValue("isLoadingTasks", true));

      const {
        auth: { userId },
      } = getState();

      let successPayload;
      let failurePayload;

      try {
        const { tasks } = await addTask({
          task,
          userId,
        });
        successPayload = { tasks };
      } catch (error) {
        failurePayload = { error };
      }

      if (failurePayload) {
        dispatch({
          type: actionTypes.LOAD_TASKS_FAILURE,
          payload: failurePayload,
        });

        return;
      }

      dispatch({
        type: actionTypes.LOAD_TASKS_SUCCESS,
        payload: successPayload,
      });
    };
  },

  clearTasks: () => ({
    type: actionTypes.CLEAR_TASKS,
  }),
};
