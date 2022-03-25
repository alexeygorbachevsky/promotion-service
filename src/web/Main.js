import React from "react";
import styled from "styled-components";
import { Routes, Route, Navigate } from "react-router-dom";

import "assets/fonts/fonts.css";

import { PALETTE, SIZE } from "constants/styles";
import { ROUTES } from "constants/routes";

import { NavHeader } from "components";

import { TaskList, News, Settings } from "pages";

const Wrapper = styled.main`
  min-height: 100vh;
  height: calc(100vh - ${SIZE.header}px);
  padding-top: ${SIZE.header}px;
  background-color: ${PALETTE.getPageBackground};
  overflow-x: hidden;
`;

// TODO: split on chunks
const Main = () => (
  <Wrapper>
    <NavHeader />
    <Routes>
      <Route path="/">
        <Route exact path={ROUTES.taskList} element={<TaskList />} />
        <Route exact path={ROUTES.news} element={<News />} />
        <Route exact path={ROUTES.settings} element={<Settings />} />
        <Route index element={<Navigate to={ROUTES.settings} replace />} />
      </Route>
      {/* TODO: Not found route */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  </Wrapper>
);

export default Main;
