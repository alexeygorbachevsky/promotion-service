import { useDispatch, useSelector } from "react-redux";

import { actions as tasksActions } from "ducks/tasks";

export const useConnect = () => {
  const dispatch = useDispatch();
  const {
    addTaskError: error,
    isLoadingTasks,
    isAddingTask,
    isTaskCreationDone,
  } = useSelector(state => state.tasks);
  const { userId, name } = useSelector(state => state.auth);

  const addTask = task => {
    dispatch(tasksActions.addTask({ task: { ...task, userId, name } }));
  };

  const clearCreationStatuses = () => {
    dispatch(
      tasksActions.changeValue([
        { name: "addTaskError", value: null },
        { name: "isTaskCreationDone", value: false },
      ]),
    );
  };

  const onCloseModal = () => {
    clearCreationStatuses();
  };

  const onOpenModal = () => {
    clearCreationStatuses();
  };

  return {
    addTask,
    onOpenModal,
    onCloseModal,
    error,
    isLoadingTasks: isLoadingTasks || isAddingTask,
    isTaskCreationDone,
  };
};
