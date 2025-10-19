import React from "react";
import styled from "styled-components";
import { lightTheme } from "../../styles/theme";

function TotalPrice() {
  return (
    <Container>
      <Price>
        <span>총 상품금액</span> <span>₩8,900</span>
      </Price>
      <Price>
        <span>총 배송비</span> <span>₩3,000</span>
      </Price>
      <Price>
        <span></span> <span></span>
      </Price>
      <Price style={{ marginTop: "25px" }}>
        <span>결제금액</span>{" "}
        <span style={{ fontWeight: "600", fontSize: "28px" }}>₩11,900</span>
      </Price>
    </Container>
  );
}

export default TotalPrice;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 242px;
  border-top: 2px solid black;
  border-bottom: 0.5px solid black;
  gap: 15px;
`;

const Price = styled.div`
  display: flex;
  width: 100%;
  color: black;
  font-size: 20px;
  font-weight: 400px;
  justify-content: space-between;
`;
