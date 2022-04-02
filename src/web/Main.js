import React, { lazy, Suspense } from "react";
import styled from "styled-components";
import { Routes, Route, Navigate } from "react-router-dom";

import "assets/fonts/fonts.css";

import { PALETTE, SIZE } from "constants/styles";
import { ROUTES } from "constants/routes";

import { NavHeader, Suspense as SuspenseLoader } from "components";

import { TaskList } from "pages";

const News = lazy(() => import(/* webpackChunkName: "News" */ "pages/news"));

const Settings = lazy(() =>
  import(/* webpackChunkName: "Settings" */ "pages/settings"),
);

const Wrapper = styled.main`
  min-height: 100vh;
  height: calc(100vh - ${SIZE.header}px);
  padding-top: ${SIZE.header}px;
  background-color: ${PALETTE.getPageBackground};
  overflow-x: hidden;
`;

const Main = () => (
  <Wrapper>
    <NavHeader />
    <Suspense fallback={<SuspenseLoader />}>
      <Routes>
        <Route exact path={ROUTES.taskList} element={<TaskList />} />
        <Route exact path={ROUTES.news} element={<News />} />
        <Route exact path={ROUTES.settings} element={<Settings />} />
        <Route index element={<Navigate to={ROUTES.taskList} replace />} />
        {/* TODO: Not found route */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Suspense>
  </Wrapper>
);

export default Main;
