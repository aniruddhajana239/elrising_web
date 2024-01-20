// Layout.js
import React from "react";
import Header from "./../components/header/Header";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div className="route_wrap">{children}</div>
    </React.Fragment>
  );
};

export default Layout;
