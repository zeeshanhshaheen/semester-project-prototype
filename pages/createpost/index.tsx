import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Grid from "@mui/material/Grid";

import styles from "./createpost.module.css";

const CreatePost = () => {
  return (
    <>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <p>Creating post/ad</p>
        </Grid>
        <Grid item xs={6}>
          <p>Preview of post</p>
        </Grid>
      </Grid>
    </>
  );
};

export default CreatePost;
