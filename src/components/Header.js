import React from 'react';
import { Link } from 'gatsby';
import logoImage from '../images/aptible.svg';
import { Grid } from './Grid';
import styles from './Header.module.css';

export const Header = () => (
  <div className={`${styles.headerContainer}`}>
    <header className={`${styles.header}`}>
      <Grid>
        <Link to="/" className={styles.logo}>
          <img src={logoImage} alt="Aptible logo" />
        </Link>
      </Grid>
    </header>
  </div>
);
