import React, { useState, useRef, useLayoutEffect } from 'react';
import cn from 'classnames';
import { Link } from 'gatsby';
import { useMeasure, useScroll, useWindowSize, useScrollbarWidth, useMedia } from 'react-use';
import auditsIllustration from '../../images/home/illustrations/audits.svg';
import complianceManagementIllustration from '../../images/home/illustrations/compliance-management.svg';
import sourceOfTruthIllustration from '../../images/home/illustrations/source-of-truth.svg';
// import vendorsIllustration from '../../images/home/illustrations/vendors.svg';
import { Grid, Row } from '../grid/Grid';
import Arrow from '../shared/Arrow';
import Button from '../buttons/Button';
import styles from './FeaturesCarousel.module.css';

const ITEMS = [
  {
    id: '1',
    title: 'Create a single source of truth',
    image: sourceOfTruthIllustration,
    body: 'Simplify compliance management with all of your controls, risks, documents, vendors, assets, evidence, and more connected together.',
    url: '/',
  },
  {
    id: '2',
    title: 'Automate Compliance Management',
    image: complianceManagementIllustration,
    body: 'Intelligent automations remove tedious work and automated processes make manual work easier to simplify managing compliance.',
    url: '/',
  },
  {
    id: '3',
    title: 'Streamline Audits',
    image: auditsIllustration,
    body: 'Speed through audits with less stress with purpose-built features that make it easy to manage auditor’s requests and export evidence.',
    url: '/',
  },
  {
    id: '4',
    title: 'Determine Vendors Trustworthiness',
    // image: vendorsIllustration,
    image: '',
    body: 'Understand and manage third-party risk throughout the vendor lifecycle with a suite of powerful vendor management tools.',
    url: '/',
  },
];

const FeaturesCarousel = () => {
  const scrollRef = useRef(null);
  const carouselRef = useRef(null);
  const [carouselPadding, setCarouselPadding] = useState(0);
  const [activeDot, setActiveDot] = useState(1);
  const { x: scrollXPosition } = useScroll(scrollRef);
  const { width: windowWidth } = useWindowSize();
  const [gridRef, { width: gridRefWidth }] = useMeasure();
  const [itemRef, { width: itemRefWidth }] = useMeasure();
  const scrollbarWidth = useScrollbarWidth();
  const isMobile = useMedia('(max-width: 1119px)');
  const CAROUSEL_HEIGHT = isMobile ? 500 : 776;

  const startPositions = ITEMS.map((_, index) => {
    return (itemRefWidth * (index + 1)) - itemRefWidth;
  });

  const scrollTo = (itemNumber) => {
    const index = itemNumber - 1;
    scrollRef.current.scrollLeft = startPositions[index];
  }

  const highlightDots = () => {
    const activeDots = startPositions.filter((position) => scrollXPosition >= position);
    setActiveDot(activeDots.length);
  }

  const padCarouselToScreenSize = () => {
    const carouselContainer = carouselRef.current;
    setCarouselPadding((windowWidth - scrollbarWidth - gridRefWidth) / 2);
    carouselContainer.style.paddingLeft = `${carouselPadding}px`;
    // carouselContainer.style.paddingRight = `${carouselPadding + itemRefWidth}px`;
    carouselContainer.style.paddingRight = `${carouselPadding}px`;
  };

  useLayoutEffect(() => {
    padCarouselToScreenSize();
    highlightDots();
  }, [
    carouselPadding,
    gridRefWidth,
    windowWidth,
    scrollXPosition,
    itemRefWidth,
    activeDot,
    isMobile,
  ]);

  return (
    <div>
      <div
        className={styles.container}
        style={{ height: `${CAROUSEL_HEIGHT}px` }}
      >
        <div
          ref={scrollRef}
          className={styles.productSelector}
          style={{ height: `${CAROUSEL_HEIGHT + scrollbarWidth}px` }}
        >
          <div className={styles.carouselContainer} ref={carouselRef}>
            {ITEMS.map(item => {
              const { url, id, title, body, image } = item;
              return (
                <div key={id} ref={itemRef}>
                  <Link
                    to={url}
                    className={styles.product}
                    style={{
                      backgroundImage: image ? `url(${image})` : null,
                      height: `${CAROUSEL_HEIGHT}px`,
                    }}
                  >
                    <div role="presentation" className={styles.productArrow}><Arrow /></div>
                    <div className={styles.content}>
                      <h3>{title}</h3>
                      <p>{body}</p>

                      <div className={styles.button}>
                        <Button>
                          Learn More <span className={styles.arrow}>&rarr;</span>
                        </Button>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Grid>
        <Row>
          <div className={styles.circles} ref={gridRef}>
            {ITEMS.map((item, index) => {
              const itemNumber = index + 1;
              return (
                <span
                  key={item.id}
                  onClick={() => scrollTo(itemNumber)}
                  className={cn([
                    styles.circle,
                    activeDot === itemNumber && styles.active,
                  ])}
                />
              );
            })}
          </div>
        </Row>
      </Grid>
    </div>
  );
};

export default FeaturesCarousel;
