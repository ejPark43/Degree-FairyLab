import CustomCursor from "./components/CustomCursor";
import router from "./router";
import { RouterProvider } from "react-router";
// import "./App.css";

function App() {
  return (
    <div>
      <CustomCursor />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
