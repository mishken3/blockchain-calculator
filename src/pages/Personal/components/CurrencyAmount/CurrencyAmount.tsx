import React, { FC } from 'react';

import { CurrenciesEnum } from '../../../Converter/components';
import styles from './CurrencyAmount.module.scss';

interface CurrencyAmountProps {
  coin: CurrenciesEnum;
}

export const CurrencyAmount: FC<CurrencyAmountProps> = ({ coin }) => {
  return (
    <div className={styles.currency}>
      <img className={styles.currency__logo} alt={coin} />

      <div className={styles.currency__money}>
        <p className={styles.currency__money_total}>Total</p>
        <p className={styles.currency__money_number}>20 000 USD</p>
      </div>
    </div>
  );
};
