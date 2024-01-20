// AppRouter.js
import Layout from "../layout/Layout";
import React, { Fragment } from "react";
import generalRoutes from "./routerArray";
import ProtectedRoute from "./protectedRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function AppRouter() {
  return (
    <Router>
      <Fragment>
        <Routes>
          {generalRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  {route.guard ? (
                    <ProtectedRoute route={route} />
                  ) : (
                    <route.component />
                  )}
                </Layout>
              }
            />
          ))}
        </Routes>
      </Fragment>
    </Router>
  );
}
