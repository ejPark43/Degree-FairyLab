import styled from "styled-components";
import { lightTheme } from "../../styles/theme";

function ActionButtons() {
  return (
    <ButtonGroup>
      <Button>구매하기</Button>
      <Button>장바구니</Button>
    </ButtonGroup>
  );
}

export default ActionButtons;

const ButtonGroup = styled.div`
  display: flex;
  gap: 22px;
  margin-bottom: 50px;
`;

const Button = styled.button`
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
