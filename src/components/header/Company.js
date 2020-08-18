import React from 'react';
import { Link } from 'gatsby';
import { Grid } from '../grid/Grid';
import styles from './Company.module.css';

const links = [
  {
    title: 'About',
    url: '/company/',
  },
  {
    title: 'Careers',
    url: '/careers/',
  },
  {
    title: 'Press',
    url: '/press/',
  },
  {
    title: 'Legal',
    url: '/legal/terms-of-service/',
  },
  {
    title: 'Owner’s Manual',
    url: '/owners-manual/',
  },
];

const Company = () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.links}>
        {links.map((link) => (
          <div className={styles.link} key={link.url}>
            <Link to={link.url}>{link.title}</Link>
          </div>
        ))}
      </div>
    </Grid>
  </div>
);

export default Company;
