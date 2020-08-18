import React from 'react';
import { Grid } from '../grid/Grid';
import SignupButton from '../signup/SignupButton';
import styles from './Demo.module.css';

const Demo = () => (
  <Grid>
    <div className={styles.content}>
      <SignupButton text="Get a demo" />
    </div>
  </Grid>
);

export default Demo;
