import React, { PureComponent } from "react";
import styled from "styled-components";

class BasicButton extends PureComponent {
  render() {
    const { label, onClick } = this.props;
    return <Button onClick={onClick}>{label}</Button>;
  }
}

const Button = styled.button``;

export default BasicButton;
