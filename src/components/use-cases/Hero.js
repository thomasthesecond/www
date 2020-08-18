import React from 'react';
import { Grid } from '../grid/Grid';
import SignupButton from '../signup/SignupButton';
import styles from './Hero.module.css';

const Hero = ({ title, body }) => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.text}>
        <h5>Use Case</h5>
        <h1 className="h2">{title}</h1>
        {body.map((p) => <p className="XL">{p}</p>)}

        <div className={styles.button}>
          <SignupButton text="Get a demo" />
        </div>
      </div>
    </Grid>
  </div>
);

export default Hero;
