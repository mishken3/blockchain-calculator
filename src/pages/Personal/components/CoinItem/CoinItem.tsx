import React, { FC } from 'react';

import { CoinsIcons } from '../../../../assets/icons';
import { CoinsColors, CurrenciesEnum } from '../../../../types/types';
import styles from './CoinItem.module.scss';

interface CoinItemProps {
  coinName: CurrenciesEnum;
  coinAmount: string;
  coinAmountUSD: string;
}

export const CoinItem: FC<CoinItemProps> = ({ coinName, coinAmountUSD, coinAmount }) => {
  return (
    <div className={styles.coin} style={{ borderLeftColor: CoinsColors[coinName] }}>
      <div className={styles.coin__icon}>
        <img src={CoinsIcons[coinName]} alt={coinName} />
      </div>

      <div className={styles.coin__amount}>
        <p className={styles.coin__amount_title}>Total</p>
        <p className={styles.coin__amount_number}>{coinAmountUSD} USD</p>
        {coinName !== CurrenciesEnum.USD && (
          <p className={styles.coin__amount_number}>
            {coinAmount} {coinName}
          </p>
        )}
      </div>
    </div>
  );
};
