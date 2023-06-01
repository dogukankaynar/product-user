import Home from "../pages/Home";
import Product from "../pages/Product";
import User from "../pages/User";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path:"/user/:id",
    element:<User />
  },  
  {
    path:"/product/:id",
    element:<Product />
  }
]);

function Routing() {
  return <RouterProvider router={root} />;
}

export default Routing;
