import React from "react";
import Post from "@/components/post/Post";
import styles from "./feed.module.css";
import { Typography } from "@mui/material";
import Navbar from "@/components/navbar/Navbar";
import { dummyData } from "../../data/dummyData";

const Feed: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className={styles.feedContainer}>
        <Typography variant="h5" className={styles.feedHeader}>
          All Posts
        </Typography>
        {dummyData.map((postData) => (
          <div className={styles.postMargin} key={postData.postId}>
            <Post
              key={postData.postId}
              postId={postData.postId}
              accuracy={postData.accuracy}
              content={postData.content}
              userName={postData.userName}
              imageUrl={postData.imageUrl}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Feed;
