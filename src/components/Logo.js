import React from "react";
import styled from "styled-components";
const CM = styled.h1`
  font-size: 45px;
  margin: 0;
  padding: 0;
  color: #000;
  line-height: 1em;
  text-shadow: none;
`;
const LT = styled.span`
  font-size: 55px;
`;
const Name = styled.span`
  // margin-left: 5px;
`;
const Slash = styled.span`
  margin: 0 0 0 12px;
  font-size: 40px;
  // background: hotpink;
  transform: translateY(-4px);
  display: inline-block;
  transition: transform 300ms ease-in-out;
`;
const GT = styled.span`
  font-size: 55px;
`;
const Logo = () => (
  <CM>
    <LT>&lt;</LT>
    <Name>CM</Name>
    <Slash>/</Slash>
    <GT>&gt;</GT>
  </CM>
);

export default Logo;
