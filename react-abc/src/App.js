import React from "react";
import "./styles/app.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import PostsPage from "./pages/PostsPage";
import NavBarBasic from "./components/ui/navbars/NavBarBasic";
import HomePage from "./pages/HomePage";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <NavBarBasic />

      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
