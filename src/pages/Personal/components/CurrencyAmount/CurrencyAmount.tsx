import React, { FC } from 'react';

import { Coins } from '../../../../assets/icons';
import { CurrenciesEnum } from '../../../Converter/components';
import styles from './CurrencyAmount.module.scss';

interface CurrencyAmountProps {
  coinName: CurrenciesEnum;
  coinAmount: string;
}

export const CurrencyAmount: FC<CurrencyAmountProps> = ({ coinName, coinAmount }) => {
  return (
    <div className={styles.currency}>
      <img className={styles.currency__logo} src={Coins[coinName]} alt={coinName} />

      <div className={styles.currency__money}>
        <p className={styles.currency__money_total}>Total</p>
        <p className={styles.currency__money_number}>{coinAmount} USD</p>
      </div>
    </div>
  );
};
