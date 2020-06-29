/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";

import Header from "../header";
import "./layout.css";
import Main from "../Main";
import Footer from "../Footer";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query MetadataAndHeaderIndexQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
      allMarkdownRemark {
        nodes {
          frontmatter {
            className
            order
            path
            title
          }
          id
        }
      }
    }
  `);

  const [isToggled, setIsToggled] = useState(false);
  const handleClick = () => {
    setIsToggled((s) => !s);
  };

  return (
    <div className={`page ${isToggled ? "blue" : "warm"}`}>
      <Header
        isToggled={isToggled}
        onClick={handleClick}
        pages={data?.allMarkdownRemark?.nodes}
      />
      <Main siteTitle={data?.site?.siteMetadata?.title}>{children}</Main>
      <Footer siteDescription={data?.site?.siteMetadata?.description} />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
