import React from 'react';
import riffynLogo from '../../images/customers/logos/riffyn.png';
import cityBlockLogo from '../../images/customers/logos/cityblock.svg';
import fortmaticLogo from '../../images/customers/logos/fortmatic.svg';
import quadpayLogo from '../../images/customers/logos/quadpay.svg';
import pathaiLogo from '../../images/customers/logos/pathai.png';
import Container from '../container/Container';
import styles from './Logos.module.css';

const Logos = () => (
  <Container className={styles.container}>
    <h3>Companies that trust Aptible</h3>

    <div className={styles.logos}>
      <div className={styles.logo}>
        <img src={riffynLogo} alt="Riffyn logo" />
      </div>
      <div className={styles.logo}>
        <img src={cityBlockLogo} alt="Cityblock logo" />
      </div>
      <div className={styles.logo}>
        <img src={fortmaticLogo} alt="Fortmatic logo" />
      </div>
      <div className={styles.logo}>
        <img src={quadpayLogo} alt="Quadpay logo" />
      </div>
      <div className={styles.logo}>
        <img src={pathaiLogo} alt="PathAI logo" />
      </div>
    </div>
  </Container>
);

export default Logos;
