import React from 'react';

import styles from './Diagramm.module.scss';

export const Diagramm = () => {
  return (
    <div className={styles.diagramm}>
      <p className={styles.diagramm__balance}>
        244 645 <span className={styles.diagramm__balance_currency}>USD</span>
      </p>
    </div>
  );
};
