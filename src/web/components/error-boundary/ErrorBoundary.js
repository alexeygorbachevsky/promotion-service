import React, { Component } from "react";
import styled from "styled-components";

import { toREM } from "constants/styles";

const Wrapper = styled.div`
  padding: 15px 30px;
  border-radius: 4px;
`;

const Header = styled.h2`
  font-size: ${toREM(18)};
`;

const Body = styled.p`
  font-size: ${toREM(18)};
`;

class ErrorBoundary extends Component {
  state = { error: null };

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { children } = this.props;
    const { error } = this.state;

    if (error) {
      return (
        <Wrapper>
          <Header>Something gets wrong</Header>
          <Body>The following error is occurred: {error?.message}</Body>
        </Wrapper>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
