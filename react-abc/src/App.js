import React from "react";
import './styles/app.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import PostsPage from "./pages/PostsPage";
import NotFoundPage from './pages/NotFoundPage';
import NavBarBasic from "./components/ui/navbars/NavBarBasic";
import HomePage from "./pages/HomePage";

function App() {
return (
<BrowserRouter>
    <NavBarBasic/>

    <Routes>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/posts" element={<PostsPage/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
</BrowserRouter>)
}

export default App;
