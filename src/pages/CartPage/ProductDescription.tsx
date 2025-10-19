import React from "react";
import styled from "styled-components";
import { lightTheme } from "../../styles/theme";
const ProductDescription = () => {
  return (
    <ProductDescWrapper>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "220px",
          gap: "30px",
          border: "2px solid red",
          //   alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <CheckBox type="checkbox" />

        <ProductImageWrapper>
          <ProductImage src="/ProductImgs/fairy_socks.png" alt="상품 이미지" />
        </ProductImageWrapper>

        <ProductInfo>
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <ProductName>요정 양말</ProductName> <DeleteBox>×</DeleteBox>
          </div>
          <ProductPrice>₩8,900</ProductPrice>
          <Delivery>배송비 3,000원 (50,000원 이상 무료배송)</Delivery>
          <OptionInfo>옵션: BLUE / FREE</OptionInfo>
        </ProductInfo>
      </div>
    </ProductDescWrapper>
  );
};

export default ProductDescription;
const ProductDescWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 960px;
  height: 100%;
  padding: 40px 40px 40px 0;
  box-sizing: border-box;
  border-right: 0.5px solid rgba(0, 0, 0, 0.2);
`;

const CheckBox = styled.input`
  display: flex;

  /* justify-content: left; */
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const ProductImageWrapper = styled.div`
  width: 241px;
  height: 220px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  /* justify-content: s; */

  gap: 25px;
  flex-grow: 1;
`;

const ProductName = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #000;
`;

const ProductPrice = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #00acff;
`;

const Delivery = styled.div`
  font-size: 18px;
  color: #000;
  opacity: 0.7;
`;

const OptionInfo = styled.div`
  font-size: 18px;
  color: #000;
`;

const DeleteBox = styled.div`
  display: flex;
  justify-self: end;
  width: 34px;
  height: 34px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 32px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;
