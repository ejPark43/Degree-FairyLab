import styled from "styled-components";
import { lightTheme } from "../../styles/theme";

function Breadcrumb() {
  return (
    <Wrapper>
      <Home>HOME</Home>
      <Arrow>›</Arrow>
      <Shop>SHOP</Shop>
    </Wrapper>
  );
}

export default Breadcrumb;

const Wrapper = styled.div`
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
