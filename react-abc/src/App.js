import React, { useState } from "react";
import PostsList from "./components/PostsList";
import ButtonBasic from "./components/ui/buttons/ButtonBasic";
import InputBasic from "./components/ui/inputs/InputBasic";
import { articles } from "./data/posts";
import "./styles/app.css";

function App() {
  const [posts, setPosts] = useState(articles);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addNewPost = e => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      title,
      description,
    };

    setPosts([newPost, ...posts]);

    setTitle("");
    setDescription("");
  };

  return (
    <div className="App">
      <form>
        <InputBasic
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
        />

        <InputBasic
          value={description}
          onChange={e => setDescription(e.target.value)}
          type="text"
          placeholder="Description"
        />

        <ButtonBasic onClick={addNewPost}>Add post</ButtonBasic>
      </form>

      <PostsList title="List of Tools" posts={posts} />
    </div>
  );
}

export default App;
