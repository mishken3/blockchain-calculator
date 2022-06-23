import React, { FC } from 'react';

import { CoinsIcons } from '../../../../assets/icons';
import { CurrenciesEnum } from '../../../Converter/components';
import styles from './CoinItem.module.scss';

interface CoinItemProps {
  coinName: CurrenciesEnum;
  coinAmount: number;
  coinAmountUSD: string;
}

export const CoinItem: FC<CoinItemProps> = ({ coinName, coinAmount, coinAmountUSD }) => {
  console.log('coinAmount :>> ', coinAmount);
  return (
    <div className={styles.currency}>
      <div>
        <div className={styles.currency__logo}>
          <img className={styles.currency__logo_img} src={CoinsIcons[coinName]} alt={coinName} />
        </div>

        <div className={styles.currency__money}>
          <p className={styles.currency__money_total}>Total</p>
          <p className={styles.currency__money_number}>{coinAmountUSD} USD</p>
        </div>
      </div>
    </div>
  );
};
