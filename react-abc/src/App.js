import React, { useState } from "react";
import PostsList from "./components/PostsList";
import ButtonBasic from "./components/ui/buttons/ButtonBasic";
import InputBasic from "./components/ui/inputs/InputBasic";
import { articles } from "./data/posts";
import "./styles/app.css";

function App() {
  const [posts, setPosts] = useState(articles);
  const [post, setPost] = useState({
    title: "",
    description: "",
  });

  const addNewPost = e => {
    e.preventDefault();

    setPosts([{ ...post, id: Date.now() }, ...posts]);

    setPost({
      id: 0,
      title: "",
      description: "",
    });
  };

  return (
    <div className="App">
      <form>
        <InputBasic
          value={post.title}
          onChange={e => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Title"
        />

        <InputBasic
          value={post.description}
          onChange={e => setPost({ ...post, description: e.target.value })}
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
