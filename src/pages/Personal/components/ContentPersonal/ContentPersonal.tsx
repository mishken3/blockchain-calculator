import React, { FC } from 'react';

import { Diagramm } from '../Diagramm';
import styles from './ContentPersonal.module.scss';

interface ContentPersonalProps {
  walletAmount: string;
  coinItems: React.ReactElement[];
}

export const ContentPersonal: FC<ContentPersonalProps> = ({ walletAmount, coinItems }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.heading}>
        <h3 className={styles.heading__title}>Баланс аккаунта</h3>
        <p className={styles.heading__balance}>
          {walletAmount} <span>USD</span>
        </p>
      </div>

      <div className={styles.content}>
        <Diagramm walletAmount={walletAmount} />

        <div className={styles.content__coins}>
          {coinItems}
          <button className={styles.content__coins_button}>
            <span>Exchange</span>
          </button>
        </div>

        <div className={styles.content__exchange}>
          <input />
        </div>
      </div>
    </div>
  );
};
