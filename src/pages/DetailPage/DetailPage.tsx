import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import productsData from "../../data/product.json";
import { lightTheme } from "../../styles/theme";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CartoonWing from "../../assets/images/detailPage/cartoonWing.svg";
type ProductType = {
  id: number;
  name: string;
  price: number;
  image: string;
  isSoldOut: boolean;
  description: string;
  color: string[];
  size: string[];
};

function DetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [notifyChecked, setNotifyChecked] = useState(false);
  const [liked, setLiked] = useState<boolean>(() => {
    const savedLikes = JSON.parse(localStorage.getItem("likedItems") || "[]");
    return savedLikes.includes(Number(id)); // 현재 상품이 좋아요 목록에 있으면 true
  });
  useEffect(() => {
    const found = productsData.find((item) => item.id === Number(id));
    if (found) setProduct(found);
  }, [id]);

  const [cartAdded, setCartAdded] = useState<boolean>(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    // id만 비교할 수 있도록 설정
    return cartItems.some((item: any) => item.id === Number(id));
  });

  const addToCart = (goToCart = false) => {
    if (!product) return;

    if (product.color.length > 0 && !selectedColor) {
      alert("색상을 선택해주세요!");
      return;
    }
    // 사이즈 옵션이 있는 상품이라면 반드시 선택되어야 함
    if (product.size.length > 0 && !selectedSize) {
      alert("사이즈를 선택해주세요!");
      return;
    }

    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");

    // 같은 상품 + 같은 옵션이 이미 장바구니에 있는지 확인
    const isAlreadyInCart = cartItems.some(
      (item: any) =>
        item.id === Number(id) &&
        item.color === selectedColor &&
        item.size === selectedSize
    );

    if (isAlreadyInCart) {
      if (goToCart == false) alert("이미 장바구니에 넣은 상품입니다!");
      if (goToCart) navigate("/cart");
      return;
    }

    // 장바구니에 새로운 아이템 추가
    const newItem = {
      id: Number(id),
      color: selectedColor,
      size: selectedSize,
      quantity: 1,
    };

    const updatedCart = [...cartItems, newItem];
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    setCartAdded(true);

    alert("장바구니에 추가되었습니다!");

    // “구매하기” 버튼 누른 경우 => cart 페이지로 이동
    if (goToCart) {
      navigate("/cart");
    }
  };

  const toggleLike = () => {
    const savedLikes = JSON.parse(localStorage.getItem("likedItems") || "[]");
    let updatedLikes;

    if (liked) {
      // 이미 좋아요 되어 있으면 제거
      updatedLikes = savedLikes.filter(
        (itemId: number) => itemId !== Number(id)
      );
    } else {
      // 아니면 추가
      updatedLikes = [...savedLikes, Number(id)];
    }

    localStorage.setItem("likedItems", JSON.stringify(updatedLikes));
    setLiked(!liked);
  };

  if (!product)
    return (
      <LoadingContainer>
        <p>상품 정보를 불러오는 중...</p>
      </LoadingContainer>
    );

  return (
    <Container>
      {/* breadcrumb */}
      <Breadcrumb>
        <Home>HOME</Home>
        <Arrow>›</Arrow>
        <Shop>SHOP</Shop>
      </Breadcrumb>

      {/* 제품 전체 영역 */}
      <ProductInfo>
        {/* 이미지 */}
        <ImageWrapper>
          <ProductImage loading="lazy" src={product.image} alt={product.name} />
          {product.isSoldOut && (
            <SoldOutOverlay>
              <span className="sold-out english">SOLD OUT</span>
              <span className="sold-out korean">품절</span>
            </SoldOutOverlay>
          )}
        </ImageWrapper>

        {/* 상세 정보 */}
        <InfoWrapper>
          <InfoPart>
            <TopRow>
              <ProductName>{product.name}</ProductName>
              <LikeButton onClick={toggleLike}>
                {liked ? (
                  <FavoriteIcon
                    style={{
                      color: lightTheme.colors.black,
                      fontSize: "35px",
                    }}
                  />
                ) : (
                  <FavoriteBorderIcon
                    style={{
                      color: lightTheme.colors.black,
                      fontSize: "35px",
                    }}
                  />
                )}
              </LikeButton>
            </TopRow>
            <ProductPrice>₩{product.price.toLocaleString()}</ProductPrice>
            <Description>{product.description}</Description>

            {/* 배송 정보 */}
            <DeliveryInfo>
              <InfoRow>
                <Label>배송 방법</Label>
                <Text>택배</Text>
              </InfoRow>
              <InfoRow>
                <Label>배송비</Label>
                <Text>3,000원 (50,000원 이상 무료배송)</Text>
              </InfoRow>
            </DeliveryInfo>

            {/* 색상 옵션 */}
            {product.color.length > 0 ? (
              <OptionSection>
                <OptionTitle>COLOR</OptionTitle>
                <OptionList>
                  {product.color.map((c) => (
                    <OptionItem key={c} onClick={() => setSelectedColor(c)}>
                      <ColorBox $active={selectedColor === c}>
                        {selectedColor === c && (
                          <WingIcon src={CartoonWing} alt="wing" />
                        )}
                      </ColorBox>
                      <OptionLabel $active={selectedColor === c}>
                        {c}
                      </OptionLabel>
                    </OptionItem>
                  ))}
                </OptionList>
              </OptionSection>
            ) : (
              <></>
            )}
            {/* 사이즈 옵션 */}
            {product.size.length > 0 ? (
              <OptionSection>
                <OptionTitle>SIZE</OptionTitle>
                <OptionList>
                  {product.size.map((s) => (
                    <OptionItem key={s} onClick={() => setSelectedSize(s)}>
                      <ColorBox $active={selectedSize === s}>
                        {selectedSize === s && (
                          <WingIcon src={CartoonWing} alt="wing" />
                        )}
                      </ColorBox>
                      <OptionLabel $active={selectedSize === s}>
                        {s}
                      </OptionLabel>
                    </OptionItem>
                  ))}
                </OptionList>
              </OptionSection>
            ) : (
              <></>
            )}
          </InfoPart>
          <ButtonPart>
            {product.isSoldOut ? (
              <>
                <ButtonGroup>
                  <DisabledButton disabled>구매하기</DisabledButton>
                  <DisabledButton disabled>장바구니</DisabledButton>
                </ButtonGroup>

                <RestockNotify
                  onClick={() => setNotifyChecked((prev) => !prev)}
                >
                  <ColorBox $active={notifyChecked}>
                    {notifyChecked && <WingIcon src={CartoonWing} alt="wing" />}
                  </ColorBox>
                  <OptionLabel $active={notifyChecked}>
                    재입고 알림 받기
                  </OptionLabel>
                </RestockNotify>
              </>
            ) : (
              <ButtonGroup>
                <BuyButton onClick={() => addToCart(true)}>구매하기</BuyButton>
                <CartButton onClick={() => addToCart(false)}>
                  장바구니
                </CartButton>
              </ButtonGroup>
            )}
          </ButtonPart>
        </InfoWrapper>
      </ProductInfo>
    </Container>
  );
}

