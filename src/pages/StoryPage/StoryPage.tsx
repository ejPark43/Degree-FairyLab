import React from "react";
import styled from "styled-components";
import Story from "./Story";
import ContactUs from "./ContactUs";

function StoryPage() {
  return (
    <Container>
      <Story />
      <ContactUs />
    </Container>
  );
}

export default StoryPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* border: 2px solid red; */
`;
