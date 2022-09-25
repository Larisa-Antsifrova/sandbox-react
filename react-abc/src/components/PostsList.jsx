import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PostItem from "./PostItem";

const PostsList = ({ title, posts, remove }) => {
  if (!posts.length) {
    return <div>No posts yet!</div>;
  }

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>{title}</h2>

      <TransitionGroup>
        {posts.map(post => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem post={post} remove={remove} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostsList;
