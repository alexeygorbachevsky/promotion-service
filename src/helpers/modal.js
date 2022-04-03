import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { MODAL_IDS } from "constants/modal";

import { CreateTaskModal } from "components/modals";

import { MODAL_OVERLAY_ID } from "constants/overlays";

import { getStore } from "helpers/reducerRegistry";

export const openModal = ({ id, props }) => {
  let modal;
  if (id === MODAL_IDS.createTask) {
    modal = <CreateTaskModal {...props} />;
  }

  if (!modal) {
    return;
  }

  const modalContainer = document.createElement("div");
  modalContainer.setAttribute("id", `${MODAL_OVERLAY_ID}-${id}`);

  const target = document.getElementById(MODAL_OVERLAY_ID);
  target.appendChild(modalContainer);

  ReactDOM.render(
    <Provider store={getStore()}>{modal}</Provider>,
    modalContainer,
  );
};

export const closeModal = id => {
  const modal = document.getElementById(`${MODAL_OVERLAY_ID}-${id}`);

  if (modal) {
    ReactDOM.unmountComponentAtNode(modal);
    modal.remove();
  }
};
