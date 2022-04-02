import React from "react";
import styled from "styled-components";

import { Z_INDEX } from "constants/styles";

import { Alert } from "./components";

import { alertsHooks } from "./duck";

const { useConnect } = alertsHooks;

const Wrapper = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 450px;
  z-index: ${Z_INDEX.alerts};
`;

const Alerts = () => {
  const { alerts, onCloseAlert } = useConnect();

  return (
    <Wrapper>
      {alerts.map(alert => (
        <Alert key={alert.id} {...alert} onClose={onCloseAlert} />
      ))}
    </Wrapper>
  );
};

export default Alerts;
