import { lazy } from "react";

const Home = lazy(()=> import("./../Pages/Home/Home"))

export const HomeTemplateRoutes = [
  { path: "/Home", Element: Home },
];