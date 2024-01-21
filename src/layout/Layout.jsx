// Layout.js
import React, { Fragment } from "react";
import Header from "./../components/header/Header";
import Cursor from "../components/cursor/Cursor";

const Layout = ({ children }) => {
  
  return (
    <div className="elrising_web">
       <Cursor />
      <Header />
      <div className="route_wrap">{children}</div>
    </div>
  );
};

export default Layout;
