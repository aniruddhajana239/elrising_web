// ProtectedRoute.js
import generalRoutes from "./routerArray";
import { useLocation, useNavigate } from "react-router-dom";
import React, { Fragment, useEffect, useState } from "react";

const ProtectedRoute = ({ route }) => {
  const [authErr, setAuthErr] = useState(false);
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const isAuth = true;

  useEffect(() => {
    if (path) {
      const currentRoute = generalRoutes.find((e) => e.path === path);
      if (currentRoute && !isAuth) {
        setAuthErr(true);
      } else {
        setAuthErr(false);
      }
    }
  }, [path, isAuth]);

  return (
    <Fragment>
      {authErr
        ? navigate("/")
        : route && route.component && <route.component />}
    </Fragment>
  );
};

export default ProtectedRoute;
