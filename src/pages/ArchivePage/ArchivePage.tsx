import React from "react";
import styled from "styled-components";
import BannerCarousel from "./BannerCarousel";
import CharacterCardsSection from "./CharacterCardsSection";

function ArchivePage() {
  return (
    <Container>
      <BannerCarousel />
      <CharacterCardsSection />
    </Container>
  );
}

export default ArchivePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
