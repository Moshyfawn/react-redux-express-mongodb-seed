import React, { Component } from "react";
import styled from "styled-components";

import NavButton from "../../elements/navButton";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <NavButton path="/" label="Redux Auth" />
        <NavbarList className="navbar-list">
          <NavButton path="/" label="Home" />
          <NavButton path="/register" label="Register" />
          <NavButton path="/login" label="Login" />
        </NavbarList>
      </nav>
    );
  }
}

const NavbarList = styled.div`
  & > :not(last-child) {
    margin-right: 10px;
  }
`;

export default Navbar;
