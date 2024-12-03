import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./Pages/Guest/Home.jsx";
import Signup from "./Component/Authentication/Signup.jsx";
import Login from "./Component/Authentication/Login.jsx";
import AuthHome from "./Pages/Auth/AuthHome.jsx";
import AllUserPost from "./Pages/Auth/Page/AllUserPost.jsx";
import NewPost from "./Pages/Auth/Dashboard/NewPost.jsx";
import UploadNewPost from "./Pages/Auth/Page/UploadNewPost.jsx";

const allRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "authhome",
    element: <AuthHome />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "posts",
    element: <AllUserPost />,
  },
  {
    path: "newpost",
    element: <UploadNewPost />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={allRoutes} />
  </StrictMode>
);
