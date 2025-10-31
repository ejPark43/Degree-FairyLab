import React from "react";
import styled from "styled-components";
import ProductGrid from "./ProductGrid";
import SortDropdown from "./SortDropdown";

function ShopPage() {
  return (
    <Container>
      <ComponentWrapper>
        <SortDropdown />
        <ProductGrid />
      </ComponentWrapper>
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

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100%; */

  align-items: center;
`;
