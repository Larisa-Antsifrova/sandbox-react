import React, { useState } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostsList from "./components/PostsList";
import ButtonBasic from "./components/ui/buttons/ButtonBasic";
import ModalBasic from "./components/ui/modals/ModalBasic";

import { articles } from "./data/posts";
import { useSortedAndFilteredPostsPosts } from "./hooks/usePosts";
import "./styles/app.css";

function App() {
  const [posts, setPosts] = useState(articles);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = useSortedAndFilteredPostsPosts(
    posts,
    filter.sort,
    filter.query,
  );

  const createPost = newPost => {
    setPosts([newPost, ...posts]);
    setModal(false);
  };

  const removePost = postId => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  return (
    <div className="App">
      <ButtonBasic onClick={() => setModal(true)}>Create Post</ButtonBasic>

      <ModalBasic visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </ModalBasic>

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
