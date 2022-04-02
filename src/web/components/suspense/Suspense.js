import React from "react";
import styled from "styled-components";

import Loader from "assets/icons/loader.svg";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Suspense = () => (
  <Wrapper>
    <Loader />
  </Wrapper>
);

export default Suspense;
