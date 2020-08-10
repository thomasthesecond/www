import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { Grid } from '../components/Grid';
import { AptibleLayout } from '../components/AptibleLayout';

export default () => (
  <AptibleLayout>
    <Helmet>
      <title>Aptible | Page Not Found</title>
      <meta name="description" content="Page not found" />
    </Helmet>
    <Grid>
      <div style={{ gridColumn: '1 / span 7', padding: '100px 0 200px 0' }}>
        <h2>Hmm&hellip; we can't find the page you're looking for.</h2>
        <h4 style={{ color: '#b5bbbf', margin: '30px 0 60px 0' }}>
          Maybe you mistyped the address? If not, the page may have moved.
        </h4>

        <p style={{ marginBottom: '30px' }}><Link to="/">Back to Home</Link></p>
      </div>
    </Grid>
  </AptibleLayout>
);
