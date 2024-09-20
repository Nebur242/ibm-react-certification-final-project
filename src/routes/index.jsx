import { createBrowserRouter } from "react-router-dom";
import Home from "../screens/home";
import Products from "../screens/products";
import Cart from "../screens/cart";
import Checkout from "../screens/checkout";
import NotFound from "../screens/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
