import React from "react";
import ButtonBasic from "./ui/buttons/ButtonBasic";

const PostItem = ({ post, remove }) => {
  return (
    <div className="post">
      <div className="post__content">
        <p className="post__title">
          <strong>{post.title}</strong>
        </p>

        <p>{post.body}</p>
      </div>

      <div className="post__btns">
        <ButtonBasic onClick={() => remove(post.id)}>Delete</ButtonBasic>
      </div>
    </div>
  );
};

export default PostItem;
