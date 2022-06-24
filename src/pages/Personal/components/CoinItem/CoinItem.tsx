import React, { FC } from 'react';

import { CoinsIcons } from '../../../../assets/icons';
import { CurrenciesEnum } from '../../../../types/types';
import styles from './CoinItem.module.scss';

interface CoinItemProps {
  coinName: CurrenciesEnum;
  coinAmount: number;
  coinAmountUSD: string;
}

export const CoinItem: FC<CoinItemProps> = ({ coinName, coinAmountUSD }) => {
  return (
    <div className={styles.coin}>
      <div className={styles.coin__icon}>
        <img src={CoinsIcons[coinName]} alt={coinName} />
      </div>

      <div className={styles.coin__amount}>
        <p className={styles.coin__amount_title}>Total</p>
        <p className={styles.coin__amount_number}>{coinAmountUSD} USD</p>
      </div>
    </div>
  );
};
