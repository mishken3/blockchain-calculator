import React, { FC } from 'react';

import { Wallet } from '../../../../redux/reducers/wallet/types';
import { CurrenciesData } from '../../../../types/CurrenciesData.types';
import { getBeautifyAmount } from '../../Personal.utils';
import { CoinItem, Diagramm, InputExchange } from '../index';
import styles from './ContentPersonal.module.scss';
import { useContentPersonal } from './useContentPersonal.hook';

interface ContentPersonalProps {
  walletAmount: string;
  walletData: Wallet;
  currenciesData: CurrenciesData;
}

export const ContentPersonal: FC<ContentPersonalProps> = ({
  walletAmount,
  walletData,
  currenciesData,
}) => {
  const { isExchangeOpen, handlerSetExchangeOpen } = useContentPersonal();

  const CoinItems = Object.values(currenciesData).map((currency) => {
    const coinAmount = walletData[currency.name];
    const coinAmountUSD = getBeautifyAmount(currency.price * walletData[currency.name]);
    return (
      <CoinItem
        key={currency.id}
        coinName={currency.name}
        coinAmountUSD={coinAmountUSD}
        coinAmount={coinAmount}
      />
    );
  });

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
          {CoinItems}
          <button className={styles.content__coins_button} onClick={handlerSetExchangeOpen}>
            <span>Обменять</span>
          </button>
        </div>

        {isExchangeOpen && <InputExchange currenciesData={currenciesData} />}
      </div>
    </div>
  );
};
