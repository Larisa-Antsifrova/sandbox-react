import React from "react";
import PostItem from "./PostItem";

const PostsList = ({ title, posts, remove }) => {
  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>{title}</h2>

      {posts.map(post => (
        <PostItem post={post} key={post.id} remove={remove} />
      ))}
    </div>
  );
};

export default PostsList;
