import React from "react";
import { useSelector } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import "assets/fonts/fonts.css";

import { AppStyles } from "styles";

import { MODAL_OVERLAY_ID } from "constants/overlays";

import { ErrorBoundary } from "components";

import Main from "./Main";

const Wrapper = styled.div``;

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
            <ModalWrapper id={MODAL_OVERLAY_ID} />
          </Wrapper>
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
