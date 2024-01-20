import React from "react";
import Home from "../pages/home/Home";

// Guard function for private routes
const requireAuth = () => {
  const isAuth = true;
  const isAuthenticated = !!isAuth;
  return isAuthenticated;
};

const mainRoutes = [
  {
    component: () => <Home />,
    path: "/",
    exact: true,
    guard: requireAuth,
  },
];

const generalRoutes = [...mainRoutes];

export default generalRoutes;
