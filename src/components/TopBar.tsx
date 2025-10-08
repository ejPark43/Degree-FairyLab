import React from "react";
import styled from "styled-components";
import { lightTheme } from "../styles/theme";

function TopBar() {
  return <Container>실종된 요정을 찾습니다! </Container>;
}

export default TopBar;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "PeoplefirstNeatLoud", "Courier New", Courier, monospace;
  font-weight: 100;
  font-size: 20px;
  width: 100%;
  height: 50px;
  background-color: ${lightTheme.colors.primary};
`;
