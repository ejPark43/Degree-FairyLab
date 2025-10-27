import React, { useState } from "react";
import styled from "styled-components";
import { lightTheme } from "../../styles/theme";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CartoonWing from "../../assets/images/detailPage/cartoonWing.svg";
import OptionSelector from "./OptionSelector.tsx";
import ActionButtons from "./ActionButtons.tsx";

function ProductInfoSection({ product }) {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [liked, setLiked] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("likedItems") || "[]");
    return saved.includes(product.id);
  });

  const toggleLike = () => {
    const saved = JSON.parse(localStorage.getItem("likedItems") || "[]");
    const updated = liked
      ? saved.filter((id) => id !== product.id)
      : [...saved, product.id];
    localStorage.setItem("likedItems", JSON.stringify(updated));
    setLiked(!liked);
  };

  return (
    <Wrapper>
      <InfoPart>
        <TopRow>
          <ProductName>{product.name}</ProductName>
          <LikeButton onClick={toggleLike}>
            {liked ? (
              <FavoriteIcon style={{ color: lightTheme.colors.black }} />
            ) : (
              <FavoriteBorderIcon style={{ color: lightTheme.colors.black }} />
            )}
          </LikeButton>
        </TopRow>

        <ProductPrice>₩{product.price.toLocaleString()}</ProductPrice>
        <Description>{product.description}</Description>

        <DeliveryInfo>
          <Row>
            <Label>배송 방법</Label>
            <Text>택배</Text>
          </Row>
          <Row>
            <Label>배송비</Label>
            <Text>3,000원 (50,000원 이상 무료배송)</Text>
          </Row>
        </DeliveryInfo>

        <OptionSelector
          title="COLOR"
          options={product.color}
          selected={selectedColor}
          setSelected={setSelectedColor}
          icon={CartoonWing}
        />
        <OptionSelector
          title="SIZE"
          options={product.size}
          selected={selectedSize}
          setSelected={setSelectedSize}
          icon={CartoonWing}
        />
      </InfoPart>
      <ActionButtons />
    </Wrapper>
  );
}

export default ProductInfoSection;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 820px;
  width: 100%;
`;

const InfoPart = styled.div``;
const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LikeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
const ProductName = styled.div`
  font-weight: 700;
  font-size: 32px;
`;
const ProductPrice = styled.div`
  font-weight: 500;
  font-size: 32px;
  color: ${lightTheme.colors.secondary};
`;
const Description = styled.div`
  font-size: 24px;
  margin: 20px 0;
`;
const DeliveryInfo = styled.div`
  margin-bottom: 20px;
`;
const Row = styled.div`
  display: flex;
  gap: 20px;
`;
const Label = styled.div`
  font-weight: 700;
  font-size: 20px;
`;
const Text = styled.div`
  font-size: 20px;
`;
