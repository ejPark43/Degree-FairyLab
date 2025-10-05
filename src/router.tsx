import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import StoryPage from "./pages/StoryPage";
import ShopPage from "./components/ShopPage";
import ArchivePage from "./components/ArchivePage";

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
    ],
  },
]);

export default router;
