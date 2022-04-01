import { useDispatch, useSelector } from "react-redux";

import { actions as tasksActions } from "ducks/tasks";

export const useConnect = () => {
  const dispatch = useDispatch();
  const {
    tasks,
    tasksError: error,
    isLoadingTasks,
    isLoadedAllTasks,
  } = useSelector(state => state.tasks);

  const loadTasks = params => {
    dispatch(tasksActions.loadTasks(params));
  };

  const clearTasks = () => {
    dispatch(tasksActions.clearTasks());
  };

  return {
    tasks,
    error,
    isLoadingTasks,
    isLoadedAllTasks,
    loadTasks,
    clearTasks,
  };
};
