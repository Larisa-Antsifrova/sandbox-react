import React from "react";

const PostItem = ({ post }) => {
  return (
    <div className="post">
      <div className="post__content">
        <p className="post__title">
          <strong>{post.title}</strong>
        </p>

        <p>{post.description}</p>
      </div>

      <div className="post__btns">
        <button>Delete</button>
      </div>
    </div>
  );
};

export default PostItem;
