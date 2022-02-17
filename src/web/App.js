import React from "react";
import styled, { ThemeProvider } from "styled-components";

import "assets/fonts/fonts.css";
import { AppStyles } from "styles";

import { ErrorBoundary } from "components";

const Wrapper = styled.div``;

const App = () => (
  <ErrorBoundary>
    {/* TODO: connect it to redux */}
    <ThemeProvider theme={{ isDarkMode: true }}>
      <Wrapper>
        <AppStyles />
        Hello
      </Wrapper>
    </ThemeProvider>
  </ErrorBoundary>
);

export default App;
