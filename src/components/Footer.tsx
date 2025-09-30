import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <div>
      <Container>Footer</Container>
    </div>
  );
}

export default Footer;

const Container = styled.div`
  display: flex;
  border: 2px solid red;
  width: 100%;
`;
