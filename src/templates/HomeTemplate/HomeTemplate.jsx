import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import './HomeTemplate.scss'

function HomeTemplate() {
  return (
    <div id="HomeTemplate">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default HomeTemplate;