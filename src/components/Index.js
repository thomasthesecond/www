import React from 'react';
import { Grid } from './Grid';
import { Post } from './Post';
import styles from './Index.module.css';

export const Index = ({ posts }) => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.header}>
        <h1 className="hero">Product Weekly</h1>
      </div>

      <div className={styles.posts}>
        {posts.map((edge, idx) => (
          <Post key={idx} post={edge.node} />
        ))}
      </div>
    </Grid>
  </div>
);
