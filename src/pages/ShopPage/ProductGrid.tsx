import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import productsData from "../../data/product.json";
import { lightTheme } from "../../styles/theme";

function ProductGrid() {
  const [liked, setLiked] = useState<number[]>(
    JSON.parse(localStorage.getItem("likedItems") || "[]")
  );
  const [products, setProducts] = useState<
    | {
        id: number;
        name: string;
        price: number;
        image: string;
        isSoldOut: boolean;
      }[]
    | null
  >(null);

  useEffect(() => {
    setTimeout(() => {
      setProducts(productsData);
    }, 200); // 로딩 테스트용 딜레이
  }, []);

  const toggleLike = (id: number) => {
    const updated = liked.includes(id)
      ? liked.filter((i) => i !== id)
      : [...liked, id];
    setLiked(updated);
    localStorage.setItem("likedItems", JSON.stringify(updated));
  };

  return (
    <Container>
      {products ? (
        <Grid>
          {products.map((p) => (
            <ProductCard
              key={p.id}
              {...p}
              liked={liked.includes(p.id)}
              onLike={() => toggleLike(p.id)}
            />
          ))}
        </Grid>
      ) : (
        <Grid>
          {Array.from({ length: 9 }).map((_, i) => (
            <SkeletonCard key={i}>
              <SkeletonImage />
              <SkeletonLike />
              <SkeletonText width="70%" />
              <SkeletonText width="40%" />
            </SkeletonCard>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default ProductGrid;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 52px;
`;

const SkeletonCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 445px;
  height: 445px;
  background-color: ${lightTheme.colors.white};
  border-radius: 20px;
  padding: 0;
`;

const SkeletonImage = styled.div`
  width: 444px;
  height: 407px;
  border-radius: 20px;
  background-color: #e9e9e9;
`;

const SkeletonLike = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #d8d8d8;
`;

const SkeletonText = styled.div<{ width: string }>`
  height: 24px;
  border-radius: 10px;
  margin-top: 10px;
  background-color: #e9e9e9;
  width: ${({ width }) => width};
`;
