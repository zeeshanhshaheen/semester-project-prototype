import React from "react";
import Image from "next/image";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Alert } from "@mui/material";

import styles from "./post.module.css";
import { WarningAmber } from "@mui/icons-material";

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
      <div className={styles.post_content}>
        {imageUrl && (
          <div className={styles.post_image}>
            <Image
              src={imageUrl}
              alt="post image"
              sizes="100vw"
              width={400}
              height={300}
            />
          </div>
        )}
        {accuracy < 0.5 && (
          <div className={styles.disclaimer}>
            <Alert
              icon={<WarningAmber fontSize="inherit" />}
              variant="outlined"
              severity="error"
            >
              The real content is different to what is shown this might be scam.
              Stay alerted wehen interacting wit it!
            </Alert>
          </div>
        )}
        <div className={styles.post_text}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
