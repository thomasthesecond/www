import React from 'react';
import { Link } from 'gatsby';
import { Grid } from '../grid/Grid';
import styles from './UseCases.module.css';

const links = [
  {
    title: 'Create a Single Source of Truth',
    body: 'Simplify compliance management with all of your controls, risks, documents, vendors, assets, evidence, and more connected together.',
    url: '/use-cases/',
  },
  {
    title: 'Automate Compliance Management',
    body: '2',
    url: '/use-cases/',
  },
  {
    title: 'Streamline Audits',
    body: '3',
    url: '/use-cases/',
  },
  {
    title: 'Determine Vendor Trustworthiness',
    body: '4',
    url: '/use-cases/',
  },
  {
    title: 'Streamline Building Customer Trust',
    body: '5',
    url: '/use-cases/',
  },
];

const UseCases = () => (
  <div className={styles.container}>
    <Grid>
      <div className={styles.links}>
        {links.map((link) => (
          <>
            <div className={styles.link} key={link.url}>
              <Link to={link.url}>{link.title}</Link>

              <div className={styles.body}>
                <p>{link.body}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </Grid>
  </div>
);

export default UseCases;
