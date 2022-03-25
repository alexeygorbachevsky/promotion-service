import React from "react";
import styled from "styled-components";
import {
  Link as NativeLink,
  useMatch,
  useResolvedPath,
} from "react-router-dom";

import { PALETTE } from "constants/styles";

const Link = styled(NativeLink)`
  color: ${PALETTE.getText};
  border: 2px solid transparent;
  
  padding: 10px 20px;
  
  &:focus {
    border: 2px solid ${PALETTE.blue};
  }
`;

const BasicLink = ({ children, to, render, ...props }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link $isActive={match} to={to} {...props}>
      {render ? render({ isActive: match }) : children}
    </Link>
  );
};

export default BasicLink;
