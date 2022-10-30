import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import { PostService } from "../services/PostService";
import LoaderBasic from "../components/ui/loaders/LoaderBasic";

function PostDetailsPage() {
  const { id } = useParams();

  const [post, setPost] = useState({});

  const [fetchPostById, isLoading, error] = useFetching(async id => {
    const { data } = await PostService.getById(id);

    setPost(data);
  });

  useEffect(() => {
    fetchPostById(id);
  }, []);

  return (
    <Fragment>
      <h1>Post Details</h1>

      {isLoading ? (
        <LoaderBasic />
      ) : (
        <div>
          <p>
            <b>Post ID: </b> {post.id}
          </p>
          <p>
            <b>Post title: </b> {post.title}
          </p>
        </div>
      )}
    </Fragment>
  );
}

export default PostDetailsPage;
