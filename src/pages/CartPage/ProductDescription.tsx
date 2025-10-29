import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { lightTheme } from "../../styles/theme";
import productsData from "../../data/product.json";
import CloseIcon from "@mui/icons-material/Close";
type ProductDescriptionProps = {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
  item: {
    id: number;
    color: string | null;
    size: string | null;
    checked?: boolean;
  };
  onDelete: () => void;
  onCheck: (checked: boolean) => void; // ✅ 체크 상태 변경 핸들러
};

const ProductDescription = ({
  product,
  item,
  onDelete,
  onCheck,
}: ProductDescriptionProps) => {
  return (
    <ProductDescWrapper>
      <CheckBox
        type="checkbox"
        checked={item.checked ?? false}
        onChange={(e) => onCheck(e.target.checked)}
      />

      <ProductImageWrapper>
        <ProductImage src={product.image} alt={product.name} />
      </ProductImageWrapper>

      <ProductInfo>
        <ProductHeader>
          <ProductName>{product.name}</ProductName>
          <DeleteBox onClick={onDelete}>
            <CloseIcon fontSize="inherit" />
          </DeleteBox>
        </ProductHeader>
        <ProductPrice>₩{product.price.toLocaleString()}</ProductPrice>
        <Delivery>배송비 3,000원 (50,000원 이상 무료배송)</Delivery>
        {(item.color || item.size) && (
          <OptionInfo>
            옵션: {item.color ?? ""} {item.size ? ` / ${item.size}` : ""}
          </OptionInfo>
        )}
      </ProductInfo>
    </ProductDescWrapper>
  );
};

export default ProductDescription;
const ProductDescWrapper = styled.div`
  display: flex;
  width: 960px;
  height: 100%;
  padding: 40px 40px 40px 0;
  box-sizing: border-box;
  border-right: 0.5px solid rgba(0, 0, 0, 0.2);
  gap: 30px;
`;

const CheckBox = styled.input`
  width: 30px;
  height: 30px;
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
  flex-direction: column;
  flex-grow: 1;
  gap: 25px;
`;

const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductName = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

const ProductPrice = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: ${lightTheme.colors.secondary};
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
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 20px;
  font-weight: 200;
  color: rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const EmptyMessage = styled.div`
  font-size: 20px;
  color: #777;
  text-align: center;
  width: 100%;
  padding: 50px 0;
`;
