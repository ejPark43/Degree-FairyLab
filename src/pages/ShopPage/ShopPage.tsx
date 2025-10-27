import React from "react";
import styled from "styled-components";
import ProductGrid from "./ProductGrid";
import SortDropdown from "./SortDropdown";

function ShopPage() {
  return (
    <Container>
      <div>
        <SortDropdown />
        <ProductGrid />
      </div>
    </Container>
  );
}

export default ShopPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 100px;
`;
