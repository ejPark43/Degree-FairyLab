import { Outlet } from "react-router";
import Header from "../Header";
import Footer from "../Footer";
import TopBar from "../TopBar";

const Layout = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <main
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Outlet /> {/* 여기에 현재 페이지 컴포넌트가 들어감 */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
