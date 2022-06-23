import React, { FC } from 'react';

import { CoinsIcons } from '../../../../assets/icons';
import { CurrenciesEnum } from '../../../Converter/components';
import styles from './CurrencyAmount.module.scss';

interface CurrencyAmountProps {
  coinName: CurrenciesEnum;
  coinAmount: string;
}

export const CurrencyAmount: FC<CurrencyAmountProps> = ({ coinName, coinAmount }) => {
  return (
    <div className={styles.currency}>
      <div className={styles.currency__logo}>
        <img className={styles.currency__logo_img} src={CoinsIcons[coinName]} alt={coinName} />
      </div>

      <div className={styles.currency__money}>
        <p className={styles.currency__money_total}>Total</p>
        <p className={styles.currency__money_number}>{coinAmount} USD</p>
      </div>
    </div>
  );
};
