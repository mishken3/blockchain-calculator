import React from 'react';

import styles from './Calculator.module.scss';

export const Calculator = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.amount}>
        <input className={styles.amount__input} type="text" />
      </div>
    </div>
  );
};
