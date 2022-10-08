import React, { useEffect, useState } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostsList from "./components/PostsList";
import ButtonBasic from "./components/ui/buttons/ButtonBasic";
import ModalBasic from "./components/ui/modals/ModalBasic";
import LoaderBasic from "./components/ui/loaders/LoaderBasic";

import { useSortedAndFilteredPostsPosts } from "./hooks/usePosts";
import { PostService } from "./services/PostService";
import "./styles/app.css";
import { useFetching } from "./hooks/useFetching";
import { getPageCount } from "./utils/pages";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const sortedAndSearchedPosts = useSortedAndFilteredPostsPosts(
    posts,
    filter.sort,
    filter.query,
  );
  const [fetchPosts, isPostListLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);

    setPosts(response.data);

    const totalCount = response.headers["x-total-count"];

    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = newPost => {
    setPosts([newPost, ...posts]);
    setModal(false);
  };

  const removePost = postId => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  return (
    <div className="App">
      <ButtonBasic onClick={fetchPosts}>Fetch Post</ButtonBasic>
      <ButtonBasic onClick={() => setModal(true)}>Create Post</ButtonBasic>

      <ModalBasic visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </ModalBasic>

      <PostFilter filter={filter} setFilter={setFilter} />

      {postError && <h2>Error. Try again.</h2>}

      {isPostListLoading ? (
        <LoaderBasic />
      ) : (
        <PostsList
          title="List of Tools"
          posts={sortedAndSearchedPosts}
          remove={removePost}
        />
      )}
    </div>
  );
}

export default App;
