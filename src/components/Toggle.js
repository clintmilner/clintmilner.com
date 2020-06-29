import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const ToggleWrap = styled.div`
  height: 100px;
  width: 200px;
  border-radius: 50px;
  position: relative;
  cursor: pointer;
  background-image: linear-gradient(aqua, var(--blue1));
  &.night {
    background-image: linear-gradient(var(--purp3), var(--blue2));
  }
`;
const Notch = styled.div`
  height: 90px;
  width: 90px;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 1;
  transition: all 311ms ease;
  box-shadow: 0 0 5px yellow;
  background: yellow;
  &.night {
    transform: translate(100px, 0);
    box-shadow: 0 0 5px whitesmoke;
    background: whitesmoke;
  }
`;
const Crater = styled.div`
  background: rgba(207, 194, 176, 0);
  border-radius: 50%;
  position: absolute;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.4) inset;

  &:nth-child(1) {
    left: 5px;
    top: 15px;
    height: 15px;
    width: 40px;
    transform: rotate(-45deg);
  }
  &:nth-child(2) {
    right: 15px;
    top: 25px;
    height: 15px;
    width: 25px;
    transform: rotate(45deg);
  }

  &:nth-child(3) {
    left: 24px;
    bottom: 10px;
    height: 10px;
    width: 40px;
    //transform: rotate(180deg);
  }
`;
const Shapes = styled.div`
  //position: relative;
`;
const Shape = styled.div`
  position: absolute;
  background: whitesmoke;
  border-radius: 50%;
  transition: all 311ms ease;
  &.night {
    background: lightgray;
    box-shadow: 0 0 0 rgba(161, 159, 224, 0.1);
    animation: twinkle 3s infinite;
    &:nth-child(1) {
      animation-delay: 150ms;
    }
    &:nth-child(2) {
      -webkit-animation-delay: 700ms;
    }
    &:nth-child(4) {
      -webkit-animation-delay: 1000ms;
    }
    @keyframes twinkle {
      0% {
        box-shadow: 0 0 0 rgba(161, 159, 224, 0.2);
      }
      60% {
        box-shadow: 0 0 10px 2px rgba(161, 159, 224, 1);
      }
      100% {
        box-shadow: 0 0 0 rgba(161, 159, 224, 0.4);
      }
    }
  }
  &.sm {
    height: 7px;
    width: 50px;
    top: 50%;
    left: 60%;
    &.night {
      height: 5px;
      width: 5px;
      transform: translate(-40px, 0);
      &:first-of-type {
        transform: translate(-80px, -10px);
      }
    }
  }
  &.md {
    height: 10px;
    width: 75px;
    top: 25%;
    left: 25%;
    z-index: 2;
    &.night {
      height: 10px;
      width: 10px;
      transform: translate(10px, 0);
    }
  }
  &.lg {
    height: 15px;
    width: 100px;
    bottom: 20px;
    left: 25%;
    &.night {
      height: 15px;
      width: 15px;
      transform: translate(-30px, 0);
    }
  }
`;
const Toggle = ({ toggled, onClick }) => {
  console.log({ toggled });
  return (
    <ToggleWrap className={toggled ? `night` : `day`} onClick={onClick}>
      <Notch className={toggled ? `night` : `day`}>
        {toggled ? (
          <>
            <Crater />
            <Crater />
            <Crater />
          </>
        ) : null}
      </Notch>
      <Shapes>
        <Shape className={`sm ${toggled ? "night" : "day"}`} />
        <Shape className={`sm ${toggled ? "night" : "day"}`} />
        <Shape className={`md ${toggled ? "night" : "day"}`} />
        <Shape className={`lg ${toggled ? "night" : "day"}`} />
      </Shapes>
    </ToggleWrap>
  );
};

Toggle.propTypes = {
  toggled: PropTypes.bool,
  onClick: PropTypes.func,
};
export default Toggle;
