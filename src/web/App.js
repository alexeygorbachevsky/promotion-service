import React from "react";
import styled, { ThemeProvider } from "styled-components";

import "assets/fonts/fonts.css";

import { AppStyles } from "styles";

import { SIZE } from "constants/styles";

import { ErrorBoundary, NavHeader } from "components";

import { MarketPlace } from "pages";

const Wrapper = styled.div``;

const Main = styled.main`
  min-height: 100vh;
  height: calc(100vh - ${SIZE.header}px);
  padding-top: ${SIZE.header}px;
  background-color: #131419;
  overflow-x: hidden;
`;

const App = () => (
  <ErrorBoundary>
    {/* TODO: connect it to redux */}
    <ThemeProvider theme={{ isDarkMode: true }}>
      <Wrapper>
        <AppStyles />
        <Main>
          <NavHeader />
          <MarketPlace />
        </Main>
      </Wrapper>
    </ThemeProvider>
  </ErrorBoundary>
);

export default App;
