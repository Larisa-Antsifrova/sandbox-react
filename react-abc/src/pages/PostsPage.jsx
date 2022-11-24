import React, { useEffect, useRef, useState } from "react";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostsList from "../components/PostsList";
import ButtonBasic from "../components/ui/buttons/ButtonBasic";
import LoaderBasic from "../components/ui/loaders/LoaderBasic";
import ModalBasic from "../components/ui/modals/ModalBasic";

import PaginationBasic from "../components/ui/paginations/PaginationBasic";
import { useFetching } from "../hooks/useFetching";
import { useObserver } from "../hooks/useObserver";
import { useSortedAndFilteredPostsPosts } from "../hooks/usePosts";
import { PostService } from "../services/PostService";
import "../styles/app.css";
import { getPageCount } from "../utils/pages";
import SelectBasic from "../components/ui/selects/SelectBasic";

function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const lastElement = useRef();

  const sortedAndSearchedPosts = useSortedAndFilteredPostsPosts(
    posts,
    filter.sort,
    filter.query,
  );
  const [fetchPosts, isPostListLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);

    setPosts([...posts, ...response.data]);

    const totalCount = response.headers["x-total-count"];

    setTotalPages(getPageCount(totalCount, limit));
  });

  useObserver(lastElement, page < totalPages, isPostListLoading, () =>
    setPage(page + 1),
  );

  useEffect(() => {
    fetchPosts();
  }, [page, limit]);

  const changePage = page => {
    setPage(page);
  };

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

        <SelectBasic
        value={limit}
        onChange={(value)=>{setLimit(value)}}
        defaultValue={'Options on the page'}
        options={[
            {value: 5, name: '5'},
            {value: 10, name: '10'},
            {value: 25, name: '25'},
            {value: -1, name: 'All'},

        ]}
        />

      {postError && <h2>Error. Try again.</h2>}

      {isPostListLoading && <LoaderBasic />}

      <PostsList
        title="List of Tools"
        posts={sortedAndSearchedPosts}
        remove={removePost}
      />

      <div
        ref={lastElement}
        style={{ height: "20px", backgroundColor: "teal" }}
      ></div>

      <PaginationBasic
        totalPages={totalPages}
        page={page}
        changePage={changePage}
      />
    </div>
  );
}

export default PostsPage;
