import React, { memo } from "react";
import styled from "styled-components";
import Image from "./image";
import PropTypes from "prop-types";
import { device } from "./Screens";

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
    background: linear-gradient(
                  40deg,
                  var(--green1) 0%,
                  var(--green1) 10%,
                  var(--green2) 10%,
                  var(--green2) 20%,
                  var(--green3) 20%,
                  var(--green3) 30%,
                  var(--green4) 30%,
                  var(--green4) 40%,
                  var(--transparent) 40%,
                  var(--transparent) 100%
  );

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
    word-break: break-all;
    hyphens: auto;
    overflow-x: hidden;
    background: linear-gradient(
                  230deg,
                  var(--purp1) 0%,
                  var(--purp1) 10%,
                  var(--purp2) 10%,
                  var(--purp2) 20%,
                  var(--purp3) 20%,
                  var(--purp3) 30%,
                  var(--purp4) 30%,
                  var(--purp4) 40%,
                  var(--transparent) 40%,
                  var(--transparent) 100%
  );
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
    <MainContent className={"warm"}>
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
export default memo(Main);
