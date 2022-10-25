import React from "react";
import ButtonBasic from "./ui/buttons/ButtonBasic";
import { useNavigate } from "react-router-dom";

const PostItem = ({ post, remove }) => {
  const navigate = useNavigate();

  const open = postId => navigate(`/posts/${postId}`);

  return (
    <div className="post">
      <div className="post__content">
        <p className="post__title">
          <strong>
            {post.id}. {post.title}
          </strong>
        </p>

        <p>{post.body}</p>
      </div>

      <div className="post__btns">
        <ButtonBasic onClick={() => open(post.id)}>Open</ButtonBasic>
        <ButtonBasic onClick={() => remove(post.id)}>Delete</ButtonBasic>
      </div>
    </div>
  );
};

export default PostItem;
