import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import productsData from "../../data/product.json";
import { lightTheme } from "../../styles/theme";

type ProductType = {
  id: number;
  name: string;
  price: number;
  image: string;
  isSoldOut: boolean;
};
function DetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    const found = productsData.find((item) => item.id === Number(id));
    if (found) setProduct(found);
  }, [id]);

  useEffect(() => {
    const found = productsData.find((item) => item.id === Number(id));
    if (found) {
      setProduct(found);
    }
  }, [id]);

  if (!product) {
    return (
      <LoadingContainer>
        <p>상품 정보를 불러오는 중...</p>
      </LoadingContainer>
    );
  }

  return (
    <Container>
      <ImageWrapper>
        <ProductImage src={product.image} alt={product.name} />
      </ImageWrapper>
      <InfoWrapper>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>₩{product.price.toLocaleString()}</ProductPrice>
        <Description>여기에 상품 설명 또는 추가 정보가 들어갑니다.</Description>
      </InfoWrapper>
    </Container>
  );
}

export default DetailPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 80px;
  width: 100%;
  padding: 100px 0;
`;

const ImageWrapper = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  background-color: #f7f7f7;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 20px;
  max-width: 400px;
`;

const ProductName = styled.div`
  font-family: "Pretendard";
  font-weight: 600;
  font-size: 32px;
  color: ${lightTheme.colors.black};
`;

const ProductPrice = styled.div`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 24px;
  color: ${lightTheme.colors.secondary};
`;

const Description = styled.div`
  font-family: "Pretendard";
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  color: ${lightTheme.colors.gray};
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  font-size: 20px;
  color: #999;
`;
