import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Navbar from "@/components/navbar/Navbar";
import PostForm from "@/components/postform/PostForm";
import Post, { PostProps } from "@/components/post/Post";

import styles from "./createpost.module.css";

const post: PostProps = {
  postId: 1,
  accuracy: 0.3,
  userName: "Christian",
  content:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores ",
  imageUrl: "https://seafile.zfn.uni-bremen.de/f/cad0fd6045bf409d9599/?dl=1",
};

const CreatePost = () => {
  const [postData, setPostData] = useState<PostProps | null>(post);

  const handleSubmit = (formData: PostProps) => {
    setPostData(formData);
  };

  return (
    <>
      <Navbar />
      <Grid container spacing={2} className={styles.page_container}>
        <Grid item xs={6} className={styles.form_container}>
          <PostForm onSubmit={handleSubmit} />
        </Grid>
        <Grid item xs={6} className={styles.preview_container}>
          <h1>Preview of post</h1>
          {postData ? (
            <Post
              key={postData.postId}
              postId={postData.postId}
              accuracy={postData.accuracy}
              content={postData.content}
              userName={postData.userName}
              imageUrl={postData.imageUrl}
            />
          ) : (
            <p>No post submitted yet.</p>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default CreatePost;
