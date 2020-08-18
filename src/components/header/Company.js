import React from 'react';
import { Link } from 'gatsby';
import { Grid } from '../grid/Grid';
import styles from './Company.module.css';

export const COMPANY_NAV = [
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
        {COMPANY_NAV.map((link) => (
          <div className={styles.link} key={link.url}>
            <Link to={link.url}>{link.title}</Link>
          </div>
        ))}
      </div>
    </Grid>
  </div>
);

export default Company;
