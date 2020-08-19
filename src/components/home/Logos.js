import React from 'react';
import healthifyLogo from '../../images/customers/logos/healthify.svg';
import vergesenseLogo from '../../images/customers/logos/vergesense.svg';
import mdsaveLogo from '../../images/customers/logos/mdsave.svg';
import cityBlockLogo from '../../images/customers/logos/cityblock.svg';
import pathaiLogo from '../../images/customers/logos/pathai.png';
import Container from '../container/Container';
import styles from './Logos.module.css';

const Logos = () => (
  <Container className={styles.container}>
    <h3>Companies that trust Aptible</h3>

    <div className={styles.logos}>
      <div className={styles.logo}>
        <img src={healthifyLogo} alt="Healthify logo" />
      </div>
      <div className={styles.logo}>
        <img src={vergesenseLogo} alt="Vergesense logo" />
      </div>
      <div className={styles.logo}>
        <img src={mdsaveLogo} alt="MDSave logo" />
      </div>
      <div className={styles.logo}>
        <img src={cityBlockLogo} alt="Cityblock logo" />
      </div>
      <div className={styles.logo}>
        <img src={pathaiLogo} alt="PathAI logo" />
      </div>
    </div>
  </Container>
);

export default Logos;
