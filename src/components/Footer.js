import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Foot = styled.footer`
  margin: 0 auto;
  width: 100%;
  text-align: center;
`;
const Footer = ({ siteDescription }) => {
  return (
    <Foot>
      <span>© {new Date().getFullYear()} ClintMilner.com</span> /{" "}
      <a href="https://milner.io">Milner.io</a> -{" "}
      <span className={"tagline"}>{siteDescription}</span>
    </Foot>
  );
};

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

Footer.defaultProps = {
  siteDescription: ``,
};

export default Footer;
