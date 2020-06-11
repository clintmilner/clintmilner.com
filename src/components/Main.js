import React from "react";
import styled from "styled-components";
import Image from "./image";
import PropTypes from "prop-types";
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

const MainContent = styled.main`
  display: flex;
  height: 100%;
  padding: 0 1em;

  div {
    width: 50%;
  }

  .main {
    order: 1;
    display: flex;
    flex-direction: column;

    & > * {
      align-self: center;
    }

    h1 {
      font-size: 11rem;
      text-transform: uppercase;
      margin: 0.25em 0 0 -9px;
    }
  }

  .subpage {
    order: 2;
    max-height: 80vh;
    overflow-y: auto;
    margin-top: 42px;

    h1::before {
      content: "{ ";
    }

    h1::after {
      content: " }";
    }
  }
  // @media ${device.tablet} {
  //   flex-direction: column;
  //   .main {
  //     order: 2;
  //     h1 {
  //       font-size: 5rem;
  //     }
  //   }
  //   .subpage {
  //     order: 1;
  //   }
  //   div {
  //     width: 100%;
  //   }
  // }
`;
const Main = ({ siteTitle, children }) => {
  return (
    <MainContent>
      <div className="main">
        <h1>Hello</h1>
        <Image />
        <p>{siteTitle}</p>
      </div>
      <div className="subpage">{children}</div>
    </MainContent>
  );
};
Main.propTypes = {
  siteTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Main.defaultProps = {
  siteTitle: ``,
  children: <></>,
};
export default Main;
