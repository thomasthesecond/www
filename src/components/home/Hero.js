import React from 'react';
import heroIllustration from '../../images/home/illustrations/hero.svg';
import { Grid } from '../grid/Grid';
import SignupButton from '../signup/SignupButton';
import HeroCallout from './HeroCallout';
import Paragraph from './Paragraph';
import styles from './Hero.module.css';

const Hero = ({ heroBlock }) => (
  <div className={styles.container}>
    <div className={styles.background}>
      <img src={heroIllustration} />
    </div>

    <Grid>
      <div className={styles.content}>
        <h1 className="hero">Build Customer Trust with Compliance</h1>

        <div className={styles.paragraph}>
          <Paragraph>
            Aptible helps create a more trustworthy internet by improving data
            security and compliance. We make it simple for modern businesses to
            manage compliance so that they can build customer trust.
          </Paragraph>
        </div>

        <div className={styles.button}>
          <SignupButton text="Get Demo" />
        </div>
      </div>

      <div className={styles.callout}>
        <HeroCallout />
      </div>
    </Grid>
  </div>
);

export default Hero;
