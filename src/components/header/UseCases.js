import React from 'react';
import { Link } from 'gatsby';
import pages from '../../data/use-cases.json';
import { Grid } from '../grid/Grid';
import styles from './UseCases.module.css';

const UseCases = () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.links}>
        {pages.map((page) => (
          <div className={styles.link} key={page.slug}>
            <Link to={`/use-cases/${page.slug}`}>{page.title}</Link>

            <div className={styles.body}>
              <p>{page.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </Grid>
  </div>
);

export default UseCases;
