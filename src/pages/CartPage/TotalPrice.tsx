import React, { useMemo } from "react";
import styled from "styled-components";
import productsData from "../../data/product.json";

function TotalPrice({ cartItems }: { cartItems: any[] }) {
  const DELIVERY_FEE = 3000;

  const { totalPrice, selectedCount } = useMemo(() => {
    const selected = cartItems.filter((item) => item.checked);
    const total = selected.reduce((sum, item) => {
      const product = productsData.find((p) => p.id === item.id);
      const price = product ? product.price : 0;
      return sum + price * (item.quantity ?? 1);
    }, 0);
    return { totalPrice: total, selectedCount: selected.length };
  }, [cartItems]);

  const finalPrice = selectedCount > 0 ? totalPrice + DELIVERY_FEE : 0;

  return (
    <Container>
      <Price>
        <span>총 상품금액</span>
        <span>₩{totalPrice.toLocaleString()}</span>
      </Price>
      <Price>
        <span>총 배송비</span>
        <span>₩{selectedCount > 0 ? DELIVERY_FEE.toLocaleString() : 0}</span>
      </Price>
      <Price style={{ marginTop: "25px" }}>
        <span>결제금액</span>
        <span style={{ fontWeight: "600", fontSize: "28px" }}>
          ₩{finalPrice.toLocaleString()}
        </span>
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
  justify-content: space-between;
  font-size: 20px;
  color: black;
`;
