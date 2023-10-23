import React, { useState } from "react";

import styles from "./postform.module.css";
import { PostProps } from "../post/Post";

export interface PostFormProps {
  onSubmit: (post: PostProps) => void;
}

const PostForm = ({ onSubmit }: PostFormProps) => {
  const [form, setForm] = useState<PostProps>({
    postId: Math.floor(Math.random()),
    userName: "",
    content: "",
    accuracy: Math.random(),
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((form) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(form);
  };

  return (
    <div className={styles.container}>
      <h1>Create post/ad</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div className={styles.postform}>
            <div className={styles.postform_username}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                onChange={handleChange}
                name="userName"
                placeholder="username"
                required
              />
            </div>
            <div className={styles.postform_content}>
              <label htmlFor="content">Text:</label>
              <textarea
                onChange={handleChange}
                name="content"
                placeholder="what is happening?"
                required
              />
            </div>
            <div className={styles.postform_avatar}>
              <label htmlFor="avatar">Choose a profile picture:</label>
              <input
                type="file"
                onChange={handleChange}
                name="imageUrl"
                accept="image/png, image/jpeg"
              />
            </div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
