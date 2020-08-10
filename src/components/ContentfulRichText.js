import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './ContentfulRichText.module.css';

const renderAssetBlock = (node) => {
  const { file } = node.data.target.fields;
  return <img className={styles.image} src={file['en-US'].url} alt="contentful" />
}

const renderHyperlink = (node, children) => {
  const url = node.data.uri.replace('https://app.contentful.com', '');
  return <a href={url}>{children}</a>
}

const options = {
  renderNode: {
    'embedded-asset-block': renderAssetBlock,
    'hyperlink': renderHyperlink
  }
}

export const ContentfulRichText = ({ json }) => {
  return documentToReactComponents(json, options);
};
