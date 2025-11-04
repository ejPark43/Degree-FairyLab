import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import ProductCard from "./ProductCard";
import productsData from "../../data/product.json";
import { lightTheme } from "../../styles/theme";
import Hourglass from "../../assets/images/Hourglass.svg";

function ProductGrid() {
  const [liked, setLiked] = useState<number[]>(
    JSON.parse(localStorage.getItem("likedItems") || "[]")
  );
  const [products, setProducts] = useState<
    {
      id: number;
      name: string;
      price: number;
      image: string;
      isSoldOut: boolean;
    }[]
  >([]);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 9;
  const totalPages = 3;

  useEffect(() => {
    // 로딩 시뮬레이션
    setTimeout(() => {
      setProducts(productsData);
    }, 200);
  }, []);

  const toggleLike = (id: number) => {
    const updated = liked.includes(id)
      ? liked.filter((i) => i !== id)
      : [...liked, id];
    setLiked(updated);
    localStorage.setItem("likedItems", JSON.stringify(updated));
  };

  // 현재 페이지의 상품 slice
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container>
      {products.length > 0 ? (
        currentProducts.length > 0 ? (
          <Grid>
            {currentProducts.map((p) => (
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
            <EmptyMessage>
              <HourglassImg
                // loading="lazy"
                src={Hourglass}
                alt={"loading-hourglass"}
              />
              상품 준비중
            </EmptyMessage>
          </Grid>
        )
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

      {/* 페이지네이션 */}
      <Pagination>
        {[1, 2, 3].map((page) => (
          <PageNumber
            key={page}
            $active={page === currentPage}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </PageNumber>
        ))}
      </Pagination>
    </Container>
  );
}

export default ProductGrid;

/* --- styled-components --- */

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 52px;
  width: 1450px;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
const HourglassImg = styled.img`
  width: 192px;
  animation: ${spin} 3s linear infinite;
`;
const EmptyMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -40px;
  margin-bottom: 40px;
  height: 600px;
  width: 100%;
  gap: 30px;
  grid-column: 1/-1; // 상위 3*3 그리드에서 이 컴포넌트가 중앙을 차지하도록 하는 코드
  font-size: 22px;
  color: ${lightTheme.colors.black};
  font-size: 28px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin: 60px 0 100px 0;
`;

const PageNumber = styled.div<{ $active?: boolean }>`
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
  color: ${({ $active }) => ($active ? "#000" : "#888")};
  transition: color 0.2s ease;

  &:hover {
    color: ${lightTheme.colors.secondary};
  }
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
