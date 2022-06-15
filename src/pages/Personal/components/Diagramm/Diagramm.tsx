import React, { FC } from 'react';

import styles from './Diagramm.module.scss';

interface DiagrammProps {
  walletAmount: string;
}

export const Diagramm: FC<DiagrammProps> = ({ walletAmount }) => {
  return (
    <div className={styles.diagramm}>
      <p className={styles.diagramm__balance}>
        {walletAmount} <span className={styles.diagramm__balance_currency}>USD</span>
      </p>
    </div>
  );
};
