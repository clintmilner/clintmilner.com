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

const Header = ({ pages }) => {
  if (!pages && pages.length <= 0) {
    return (
      <HeaderWrap>
        <Logo />
      </HeaderWrap>
    );
  }
  console.info(pages);
  return (
    <HeaderWrap>
      {pages
        .sort((a, b) => a.frontmatter.order - b.frontmatter.order)
        .map((page) => (
          <Link
            to={page.frontmatter.path}
            key={page.id}
            activeClassName={page.frontmatter.className}
          >
            {page.frontmatter.title ? page.frontmatter.title : <Logo />}
          </Link>
        ))}
    </HeaderWrap>
  );
};

export default Header;
