import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { lightTheme } from "../../styles/theme";

function SortDropdown() {
  // UI 만 구현, 기능 넣을 필요 없음
  const [open, setOpen] = useState(false);
  const options = ["신상품", "상품명", "낮은가격", "높은가격"];
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Container>
      <div style={{ display: "flex" }} ref={ref}>
        <SwapVertIcon style={{ fontSize: "28px" }} />
        <SortByDropdown onClick={() => setOpen(!open)}>SORT BY</SortByDropdown>
        {open && (
          <DropdownMenu>
            {options.map((opt, i) => (
              <DropdownItem key={i}>{opt}</DropdownItem>
            ))}
          </DropdownMenu>
        )}
      </div>
    </Container>
  );
}

export default SortDropdown;
const Container = styled.div`
  align-self: flex-start;
  display: flex;
  position: relative;
  padding: 20px 0 20px 0;
  align-items: center;
  font-weight: 500;
  font-size: 24px;
  color: ${lightTheme.colors.black};
`;

const SortByDropdown = styled.div`
  display: flex;
  cursor: pointer;
`;
const DropdownMenu = styled.div`
  position: absolute;
  /* 버튼 아래에 표시 */
  top: 15px;
  left: 140px;
  width: 151px;
  background: #ffffff;
  border: 4px solid #00acff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  z-index: 100;
`;

const DropdownItem = styled.div`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 20px;
  color: #000000;
  padding: 8px 20px;
  cursor: pointer;

  &:hover {
    background-color: #f3faff;
  }
`;
