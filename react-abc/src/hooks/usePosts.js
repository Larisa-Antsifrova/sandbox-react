import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
  const getSortedPosts = () => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }

    return posts;
  };

  const sortedPosts = useMemo(getSortedPosts, [sort, posts]);

  return sortedPosts;
};

export const useSortedAndFilteredPostsPosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort);

  const getFilteredPosts = () => {
    return sortedPosts.filter(post =>
      post.title.toLowerCase().includes(query.toLowerCase()),
    );
  };

  const sortedAndSearchedPosts = useMemo(getFilteredPosts, [
    query,
    sortedPosts,
  ]);

  return sortedAndSearchedPosts;
};
