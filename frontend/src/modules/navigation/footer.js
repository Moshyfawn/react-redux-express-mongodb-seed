import React, { PureComponent } from "react";
import styled from "styled-components";

class Footer extends PureComponent {
  render() {
    return <Container className="footer" />;
  }
}

const Container = styled.div`
  height: 40px;
  padding: 20px 30px;
  background-color: lightgray;
`;

export default Footer;
