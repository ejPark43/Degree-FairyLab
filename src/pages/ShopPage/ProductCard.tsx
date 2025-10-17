import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { lightTheme } from "../../styles/theme";
import FavoriteIconFilled from "@mui/icons-material/Favorite";
import FavoriteIconEmpty from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";

function ProductCard({ id, name, price, image, isSoldOut, liked, onLike }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${id}`);
  };

  console.log("image " + image);
  return (
    <Card onClick={handleClick}>
      <ImageContainer>
        <ProductImage loading="lazy" src={image} alt={name} />
        {isSoldOut && (
          <SoldOutOverlay>
            <span className="sold-out english">SOLD OUT</span>
            <span className="sold-out korean">품절</span>
          </SoldOutOverlay>
        )}
        <LikeButton onClick={onLike} $liked={liked}>
          {liked ? (
            <FavoriteIconFilled fontSize="inherit" />
          ) : (
            <FavoriteIconEmpty fontSize="inherit" />
          )}
        </LikeButton>
      </ImageContainer>
      <Info>
        <ProductName>{name}</ProductName>
        <ProductPrice>₩{price.toLocaleString()}</ProductPrice>
      </Info>
    </Card>
  );
}

export default ProductCard;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
  width: 445px;
  height: 445px;
  margin-bottom: 65px;
  background-color: ${({ theme }) => lightTheme.colors.white};
  cursor: pointer;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 444px;
  height: 407px;
  /* object-fit: contain; */
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 13px;
  flex-shrink: 0; /* flex나 grid에서 자동으로 크기 줄어드는 거 방지 */
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  flex-shrink: 0;
`;

const SoldOutOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  inset: 0;
  background-color: #5c5c5c80;
  color: ${({ theme }) => lightTheme.colors.white};

  .english {
    font-weight: 500;
    /* font-style: SemiBold; */
    font-size: 36px;
  }
  .korean {
    font-weight: 400;
    font-size: 24px;
  }
`;

const LikeButton = styled.button<{ $liked: boolean }>`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 45px;
  color: ${({ $liked, theme }) =>
    $liked ? lightTheme.colors.favorite : "transparent"};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Info = styled.div`
  /* text-align: center; */
  /* margin-top: 13px; */
`;

const ProductInfo = styled.div`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 24px;
`;
const ProductName = styled(ProductInfo)`
  color: ${({ theme }) => lightTheme.colors.black};
  margin-bottom: 6px;
`;

const ProductPrice = styled(ProductInfo)`
  color: ${({ theme }) => lightTheme.colors.secondary};
`;
