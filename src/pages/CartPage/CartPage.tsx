import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { lightTheme } from "../../styles/theme";
import ItemCounter from "./ItemCounter";
import TotalPrice from "./TotalPrice";
import ProductDescription from "./ProductDescription";
import productsData from "../../data/product.json";
import { useNavigate } from "react-router-dom";

type CartItem = {
  id: number;
  color: string | null;
  size: string | null;
  quantity: number;
  checked?: boolean;
};

function CartPage() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setCartItems(savedCart);
  }, []);

  // 상품 정보 찾기
  const getProduct = (id: number) => productsData.find((p) => p.id === id);

  // 수량 변경
  const handleQuantityChange = (targetItem: CartItem, newQuantity: number) => {
    const updated = cartItems.map((item) =>
      item.id === targetItem.id &&
      item.color === targetItem.color &&
      item.size === targetItem.size
        ? { ...item, quantity: newQuantity }
        : item
    );
    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  // 개별 상품 삭제
  const removeItem = (target: CartItem) => {
    const updated = cartItems.filter(
      (item) =>
        !(
          item.id === target.id &&
          item.color === target.color &&
          item.size === target.size
        )
    );
    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  // 체크박스 선택/해제
  const toggleCheck = (targetItem: CartItem, checked: boolean) => {
    const updated = cartItems.map((item) =>
      item.id === targetItem.id &&
      item.color === targetItem.color &&
      item.size === targetItem.size
        ? { ...item, checked }
        : item
    );
    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
    // window.location.reload();
  };

  // 전체 선택 / 해제
  const toggleSelectAll = () => {
    const allChecked = cartItems.every((item) => item.checked);
    const updated = cartItems.map((item) => ({
      ...item,
      checked: !allChecked,
    }));
    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  // 선택상품 삭제
  const deleteSelected = () => {
    const hasSelected = cartItems.some((item) => item.checked);

    if (!hasSelected) {
      alert("삭제할 상품을 선택해주세요.");
      return;
    }

    const confirmed = window.confirm("선택한 상품을 삭제하시겠습니까?");
    if (!confirmed) return; // 취소 누르면 종료

    const updated = cartItems.filter((item) => !item.checked);
    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  const handleOrderSelected = () => {
    const selected = cartItems.filter((item) => item.checked);

    if (selected.length === 0) {
      alert("상품을 선택해주세요.");
      return;
    }

    const confirmed = window.confirm("선택한 상품을 주문하시겠습니까?");
    if (!confirmed) return;

    alert("주문이 완료되었습니다.");
    navigate("/shop");
  };

  // 전체상품 주문
  const handleOrderAll = () => {
    if (cartItems.length === 0) {
      alert("장바구니에 담긴 상품이 없습니다.");
      return;
    }

    const confirmed = window.confirm(
      "장바구니의 모든 상품을 주문하시겠습니까?"
    );
    if (!confirmed) return;

    alert("주문이 완료되었습니다.");
    navigate("/shop");
  };

  return (
    <Container>
      <Breadcrumb>SHOPPING BAG</Breadcrumb>
      <ProductCount>일반 상품 ({cartItems.length})</ProductCount>

      <>
        {cartItems.length === 0 ? (
          <EmptyCart>현재 담은 상품이 없습니다!</EmptyCart>
        ) : (
          cartItems.map((item) => {
            const product = getProduct(item.id);
            if (!product) return null;

            return (
              <EachProduct key={`${item.id}-${item.color}-${item.size}`}>
                <ProductDescription
                  product={product}
                  item={item}
                  onDelete={() => removeItem(item)}
                  onCheck={(checked) => toggleCheck(item, checked)}
                />
                <CounterContainer>
                  <ItemCounter
                    quantity={item.quantity ?? 1}
                    onChange={(newQty) => handleQuantityChange(item, newQty)}
                  />
                </CounterContainer>
                <ProductPrice>
                  <div style={{ fontWeight: "600" }}>
                    ₩{(product.price * (item.quantity ?? 1)).toLocaleString()}
                  </div>
                  <Button
                    style={{ width: "165px", height: "58px", fontSize: "18px" }}
                  >
                    구매하기
                  </Button>
                </ProductPrice>
              </EachProduct>
            );
          })
        )}
      </>

      {/*상품이 있을 때만 전체선택/삭제 버튼 표시 */}
      {cartItems.length > 0 && (
        <>
          <DeleteButtons>
            <span className="btn" onClick={toggleSelectAll}>
              전체선택
            </span>
            <span className="btn" onClick={deleteSelected}>
              선택상품 삭제
            </span>
          </DeleteButtons>
        </>
      )}

      <TotalPrice cartItems={cartItems} />

      <ActionButtons>
        <Button
          style={{ width: "805px", height: "90px" }}
          onClick={handleOrderSelected}
        >
          선택상품주문
        </Button>
        <Button
          style={{ width: "805px", height: "90px" }}
          onClick={handleOrderAll}
        >
          전체상품주문
        </Button>
      </ActionButtons>
    </Container>
  );
}

export default CartPage;

/* --- styled-components --- */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1630px;
  margin: auto;
`;

const Breadcrumb = styled.div`
  padding-top: 40px;
  font-size: 24px;
  font-weight: 400;
`;

const ProductCount = styled.div`
  border-bottom: 2px solid black;
  padding-top: 48px;
  padding-bottom: 4px;
  font-size: 20px;
`;

const EachProduct = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 380px;
  /* border-top: 1px solid black; */
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
  /* margin-bottom: 10px; */
`;

const CounterContainer = styled.div`
  display: flex;
  width: 350px;
  height: 100%;
  align-items: center;
  justify-content: center;
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

const DeleteButtons = styled.div`
  display: flex;
  align-items: center;
  height: 72px;
  gap: 10px;
  .btn {
    width: 170px;
    height: 44px;
    border: 1px solid black;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  padding-top: 20px;
  padding-bottom: 320px;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const EmptyCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  font-size: 28px;
  color: #000000;
`;
