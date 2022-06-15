import React, { FC } from 'react';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { CurrenciesEnum } from '../Converter/components';
import { CurrencyAmount, Diagramm } from './components';
import styles from './Personal.module.scss';

export const PersonalPage: FC = () => {
  const walletData = useTypedSelector((state) => state.wallet);

  return (
    <>
      <div className={styles.layout}>
        <div className={styles.heading}>
          <h3 className={styles.heading__title}>Баланс аккаунта</h3>
          <p className={styles.heading__balance}>
            244 645 <span className={styles.heading__balance_currency}>USD</span>
          </p>
        </div>

        <div className={styles.amount}>
          <Diagramm />

          <div className={styles.amount__currencies}>
            <CurrencyAmount coin={CurrenciesEnum.ETH} />
            <CurrencyAmount coin={CurrenciesEnum.BTC} />
            <CurrencyAmount coin={CurrenciesEnum.USD} />
          </div>
        </div>
      </div>
    </>
  );
};
