import { createBrowserRouter } from "react-router";
import AddRestaurant from "../page/AddRestaurant";
import Home from "../page/Home";
import Update from "../page/Update";
import Login from "../page/Login";
import Register from "../page/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <AddRestaurant />,
  },
  {
    path: "/update/:id",
    element: <Update />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
export default router;
