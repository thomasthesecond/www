import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { AptibleLayout } from '../components/AptibleLayout';
import { Index } from '../components/Index';

export default ({ data }) => {
  return (
    <AptibleLayout>
      <Helmet>
        <title>Aptible | Product Weekly</title>
        <meta
          name="description"
          content="Weekly updates from Aptible’s product team"
        />
      </Helmet>
      <Index posts={data.posts.edges} />
    </AptibleLayout>
  );
};

export const query = graphql`
  query {
    posts: allContentfulProductUpdate(
      sort: { fields: [createdAt], order: DESC }
    ) {
      edges {
        node {
          title
          createdAt
          author {
            name
            photo {
              file {
                url
              }
            }
          }
          status
          statusColor
          body {
            json
          }
          materials {
            title
            subtitle
            icon
            url
          }
        }
      }
    }
  }
`;
