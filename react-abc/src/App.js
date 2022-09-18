import React, { useState, useMemo } from "react";
import PostForm from "./components/PostForm";
import PostsList from "./components/PostsList";
import InputBasic from "./components/ui/inputs/InputBasic";
import SelectBasic from "./components/ui/selects/SelectBasic";

import { articles } from "./data/posts";
import "./styles/app.css";

function App() {
  const [posts, setPosts] = useState(articles);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const getSortedPosts = () => {
    console.log("Sorting in progress");
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort]),
      );
    }

    return posts;
  };

  const sortedPosts = useMemo(getSortedPosts, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post =>
      post.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()),
    );
  }, [searchQuery, sortedPosts]);

  const createPost = newPost => {
    setPosts([newPost, ...posts]);
  };

  const removePost = postId => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  const sortPosts = sort => {
    setSelectedSort(sort);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />

      <InputBasic
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder="Search..."
      />

      <SelectBasic
        defaultValue="Sort by"
        options={[
          { value: "title", name: "By title" },
          { value: "description", name: "By description" },
        ]}
        value={selectedSort}
        onChange={sortPosts}
      />

      {sortedAndSearchedPosts.length ? (
        <PostsList
          title="List of Tools"
          posts={sortedAndSearchedPosts}
          remove={removePost}
        />
      ) : (
        <div>No posts yet!</div>
      )}
    </div>
  );
}

export default App;
