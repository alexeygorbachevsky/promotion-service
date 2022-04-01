import React, { useEffect, useReducer } from "react";

import { Modal } from "basics";

import { MODAL_IDS } from "constants/modal";

import {
  createTaskModalReducer as reducer,
  createTaskModalState,
  createTaskModalHooks,
} from "./duck";

import { getModalData } from "./get-modal-data";

const { initialState } = createTaskModalState;
const { useConnect } = createTaskModalHooks;

const CreateTaskModal = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    addTask,
    onCloseModal,
    onOpenModal,
    error,
    isLoadingTasks,
    isTaskCreationDone,
  } = useConnect();

  const onCreateTask = () => {
    addTask(state);
  };

  useEffect(() => {
    onOpenModal();
    return () => onCloseModal();
  }, []);

  // TODO: move to constants
  // eslint-disable-next-line no-unused-vars
  const MIN_EXECUTION_COST = 20;

  return (
    <Modal id={MODAL_IDS.createTask} title="Task creation">
      {getModalData({
        ...state,
        error,
        isLoadingTasks,
        isTaskCreationDone,
        onCreateTask,
        dispatch,
      })}
    </Modal>
  );
};

export default CreateTaskModal;
