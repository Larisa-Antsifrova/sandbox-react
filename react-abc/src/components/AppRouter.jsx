import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";

import { privateRoutes, publicRoutes } from "../router";

const AppRouter = () => {
  return (
    <Routes>
      {privateRoutes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          element={route.component}
          exact={route.exact}
        />
      ))}

      {publicRoutes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          element={route.component}
          exact={route.exact}
        />
      ))}
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default AppRouter;
