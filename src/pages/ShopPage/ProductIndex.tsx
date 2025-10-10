import React, { useState } from "react";
import styled from "styled-components";
import { lightTheme } from "../../styles/theme";

function ProductIndex() {
  const [currentPage, setCurrentPage] = useState(1);
  const pages = [1, 2, 3];

  return (
    <Container>
      {pages.map((page) => (
        <PageNumber
          key={page}
          onClick={() => setCurrentPage(page)}
          $active={currentPage === page}
        >
          {page}
        </PageNumber>
      ))}
    </Container>
  );
}

export default ProductIndex;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin: 60px 0 100px 0;
`;

const PageNumber = styled.div`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 24px;
  cursor: pointer;
  color: ${(props) => (props.$active ? lightTheme.colors.black : "#b3b3b3")};

  &:hover {
    color: ${lightTheme.colors.black};
  }
`;
