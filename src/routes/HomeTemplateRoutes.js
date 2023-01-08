import { lazy } from "react";

const Home = lazy(() => import("./../Pages/Home/Home"));
const News = lazy(() => import("./../Pages/News/News"));
const NewsDetail = lazy(() => import("./../Pages/News/NewsDetail"));
const Shop = lazy(() => import("./../Pages/Shop/Shop"));
const ProductDetail = lazy(() =>
  import("./../Pages/ProductDetail/ProductDetail")
);
const Cart = lazy(() => import("./../Pages/Cart/Cart"));
const ForumList = lazy(() => import("./../Pages/Forum/ForumList"));
const ForumHome = lazy(() => import("./../Pages/Forum/ForumHome"));

export const HomeTemplateRoutes = [
  { path: "/home", Element: Home },
  { path: "/news", Element: News },
  { path: "/newsDetail", Element: NewsDetail },
  { path: "/shop", Element: Shop },
  { path: "/productDetail", Element: ProductDetail },
  { path: "/cart", Element: Cart },
  {path: "/forum-list", Element: ForumList},
  {path: "/forum-detail", Element: ForumHome}
];
