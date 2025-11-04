import React from "react";
import MainTexts from "../assets/images/mainPage/MainTexts.svg";
import MainCharacter from "../../assets/images/mainPage/maincharacter.svg";
import HourglassImg from "../../assets/images/Hourglass.svg";
import styled, { keyframes } from "styled-components";
import BtmSection from "./BtmSection";
import FloatingManagerHome from "../../components/FloatingIcons/FloatingManagerHome";
function Home() {
  return (
    <Container>
      <HourglassFloat
        src={HourglassImg}
        $size={480}
        $top="510px"
        $left="-90px"
        $delay={0}
        $duration={6}
        $angle={30}
      />
      <FloatingManagerHome />
      <Character src={MainCharacter} />
      <BtmSection />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  z-index: 10;
  justify-content: center;
`;
const Character = styled.img`
  display: flex;
  position: relative;
  top: -221px;
  justify-content: center;
  height: 1232px;
  /* width: 1166px; */

  object-fit: contain;
`;

const float = (angle = 0) => keyframes`
  0% {
    transform: rotate(${angle}deg) translateY(0);
  }
  50% {
    transform: rotate(${angle}deg) translateY(-20px);
  }
  100% {
    transform: rotate(${angle}deg) translateY(0);
  }
`;
const HourglassFloat = styled.img<{
  $size?: number;
  $top?: string;
  $left?: string;
  $delay?: number;
  $duration?: number;
  $angle?: number;
}>`
  position: absolute;
  top: ${({ $top }) => $top || "0"};
  left: ${({ $left }) => $left || "0"};
  height: ${({ $size }) => ($size ? `${$size}px` : "200px")};
  animation: ${({ $angle }) => float($angle || 0)}
    ${({ $duration }) => $duration || 6}s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay || 0}s;
  pointer-events: none;
  z-index: 2;
  display: inline-block;
  transform-origin: center center;
`;
