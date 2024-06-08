// Loading.js
import React from 'react';
import classes from './index.module.scss';

const CardsLoading = () => {
    return (
        <div className={classes.loadingWrapper}>
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className={classes.loadingCard}>
              <div className={classes.loadingImage}></div>
              <div className={classes.loadingText}></div>
              <div className={classes.loadingText}></div>
            </div>
          ))}
        </div>
      );
};

export default CardsLoading;