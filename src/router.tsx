import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Homepage/Home";
import MyPage from "./pages/MyPage";
import StoryPage from "./pages/StoryPage/StoryPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import ArchivePage from "./pages/ArchivePage/ArchivePage";
import DetailPage from "./pages/DetailPage/DetailPage";
import CartPage from "./pages/CartPage/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "mypage",
        element: <MyPage />,
      },
      {
        path: "story",
        element: <StoryPage />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "archive",
        element: <ArchivePage />,
      },
      {
        path: "detail/:id",
        element: <DetailPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
]);

export default router;
