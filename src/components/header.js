import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const HeaderWrap = styled.header`
  background: white;
  border: 10px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(60deg, cornflowerblue, hotpink, goldenrod);
}
  display: flex;
  width: calc(100% - 20px);
  justify-content: center;

  a {
    flex-grow: 1;
    text-align: center;
    align-self: center;
    text-decoration: none;
    color: #000;
    line-height: 3em;
  }
  a.active {
    color: #fff;
  }
`;

const Header = () => {
  return (
    <HeaderWrap>
      <Link to="/about" activeClassName="purple active">
        About
      </Link>
      <Link to="/experience" activeClassName="green active">
        Experience
      </Link>
      <Link to="/">
        <Logo />
      </Link>
      <Link to="/uses" activeClassName="blue active">
        Uses
      </Link>
      <Link to="/contact" activeClassName="warm active">
        Contact
      </Link>
    </HeaderWrap>
  );
};

export default Header;
