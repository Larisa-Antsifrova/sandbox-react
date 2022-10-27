import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import PostDetailsPage from "../pages/PostDetailsPage";
import PostsPage from "../pages/PostsPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<AboutPage />} />
      <Route path="/posts" exact element={<PostsPage />} />
      <Route path="/posts/:id" exact element={<PostDetailsPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default AppRouter;
