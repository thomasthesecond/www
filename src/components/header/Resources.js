import React from 'react';
import { Link } from 'gatsby';
import { Grid } from '../grid/Grid';
import styles from './Resources.module.css';

export const RESOURCES_NAV = [
  {
    title: 'Security Management Resources',
    url: '/resources/',
    external: false,
  },
  {
    title: 'Blog',
    url: '/blog/',
    external: false,
  },
  {
    title: 'Engineering Blog',
    url: '/blog/category/engineering/',
    external: false,
  },
  {
    title: 'Product Documentation',
    url: '/documentation/index.html',
    external: true,
  },
];

const Resources = () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.links}>
        {RESOURCES_NAV.map((link) => {
          if (link.external) {
            return (
              <a href={link.url} key={link.title}>
                <div>{link.title}</div>
              </a>
            );
          }

          return (
            <Link to={link.url} key={link.title}>
              <div>{link.title}</div>
            </Link>
          );
        })}
      </div>
    </Grid>
  </div>
);

export default Resources;
