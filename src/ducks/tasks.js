import { getTasks, addTask } from "mocked-backend";

import { actions as alertActions } from "ducks/alerts";

import { ALERT_IDS, ALERT_TYPES } from "constants/alerts";

export const actionTypes = {
  CHANGE_VALUE: "tasks.CHANGE_VALUE",

  LOAD_TASKS_SUCCESS: "tasks.LOAD_TASKS_SUCCESS",
  LOAD_TASKS_FAILURE: "tasks.LOAD_TASKS_FAILURE",

  ADD_TASK_SUCCESS: "tasks.ADD_TASK_SUCCESS",
  ADD_TASK_FAILURE: "tasks.ADD_TASK_FAILURE",

  CLEAR_TASKS: "tasks.CLEAR_TASKS",
};

export const initialState = {
  tasks: [],
  lastTaskPagingToken: null,
  isTaskCreationDone: false,

  isLoadingTasks: false,
  isLoadedAllTasks: false,
  tasksError: null,
  addTaskError: null,
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
        addTaskError: null,
        isTaskCreationDone: true,
        tasks,
        isLoadingTasks: false,
      };
    }

    case actionTypes.ADD_TASK_FAILURE: {
      const { error } = action.payload;

      return {
        ...state,
        isTaskCreationDone: true,
        addTaskError: error,
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
    return async dispatch => {
      dispatch(actions.changeValue("isLoadingTasks", true));

      let successPayload;
      let failurePayload;

      try {
        const { tasks } = await addTask({
          task,
        });
        successPayload = { tasks };
      } catch (error) {
        failurePayload = { error };
      }

      if (failurePayload) {
        dispatch({
          type: actionTypes.ADD_TASK_FAILURE,
          payload: failurePayload,
        });

        dispatch(
          alertActions.addAlert({
            message: "Task is not added. Try again.",
            type: ALERT_TYPES.error,
            id: ALERT_IDS.addTaskError,
          }),
        );

        return;
      }

      dispatch({
        type: actionTypes.ADD_TASK_SUCCESS,
        payload: successPayload,
      });

      dispatch(
        alertActions.addAlert({
          message: "Task is successfully added",
          type: ALERT_TYPES.success,
          id: ALERT_IDS.addTaskSuccess,
        }),
      );
    };
  },

  clearTasks: () => ({
    type: actionTypes.CLEAR_TASKS,
  }),
};
