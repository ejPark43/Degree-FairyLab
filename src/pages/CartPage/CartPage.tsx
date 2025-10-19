import React from "react";
import styled from "styled-components";
import { lightTheme } from "../../styles/theme";
import ItemCounter from "./ItemCounter";
import TotalPrice from "./TotalPrice";
import ProductDescription from "./ProductDescription";
function CartPage() {
  return (
    <Container>
      <Breadcrumb>SHOPPING BAG</Breadcrumb>
      <ProductCount>일반 상품 (1)</ProductCount>
      <EachProduct>
        <ProductDescription />
        {/* <ProductDescription></ProductDescription> */}
        <CounterContainer>
          <ItemCounter />
        </CounterContainer>
        <ProductPrice>
          <div style={{ fontWeight: "600" }}>₩8,900</div>
          <Button style={{ width: "165px", height: "58px", fontSize: "18px" }}>
            구매하기
          </Button>
        </ProductPrice>
      </EachProduct>
      <DeleteButtons>
        <span className="btn">전체선택</span>
        <span className="btn">선택상품 삭제</span>
      </DeleteButtons>
      <TotalPrice />
      <ActionButtons>
        <Button style={{ width: "805px", height: "90px" }}>선택상품주문</Button>
        <Button style={{ width: "805px", height: "90px" }}>전체상품주문</Button>
      </ActionButtons>
    </Container>
  );
}

export default CartPage;

const Container = styled.div`
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  /* padding: auto; */
  margin: auto;
  width: 1630px;
  /* padding: 40px 150px 40px 150px; */
`;

const Breadcrumb = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  width: 100%;
  padding-top: 40px;
  font-size: 24px;
  font-weight: 400;
`;

const ProductCount = styled.div`
  /* border: 2px solid purple; */
  display: flex;
  width: 100%;
  padding-top: 48px;
  padding-bottom: 4px;
  font-size: 20px;
`;

const EachProduct = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 380px;
  max-height: 380px;
  border-top: 2px solid black;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);

  /* border: 0.5 solid black; */
`;

// const ProductDescription = styled.div`
//   /*flex-direction: row  */
//   border-right: 0.5px solid rgba(0, 0, 0, 0.2);
//   border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
//   /* border-top: 0; */
//   display: flex;
//   flex-direction: row;
//   width: 960px;

//   // 체크박스 , 이미지, 설명란, x표시
// `;
const CounterContainer = styled.div`
  display: flex;
  width: 350px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const DeleteButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: 72px;
  gap: 10px;
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 170px;
    height: 44px;
    border: 1px solid black;
    font-size: 20px;
  }
`;
const ProductPrice = styled.div`
  border-left: 0.5px solid rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 22px;
  width: 25%;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 28px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${lightTheme.colors.secondary};
  border-radius: 20px;
  background-color: ${lightTheme.colors.buttonBg};
  color: ${lightTheme.colors.secondary};
  cursor: pointer;
`;

const ActionButtons = styled.div`
  display: flex;
  padding-top: 20px;
  padding-bottom: 320px;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
