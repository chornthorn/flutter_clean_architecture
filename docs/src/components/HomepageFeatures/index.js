import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Readable',
    Svg: require('@site/static/img/bolt.svg').default,
    description: <>Coming soon.</>,
  },
  {
    title: 'Maintainable & Scalable',
    Svg: require('@site/static/img/heart.svg').default,
    description: <>Coming soon.</>,
  },
  {
    title: 'Testable',
    Svg: require('@site/static/img/target.svg').default,
    description: <>Coming soon.</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
