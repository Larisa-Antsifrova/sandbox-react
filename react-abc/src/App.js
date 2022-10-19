import React from "react";
import './styles/app.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import PostsPage from "./pages/PostsPage";

function App() {
return (
<BrowserRouter>
    <Routes>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/posts" element={<PostsPage/>}/>
    </Routes>
</BrowserRouter>)
}

export default App;
