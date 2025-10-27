import React, { useState } from "react";
import styled from "styled-components";

function ItemCounter() {
  const [count, setCount] = useState(1);

  const decrease = () => {
    if (count > 1) setCount(count - 1);
  };

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <>
      <CounterWrapper>
        <Button onClick={decrease}>−</Button>
        <Count>{count}</Count>
        <Button onClick={increase}>＋</Button>
      </CounterWrapper>
    </>
  );
}

export default ItemCounter;

const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 134px;
  height: 34px;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
`;

const Button = styled.button`
  width: 34px;
  height: 34px;
  background: transparent;
  border: none;
  font-size: 20px;
  color: #000;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.6;
  }
`;

const Count = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 66px;
  height: 100%;

  text-align: center;
  font-weight: 500;
  font-size: 20px;
  color: #000;
  border-left: 0.5px solid rgba(0, 0, 0, 0.2);
  border-right: 0.5px solid rgba(0, 0, 0, 0.2);
`;
