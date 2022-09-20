import React, { useMemo, useState } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostsList from "./components/PostsList";

import { articles } from "./data/posts";
import "./styles/app.css";

function App() {
  const [posts, setPosts] = useState(articles);
  const [filter, setFilter] = useState({ sort: "", query: "" });

  const getSortedPosts = () => {
    console.log("Sorting in progress");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort]),
      );
    }

    return posts;
  };

  const sortedPosts = useMemo(getSortedPosts, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post =>
      post.title.toLowerCase().includes(filter.query.toLowerCase()),
    );
  }, [filter.query, sortedPosts]);

  const createPost = newPost => {
    setPosts([newPost, ...posts]);
  };

  const removePost = postId => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />

      <PostFilter filter={filter} setFilter={setFilter} />

      <PostsList
        title="List of Tools"
        posts={sortedAndSearchedPosts}
        remove={removePost}
      />
    </div>
  );
}

export default App;
