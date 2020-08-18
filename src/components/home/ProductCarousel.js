import React, { useState, useRef, useLayoutEffect } from 'react';
import cn from 'classnames';
import { Link } from 'gatsby';
import { useMeasure, useScroll, useWindowSize, useScrollbarWidth, useMedia } from 'react-use';
import { Grid, Row } from '../grid/Grid';
import Button from '../buttons/Button';
import Arrow from '../shared/Arrow';
import styles from './ProductCarousel.module.css';

const ITEMS = [
  {
    id: 'comply',
    url: '/comply/',
    name: 'Aptible Comply',
    title: 'Compliance Management',
    body:
      'The end-to-end compliance management platform that uses intelligent automations to simplify compliance work.',
  },
  {
    id: 'deploy',
    url: '/deploy/',
    name: 'Aptible Deploy',
    title: 'Container Security',
    body:
      'The container orchestration platform that automates the data security controls required for software in regulated industries.',
  },
];

const ProductCarousel = ({}) => {
  const scrollRef = useRef(null);
  const carouselRef = useRef(null);
  const [carouselPadding, setCarouselPadding] = useState(0);
  const [activeDot, setActiveDot] = useState(1);
  const { x: scrollXPosition } = useScroll(scrollRef);
  const { width: windowWidth } = useWindowSize();
  const [gridRef, { width: gridRefWidth }] = useMeasure();
  const [itemRef, { width: itemRefWidth }] = useMeasure();
  const scrollbarWidth = useScrollbarWidth() || 15;
  const isMobile = useMedia('(max-width: 1119px)');
  const CAROUSEL_HEIGHT = isMobile ? 324 : 450;

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
            {ITEMS.map(product => {
              const { url, id, name, title, body } = product;
              return (
                <div key={id} ref={itemRef}>
                  <Link
                    className={cn(styles.product, styles[id])}
                    to={url}
                  >
                    <div role="presentation" className={styles.productArrow}><Arrow /></div>
                    <h5>{name}</h5>
                    <h2>{title}</h2>
                    <p>{body}</p>

                    <div className={styles.button}>
                      <Button>
                        Explore {name} <span className={styles.arrow}>&rarr;</span>
                      </Button>
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
}

// class ProductCarousel extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activeProduct: this.props.startPosition === 'right' ? 'deploy' : 'comply',
//     };

//     this.carouselRef = React.createRef();
//     this.gridRef = React.createRef();
//     this.scrollWatcher = null;
//     this.carouselPadding = 0;
//   }

//   componentDidMount() {
//     this.padCarouselToScreenSize();

//     this.scrollWatcher = setInterval(() => {
//       if (this.carouselRef.current.scrollLeft > this.carouselPadding) {
//         this.setState({ activeProduct: 'deploy' });
//       } else {
//         this.setState({ activeProduct: 'comply' });
//       }
//     }, 500);

//     if (typeof window !== 'undefined') {
//       window.addEventListener('resize', this.padCarouselToScreenSize);
//     }
//   }

//   componentWillUnmount = () => {
//     clearInterval(this.scrollWatcher);
//   };

//   padCarouselToScreenSize = () => {
//     const container = this.carouselRef.current.children[0];
//     const gridWidth = this.gridRef.current.offsetWidth;
//     const windowWidth = window.innerWidth;
//     this.carouselPadding = (windowWidth - gridWidth) / 2;
//     container.style.paddingLeft = `${this.carouselPadding}px`;
//     container.style.paddingRight = `${this.carouselPadding}px`;

//     if (this.props.startPosition && this.props.startPosition === 'right') {
//       this.carouselRef.current.scrollLeft = container.offsetWidth;
//     } else {
//       this.carouselRef.current.scrollLeft = 0;
//     }
//   };

//   scrollTo = product => {
//     if (product === 'comply') {
//       this.carouselRef.current.scrollLeft = 0;
//     } else {
//       this.carouselRef.current.scrollLeft = 999;
//     }
//   };

//   render() {
//     const { activeProduct } = this.state;

//     return (
//       <div>
//         <div className={styles.container}>
//           <div className={styles.productSelector} ref={this.carouselRef}>
//             <div className={styles.carouselContainer}>
//               {ITEMS.map(product => {
//                 const { url, id, name, title, body } = product;
//                 return (
//                   <Link
//                     className={cn(styles.product, styles[id])}
//                     key={url}
//                     to={url}
//                   >
//                     <div role="presentation" className={styles.productArrow}><Arrow /></div>
//                     <h5>{name}</h5>
//                     <h2>{title}</h2>
//                     <p>{body}</p>

//                     <div className={styles.button}>
//                       <Button>
//                         Explore {name} <span className={styles.arrow}>&rarr;</span>
//                       </Button>
//                     </div>
//                   </Link>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         <Grid>
//           <Row>
//             <div className={styles.circles} ref={this.gridRef}>
//               {ITEMS.map(product => (
//                 <span
//                   key={product.id}
//                   onClick={() => this.scrollTo(product.id)}
//                   className={cn([
//                     styles.circle,
//                     activeProduct === product.id && styles.active,
//                   ])}
//                 />
//               ))}
//             </div>
//           </Row>
//         </Grid>
//       </div>
//     );
//   }
// }

export default ProductCarousel;
