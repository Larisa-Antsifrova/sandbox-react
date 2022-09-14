import React, { useState } from "react";
import PostForm from "./components/PostForm";
import PostsList from "./components/PostsList";

import { articles } from "./data/posts";
import "./styles/app.css";

function App() {
  const [posts, setPosts] = useState(articles);

  const createPost = newPost => {
    setPosts([newPost, ...posts]);
  };

  const removePost = postId => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />

      <PostsList title="List of Tools" posts={posts} remove={removePost} />
    </div>
  );
}

export default App;
