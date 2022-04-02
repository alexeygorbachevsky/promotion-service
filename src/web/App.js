import React from "react";
import { useSelector } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import "assets/fonts/fonts.css";

import { AppStyles } from "styles";

import { MODAL_OVERLAY_ID } from "constants/overlays";

import { ErrorBoundary, Alerts } from "components";

import Main from "./Main";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ModalWrapper = styled.div``;

const App = () => {
  const isDarkMode = useSelector(state => state.auth.isDarkMode);
  return (
    <ErrorBoundary>
      <ThemeProvider theme={{ isDarkMode }}>
        <BrowserRouter>
          <Wrapper>
            <AppStyles />
            <Main />
            <Alerts />
            <ModalWrapper id={MODAL_OVERLAY_ID} />
          </Wrapper>
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
