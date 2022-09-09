import React, { useState } from "react";
import PostsList from "./components/PostsList";
import ButtonBasic from "./components/ui/buttons/ButtonBasic";
import { articles } from "./data/posts";
import "./styles/app.css";

function App() {
  const [posts, setPosts] = useState(articles);

  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Description" />

        <ButtonBasic disabled={true}>Add post</ButtonBasic>
      </form>
      <PostsList title="List of Tools" posts={posts} />
    </div>
  );
}

export default App;
