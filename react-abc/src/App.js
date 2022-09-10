import React, { useState } from "react";
import PostsList from "./components/PostsList";
import ButtonBasic from "./components/ui/buttons/ButtonBasic";
import InputBasic from "./components/ui/inputs/InputBasic";
import { articles } from "./data/posts";
import "./styles/app.css";

function App() {
  const [posts, setPosts] = useState(articles);

  return (
    <div className="App">
      <form>
        <InputBasic type="text" placeholder="Title" />
        <InputBasic type="text" placeholder="Description" />

        <ButtonBasic disabled={true}>Add post</ButtonBasic>
      </form>
      <PostsList title="List of Tools" posts={posts} />
    </div>
  );
}

export default App;
