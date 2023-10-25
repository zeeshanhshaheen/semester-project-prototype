import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Navbar from "@/components/navbar/Navbar";
import PostForm from "@/components/postform/PostForm";
import Post, { PostProps } from "@/components/post/Post";
import styles from "./createpost.module.css";
import { Typography } from "@mui/material";

const post: PostProps = {
  postId: 1,
  accuracy: 0.3,
  userName: "Christian",
  content:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores ",
  imageUrl: "https://seafile.zfn.uni-bremen.de/f/cad0fd6045bf409d9599/?dl=1",
};

const CreatePost = () => {
  const [postData, setPostData] = useState<PostProps | null>(null);

  const handleSubmit = (formData: PostProps) => {
    setPostData(formData);
  };

  const handleDummy = () => {
    setPostData(post);
  };

  return (
    <>
      <Navbar />
      <Grid container spacing={2} className={styles.page_container}>
        <Grid item xs={6} className={styles.form_container}>
          <PostForm onSubmit={handleSubmit} loadDummy={handleDummy} />
        </Grid>
        <Grid item xs={6} className={styles.preview_container}>
          <Typography variant="h6">Preview of post</Typography>
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
            <Typography>No post submitted yet.</Typography>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default CreatePost;
