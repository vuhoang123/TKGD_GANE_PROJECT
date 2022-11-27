import { lazy } from "react";

const Home = lazy(()=> import("./../Pages/Home/Home"))
const News = lazy(()=> import("./../Pages/News/News"))
const Shop = lazy(()=> import("./../Pages/Shop/Shop"))
const ProductDetail = lazy(()=> import("./../Pages/ProductDetail/ProductDetail"))
const Cart = lazy(()=> import("./../Pages/Cart/Cart"))
const Profile = lazy(()=> import("./../Pages/Profile/Profile"))

export const HomeTemplateRoutes = [
  { path: "/home", Element: Home },
  { path: "/profile", Element: Profile },
  { path: "/news", Element: News },
  { path: "/shop", Element: Shop },
  { path: "/productDetail/:id", Element: ProductDetail },
  { path: "/cart", Element: Cart },
];