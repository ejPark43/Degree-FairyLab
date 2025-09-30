import { Outlet } from "react-router";
import Header from "../Header";
import Footer from "../Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      {/* <header style={{ background: "#eee", padding: "1rem" }}>Header</header> */}
      <main
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Outlet /> {/* 여기에 현재 페이지 컴포넌트가 들어감 */}
      </main>
      <Footer />
      {/* <footer style={{ background: "#eee", padding: "1rem" }}>Footer</footer> */}
    </div>
  );
};

export default Layout;
