import React from "react";
import './styles/app.css'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import PostsPage from "./pages/PostsPage";

function App() {
return (
<BrowserRouter>
    <div className="navbar">

        <div className="navbar__links">
            <Link to="/about">About</Link>
            <Link to="/posts">Posts</Link>
        </div>
    </div>

    <Routes>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/posts" element={<PostsPage/>}/>
    </Routes>
</BrowserRouter>)
}

export default App;
