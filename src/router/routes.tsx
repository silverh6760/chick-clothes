import CartPage from "../pages/cart/CartPage";
import HomePage from "../pages/home/HomePage";
import NotFoundPage from "../pages/not-found/NotFoundPage";
import ProductsPage from "../pages/product/ProductsPage";
import SingleProductPage from "../pages/product/SingleProductPage";

export const ROUTES = {
  Home: "/",
  Products: "/products",
  SingleProduct: "/products/:id",
  Cart: "/cart",
  NotFound: "*",
};

export const routesArray = [
  { path: ROUTES.Home, element: <HomePage /> },
  { path: ROUTES.Products, element: <ProductsPage /> },
  { path: ROUTES.SingleProduct, element: <SingleProductPage /> },
  { path: ROUTES.Cart, element: <CartPage /> },
  { path: ROUTES.NotFound, element: <NotFoundPage /> },
];
