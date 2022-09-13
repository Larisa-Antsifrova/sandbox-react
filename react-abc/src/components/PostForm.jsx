import React, { useState } from "react";
import ButtonBasic from "./ui/buttons/ButtonBasic";
import InputBasic from "./ui/inputs/InputBasic";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({
    title: "",
    description: "",
  });

  const addNewPost = e => {
    e.preventDefault();

    const newPost = {
      ...post,
      id: Date.now(),
    };

    create(newPost);

    setPost({
      id: 0,
      title: "",
      description: "",
    });
  };

  return (
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
  );
};

export default PostForm;
