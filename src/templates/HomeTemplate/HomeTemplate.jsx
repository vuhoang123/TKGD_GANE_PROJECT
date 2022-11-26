import React, { Fragment, useEffect } from "react";
import { Route } from "react-router-dom";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";

function HomeTemplate(props) {
  // path, exact, Component
  const { Component, ...restProps } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Header {...propsRoute} />
            <Component {...propsRoute} />
            <Footer {...propsRoute} />
          </Fragment>
        );
      }}
    />
  );
}

export default HomeTemplate;
