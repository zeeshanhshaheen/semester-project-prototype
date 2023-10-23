import React from "react";
import Image from "next/image";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import styles from "./post.module.css";

export interface PostProps {
  postId: number;
  userName: string;
  content: string;
  accuracy: number;
  imageUrl?: string;
}

const Post = ({ postId, userName, accuracy, imageUrl, content }: PostProps) => {
  return (
    <div className={styles.post}>
      <div className={styles.post_user}>
        <p>{userName}</p>
        <AccountCircleIcon height={20} width={20} />
      </div>
      {imageUrl && <Image src={imageUrl} alt="post image" />}
      <div>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Post;
