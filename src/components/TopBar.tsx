import React from "react";
import styled, { keyframes } from "styled-components";

import { lightTheme } from "../styles/theme";

// function TopBar() {
//   return <Container>실종된 요정을 찾습니다! </Container>;
// }

function TopBar() {
  return (
    <Container>
      <Marquee>
        <Text>실종된 요정을 찾습니다!</Text>
        <Text>실종된 요정을 찾습니다!</Text>
      </Marquee>
    </Container>
  );
}
export default TopBar;

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 59px;
  background-color: ${lightTheme.colors.primary};
  overflow: hidden;
`;

const scroll = keyframes`
  0% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const Marquee = styled.div`
  display: flex;
  width: 100%;
  white-space: nowrap;
  animation: ${scroll} 20s linear infinite;
`;

const Text = styled.span`
  flex: 0 0 100%;
  color: black;
  font-family: "PeoplefirstNeatLoud", "Courier New", Courier, monospace;
  font-weight: 500;
  font-size: 24px;
`;
