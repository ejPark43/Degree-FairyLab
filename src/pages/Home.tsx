import React from "react";
import MainTexts from "../assets/images/mainPage/MainTexts.svg";
import MainCharacter from "../assets/images/mainPage/maincharacter.svg";
import styled from "styled-components";
function Home() {
  return (
    <Container>
      <Character src={MainCharacter} />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  width: 100%;
  z-index: 10;
  border: 2px solid blue;
  justify-content: center;
`;
const Character = styled.img`
  display: flex;
  position: relative;
  top: -192px;
  justify-content: center;
  height: 900px;
  object-fit: contain;
`;