export default DetailPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 70px 148px 100px;
`;

const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 25px;
`;
const Home = styled.div`
  font-weight: 500;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.25);
`;
const Arrow = styled.div`
  font-size: 24px;
  color: rgba(0, 0, 0, 0.25);
`;
const Shop = styled.div`
  font-weight: 500;
  font-size: 24px;
  color: ${lightTheme.colors.black};
`;

const ProductInfo = styled.div`
  display: flex;
  justify-content: start;
  gap: 110px;
  width: 100%;
`;

const ImageWrapper = styled.div`
  min-width: 900px;
  height: 820px;
  border-radius: 20px;
  background-color: #f7f7f7;

  position: relative;
  overflow: hidden;
  /* margin-bottom: 13px; */
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
  padding-bottom: 15px;

  .english {
    font-weight: 600;
    /* font-style: SemiBold; */
    font-size: 60px;
  }
  .korean {
    font-weight: 500;
    font-size: 32px;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* gap: 25px; */
  width: 100%;
  min-height: 820px;
`;
const InfoPart = styled.div``;
const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const LikeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.15s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const ButtonPart = styled.div``;

const ProductName = styled.div`
  font-weight: 700;
  font-size: 32px;
  color: ${lightTheme.colors.black};
`;

const ProductPrice = styled.div`
  font-weight: 500;
  font-size: 32px;
  color: ${lightTheme.colors.secondary};
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.6;
  color: ${lightTheme.colors.black};
  /* border: 2px solid red;
  min-height: 60px; */
  margin: 20px 0 20px 0;
`;

const DeliveryInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 20px 0 20px 0;
`;
const InfoRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 20px;
`;
const Label = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: #000;
`;
const Text = styled.div`
  font-weight: 400;
  font-size: 20px;
  color: #000;
`;

const OptionSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
`;

const OptionTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  /* margin-top: 20px; */
  margin-bottom: 10px;
  color: ${lightTheme.colors.black};
`;

const OptionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  padding-left: 12px;
`;

const OptionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const ColorBox = styled.div<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
  border: 1px solid
    ${({ $active }) => ($active ? lightTheme.colors.secondary : "#000")};

  transition: border-color 0.2s ease;
`;

const WingIcon = styled.img`
  position: absolute;
  width: 12px;
  height: 12px;
`;

const OptionLabel = styled.div<{ $active?: boolean }>`
  font-family: "Pretendard";
  font-weight: 400;
  font-size: 18px;
  color: ${({ $active }) => ($active ? lightTheme.colors.secondary : "#000")};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 22px;
  /* margin-bottom: 50px; */
  margin-bottom: 30px;
`;

const BaseButton = styled.button`
  width: 315px;
  height: 90px;
  border-radius: 20px;
  border: 1px solid ${lightTheme.colors.secondary};
  background-color: #e5f8ff;
  color: ${lightTheme.colors.secondary};
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background-color: ${lightTheme.colors.secondary};
    color: white;
  }
`;

const DisabledButton = styled(BaseButton)`
  border-color: #ccc;
  background-color: #f2f2f2;
  color: #999;
  cursor: not-allowed;

  &:hover {
    background-color: #f2f2f2;
    color: #999;
  }
`;

const BuyButton = styled(BaseButton)``;
const CartButton = styled(BaseButton)``;

const RestockNotify = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  font-size: 20px;
  color: #000000;

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  label {
    cursor: pointer;
    user-select: none;
  }
`;
const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  font-size: 20px;
  color: #999;
`;
