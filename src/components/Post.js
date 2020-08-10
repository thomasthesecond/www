import React from 'react';
import icons from '../data/icons.json';
import { ContentfulRichText } from './ContentfulRichText';
import styles from './Post.module.css';

export const Post = ({ post }) => {
  const dateFormat = {
    day: 'numeric',
    year: 'numeric',
    month: 'long'
  }

  return (
    <div className={styles.post}>
      <h3>{post.title}</h3>

      <div className={styles.metaContainer}>
        <div className={styles.authorPhoto}>
          <img src={post.author.photo.file.url} alt={post.author.name} />
        </div>

        <div className={styles.meta}>
          <div className={styles.author}>
            <span>
              {post.author.name}
            </span>
          </div>
          &bull;
          <div className={styles.postedAt}>
            {new Date(post.createdAt).toLocaleDateString('en-US', dateFormat)}
          </div>
        </div>
      </div>

      <div className={styles.statusContainer}>
        <div className={styles.statusLabel}>Status</div>

        <div className={styles.status}>
          <div
            className={styles.statusColor}
            data-color={post.statusColor}
          />
          {post.status}
        </div>
      </div>

      <ContentfulRichText json={post.body.json} />

      <div className={styles.materials}>
        <div className={styles.materialsTitle}>Materials</div>

        {post.materials.map((material) => (
          <a href={material.url} className={styles.material}>
            <img className={styles.materialIcon} src={icons[material.icon] || icons.link} alt="" />
            <div>
              <div className={styles.materialTitle}>{material.title}</div>
              <div>{material.subtitle}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
