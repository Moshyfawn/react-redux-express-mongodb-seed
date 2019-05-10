import React, { PureComponent } from "react";
import styled from "styled-components";

import Navbar from "./navbar";

class Header extends PureComponent {
  render() {
    return (
      <Container className="header">
        <Navbar />
      </Container>
    );
  }
}

const Container = styled.div`
  height: 40px;
  padding: 20px 30px;
  background-color: lightgray;
`;

export default Header;
