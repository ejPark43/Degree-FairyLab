import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <span>
      <Container>Header</Container>
    </span>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  border: 2px solid red;
  width: 100%;
`;
