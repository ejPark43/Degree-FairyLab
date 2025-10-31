import { Outlet, useLocation } from "react-router";
import Header from "../Header";
import Footer from "../Footer";
import TopBar from "../TopBar";
import styled from "styled-components";

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/"; // 홈 페이지인지 판별

  return (
    <LayoutContainer>
      <TopBar />
      <Header />
      <Main $isHome={isHome}>
        <Outlet />
      </Main>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.main<{ $isHome: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${({ $isHome }) =>
    $isHome
      ? `
      z-index: 0;        /* Home은 헤더 아래 */
      margin-top: 0;     /* 겹치게 */
    `
      : `
      z-index: 1;        /* 다른 페이지는 위 */
    `}
`;
const LayoutContainer = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  overflow-x: hidden;
  position: relative;
`;
