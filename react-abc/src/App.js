import React, { useState } from "react";
import PostsList from "./components/PostsList";
import { articles } from "./data/posts";
import "./styles/app.css";

function App() {
  const [posts, setPosts] = useState(articles);

  return (
    <div className="App">
      <PostsList title="List of Tools" posts={posts} />
    </div>
  );
}

export default App;
