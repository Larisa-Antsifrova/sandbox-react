import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import { PostService } from "../services/PostService";
import LoaderBasic from "../components/ui/loaders/LoaderBasic";

function PostDetailsPage() {
  const { id } = useParams();

  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async id => {
    const { data } = await PostService.getById(id);

    setPost(data);
  });

  const [fetchComments, isLoadingComments, errorComments] = useFetching(async id => {
    const { data } = await PostService.getCommentsByPostId(id);

    setComments(data);
  });

  useEffect(() => {
    fetchPostById(id);
    fetchComments(id)
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

      <h2>Comments</h2>

      {isLoadingComments ? (
          <LoaderBasic />
      ) : (
          <div>
            {comments.map(comment=>
            <div key={comment.id} style={{marginTop: '15px'}}>
              <h5>{comment.email}</h5>

              <p>{comment.body}</p>
            </div>
            )}
          </div>
      )}
    </Fragment>
  );
}

export default PostDetailsPage;
