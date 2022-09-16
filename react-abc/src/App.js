import React, { useState } from "react";
import PostForm from "./components/PostForm";
import PostsList from "./components/PostsList";
import SelectBasic from "./components/ui/selects/SelectBasic";

import { articles } from "./data/posts";
import "./styles/app.css";

function App() {
  const [posts, setPosts] = useState(articles);
  const [selectedSort, setSelectedSort] = useState("");

  const createPost = newPost => {
    setPosts([newPost, ...posts]);
  };

  const removePost = postId => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  const sortPosts = sort => {
    setSelectedSort(sort);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />

      <SelectBasic
        defaultValue="Sort by"
        options={[
          { value: "title", name: "By title" },
          { value: "description", name: "By description" },
        ]}
        value={selectedSort}
        onChange={sortOption => setSelectedSort(sortOption)}
      />

      {posts.length ? (
        <PostsList title="List of Tools" posts={posts} remove={removePost} />
      ) : (
        <div>No posts yet!</div>
      )}
    </div>
  );
}

export default App;
