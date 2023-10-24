import React, { useState } from 'react';
import {
  TextField,
  Button,
  TextareaAutosize,
  Alert,
  AlertTitle,
  Typography,
} from '@mui/material';
import { PostProps } from '../post/Post';

import styles from './postform.module.css';
import { time } from 'console';

export interface PostFormProps {
  onSubmit: (post: PostProps) => void;
}

const PostForm = ({ onSubmit }: PostFormProps) => {
  const [form, setForm] = useState<PostProps>({
    postId: Math.floor(Math.random()),
    userName: '',
    content: '',
    accuracy: -1,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm(form => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  };

  const calculateAccuracy = () => {
    setForm(form => ({
      ...form,
      accuracy: Math.random(),
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(form);
  };

  return (
    <div className={styles.container}>
      <Typography variant='h5'>Create Post/Ad</Typography>
      <div>
        <form onSubmit={handleSubmit}>
          <div className={styles.postform}>
            <div className={styles.postform_username}>
              <TextField
                required
                label='Username'
                name='userName'
                onChange={handleChange}
              />
              {/*<label htmlFor="username">Username:</label>
              <input
                type="text"
                onChange={handleChange}
                name="userName"
                placeholder="username"
                required
  />*/}
            </div>
            <div className={styles.postform_content}>
              <label htmlFor='content'>Text:</label>
              <TextareaAutosize
                onChange={handleChange}
                name='content'
                placeholder='what is happening?'
                required
              />
            </div>
            <div className={styles.postform_avatar}>
              <label htmlFor='avatar'>Choose a profile picture:</label>
              <input
                type='file'
                onChange={handleChange}
                name='imageUrl'
                accept='image/png, image/jpeg'
              />
            </div>
            <Button type='submit' onClick={calculateAccuracy}>
              Submit
            </Button>
          </div>
        </form>
        <div className={styles.scam_warning}>
          {form.accuracy >= 0 && form.accuracy < 0.5 && (
            <Alert severity='warning' color='error'>
              <AlertTitle>Warning</AlertTitle>
              The added content was detected to be similar to past content which
              was flagged to be scam. If not further edited{' '}
              <strong>a disclaimer is shown</strong> with your post. If you want
              to proceed click the submit button again.
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostForm;
